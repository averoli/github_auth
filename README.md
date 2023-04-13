# GitHub Social Login 

[![CodeFactor](https://www.codefactor.io/repository/github/averoli/github_auth/badge)](https://www.codefactor.io/repository/github/averoli/github_auth>)

This is a Node.js application that allows users to authenticate with GitHub and store their access token and profile information in a database. The application uses Passport.js for authentication and MongoDB for data storage. It also includes endpoints for displaying all registered users, giving "star" to a repository, and protecting routes that require authentication.

## Installation
Clone this repository to your local machine.

 ```sh
 npm clone https://github.com/nuwe-io/readme-templates
 ```
   
To run the application, follow these steps:


_To install all dependencies run the following commands._
```

* cd
  ```sh
  cd astro-sound/server
  ```

* npm
  ```sh
  npm install
  ```

### RUN
To run this application you will need a firebase account and have all its configurations done with your data.

* Client Script
  ```sh
  npm run start
  ```

* Server Script
  ```sh
  npm run server
  ```

  Your browser should automatically open the app.

Clone this repository to your local machine.
Install the dependencies by running npm install in the project directory.
Set up a MongoDB database and specify the connection string in the .env file (see below for details).
Register a new OAuth application on GitHub and add the client ID and secret to the .env file (see below for details).
Start the application by running npm start.
Once the application is running, you can access it at http://localhost:3000.

Environment Variables
The following environment variables must be set in a .env file in the project directory:

PORT: The port number that the server will listen on (default is 3000).
MONGODB_URI: The connection string for the MongoDB database.
GITHUB_CLIENT_ID: The client ID for the GitHub OAuth application.
GITHUB_CLIENT_SECRET: The client secret for the GitHub OAuth application.
SESSION_SECRET: A secret string used to sign the session ID cookie.
Endpoints
The following endpoints are available in the application:

GET /auth/github: Redirects the user to the GitHub OAuth login page.
GET /auth/github/callback: Handles the OAuth callback from GitHub and saves the user's access token and profile information in the database.
GET /users: Displays a list of all registered users.
POST /repositories/:owner/:name/star: Adds a star to the specified GitHub repository for the authenticated user.
GET /dashboard: A protected route that displays the authenticated user's dashboard.
Middlewares
The following middleware functions are used in the application:

isAuthenticated: A middleware function that checks if the user is authenticated before allowing access to a protected route. If the user is not authenticated, the middleware redirects the user to the login page.
Models
The application includes two Mongoose models:

User: Represents a user in the application. Contains fields for the user's GitHub ID, access token, username, email, avatar URL, and starred repositories.
StarredRepo: Represents a starred repository for a user. Contains fields for the repository's owner, name, description, and URL.
License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgements
This application was inspired by the Passport.js documentation, the GitHub OAuth documentation, and the MongoDB documentation.
