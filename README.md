# About

Sandbox project with three services configured with containers using docker:
- RabbitMQ
- NestJS
- Web static files - (React framework)

Simple backend with a RabbitMQ connection that will manage a queue of jobs in a asyncronous way. Simple frontend that connects to the backend and visualize the current jobs and create new ones.

# Dependencies

- Install [Docker](https://docs.docker.com/engine/install/)
- Install [Node 18](https://nodejs.org/en/download)
- Install yarn `npm install -g yarn`

# Run All

Make sure that the ports being used are avaliable: 3000, 3001, 5672, and 15672

1. Run docker compose with all containers. 
```
    docker-compose up
```

2. Open the browser and access the frontend: `http://localhost:3001/`