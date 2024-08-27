# HomeQuest

HomeQuest is a state-of-the-art real estate web application built on the MERN (MongoDB, Express.js, React.js, Node.js) stack. It provides a seamless platform for users to explore, list, and manage property listings with an intuitive interface and robust features.

## Features

- **Advanced Property Search**: Users can apply filters for location, price range, property type, and more.
- **Property Listings**: Create, read, update, and delete property listings easily.
- **User Authentication**: Secure login system utilizing both Google and JWT-based authentication.
- **Image Management**: Upload and manage multiple images for each property listing.
- **User Profiles**: Personalized dashboards for managing listings and saved properties.
- **Responsive Design**: Fully responsive design ensures a seamless experience across all devices.

## Tech Stack

### Frontend
- **React.js**
- **Redux** for state management
- **Tailwind CSS** for styling

### Backend
- **Node.js**
- **Express.js**
- **MongoDB** for the database

### Authentication & Storage
- **Firebase Authentication**
- **JWT** for token-based authentication
- **Firebase Storage** for image hosting

### DevOps
- **Git** for version control

## Usage

Key functionalities include:

- **Sign Up/Login**: Create an account or log in using the authentication system.
- **Search Properties**: Utilize the search bar and filters to find properties.
- **Create Listing**: Add new properties by clicking "Add Property."
- **Manage Listings**: View and manage your listings through the dashboard.

## Database Schema

The MongoDB database includes the following key schemas:

- **User**: Stores user information, including authentication details.
- **Listing**: Stores property details such as location, price, images, etc.

## Authentication

HomeQuest uses a dual authentication system:

1. **Google Authentication**: Implemented using Firebase Authentication.
2. **JWT Authentication**: Used for email/password login to maintain user sessions.

## Getting Started

### Prerequisites

- **Node.js** (v14.0.0 or later)
- **npm** (v6.0.0 or later)
- **MongoDB**
- **Firebase account**

### Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/kathan07/HomeQuest.git
   ```

2. Create an `.env` file:
   ```bash
   touch .env
   ```

3. Add Environment Variables:
   ```bash
   VITE_FIREBASE_API_KEY = "your_firebase_api_key"
   JWT_SECRET = "your_jwt_secret"
   MONGODB = "your_mongodb_connection_string"
   ```

4. Install node modules:
   ```bash
   npm i
   ```

5. Run the server:
   ```bash
   npm run dev
   ```

6. Setup and run the client:
   ```bash
   cd client
   npm i
   npm run dev
   ```

## Acknowledgements

- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Firebase](https://firebase.google.com/)
