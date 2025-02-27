This project provides a simple CRUD API for managing users using Express.js and MongoDB with Mongoose.

Features

1. Create a user - Add a new user to the database.

2. List users - Retrieve all users with basic filtering.

3. Get user details - Fetch details of a specific user.

4. Update user - Modify an existing user's details.

5. Delete user - Remove a user from the database.

Prerequisites

Node.js (>=14.x recommended)

MongoDB (Local or Cloud - MongoDB Atlas)

npm or yarn

Installation
1. Clone this repository:

        git clone <repository-url>
        cd <repository-folder>

3. Install dependencies:
   
        npm install

Configuration

1. Create a .env file in the root directory and add the following:
   
        MONGO_URI=mongodb+srv://sa:Abc123@cluster0.bc0co7e.mongodb.net/
        PORT=5000

3. Ensure MongoDB is running locally or use a cloud-based MongoDB instance

Running the Application

        npm start

API Endpoints

1. Create a new user
Method: POST
Endpoint:

        http://localhost:5000/users

Body:

    {
    "email": "",
    "name": "",
    "age": 0
    }

2. Get all users
Method: GET
Endpoint:

        http://localhost:5000/users

4. Get a single user by ID
Method: GET
Endpoint:

        http://localhost:5000/users/:id

6. Update a user's details
Method: PUT
Endpoint:

        http://localhost:5000/users/:id

8. Delete a user
Method: DELETE
Endpoint:

        http://localhost:5000/users/:id
