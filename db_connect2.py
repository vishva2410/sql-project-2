import pymysql

def db_connect(db_name='krishna_db'):
    connection = None
    try :
        if db_name:
            connection = pymysql.connect(user = 'root', password = 'SriKrishn@04', port=3306, database=db_name, charset='utf8', host='localhost')
        else:
            connection = pymysql.connect(user = 'root', password = 'SriKrishn@04', port=3306, charset='utf8', host='localhost')
        print('DB connected')
    except Exception as e:
        print('DB connection failed', e)
    return connection
    
def db_disconnect(connection):
    try:
        connection.close()
        print('DB disconnected')
    except:
        print('DB disconnection failed')

