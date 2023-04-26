const Medico = require("../../models/medico");

async function updateMedico(request, response) {
  try {
    const medicoInTable = await Medico.findByPk(request.params.id);

    if (!medicoInTable) {
      return response
        .status(404)
        .json({ message: "Não existe Médico com este ID, tente outro!" });
    }

    const medicoInBody = {
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

    if (medicoInBody.data_nascimento === "") {
      return response
        .status(400)
        .json({ message: "É preciso informar a data de nascimento!" });
    }

    if (medicoInBody.instituicao_ensino_formacao === "") {
      return response.status(400).json({
        message: "É preciso informar a instituição de ensino da formação",
      });
    }

    if (medicoInBody.cadastro_crm_uf === "") {
      return response
        .status(400)
        .json({ message: "É preciso informar o CRM/UF do médico" });
    }

    if (!medicoInBody.especializacao_clinica){
      /// NÃO FAÇA NADA
    } else if (    
      !medicoInBody.especializacao_clinica === "" && 
      ![
        "CLINICO_GERAL",
        "ANESTESISTA",
        "DERMATOLOGIA",
        "GINECOLOGIA",
        "NEUROLOGIA",
        "PEDIATRIA",
        "PSIQUIATRIA",
        "ORTOPEDIA"
      ].includes(medicoInBody.especializacao_clinica)
    ) {
      return response
        .status(400)
        .json({ message: "É preciso informar a especialização correta" });
    }

    medicoInTable.nome_completo = medicoInBody.nome_completo || medicoInTable.nome_completo;
    medicoInTable.genero = medicoInBody.genero || medicoInTable.genero;
    medicoInTable.data_nascimento = medicoInBody.data_nascimento || medicoInTable.data_nascimento;
    medicoInTable.cpf = medicoInBody.cpf || medicoInTable.cpf;
    medicoInTable.telefone = medicoInBody.telefone || medicoInTable.telefone;
    medicoInTable.instituicao_ensino_formacao = medicoInBody.instituicao_ensino_formacao || medicoInTable.instituicao_ensino_formacao;
    medicoInTable.cadastro_crm_uf = medicoInBody.cadastro_crm_uf || medicoInTable.cadastro_crm_uf;
    medicoInTable.especializacao_clinica = medicoInBody.especializacao_clinica || medicoInTable.especializacao_clinica;
    medicoInTable.estado_no_sistema = medicoInBody.estado_no_sistema || medicoInTable.estado_no_sistema;

    await medicoInTable.save();
    response.status(200).json(medicoInTable);

  } catch (error) {

    response
      .status(400)
      .json({ message: "Não foi possivel atender sua solicitação!" });
    console.log(error);
  }
}

module.exports = updateMedico;
