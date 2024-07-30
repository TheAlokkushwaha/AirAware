Here's a formatted README file for your project:

---

# Flight Status and Notifications System

## Overview

This project provides a real-time flight status update and notification system. It includes a React.js frontend, a Node.js backend, uses MongoDB for data storage, and Firebase Cloud Messaging for notifications.

## Prerequisites

- **React** (v16 or later)
- **Node.js** (v20 or later)
- **npm** (v6 or later)
- **MongoDB** (You can use MongoDB Atlas or a local instance)
- **Firebase Account**: [Create a Firebase account](https://firebase.google.com/)

## Steps to Setup and Run the Project

### 1. Clone the Repository

```sh
git clone https://github.com/TheAlokkushwaha/AirAware
cd AirAware
```

### 2. Backend Setup

1. Change directory to the backend:

    ```sh
    cd backend
    ```

2. Install the necessary packages:

    ```sh
    npm install
    ```

### 3. Configure Firebase

- Obtain your Firebase Server Key from the Firebase Console.
- Replace `YOUR_SERVER_KEY` in `app.js` with your actual Firebase Server Key.

### 4. Start MongoDB

Ensure MongoDB is running on the default port (27017). You can start MongoDB with:

- Open MongoDBCompaas in your system.

### 5. Import Test Data

Run the following script to insert sample data into MongoDB:

```sh
node importData.js
```

### 6. Frontend Setup

1. Change directory to the frontend:

    ```sh
    cd ../frontend
    ```

2. Install the necessary packages:

    ```sh
    npm install
    ```

### 7. Start the React Development Server

```sh
npm start
```

The React application will start at [http://localhost:3000](http://localhost:3000).

## Additional Notes

- Ensure your MongoDB server is running before starting the backend.
- The frontend will run on the web (usually [http://localhost:3000](http://localhost:3000)), and the backend will run on the server (usually [http://localhost:5000](http://localhost:5000)).
- Make sure to keep your `.env` file secure and do not share it publicly.

## Admin and User Functionality

- **Admin**: Can update the status of the flight.
- **User**: Can only see the status of the flight. When the status is updated by the admin, the user receives a notification via email.

Feel free to adjust the details according to your project specifics and any additional steps you might have.

---

This README provides a clear and structured guide for setting up and running the project, ensuring both clarity and ease of use.
