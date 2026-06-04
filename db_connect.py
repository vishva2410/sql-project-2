import pymysql

def db_connect():
    try:
        connection = pymysql.connect(
            user='root', 
            password='mellogang@123', 
            host='localhost', 
            port=3306, 
            database='mydb', 
            charset='utf8'
        )
        print('Successfully connected to the database')
        return connection
    except Exception as e:
        print(f"Error connecting to MySQL: {e}")
        return None

def db_disconnect(connection):
    try:
        connection.close()
        print('Connection closed')
    except:
        print(f"Error while closing the connection: {e}")

connection = db_connect()

if connection:
    db_disconnect(connection)