import { z } from "zod";

export const JobType = {
  DEVELOPER: "개발자",
  PO: "PO",
  DESIGNER: "디자이너",
} as const;
export type JobType = (typeof JobType)[keyof typeof JobType];

export const recordSchema = z.object({
  key: z.string(),
  name: z.string().min(1),
  address: z.string().optional(),
  memo: z.string().optional(),
  joinDate: z.string(),
  job: z.enum([JobType.DEVELOPER, JobType.PO, JobType.DESIGNER]).optional(),
  emailConsent: z.boolean().optional(),
});

export type Record = z.infer<typeof recordSchema>;
