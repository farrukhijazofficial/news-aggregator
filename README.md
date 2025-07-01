# News Aggregator

## Docker Instructions

Before you start, ensure you have the following installed on your local machine:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

In order to build and run this project in the Docker, you should run the following commands in order:

### `docker-compose build`

The `docker-compose build` command is used to build the Docker image for this application. This command reads
the `docker-compose.yml` file to find the service definitions and then executes the instructions found in
the `Dockerfile` specified in the `build` section.

### `docker-compose up`

The `docker-compose up` command is used to start the application defined in your `docker-compose.yml` file. This command
reads the `docker-compose.yml` file to find the service definitions, builds the Docker images if they haven't been built
yet, and then starts the containers. If the images are already built, it will simply start the containers without
rebuilding them.

### `docker-compose down`

The `docker-compose down` command is used to stop and remove the containers, networks, and volumes that were created by
the `docker-compose up` command. This command effectively cleans up all the resources associated with your application,
ensuring that no leftover containers or networks are running.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!