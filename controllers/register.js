const User = require('../models/register');
const bcryptjs = require('bcryptjs');

class UserController {
    constructor(){}
    async create(req,res) {
      await bcryptjs.hash(req.body.password, 10)
     .then((hashedPassword) => {
      //create a new user instance and collect the data
      const user =  new User({
        user: req.body.user,
        email: req.body.email,
        password: hashedPassword,
      });
       //save the new user
      user.save().then((result) => { //return success if the new user is added to the database successfully
          res.status(201).send({
            message: "User Creado",
            result,
          });
        }).catch((error) => { // catch error if the new user wasn't added successfully to the database
          res.status(500).send({
            message: "Error creando User",
            error,
          });
        });
    })
    .catch((e) => { //catch error if the password hash isn't successful
      res.status(500).send({
        message: "Password no hasheado",
        e,
       });
      });
    };

    async findAll() {
      try {
          return await User.find().lean();
      } catch (error) {
          throw error;
      }
  }
     
};
module.exports = new UserController();
