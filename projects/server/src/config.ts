import { ClientProviderOptions, Transport } from '@nestjs/microservices';

export const CONFIG = {
  RABBIT_URL: 'amqp://localhost:5672',
  JOBS_PRODUCER: 'jobs_producer',
  JOBS_CONSUMER: 'jobs_consumer',
};

export const JOBS_QUEUE_MICROSERVICE: ClientProviderOptions = {
  name: '',
  transport: Transport.RMQ,
  options: {
    urls: [CONFIG.RABBIT_URL],
    queue: 'jobs_queue',
    prefetchCount: 1,
    queueOptions: {
      durable: false,
    },
  },
};

export const JOBS_QUEUE_MICROSERVICE_PRODUCER: ClientProviderOptions = {
  ...JOBS_QUEUE_MICROSERVICE,
  name: CONFIG.JOBS_PRODUCER,
};

export const JOBS_QUEUE_MICROSERVICE_CONSUMER: ClientProviderOptions = {
  ...JOBS_QUEUE_MICROSERVICE,
  name: CONFIG.JOBS_CONSUMER,
  options: {
    ...JOBS_QUEUE_MICROSERVICE.options,
    noAck: false,
  },
};
