# Full-Stack Todo List 

This is a simple full-stack todo list application built using EJS as the templating engine, Node.js as the backend runtime, Express.js as the web framework, and MongoDB as the database to store the todo items.
# preview 
![Screenshot 2023-08-01 at 6 34 58 PM (2)](https://github.com/AzimiShaja/fullstack-todo-list/assets/110715621/23fa07ef-8e49-4fdd-a240-8db387aa9cd3)

# Prerequisites

Before running the application, make sure you have the following software installed:

    Node.js: Download Node.js
    MongoDB: Download MongoDB

# Getting Started

    Clone the repository to your local machine:

 bash

    git clone "repo url"
    cd todo-list-app

    Install the dependencies:

 bash

    npm install

Create a MongoDB database named "todo_list_db" with a collection named "todos".

# Configuration

In the root directory, create a .env file and set the following environment variables:

plaintext

    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/todo_list_db

    PORT: Port number for the application to run on (default is 3000).
    MONGODB_URI: Connection string for your MongoDB database.

# Running the Application

To start the server, run the following command:

bash

    npm start

Visit http://localhost:3000 in your browser to access the application.

# Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvement, feel free to open an issue or submit a pull request.

Thank you for using my Full-Stack Todo List application! If you have any questions or need further assistance, please feel free to contact me. Happy task managing!
