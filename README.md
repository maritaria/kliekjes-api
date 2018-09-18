# Structure
Path | Purpose
--- | ---
`src` | Server source files

# Installation
The project uses docker containers for managing runtime environments for development and production.
These use different dockerfiles because their environment setup is slightly different and optimized for buildtime and container size.
Also there exist separate service definitions in `docker-compose.yml` to easily run the containers locally.

## Production
The production container is designed to install, build and host a production grade version of the software.
Optimizations for this container include removing unused software packages and files from the container.
The only purpose of this container is to create an image of the project that can be deployed for production use. 
```bash
# Bring the production container online (port 80)
docker-compose up production
```

## Development
The development container is setup slightly differently than the production container.
Optimizations for this container focus on container build speed.
The purpose of this container is to create an image that represents the development environment with tools developers can use to work on the project.
This includes commandline tools and setup to host a hot-reloading version of the project.
```bash
# Bring the development container online (port 8080)
docker-compose up development
```