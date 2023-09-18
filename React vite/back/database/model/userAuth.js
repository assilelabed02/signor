const connection = require('../connection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// const db = require('../database/index');

const secretKey = "swdfjxkn653ws"

const createUser = ({name = '', email = '',password = ''}) => {

  return new Promise(async (resolve, reject) => {
    try {
      const hashedPassword = await bcrypt.hash(password, 10); 
      connection.query('INSERT INTO user (name,email,password) VALUES (?, ?, ?)', [name,email,hashedPassword], (err, result) => {
        if (err) {
          reject(err);
        } else {
          const token = jwt.sign({ userId: result.insertId }, secretKey, {
            expiresIn: '48h', 
          });
          resolve({ userId: result.insertId, token });
        }
      });
    } catch (error) {
        console.log(error);
      reject(error);
    }
  });
};

const confirmCreation = (req, res) => {
    const { email, password } = req.body;
  
    connection.query(
      "SELECT * FROM user WHERE email = ?",
      [email],
      (err, results) => {
        if (err) {
          return res.status(500).json({ success: false, message: "Database error" });
        }
  
        if (results.length === 0) {
          return res.status(401).json({ success: false, message: "Invalid email" });
        }
  
        const user = results[0];
  
        bcrypt.compare(password, user.password, (bcryptErr, passwordMatch) => {
          if (bcryptErr) {
            return res.status(500).json({ success: false, message: "Error comparing passwords" });
          }
  
          if (!passwordMatch) {
            return res.status(401).json({ success: false, message: "Invalid password" });
          }
  
          const token = jwt.sign(
            { userId: user.id, email: user.email },
            secretKey,
            { expiresIn: "24h" }
          );
  
          res.status(200).json({
            success: true,
            data: {
              name:user.name,
              userId: user.id,
              email: user.email,
              token: token,
            },
          });
        });
      }
    );
  };

  
 
module.exports.confirmCreation = confirmCreation
module.exports.createUser = createUser
