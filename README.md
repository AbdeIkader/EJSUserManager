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
|-- public           // Contains static assets like CSS and JS and IMAGES
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
   git clone https://github.com/AbdeIkader/EJSUserManager.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables in a `.env` file. Ensure that you have `MODE` (dev or prod), MongoDB URI, and any other required environment variables set up.

    ```
    PORT=4000
    MODE=dev
    MONGO_URI = mongodb://127.0.0.1:27017/EJSProj
    ```

4. Start the server:

   ```bash
   npm start
   // OR
   nodemon
   // OR
   node index.js
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

## Contribution:

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License:

The content of this project itself is licensed under the [ISC License](https://opensource.org/licenses/ISC) and the underlying source code used to format and display that content is licensed under the MIT License.

## Contact:

If you have any questions or suggestions, feel free to reach out to me at [Gmail](abdelrahmanabdelkader2002@gmail.com) or through my [LinkedIn](https://www.linkedin.com/in/abdelrahman-abdelkader-259781215/).
