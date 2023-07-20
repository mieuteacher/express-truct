import mysql from 'mysql'


const mySqlDB = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'expressdb'
});
 

module.exports = {
    mysqlDBConnect: function() {
        try {
            mySqlDB.connect((err) => {
                if(err) {
                    console.log("Kết nối database thất bại do lỗi mysql", err)
                }else {
                    console.log("Kết nối mysql thành công!")
                }
            })
        }catch(err) {
            console.log('Kết nối mysql database thất bại do lỗi code: ', err)
        }
    },
    mySqlDB
}