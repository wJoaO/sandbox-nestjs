import { Module } from '@nestjs/common';
import { JobController } from './job.controller';
import { JobRepository } from './job.repository';
import { JobService } from './job.service';
import { ClientsModule } from '@nestjs/microservices';
import { JOBS_QUEUE_MICROSERVICE_PRODUCER } from 'src/config';

@Module({
  imports: [ClientsModule.register({ clients: [JOBS_QUEUE_MICROSERVICE_PRODUCER] })],
  providers: [JobService, JobRepository],
  controllers: [JobController],
})
export class JobModule {}
