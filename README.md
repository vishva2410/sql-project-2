# Basic SQL Python Project

This is a basic SQL Python project created as part of the PAT course. It provides a simple set of Python scripts that interact with a MySQL database to perform CRUD (Create, Read, Update, Delete) operations on an `employees` table.

## Prerequisites

Before running the scripts, make sure you have the following installed on your machine:
- **Python 3**
- **MySQL Server**
- **pip** (Python package manager)

## Installation

1. **Clone the repository:**
   ```sh
   git clone <repository_url>
   cd sql-project-2
   ```

2. **Install the required dependencies:**
   This project requires the `PyMySQL` module to communicate with the MySQL database. You can install it using `requirements.txt`:
   ```sh
   pip install -r requirements.txt
   ```

3. **Update Database Credentials:**
   The project connects to a local MySQL instance using environment variables. You must set the database credentials by setting the following environment variables (`DB_PASSWORD` is required):
   - `DB_USER` (default: 'root')
   - `DB_PASSWORD` (required)
   - `DB_HOST` (default: 'localhost')
   - `DB_PORT` (default: 3306)

   Example for setting environment variables on Linux/macOS:
   ```sh
   export DB_USER='root'
   export DB_PASSWORD='your_password'
   export DB_HOST='localhost'
   export DB_PORT='3306'
   ```

## Usage

You can use the new interactive CLI to run all database operations:

```sh
python main.py
```

This will launch a text-based menu that allows you to easily perform all operations without manually running scripts or editing the code.

```text
--- Employee Database Management ---
1. Create Database
2. Create Table
3. Insert Employee
4. Update Employee Salary
5. Delete Employee
6. Search Employee
7. List All Employees
8. Exit
```

### Alternatively, run individual scripts:

1. **Create the Database and Table**
   Run the following script to create the `krishna_db` database and the `employees` table:
   ```sh
   python create_db_table.py
   ```

2. **Basic Connection Test**
   Run the basic connection script to ensure that you can connect to the database server:
   ```sh
   python db_connect.py
   ```

3. **Perform Database Operations**
   The project includes scripts to insert and manage records:
   - Insert an employee using the basic insertion script:
     ```sh
     python insert_into_employee.py
     ```
   - Use the comprehensive operations script which provides functions to insert, update, delete, search, and list employees:
     ```sh
     python db_operations.py
     ```
