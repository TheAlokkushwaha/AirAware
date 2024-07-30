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

3. Create a `.env` file in the `frontend` directory with the following content:

    ```env
    EMAIL_USER=Notification sender email
    EMAIL_PASS=App password
    ```

4. Create an app password for Gmail:

    - Go to [Google App Passwords](https://myaccount.google.com/apppasswords?rapt=AEjHL4MB7J5gf1Hx6GfMebJ9Za37aEM0RQIHluXAzDfA9ugIaf1ucsbTxiPf87aT--mp3LMlF3tFffnFGC4v6uaYI5lc7YQvzfw2XnuSf5oTUdq4rYTPSOo).
    - Sign in to your Google account.
    - Give the project a name.
    - Copy the generated app password and paste it into the `.env` file as `EMAIL_PASS`.


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

### 6. Run the Backend Server

    Start the backend server with:

    ```sh
    node server.js
    ```

### 7. Frontend Setup

1. Change directory to the frontend:

    ```sh
    cd ../frontend
    ```

2. Install the necessary packages:

    ```sh
    npm install
    ```

### 8. Start the React Development Server

```sh
npm start
```

### 9. Project UI - Some Images

1. Home Page
   
    ![Screenshot 2024-07-30 153118](https://github.com/user-attachments/assets/30928a71-6d37-4c38-a8a3-6053ddcac394)

2. All Flight Page
   
    ![Screenshot 2024-07-30 153259](https://github.com/user-attachments/assets/1b983e85-8560-462d-96d3-b897eeb149b8)

3. Flight Status Page
 
    ![Screenshot 2024-07-30 153402](https://github.com/user-attachments/assets/2d031625-fa63-45af-bd88-41ad20e917d4)

4. Flight Edit Page (This is for only Admin)

    ![Screenshot 2024-07-30 153420](https://github.com/user-attachments/assets/d9ca7f15-0f45-455a-9f7c-c8722566d829)


The React application will start at [http://localhost:3000](http://localhost:3000).

## Additional Notes

- Ensure your MongoDB server is running before starting the backend.
- The frontend will run on the web (usually [http://localhost:3000](http://localhost:3000)), and the backend will run on the server (usually [http://localhost:5000](http://localhost:5000)).
- Make sure to keep your `.env` file secure and do not share it publicly.

## Admin and User Functionality

- **Admin**: Can update the status of the flight.
- **User**: Can only see the status of the flight. When the status is updated by the admin, the user receives a notification via email.

Feel free to adjust the details according to your project specifics and any additional steps you might have.

