export enum JobStatus {
  PENDING = 'pending',
  DONE = 'done',
  ERROR = 'error',
}

export interface JobMultipleAddsBody {
  count: number;
}
