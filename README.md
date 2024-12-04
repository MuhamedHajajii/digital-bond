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
app/
core/
components/: Contains global UI components like navbar and footer.
navbar.component.ts - The navigation bar component.
footer.component.ts - The footer component.
services/: Contains services used across the application (e.g., HTTP requests).
auth.service.ts - Service for handling authentication.
data.service.ts - Service for fetching data.
guards/: Route guards for managing access control.
auth.guard.ts - Guard for protecting routes that require authentication.
interceptors/: HTTP interceptors for modifying HTTP requests and responses.
auth.interceptor.ts - Interceptor for attaching authentication tokens.
interfaces/: Contains shared TypeScript interfaces.
user.interface.ts - Interface for the user model.
shared/
components/: Contains reusable components like buttons, modals, etc.
button.component.ts - A button component with various styles.
modal.component.ts - Modal component for showing dialogs.
pipes/: Custom pipes used in the application.
date.pipe.ts - Pipe to format dates.
directives/: Custom directives used in the project.
highlight.directive.ts - Directive to highlight elements.
pages/
auth-layout/: Contains layout components for authentication-related pages.
auth-layout.component.ts - Layout for login, register, etc.
blank-layout/: Contains layout components for pages without authentication needs.
blank-layout.component.ts - Layout for homepage, contact page, etc.
styles/: Contains global SCSS files for styling.
variables.scss - Global variables for styling (colors, fonts, etc.).
buttons.scss - Styling for buttons used throughout the project.
typography.scss - Styling for typography and text elements.