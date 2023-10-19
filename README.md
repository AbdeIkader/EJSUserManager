# Express-EJS User Management Application

This project is an Express.js-based web application using EJS as the templating engine for rendering views. The application is structured using the Model-View-Controller (MVC) pattern, providing clear separation of concerns for ease of development and maintenance.

## Features:

- User CRUD operations: Add, Update, Delete, and List users.
- EJS templating for rendering dynamic views.
- Error handling and utilities for handling asynchronous code.
- Uses `mongoose` for connecting with MongoDB.

## Folder Structure:

```
|-- DB               // Contains user model
|-- public           // Contains static assets like CSS and JS
|-- views            // EJS templates for rendering views
|-- src
    |-- middlewares  // Custom middleware functions
    |-- utils        // Utility functions and classes
    |-- bootstrap.js // Entry point or configuration for the Express application
    |-- modules
        |-- User     
            |-- user.controller.js // Controller functions for user routes
            |-- user.routes.js     // User CRUD action routes
```

## Setup:

### Prerequisites:

- Node.js installed
- MongoDB setup and running

### Installation:

1. Clone the repository:

   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project directory:

   ```bash
   cd path_to_directory
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables in a `.env` file. Ensure that you have `MODE` (dev or prod), MongoDB URI, and any other required environment variables set up.

5. Start the server:

   ```bash
   npm start
   ```

## Endpoints:

1. Home: `GET /`
2. List Users: `GET /users`
3. About Page: `GET /about`
4. Add User: `POST /addUser`
5. Delete User: `POST /deleteUser/:id`
6. Get Update User: `GET /updateUser/:id`
7. Post Update User: `POST /updateUser/:id`

## Error Handling:

The application uses custom error handling mechanisms to deal with exceptions and errors. The `globalErrorHandling` middleware is utilized for handling errors across the application. Additionally, the `AppError` class is used for creating custom error objects, and the `catchAsyncError` utility helps in dealing with asynchronous code errors.

## License:

ISC

## Author:

[Your Name]

---

Feel free to use and adapt this README as per the additional features or details of your project.
