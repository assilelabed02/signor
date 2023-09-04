const mysql = require("mysql2")
const connection = mysql.createConnection({
    host : "localhost",
    user:"root",
    password: "root",
    database : "vite_schema"
})
module.exports = connection