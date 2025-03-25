import { create } from "zustand";
import { Record } from "../schema/record";

interface TableStore {
  records: Record[];
  getRecordFromKey: (key: string) => Record | undefined;
  createRecord: (record: Record) => void;
  updateRecord: (record: Record) => void;
  deleteRecords: (key: string[]) => void;
}

export const useRecordStore = create<TableStore>((set, get) => ({
  records: [],
  getRecordFromKey: (key: string) => {
    return get().records.find((record) => record.key === key);
  },
  createRecord: (record: Record) => {
    set((state) => ({
      records: [...state.records, record],
    }));
  },
  updateRecord: (record: Record) => {
    set((state) => ({
      records: state.records.map((r) => (r.key === record.key ? record : r)),
    }));
  },
  deleteRecords: (keys: string[]) => {
    set((state) => ({
      records: state.records.filter((r) => !keys.includes(r.key)),
    }));
  },
}));
