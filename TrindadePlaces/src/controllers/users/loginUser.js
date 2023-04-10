const User = require('../../models/user');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

async function loginUser (req, res) {
    try {
    
        const userInDatabase = await User.findOne({
          where: {
            username: req.body.username
          }
        });
      
        //verifica CPF
        if (!userInDatabase) {
          return res.status(404).json({ message: "Nome de Usuário incorreto!" });
        };
      
        //compara as credenciais passadas pelo body com o da tabela
        const passwordIsValid = await bcrypt.compare(req.body.password, userInDatabase.password);
      
        if (!passwordIsValid) {
          res.status(404).json({ message: "Senha incorreta!" });
        };
      
        // cria um token de segurança
        const token = jwt.sign(
          {
            id: userInDatabase.id,
          },
          //'MINHA_CHAVE_SECRETA',
          process.env.CHAVE_DO_TOKEN,
          {
            expiresIn: "2h",
          }
        );
      
        res.json({
          username: userInDatabase.username,
          message: "Login realizado com sucesso!",
          token: token,
        });
      
      
      } catch (error) {
        res.json({message: "Não foi possível atender sua solicitação!"});
      }
};

module.exports = loginUser;