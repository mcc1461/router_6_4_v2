# React Router Example Project

This project is a simple React application demonstrating the use of the react-router-dom library for handling client-side routing in a single-page application (SPA). The application features a main layout and several nested routes for different pages, including a form that fetches GitHub user information.

## Table of Contents

* Features
* Tools Used
* Installation
* Usage
* Project Structure
* Contributing
* License

## Features

Client-side routing using react-router-dom
Error boundary for handling and displaying errors
Dynamic route parameters and loaders
Form handling and state management with React
Async data fetching from GitHub API
Code split into components and pages for modularity

## Tools Used

React: A JavaScript library for building user interfaces
ReactDOM: A package that provides DOM-specific methods for working with React
React Router: A collection of navigational components that compose declaratively with your application
ErrorBoundary: A custom error boundary component for catching JavaScript errors anywhere in the component tree and displaying a fallback UI
Vite: A fast build tool and development server

## Installation

To install and run this project locally, follow these steps:

### Prerequisites

Make sure you have Node.js installed on your system.

### Steps

1.Clone the repository:

git clone <repository-url>

cd <repository-directory>

2.Install dependencies:

npm install

3.Run the development server:

npm run dev

Open your browser and navigate to http://localhost:3000 to see the application running.

## Usage

Once the development server is running, you can navigate through the following routes:

/: Home page
/about: About page
/github: GitHub page with a form to enter a GitHub username
/github/:userid: GitHub page displaying user info for the specified username
*: Fallback for any undefined routes (Not Found page)

## Project Structure

Below is the directory structure of the project:

├── public
│   └── index.html
├── src
│   ├── assets
│   │   └── software.png
|   |   └── reactRouter.png
|   |   └── mccLogo.png
│   ├── components
│   │   ├── About
│   │   │   └── About.jsx
│   │   ├── Github
│   │   │   ├── Github.jsx
│   │   │   └── githubInfoLoader.js
│   │   ├── Header
│   │   │   └── Header.jsx
│   │   ├── Home
│   │   │   └── Home.jsx
│   │   ├── NotFound
│   │   │   └── NotFound.jsx
│   ├── Layout.jsx
│   ├── ErrorBoundary.jsx
│   ├── index.css
│   ├── main.jsx
├── package.json
├── vite.config.js
└── README.md

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or create a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
