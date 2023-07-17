import { Injectable } from '@nestjs/common';
import { JobModel } from './job.model';

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
}
