# Digital Bond - Homepage Project

## Project Overview

This is a homepage for **Digital Bond**, a digital marketing agency that combines creativity and commitment to help brands exceed their limits. The homepage includes various sections like Navbar, Hero Section, About Us, Reviews, Contact Us, and Footer, with responsive design and basic animations.

## Project Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/muhamedhajajii/digital-bond.git

## Folder Architecture

The project is organized into several modules to maintain a clean and scalable structure. Below is an overview of the folder architecture:

src/
 ├── app/
 │    ├── core/
 │    │    ├── interfaces/        <-- Interfaces for models and data structures
 │    │    ├── services/
 │    │    ├── guards/
 │    │    ├── utilities/
 │    │    └── core.module.ts
 │    ├── shared/
 │    │    ├── components/        <-- Reusable UI components (buttons, modals, etc.)
 │    │    └── shared.module.ts
 │    ├── pages/
 │    │    ├── auth/
 │    │    └── home/
 │    ├── app.module.ts
 │    └── app.component.ts

 src/ ├── app/ │ ├── core/ <-- Core module with services, guards, interceptors, and shared interfaces │ │ ├── interfaces/ <-- Interfaces for models and data structures │ │ ├── services/ <-- Services for shared business logic │ │ ├── guards/ <-- Route guards for managing route access │ │ ├── utilities/ <-- Helper functions and utilities │ │ └── core.module.ts <-- The main core module │ ├── shared/ <-- Shared module for reusable components, directives, and pipes │ │ ├── components/ <-- Reusable UI components like buttons, modals, etc. │ │ ├── pipes/ <-- Custom pipes for transformations │ │ └── shared.module.ts <-- The main shared module │ ├── pages/ <-- Layout components and page-specific modules │ │ ├── auth/ <-- Authentication-related pages (e.g., login, register) │ │ └── home/ <-- Home page and other general pages │ ├── app.module.ts <-- The main app module │ └── app.component.ts <-- The root component for the application