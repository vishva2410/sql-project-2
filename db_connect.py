import pymysql

connection = pymysql.connect(user = 'root', password = 'SriKrishn@04', port=3306, charset='utf8', host='localhost')

print('DB connected')

connection.close()
print('DB disconnected')