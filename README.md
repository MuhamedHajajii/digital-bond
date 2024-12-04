# Digital Bond - Homepage Project

## Project Overview

This is a homepage for **Digital Bond**, a digital marketing agency that combines creativity and commitment to help brands exceed their limits. The homepage includes various sections like Navbar, Hero Section, About Us, Reviews, Contact Us, and Footer, with responsive design and basic animations.

## Project Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/muhamedhajajii/digital-bond.git

### Folder Breakdown:

- **core/**: This directory contains essential services, guards, interceptors, and interfaces. It is used throughout the app.
  - **interfaces/**: Includes the TypeScript interfaces for data structures used across the application.
  - **services/**: Holds services for handling business logic and data manipulation (e.g., authentication, data fetching).
  - **guards/**: Includes route guards to manage user access to certain routes.
  - **utilities/**: Contains utility functions that can be reused throughout the app.
  - **core.module.ts**: The core module that bundles all the services, guards, and interfaces.

- **shared/**: This module includes reusable UI components (like buttons and modals), pipes, and directives that are used across various parts of the application.
  - **components/**: Reusable UI components (e.g., buttons, modals, input fields).
  - **pipes/**: Custom pipes for data transformations.
  - **shared.module.ts**: The shared module that imports and exports reusable components, directives, and pipes.

- **pages/**: Contains the layout and specific page components.
  - **auth/**: Contains components related to authentication (e.g., login, registration).
  - **home/**: Contains components and layout for the homepage.

- **app.module.ts**: The root module that imports and configures all the other modules and components.
- **app.component.ts**: The root component that is the entry point for the application.
