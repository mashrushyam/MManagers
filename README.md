# Money Manager Application

## Overview
The Money Manager application is designed to help users efficiently manage their expenses by categorizing them into different groups. It allows users to create groups, add expenses to those groups, and view the expenses associated with each group. The application is built using Spring Boot for the backend, React for the frontend, and MySQL for the database.

## Functionality

### 1. Login
- Users can log in to their accounts using their credentials.
- If the credentials are valid, users are redirected to the dashboard; otherwise, an error message is displayed.

### 2. Logout
- Users can log out of their accounts, which clears their session and redirects them to the login page.

### 3. Add Expense
- Users can add expenses to specific groups.
- They can enter details such as the expense amount, description, and select the group to which the expense belongs.
- After adding an expense, it is saved in the database and reflected in the respective group's expenses list.

### 4. Add Group
- Users can create new groups to categorize their expenses.
- They need to provide a name for the group, which should be unique.
- Once created, the group is added to the user's list of groups and stored in the database.

### 5. Groups Page
- Users can view all the groups they have created.
- Each group displays basic information such as its name and total expenses.
- Users can click on a group to view the detailed list of expenses associated with that group.

## Setup Instructions

### 1. Backend (Spring Boot)
- Clone the repository containing the backend code.
- Navigate to the backend directory.
- Configure the database connection in the `application.properties` file.
- Run the Spring Boot application using your preferred IDE or command line.

### 2. Frontend (React)
- Clone the repository containing the frontend code.
- Navigate to the frontend directory.
- Install dependencies using `npm install`.
- Update the backend URL in the `.env` file if necessary.
- Start the React application using `npm start`.

### 3. Database (MySQL)
- Create a MySQL database and configure the connection details in the backend's `application.properties` file.
- Run the SQL scripts provided to create the necessary tables and schema.

### 4. Accessing the Application
- Open a web browser and navigate to the specified URL where the frontend is hosted.
- Log in with your credentials or sign up if you are a new user.
- Start managing your expenses by adding groups and expenses.

## Dependencies
- Spring Boot
- React
- MySQL
- Axios (for API requests in React)
- Bootstrap or any preferred CSS framework for styling

## Contributors
- Shyam Mashru

## Additional Notes
- Make sure to handle authentication and authorization securely to protect user data.
- Regularly update and maintain the application to ensure security and performance.
- Feel free to contribute to the project by adding new features or fixing bugs.
- For any issues or suggestions, please create an issue on the project's GitHub repository.

## Disclaimer
- This application is for educational and demonstration purposes only. It should not be used for handling sensitive financial data without proper security measures in place.

