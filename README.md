# Gym Management System

Backend API for managing gym members.

This project is part of a personal software engineering project to build a complete gym management system.

## Tech Stack

- Node.js
- Express
- PostgreSQL
- Prisma ORM

## Features

Current implemented functionality:

- Create a gym member
- List all members
- Get member by ID
- Update member data
- Delete a member

## API Endpoints

### Create member

POST /socios

### Get all members

GET /socios

### Get member by id

GET /socios/:id

### Update member

PUT /socios/:id

### Delete member

DELETE /socios/:id

## Installation

Clone the repository

git clone https://github.com/BrunoChiantore/gym-management-system

Go to backend folder

cd backend

Install dependencies

npm install

Run database migrations

npx prisma migrate dev

Start the server

npm run dev

## Future Features

Planned features for the gym system:

- Membership plans
- Payments management
- Member attendance tracking
- Membership expiration management

## Author

Bruno Chiantore
Software Engineering Student – Universidad Siglo 21
