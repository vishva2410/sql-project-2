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
   The project connects to a local MySQL instance using hardcoded credentials. Open `db_connect.py` and `db_connect2.py` and update the database credentials (like `user`, `password`, `port`, `host`) to match your local MySQL configuration.

   Example in `db_connect2.py`:
   ```python
   connection = pymysql.connect(user='root', password='your_password', port=3306, charset='utf8', host='localhost')
   ```

## Usage

Follow these steps to run the scripts in the correct order:

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
   - Use the comprehensive operations script which provides functions to insert, update, delete, search, and list employees (Note: You can uncomment the relevant function calls at the bottom of the script to test them):
     ```sh
     python db_operations.py
     ```
