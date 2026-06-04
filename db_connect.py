import pymysql

connection = pymysql.connect(user = 'root', password = 'mellogang@123', port=3306, database='mydb', charset='utf8', host='localhost')

print('DB connected')

connection.close()
print('DB disconnected')