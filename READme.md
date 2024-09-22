# MERN Stack Developer Tasks

This repository contains solutions for 20 Full Stack development tasks using the MERN Stack, Docker, Git, and Python for data analysis.

## Contents

1. [Node.js: Basic Server](#nodejs-basic-server)
2. [Express.js: REST API](#expressjs-rest-api)
3. [React: Fetch Users](#react-fetch-users)
4. [MongoDB: User Schema](#mongodb-user-schema)
5. [Express + MongoDB: Fetch User by Email](#express-mongodb-fetch-user-by-email)
6. [React + State Management: User Form](#react-state-management-user-form)
7. [React Routing](#react-routing)
8. [REST API Design](#rest-api-design)
9. [Docker: Basic Dockerfile](#docker-basic-dockerfile)
10. [Docker Compose: Multi-container Setup](#docker-compose-multi-container-setup)
11. [Docker Networking](#docker-networking)
12. [Git: Version Control](#git-version-control)
13. [CI/CD Integration](#cicd-integration)
14. [Python for Data Analysis](#python-for-data-analysis)

## Node.js: Basic Server
- **Location**: `back/index.js`
- **Description**: This simple Node.js server listens on port 3000 and returns a "Hello, World!" message when the root URL is accessed.
- **Instructions**: 
  ```bash
  cd back
  node index.js


## Express.js: REST API
- **Location**: `back/index.js'
- **Description**: A simple REST API was created using Express.js. This API includes a single route `/users` that returns a JSON list of predefined users, demonstrating basic RESTful practices.

## React: Fetch Users
- **Location**: `front/src/components/FetchJsonUsers.jsx`
- **Description**: A React component was built to fetch the list of users from the `/users` API. It displays the users in a table format, showcasing how to handle data fetching and state management in React.

## MongoDB: User Schema
- **Location**: `back/models/userModel.js`
- **Description**: A MongoDB schema was created to store user data (name, email, age). Additionally, a script was written to insert a new user into the MongoDB collection, providing insights into data modeling and interaction with MongoDB.

## Express + MongoDB: Fetch User by Email
- **Location**: `back/index.js`
- **Description**: An Express.js route was added to fetch a user by their email from the MongoDB database. This task demonstrated how to combine Express.js and MongoDB for dynamic data retrieval.

## React + State Management: User Form
- **Location**: `front/src/component/AddUser.jsx`
- **Description**: A form component was created in React that allows users to submit their name, email, and age. Upon submission, the data is sent to the backend API, and the state is updated to reflect the new user in the UI.

## React Routing
- **Location**:  `front/src/component/App.jsx`
- **Description**: React Router was set up to enable navigation between a Home page and a Users page. This task illustrated the implementation of routing in a React application for improved user experience.

## REST API Design
- **Location**: `back/blogsRoute/blogsRoute.js`
- **Description**: A RESTful API for a simple blog application was designed, featuring routes for creating, reading, updating, and deleting blog posts. This task reinforced RESTful principles in API design.

## Docker: Basic Dockerfile
- **Location**: `Dockerfile`
- **Description**: A Dockerfile was created for the Node.js Express application. It installs dependencies and runs the server on port 3000, introducing basic containerization concepts.

## Docker Compose: Multi-container Setup
- **Location**: `docker-compose.yml`
- **Description**: Using Docker Compose, a multi-container application setup was created that includes a Node.js server and a MongoDB database. This task emphasized orchestration of services with Docker.

## Docker Networking
- **Location**: `docker-compose.yml`
- **Description**: The Docker Compose configuration was modified to ensure that the Node.js application can communicate with the MongoDB database via Docker networking, enhancing service interconnectivity.

## Git: Version Control
- **Location**: N/A
- **Description**: Basic Git commands were used to initialize a repository, make commits, and push code to GitHub. This task covered fundamental version control practices crucial for collaborative development.

##  Branching Strategy
- **Location**:  'Assignment_Git_CI_CD.md'

## Merging and Resolving Conflicts:
- **Location**:  'Assignment_Git_CI_CD.md'


## CI/CD Integration
- **Location**: 'Assignment_Git_CI_CD.md'
- **Description**: A basic CI/CD pipeline was explained using GitHub Actions to automatically test and deploy the Node.js application whenever changes are pushed to the repository. This task showcased the automation of development workflows.

## Python for Data Analysis
- **Location**: 'data_analysis/analysis.py'
- **Description**: Several Python scripts were created using Pandas and Matplotlib for data analysis tasks, including data cleaning, manipulation, visualization, and calculating descriptive statistics. This section highlighted the application of Python in data analysis.