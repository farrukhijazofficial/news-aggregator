# 📰 News Aggregator

## ⚙️ Prerequisites

Before you start, ensure you have the following installed on your local machine:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

---

## 🚀 Running the App with Docker

Follow these steps to build and run the app inside Docker:

### 🛠️ 1. Build the Docker Image

### `docker-compose build`

### ▶️ 2. Start the Application
### `docker-compose up`

This will start the container and serve your app via Nginx.

Open your browser and visit: http://localhost:3000

### 🧹 3. Stop and Remove Containers
### `docker-compose down`

This command stops and removes the containers, networks, and volumes created by Docker Compose.

---

# 📦 Available Scripts (Local Development Only)
If you want to run the app locally without Docker, you can use the following npm scripts:

### `npm run dev`
Runs the app in development mode using Vite.

Open http://localhost:5173 to view it.

### `npm run build`
Builds the app for production to the `dist` folder using Vite and TypeScript.
