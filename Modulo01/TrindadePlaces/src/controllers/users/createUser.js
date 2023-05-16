const User = require('../../models/user');
const bcrypt = require('bcrypt')

async function createUsers (req, res) {
    try {
        const userInDatabase = await User.findOne({
          where: { username: req.body.username },
        });
    
        if (userInDatabase) {
          return res.status(403).json({ message: "Este usuário já existe" });
        }
    
        const hash = await bcrypt.hash(req.body.password, 10)
    
        const newUser = {
          name: req.body.name,
          email: req.body.email,
          username: req.body.username,
          password: hash,
        };
    
        const user = await User.create(newUser);
        res.status(201).json({ user });
    
      } catch (error) {
        res.json({ message: "Não foi possível atender sua solicitação!" });
      }
};

module.exports = createUsers;