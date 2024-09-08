# PasswordManagerUI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.3.

## Table of Contents

- [PasswordManagerUI](#passwordmanagerui)
  - [Table of Contents](#table-of-contents)
  - [Development Server](#development-server)
  - [Code Scaffolding](#code-scaffolding)
  - [Build](#build)
  - [Installation](#installation)
  - [Project Structure](#project-structure)

## Development Server

Run `ng serve` for a development server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code Scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Installation

1. Clone the repository:

    ```bash
    git clone repo-url
    ```
2. Install project dependencies:

    ```bash
    npm install
    ```

## Project Structure

- **Components**:
  - `password-list`: To list the passwords.
  - `add-update-password`: To add or update the password; validations are included for the form.
  - `navbar`: Navigation bar with the title.
  - `delete-confirmation-dialog`: Dialog to confirm the delete operation.

- **Models**:
  - `password`: Model for password.

- **Services**:
  - `password-service`: Service to interact with the backend.

- **Assets**:
  - Contains the images used in the project.

- **App-routing**:
  - Routing configuration.

- **App-module**:
  - Main module.

- **App-component**:
  - Main component.

- **Environments**:
  - Environment configuration.

- **Styles**:
  - Contains the styles used in the project.

- **Variables**:
  - Contains the variables used in the project.
