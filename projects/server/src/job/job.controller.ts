import { Body, Controller, Get, Post } from '@nestjs/common';
import { JobService } from './job.service';
import { JobModel } from './job.model';
import { JobMultipleAddsBody } from './job.interfaces';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { JOBS_QUEUE_PROCESS_EMAIL } from './constant';

@Controller('job')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Post('multiple_adds')
  public async multiple_adds(@Body() body: JobMultipleAddsBody): Promise<boolean> {
    const { count } = body;
    return this.jobService.multiple_adds(count);
  }

  @Get('')
  public async list(): Promise<JobModel[]> {
    return await this.jobService.list();
  }

  @EventPattern(JOBS_QUEUE_PROCESS_EMAIL)
  public async processEmail(@Payload() job: JobModel, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();
    await this.jobService.processJob(job);
    channel.ack(originalMsg);
  }
}
