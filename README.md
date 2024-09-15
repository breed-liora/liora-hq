# Liora HQ Scheduling Application

## Overview

This application is part of the Liora HQ suite, designed to manage the scheduling of medical employees in a dermatology practice.

## Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/liora-hq-scheduling.git
   cd liora-hq-scheduling
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the application:
   ```bash
   npm start
   ```

## Usage

- Navigate to `http://localhost:3000` to access the application.
- Use the navigation links to add providers, employees, set settings, and view the schedule.

## Components

- **AddProvider**: Form to add new providers.
- **AddEmployee**: Form to add new employees.
- **ProviderList**: View to display all providers.
- **EmployeeList**: View to display all employees.
- **Settings**: Form to set office-level requirements.
- **Scheduler**: Component to generate and display the schedule.

## API Integration

- The application uses Axios for API calls.
- The `api.js` file manages all API interactions.
- Replace the baseURL in `api.js` with the actual API URL for production.

## Integration with Liora HQ

- Routing, state management, and styling are consistent with Liora HQ standards.
- Use shared components or services provided by Liora HQ where applicable.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
