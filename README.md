# Node.js Todo App

A full-stack todo application built with Node.js, Express, SQLite, and JWT authentication.

## Project Status

This project is currently under development. The Express server and in-memory SQLite database are set up. Authentication and todo route handlers are planned but are not implemented yet.

## Technologies

- Node.js with ES modules
- Express 5
- SQLite through Node's built-in `node:sqlite` module
- `bcryptjs` for password hashing
- `jsonwebtoken` for JWT-based authentication
- A static frontend served from `public/`

## Requirements

- Node.js 22.5 or newer
- npm

Node's built-in SQLite support is used, so no separate SQLite installation is required.

## Installation

1. Clone the repository and open its directory:

   ```bash
   cd nodejs_chapter2
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

The application runs at [http://localhost:3000](http://localhost:3000).

## Available Scripts

| Command       | Description                               |
| ------------- | ----------------------------------------- |
| `npm run dev` | Starts the server with Node.js watch mode |
| `npm start`   | Runs `server.js` from the project root    |

## Project Structure

```text
.
├── public/
│   ├── index.html       # Frontend page
│   ├── styles.css       # Application styles
│   └── fanta.css        # Additional styles
├── src/
│   ├── db.js            # SQLite database and table definitions
│   ├── server.js        # Express application entry point
│   ├── middleware/
│   │   └── authMiddleware.js
│   └── routes/
│       ├── authRoutes.js
│       └── todoRoutes.js
├── package.json
└── todo-app.rest        # REST Client request file
```

## Database

The application currently creates an in-memory SQLite database when the server starts. Its data is lost whenever the server restarts.

The database contains the following tables:

- `users`: stores user accounts and password hashes
- `todos`: stores todo items associated with users

## Planned API

The route modules are prepared for the following endpoints:

| Method   | Endpoint         | Purpose                                |
| -------- | ---------------- | -------------------------------------- |
| `POST`   | `/auth/register` | Create a user account                  |
| `POST`   | `/auth/login`    | Authenticate a user and return a token |
| `GET`    | `/todos`         | List the authenticated user's todos    |
| `POST`   | `/todos`         | Create a todo                          |
| `PUT`    | `/todos/:id`     | Update a todo                          |
| `DELETE` | `/todos/:id`     | Delete a todo                          |

The todo router still needs to be mounted in `src/server.js`, and the route handlers and authentication middleware need to be completed.

## License

This project is licensed under the ISC license.
