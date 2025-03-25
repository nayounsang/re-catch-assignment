import { Record } from "../schema/record";
import { v4 as uuidv4 } from "uuid";
export const defaultRecords: Record[] = [
  {
    key: uuidv4(),
    name: "John Doe",
    address: "서울 강남구",
    memo: "외국인",
    joinDate: "2024-10-02",
    job: "개발자",
    emailConsent: true,
  },
  {
    key: uuidv4(),
    name: "Foo Bar",
    address: "서울 서초구",
    memo: "한국인",
    joinDate: "2024-10-01",
    job: "PO",
    emailConsent: false,
  },
];
