# Todo App (React + Vite)

[![Open in VS Code Web](https://img.shields.io/badge/Open%20in-VS%20Code%20Web-007ACC?logo=visualstudiocode&logoColor=white)](https://codespaces.new/veenagovadabb/todo)

A simple todo application built with React and Vite.

## Project Description

This project provides a minimal todo interface with:

- A form to enter a todo item
- An "Add To Do" submit action
- A displayed todo list

Current behavior:

- The list is initialized with two sample items: "Thaw Steaks" and "Make Dinner"
- Submitting the form currently logs the typed value to the console

## Tech Stack

- React 18
- Vite
- Vitest + Testing Library

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm

### Install

```bash
npm install
```

### Run the app

```bash
npm start
```

The app runs at [http://localhost:3000](http://localhost:3000).

## Available Scripts

### `npm start`

Starts the Vite development server on port 3000.

### `npm test`

Runs tests using Vitest.

### `npm run build`

Builds the app for production.

### `npm run preview`

Serves the production build locally for preview.

## Future Improvements

- Add new todos to state instead of only logging to the console
- Persist todos in local storage
- Add edit, complete, and delete actions
