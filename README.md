# Velora — Farm-to-Customer Platform

Velora is a work-in-progress web application designed to help customers discover farm products and connect with farmers directly.

## Current features
- Product browsing and shopping pages
- Customer and farmer demo login flows
- Farmer profile setup and farmer dashboard pages
- Shopping cart, quantity updates, and demo order placement
- Browser `localStorage` for user, cart, farmer, and order data
- React Router navigation

## Tech stack
- **Frontend:** React, JavaScript, HTML, CSS, React Router
- **Backend (in progress):** Django, SQLite (local development)

> **Project status:** The frontend is a prototype. Login uses hardcoded demo accounts, and order placement is stored in the browser rather than processed by a server. The Django backend is an initial scaffold and is not yet connected to the React frontend. Do not use the current authentication flow in production.

## Run the frontend
1. Install Node.js and npm.
2. In a terminal, open the project root (`velora`).
3. Run `npm install`.
4. Run `npm start`.
5. Open `http://localhost:3000`.

## Run the Django development server
1. Install Python and Django in a virtual environment.
2. Open the `velora_backend` folder.
3. Set a local `DJANGO_SECRET_KEY` environment variable for development (do not commit it).
4. Run `python manage.py migrate`.
5. Run `python manage.py runserver`.

The backend is not yet integrated with the frontend. No backend requirements file was included in the uploaded project, so dependencies may need to be installed manually.

## Planned improvements
- Replace demo login with secure backend authentication
- Connect frontend to Django APIs and persistent database models
- Implement server-side products, orders, and farmer accounts
- Add validation, testing, and deployment configuration

## Note
This repository is a learning/development project, not a production e-commerce service.
