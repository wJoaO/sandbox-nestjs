import { JobStatus } from './job.interfaces';

export interface JobModel {
  job_id: string;
  email: string;
  status: JobStatus;
}
