import { Injectable } from '@nestjs/common';
import { JobModel } from './job.model';
import { JobStatus } from './job.interfaces';

@Injectable()
export class JobRepository {
  jobs: JobModel[] = [];

  public async list(): Promise<JobModel[]> {
    return this.jobs;
  }

  public async add(job: JobModel): Promise<boolean> {
    this.jobs.push(job);
    return true;
  }

  public async finishJob(job: JobModel): Promise<boolean> {
    const job_database = this.jobs.find((j) => j.job_id === job.job_id);
    if (!job_database) {
      console.error('Processing a job that does not exists');
      return false;
    }
    job_database.status = JobStatus.DONE;
    return true;
  }
}
