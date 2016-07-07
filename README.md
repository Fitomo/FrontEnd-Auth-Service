# Fitomo

  Fitomo

  Live Site: http://198.199.119.144:8080/


## Table of Contents

1. [Getting started](#Getting-Started)
  1. [Clone the latest version](#Clone-Latest)
  2. [Install dependencies](#Install-Dependencies)
  3. [Run the application](#Run-Application)
  4. [Styling Guide](#Styling-Guide)
2. [Tech Stack](#Tech-Stack)
3. [Directory Layout](#Directory-Layout)
4. [Contributing](#Contributing)
5. [License](#License)

## Architecture
![Fitomo Architecture](https://github.com/Fitomo/FrontEnd-Auth-Service/blob/master/Fitomo%20Architecture.png)
## Getting started

#### 1. Clone the latest version

  Start by cloning the latest version of the Fitomo/FrontEnd-Auth-Service and on your local machine by running:

  ```sh
  $ git clone https://github.com/Fitomo/FrontEnd-Auth-Service.git
  $ cd FrontEnd-Auth-Service
  ```

   Access the Fitomo Data Aggregation Service repo and follow the setup documentation to run the service

#### 2. Install Dependencies
  From within the root directory run the following command to install all dependencies:

  ```sh
  $ npm install
  ```

#### 3. Run the application

  1. Using the env/example.env file as an example, setup your environment variables in a development.env file.

  2. In a new terminal window run the following command to start the application:

  ```sh
  $ npm start
  ```

  After that open in your browser the localhost with your chosen port, e.g. ``` http://localhost:8080/ ``` to access the application.

#### 4. Utilizing Webpack Hot-Reload for styling
  
  1. To make quick UI edits for styling and funtionality:
    - Uncomment line 49 in appPresenter.js
    - Comment line 50 in appPresenter.js
    - From your root directory run:

  ```sh
  $ npm run hot
  ```

## Tech Stack

##### Front End:
- React
- Redux
- React-Router
- React-Router-Redux
- Socket-IO-Client


##### Back End:
- Node
- Express
- Bookshelf/Knex
- MySQL
- Redis
- Socket.io

##### Testing:
- Mocha
- Chai
- Enzyme 

## Directory Layout
```
├── /dist/                      # Webpack bundle files
├── /env/                       # Environment variables
├── /jawbone-client-oauth2      # Helper OAUTH2 Library for Jawbone
├── /node_modules/              # 3rd-party libraries and utilities
├── /server/                    # Client source code
│   ├── /config/                # Initial configurations for server, auth, and database
│   ├── /controllers/           # Manage API calls and request handling
│   ├── /models/                # Database model
│   ├── /routes/                # Handle all routing
│   ├── /server.js              # Core server file
├── /src/                       # Client source code
│   ├── /actions/               # Action creators 
│   ├── /components/            # React Components
│   ├── /constants/             # Constants Declarations
│   ├── /css/                   # Post-CSS files
│   ├── /reducers/              # Component Reducer functions
│   ├── /stores/                # Redux store configuration and middleware
│   ├── /util/                  # Utility functions for various components
│   ├── /index.js               # Core client file
│   ├── /localStorage.js        # Utility for local storage modification
│   ├── /routes.js              # React-router routes
├── /StickMan/                  # Fitomo avatar pictures
├── /test/                      # Test Setup
├── .eslintrc                   # ESLint settings
├── .babelrc                    # Babel settings
├── .travis.yml                 # TravisCI settings
├── Dockerfile                  # Docker configuration
├── package.json                # List of 3rd party libraries and utilities to be installed
└── webpack.config.js           # Webpack Configuration file
```

## Contributing

  1. Fork the repo.
  2. Clone it to your local computer
  3. Cut a namespaced feature branch from master and name it appropriately
  4. Make commits and prefix each commit with the type of work you were doing
  5. BEFORE PUSHING UP YOUR CHANGES, rebase upstream changes into your branch, fix any potential conflicts, and then push to your fork.
  6. Submit a pull request directly to the master
  7. Someone else will perform code review to keep codebase clean
  8. Fix any errors or issues raised by the reviewer and push the fixes as a single new commit
  9. Repeat until the pull request is merged.

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines in detail.

## License

M.I.T
