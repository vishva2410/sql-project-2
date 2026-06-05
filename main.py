import sys
import db_operations as dbo

def main():
    while True:
        print("\n--- Employee Database Management ---")
        print("1. Create Database")
        print("2. Create Table")
        print("3. Insert Employee")
        print("4. Update Employee Salary")
        print("5. Delete Employee")
        print("6. Search Employee")
        print("7. List All Employees")
        print("8. Exit")

        choice = input("Enter your choice (1-8): ")

        if choice == '1':
            dbo.create_db()
        elif choice == '2':
            dbo.create_table()
        elif choice == '3':
            dbo.insert_employee()
        elif choice == '4':
            dbo.update_employee()
        elif choice == '5':
            dbo.delete_employee()
        elif choice == '6':
            dbo.search_employee()
        elif choice == '7':
            dbo.list_employees()
        elif choice == '8':
            print("Exiting...")
            sys.exit(0)
        else:
            print("Invalid choice, please try again.")

if __name__ == "__main__":
    main()
