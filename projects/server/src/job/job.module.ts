import { Module } from '@nestjs/common';
import { JobController } from './job.controller';
import { JobRepository } from './job.repository';
import { JobService } from './job.service';

@Module({
  providers: [JobService, JobRepository],
  controllers: [JobController],
})
export class JobModule {}
