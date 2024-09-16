# Liora HQ - Medical Employee Scheduling Application

## Overview

This application is part of **Liora HQ**, a suite of applications designed to streamline operations within a dermatology practice. This module focuses on scheduling employees, including providers, medical assistants, and front desk staff.

## Features

- **Material UI Styling:** A modern and responsive user interface.
- **Left-Hand Side Navigation Drawer:** Easy navigation between different modules.
- **Scheduler:** Calendar view of employee schedules with weekly summaries.
- **Shift Swapping:** Employees can request to swap shifts.
- **Time-Off Requests:** Employees can submit time-off requests.
- **Reports and Dashboards:** Visual representations of scheduling data.
- **Customizable Branding:** Placeholder themes that can be customized.

## Setup Instructions

### Prerequisites

- **Node.js** (version 14 or higher)
- **npm** (version 6 or higher)
- **json-server** for mock API data

### Installation Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/liora-hq.git
   cd liora-hq

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Up Mock API**

   Install json-server globally:
   ```bash
   npm install -g json-server
   ```

   Create a `db.json` file in the root directory with mock data.

4. **Start the Mock API**

   ```bash
   json-server --watch db.json --port 3001
   ```

5. **Start the Application**

   In a new terminal window:
   ```bash
   npm start
   ```

   The application should now be running on `http://localhost:3000`.

## Usage

1. Navigate to `http://localhost:3000` in your web browser.
2. Use the left-hand side navigation drawer to access different modules.
3. The Scheduler view will be the default landing page.

## Development

- To add new features, create a new branch and submit a pull request.
- Ensure all code follows the established style guide and passes linting.
- Write unit tests for new components and features.

## Troubleshooting

- If you encounter any issues with the mock API, ensure json-server is running on port 3001.
- For any other problems, please check the console for error messages and refer to the project's issue tracker.


