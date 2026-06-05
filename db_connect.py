import pymysql
import os

DB_USER = os.environ.get('DB_USER', 'root')
DB_PASSWORD = os.environ.get('DB_PASSWORD')
if DB_PASSWORD is None:
    raise ValueError("DB_PASSWORD environment variable is not set")
DB_HOST = os.environ.get('DB_HOST', 'localhost')
DB_PORT = int(os.environ.get('DB_PORT', 3306))

connection = pymysql.connect(user = DB_USER, password = DB_PASSWORD, port=DB_PORT, charset='utf8', host=DB_HOST)

print('DB connected')

connection.close()
print('DB disconnected')