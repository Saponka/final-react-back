const User = require('../models/register');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');

class LoginController {
    constructor(){}

     async findOne(req,res) {

        await User.findOne({ email: req.body.email })//busco en la coleccion user
        .then((user) => {//user es  el result de la primera promesa
         bcryptjs.compare(req.body.password, user.password) //=> passwordCheck
          .then((passwordCheck) => {
            // if passwords match
            if(!passwordCheck) {  
              return res.status(400).send({
                message: "Passwords does not match",
                error,
              });
            } 
            //JWT token
            const token = jwt.sign(
              {
                userId: user._id,
                userEmail: user.email,
              },
              "RANDOM-TOKEN",
              { expiresIn: "24h"}
            );
             res.status(200).send({
              message: "Login Successful",
              email: user.email,
              token,
            });
          })
          .catch((error) => {
            res.status(400).json({
              message: "Passwords does not match",
              error,
            });
          });
         
      })
      .catch((e) => {
        res.status(404).send({
          message: "Email not found",
          e,
        });
      });
      
    } 
   
};
module.exports = new LoginController();

