# Learning Path Application

This is a full-stack web application designed to help users create, share, and follow learning paths. Users can curate lists of resources (topics) to build paths, subscribe to other users, and track their progress.

## Project Structure

The project is divided into two main parts:

-   `/frontend`: Contains the React-based user interface.
-   `/backend`: Contains the Node.js/Express server and API.

## Setup Instructions

### Prerequisites

-   Node.js (version X.X.X or higher recommended)
-   npm (version X.X.X or higher recommended)
-   MongoDB (running instance or connection string)

### Backend Setup

1.  Navigate to the `backend` directory:
    ```bash
    cd backend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Create a `.env` file in the `backend` directory and add the following environment variables:
    ```
    MONGODB_URI=<your_mongodb_connection_string>
    JWT_SECRET=<your_jwt_secret>
    # Add other necessary environment variables (e.g., for Passport strategies, API keys)
    ```
4.  Start the backend server:
    ```bash
    npm start
    ```
    The backend will typically run on `http://localhost:3000` (or the port specified in `backend/bin/www`).

### Frontend Setup

1.  Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Create a `.env` file in the `frontend` directory if needed for environment-specific configurations (e.g., API base URL if it's not proxied by the backend). For example:
    ```
    REACT_APP_API_URL=http://localhost:3000/api
    # Adjust if your backend API is on a different port or path
    ```
4.  Start the frontend development server:
    ```bash
    npm start
    ```
    The frontend will typically run on `http://localhost:3001` (or another available port if 3000 is taken by the backend).

## Basic Usage

-   **Sign Up/Login:** Create an account or log in to access the application's features.
-   **Discover Paths:** Explore existing learning paths created by other users.
-   **Create Paths:** Design your own learning paths by adding topics and resources.
-   **My Dashboard:** Track your progress on paths you're following, manage your created paths, and see your favorite paths.

## Contributing

(Details to be added later if contributions are open)
