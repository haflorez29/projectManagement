# Project Management Application

## Overview
This is a project management application built with Next.js, Prisma, and NextAuth. It allows users to create accounts, manage projects, and track tasks within those projects.

## Features

- User authentication (register, login, logout)
- Project creation and management
- Task creation and management within projects
- Responsive design using Tailwind CSS

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or later)
- npm (v6 or later)
- PostgreSQL

## Setup

1. Clone the repository: 
- git clone [https://github.com/your-username/project-management-app.git](https://github.com/your-username/project-management-app.git)
- cd project-management-app

2. Install dependencies:
- Install dependencies:

3. Set up your environment variables:
Replace `your_username`, `your_password`, and `your_nextauth_secret` with your actual PostgreSQL credentials and a secure random string for NextAuth.
DATABASE_URL="postgresql://your_username:your_password@localhost:5432/project_management_db?schema=public"
NEXTAUTH_SECRET="your_nextauth_secret"
NEXTAUTH_URL="http://localhost:3000"

4. Set up the database:
- npx prisma db push

5. Start the development server:
- npm run dev


6. Open your browser and navigate to `http://localhost:3000`

## Usage

### User Registration
1. Navigate to `/register`
2. Fill in your name, email, and password
3. Click "Register"

### User Login
1. Navigate to `/login`
2. Enter your email and password
3. Click "Sign In"

### Creating a Project
1. After logging in, go to the dashboard
2. Click "Create New Project"
3. Fill in the project name and description
4. Click "Create Project"

### Viewing Projects
1. After logging in, your projects will be displayed on the dashboard

## Project Structure

- `/app`: Contains the main application code
- `/api`: API routes for authentication, projects, and tasks
- `/components`: Reusable React components
- `/dashboard`: Dashboard page
- `/login`: Login page
- `/register`: Registration page
- `/projects`: Project-related pages
- `/prisma`: Contains the Prisma schema and migrations

## Technologies Used

- Next.js 14
- React
- TypeScript
- Prisma
- NextAuth.js
- Tailwind CSS
- PostgreSQL

## Contact

Your Name - heidyflorez55@gmail.com