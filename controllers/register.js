const User = require('../models/register');
const bcryptjs = require('bcryptjs');

class UserController {
    constructor(){}
    async create(req,res) {

        await bcryptjs.hash(req.body.password, 10)
     .then((hashedPassword) => {
      // create a new user instance and collect the data
      const user =  new User({
        user: req.body.user,
        email: req.body.email,
        password: hashedPassword,
      });

      // save the new user
      user.save()
        // return success if the new user is added to the database successfully
        .then((result) => {
          res.status(201).send({
            message: "User Creado",
            result,
          });
        })
        // catch error if the new user wasn't added successfully to the database
        .catch((error) => {
          res.status(500).send({
            message: "Error creando User",
            error,
          });
        });
    })
    // catch error if the password hash isn't successful
    .catch((e) => {
      res.status(500).send({
        message: "Password no hasheado",
        e,
      });
    });
    }
     
};
module.exports = new UserController();
