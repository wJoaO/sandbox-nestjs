import { Inject, Injectable } from '@nestjs/common';
import { JobRepository } from './job.repository';
import { JobModel } from './job.model';
import { JobStatus } from './job.interfaces';
import { makeid } from 'src/utils';
import { ClientProxy } from '@nestjs/microservices';
import { CONFIG } from 'src/config';
import { JOBS_QUEUE_PROCESS_EMAIL } from './constant';

@Injectable()
export class JobService {
  constructor(@Inject(CONFIG.JOBS_PRODUCER) private client: ClientProxy, public jobRepository: JobRepository) {}

  public async list(): Promise<JobModel[]> {
    return this.jobRepository.list();
  }

  public async add(job: JobModel): Promise<boolean> {
    this.client.emit(JOBS_QUEUE_PROCESS_EMAIL, job);
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

  public async processJob(job: JobModel) {
    await new Promise<void>((resolve) => setTimeout(resolve, 2000));
    return this.jobRepository.finishJob(job);
  }
}
