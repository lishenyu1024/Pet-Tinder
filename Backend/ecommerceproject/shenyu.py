import sqlite3

# 替换这里的文件路径为你的SQLite数据库文件路径
db_file_path = 'db.sqlite3'

# 连接到SQLite数据库
conn = sqlite3.connect(db_file_path)

# 创建一个游标对象
cur = conn.cursor()

# 查询auth_user表的所有数据
cur.execute("SELECT * FROM auth_user")

# 获取查询结果
rows = cur.fetchall()

# 打印结果
for row in rows:
    print(row)
#
# # 查询auth_user表，但限制结果为0行，目的是获取列名
# cur.execute("SELECT * FROM auth_user LIMIT 0")
#
# # 获取所有列名
# # 每个列描述的第一个元素是列名
# columns = [description[0] for description in cur.description]
#
# # 打印列名

# 关闭数据库连接
conn.close()
