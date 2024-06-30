Here's an updated README for your SDE Intern Assignment, including instructions on how to run the frontend and backend projects with specified ports:

---

# SDE Intern Assignment: Deep Tree Implementation with Next.js and NestJS

## Objective

Create a full-stack application using Next.js for the front end and NestJS for the backend to build, manage, and persist a tree structure with a depth of 10,000 nodes.

## Milestones

### Milestone 1: Initial Setup

#### Project Setup

- **Frontend:**
  - Set up a new Next.js project.
  - Port: 3000 by default.
  
- **Backend:**
  - Set up a new NestJS project.
  - Port: 4000 by default.

#### Version Control

- Initialize a Git repository for version control.

### Milestone 2: Basic Frontend Structure

#### Project Structure

- Follow best practices for code structure and modularization in the Next.js project.

#### User Authentication

- Implement a simple username input form.
- Set up state management (e.g., React context or Redux) for managing user state.

### Milestone 3: Backend Structure and User Management

#### Backend Setup

- Set up the basic structure for the NestJS project.

#### Database Integration

- Integrate a database (e.g., MongoDB, PostgreSQL).

#### API Endpoints for User Management

- Create an endpoint to validate and register unique usernames.
- Implement robust input validation and error handling for these endpoints.

### Milestone 4: Tree Data Structure and State Management

#### Tree Data Structure

- Implement a data structure to represent a tree with a depth of 10,000 nodes in the front end.
- Initialize each node with the value 1.

#### State Management

- Use appropriate state management to manage the tree's state efficiently.

### Milestone 5: Basic Tree UI and Node Interaction

#### Tree UI Components

- Create React components to represent tree nodes.
- Design a UI that can handle a tree with significant depth, considering performance and usability.

#### Node Interaction

- Implement functionality to handle clicks on leaf nodes.
- Ensure that when a leaf node is clicked, we can edit its value, and its value is updated and propagated up to all its parent nodes.

### Milestone 6: API Endpoints for Tree Management

#### API Endpoints for Tree Operations

- Implement an endpoint to save the entire tree structure for a given username.
- Create an endpoint to retrieve a saved tree structure for a username.
- Ensure robust input validation and error handling for these endpoints.

### Milestone 7: Frontend-Backend Integration

#### API Communication

- Set up secure communication between the Next.js frontend and the NestJS backend.
- Implement proper error handling for network requests.

#### Save Functionality

- Add a "Save" button to the front end.
- Implement logic to ensure all updates are complete before saving.
- Send the entire tree structure to the backend when the "Save" button is clicked.

### Milestone 8: Performance Optimization

#### Optimization Techniques

- Optimize both frontend and backend to handle large tree structures efficiently.
- Implement lazy loading or virtualization techniques if necessary.

### Bonus Milestone: Additional Features

#### Undo/Redo Functionality

- Implement undo/redo functionality for node updates.

#### UI Enhancements

- Add performance enhancements such as memoization or advanced state management techniques.
- Create a visually appealing UI with animations or other interactive elements.

## Deliverables

- A fully functional Next.js frontend application.
- A fully functional NestJS backend application.
- Source code hosted on a version control platform (e.g., GitHub).
- A demonstration video or live demo link showcasing the application and its features.
- Documentation explaining the flow and decisions, referencing code snippets, and mentioning achieved milestones.

## Evaluation Criteria

- Code Quality: Clean, readable, and maintainable code. Proper use of Next.js, React, and NestJS best practices.
- Functionality: Correct implementation of tree structure, node interaction, and saving/loading functionality.
- User Experience: Intuitive and responsive UI. Smooth user interactions with the tree and saving process.
- Backend Design: Efficient API design, proper database usage, and robust error handling.
- Testing and Documentation: Comprehensive test coverage. Clear and detailed documentation.

## Getting Started

- Set up separate Next.js and NestJS projects.
- Plan your tree data structure, state management approach, and database schema.
- Implement basic frontend and backend functionality, then gradually add the required features.
- Integrate frontend and backend, ensuring smooth communication.
- Test your application thoroughly and optimize for performance.
- Document your code and create user instructions as Readme. In the document file, add a reference to the code too, for example, add a comment on your code // refer to point 2. a in Readme.

### Running the Projects

- **Frontend (Next.js):**
  - Navigate to the `frontend` directory.
  - Run `npm install` to install dependencies.
  - Run `npm run dev` to start the development server.
  - Access the frontend at `http://localhost:3000`.

- **Backend (NestJS):**
  - Navigate to the `backend` directory.
  - Run `npm install` to install dependencies.
  - Run `npm run start` to start the NestJS server.
  - Access the backend at `http://localhost:4000`.

---
