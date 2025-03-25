import { z } from "zod";

export const JobType = {
  DEVELOPER: "개발자",
  PO: "PO",
  DESIGNER: "디자이너",
} as const;
export type JobType = typeof JobType[keyof typeof JobType];

export const recordSchema = z.object({
  name: z.string().min(1, { message: "이름은 필수 입력 항목입니다." }),
  address: z.string().optional(),
  memo: z.string().optional(),
  joinDate: z.date({
    required_error: "가입일은 필수 입력 항목입니다.",
    invalid_type_error: "유효한 날짜를 입력해주세요.",
  }),
  job: z.enum([
    JobType.DEVELOPER, 
    JobType.PO, 
    JobType.DESIGNER
  ]).optional(),
  emailConsent: z.boolean().optional(),
});

export type Record = z.infer<typeof recordSchema>;
