const yup = require("yup");

const validation = yup.object().shape({
  username: yup.string("O nome deve ser uma string").required("Usuário é obrigatório"),
  password: yup
    .string()
    .min(8, "A senha deve ter no mínimo 8 caracteres")
    .required("Senha é obrigatória"),
});

function validateNewUser(req, res, next) {
  try {
    validation.validateSync(req.body)
    next()
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
};

module.exports = validateNewUser;