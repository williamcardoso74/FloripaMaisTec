const Medico = require("../../models/medico");

async function createMedico(request, response) {
  try {
    const medico = {
      nome_completo: request.body.nome_completo,
      genero: request.body.genero,
      data_nascimento: request.body.data_nascimento,
      cpf: request.body.cpf,
      telefone: request.body.telefone,
      instituicao_ensino_formacao: request.body.instituicao_ensino_formacao,
      cadastro_crm_uf: request.body.cadastro_crm_uf,
      especializacao_clinica: request.body.especializacao_clinica,
      estado_no_sistema: request.body.estado_no_sistema,
    };

    if (!medico.nome_completo) {
      return response
        .status(400)
        .json({ message: "É preciso informar o nome completo do médico" });
    }

    if (!medico.data_nascimento) {
      return response
        .status(400)
        .json({ message: "É preciso informar a data de nascimento!" });
    }

    if (!medico.cpf) {
      return response
        .status(409)
        .json({ message: "É preciso informar o CPF!" });
    }

    if (!medico.instituicao_ensino_formacao) {
      return response.status(400).json({
        message: "É preciso informar a instituição de Ensino da Formação",
      });
    }

    if (!medico.cadastro_crm_uf) {
      return response.status(400).json({
        message: "É preciso informar o CRM/UF do médico",
      });
    }

    switch (medico.especializacao_clinica) {
      case "CLINICO_GERAL":
        break;
      case "ANESTESISTA":
        break;
      case "DERMATOLOGIA":
        break;
      case "GINECOLOGIA":
        break;
      case "NEUROLOGIA":
        break;
      case "PEDIATRIA":
        break;
      case "PSIQUIATRIA":
        break;
      case "ORTOPEDIA":
        break;
      default:
        return response
          .status(404)
          .json({ message: "Esta especialização não existe!" });
    };

    switch (medico.estado_no_sistema) {
      case "ATIVO":
        break;
      case "INATIVO":
        break;
      default:
        return response
          .status(404)
          .json({ message: "Este status não existe!" });
    }

    const findMedico = await Medico.findOne({
      where: { cpf: medico.cpf },
    });

    if (findMedico) {
      return response.status(409).json({ message: "Médico já cadastrado!" });
    }

    const newMedico = await Medico.create(medico);

    response.status(201).json(newMedico);
  } catch (error) {
    response
      .status(400)
      .json({ message: "Não foi possivel atender sua solicitação!" });
  }
}

module.exports = createMedico;
