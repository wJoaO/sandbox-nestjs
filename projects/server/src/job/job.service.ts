import { Injectable } from '@nestjs/common';
import { JobRepository } from './job.repository';
import { JobModel } from './job.model';
import { JobStatus } from './job.interfaces';
import { makeid } from 'src/utils';

@Injectable()
export class JobService {
  constructor(public jobRepository: JobRepository) {}

  public async list(): Promise<JobModel[]> {
    return this.jobRepository.list();
  }

  public async add(job: JobModel): Promise<boolean> {
    return this.jobRepository.add(job);
  }

  public async multiple_adds(count: number): Promise<boolean> {
    return Promise.all(
      Array.from(Array(count).keys()).map(() => {
        const job: JobModel = {
          job_id: makeid(10),
          email: `a${makeid(10)}@mail.com`,
          status: JobStatus.PENDING,
        };
        return this.add(job);
      }),
    ).then((results) => results.every((r) => r));
  }
}
