import { Body, Controller, Get, Post } from '@nestjs/common';
import { JobService } from './job.service';
import { JobModel } from './job.model';
import { JobMultipleAddsBody } from './job.interfaces';

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
}
