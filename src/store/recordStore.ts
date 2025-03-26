import { create } from "zustand";
import { Record } from "../schema/record";
import { defaultRecords } from "../const/defaultRecord";

interface TableStore {
  records: Record[];
  getRecordFromKey: (key: string) => Record | undefined;
  createRecord: (record: Record) => void;
  updateRecord: (key: string, record: Record) => void;
  deleteRecords: (key: string[]) => void;
}

export const useRecordStore = create<TableStore>((set, get) => ({
  records: defaultRecords,
  getRecordFromKey: (key: string) => {
    return get().records.find((record) => record.key === key);
  },
  createRecord: (record: Record) => {
    set((state) => ({
      records: [...state.records, record],
    }));
  },
  updateRecord: (key: string, record: Record) => {
    set((state) => ({
      records: state.records.map((r) => (r.key === key ? record : r)),
    }));
  },
  deleteRecords: (keys: string[]) => {
    set((state) => ({
      records: state.records.filter((r) => !keys.includes(r.key)),
    }));
  },
}));
