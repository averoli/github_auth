# GitHub Social Login 

[![CodeFactor](https://www.codefactor.io/repository/github/averoli/github_auth/badge)](https://www.codefactor.io/repository/github/averoli/github_auth>)

This is a Node.js application that allows users to authenticate with GitHub and store their access token and profile information in a database. The application uses Passport.js for authentication and MongoDB for data storage. It also includes endpoints for displaying all registered users, giving "star" to a repository, and protecting routes that require authentication.

## Installation
Clone this repository to your local machine.

 ```sh
 npm clone https://github.com/averoli/github_auth.git
 ```
## RUN  
 
 ```sh
cd astro-sound/server
 ```
 
Install all dependencies

 ```sh
 npm install
 ```
 
  ```sh
  npm run server
  ```

 Your browser should automatically open the app.


## Environment Variables
The following environment variables must be set in a .env file in the project directory:

- PORT: The port number that the server will listen on.
- DB_URL: The connection string for the MongoDB database.
- GITHUB_CLIENT_ID: The client ID for the GitHub OAuth application.
- GITHUB_CLIENT_SECRET: The client secret for the GitHub OAuth application.


## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements
This application was inspired by the Passport.js documentation, the GitHub OAuth documentation, and the MongoDB documentation.
