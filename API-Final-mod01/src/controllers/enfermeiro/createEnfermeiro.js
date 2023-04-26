const Enfermeiro = require("../../models/enfermeiro");

async function createEnfermeiro(request, response) {
  try {
    
    const enfermeiro = {
      nome_completo: request.body.nome_completo,
      genero: request.body.genero,
      data_nascimento: request.body.data_nascimento,
      cpf: request.body.cpf,
      telefone: request.body.telefone,
      instituicao_ensino_formacao: request.body.instituicao_ensino_formacao,
      cadastro_cofen_uf: request.body.cadastro_cofen_uf,
    };

    if (!enfermeiro.nome_completo) {
      return response
        .status(400)
        .json({ message: "É preciso informar o nome completo" });
    }

    if (!enfermeiro.data_nascimento) {
      return response
        .status(400)
        .json({ message: "É preciso informar a data de nascimento!" });
    }

    if (!enfermeiro.cpf) {
      return response
        .status(400)
        .json({ message: "É preciso informar o CPF!" });
    }

    if (!enfermeiro.instituicao_ensino_formacao) {
      return response.status(400).json({
        message: "É preciso informar a instituição de Ensino da Formação",
      });
    }

    if (!enfermeiro.cadastro_cofen_uf) {
      return response.status(400).json({
        message: "É preciso informar o COFEN/UF do enfermeiro",
      });
    }

    const findEnfermeiro = await Enfermeiro.findOne({
      where: { cpf: enfermeiro.cpf },
    });

    if (findEnfermeiro) {
      return response
        .status(409)
        .json({ message: "Já existe um enfermeiro com este CPF cadastrado!" });
    }

    const newEnfermeiro = await Enfermeiro.create(enfermeiro);

    response.status(201).json(newEnfermeiro);
  } catch (error) {
    response
      .status(400)
      .json({ message: "Não foi possivel atender sua solicitação!" });
  }
}

module.exports = createEnfermeiro;
