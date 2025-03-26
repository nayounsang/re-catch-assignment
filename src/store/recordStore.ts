import { create, StateCreator } from "zustand";
import { DataRecord } from "../schema/record";
import { defaultRecords } from "../const/defaultRecord";
import { createJSONStorage, persist } from "zustand/middleware";
interface TableStore {
  records: DataRecord[];
  getRecordFromKey: (key: string | undefined) => DataRecord | undefined;
  createRecord: (record: DataRecord) => void;
  updateRecord: (key: string, record: DataRecord) => void;
  deleteRecords: (key: string[]) => void;
}

const isLocalStorage = import.meta.env.STORAGE === "local-storage";

const storeLogic: StateCreator<TableStore> = (set, get) => ({
  records: defaultRecords,
  getRecordFromKey: (key) => {
    return key ? get().records.find((record) => record.key === key) : undefined;
  },
  createRecord: (record: DataRecord) => {
    set((state) => ({
      records: [...state.records, record],
    }));
  },
  updateRecord: (key: string, record: DataRecord) => {
    set((state) => ({
      records: state.records.map((r) => (r.key === key ? record : r)),
    }));
  },
  deleteRecords: (keys: string[]) => {
    set((state) => ({
      records: state.records.filter((r) => !keys.includes(r.key)),
    }));
  },
});

const createNormalStore = () => create<TableStore>()(storeLogic);
const createPersistedStore = () =>
  create<TableStore>()(
    persist(storeLogic, {
      name: "record-storage",
      storage: createJSONStorage(() => localStorage),
    })
  );

export const useRecordStore = isLocalStorage
  ? createPersistedStore()
  : createNormalStore();
