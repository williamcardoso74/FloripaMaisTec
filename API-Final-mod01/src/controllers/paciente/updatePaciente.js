const Paciente = require("../../models/paciente");

async function updatePaciente(request, response) {
  try {
    const pacienteInTable = await Paciente.findByPk(request.params.id);

    if (!pacienteInTable) {
      return response
        .status(404)
        .json({ message: "Não existe paciente com este ID, tente outro!" });
    }

    const pacienteInBody = {
      nomeCompleto: request.body.nomeCompleto,
      genero: request.body.genero,
      dataNascimento: request.body.dataNascimento,
      cpf: request.body.cpf,
      telefone: request.body.telefone,
      contatoEmergencia: request.body.contatoEmergencia,
      listaAlergias: request.body.listaAlergias,
      listaCuidados: request.body.listaCuidados,
      convenio: request.body.convenio,
    };

    if (!pacienteInBody.nomeCompleto) {
      return response
        .status(400)
        .json({ message: "É preciso informar o nome completo" });
    };

    if (!pacienteInBody.dataNascimento) {
      return response
        .status(400)
        .json({ message: "É preciso informar a data de nascimento!" });
    };

    if (!pacienteInBody.cpf) {
      return response
        .status(400)
        .json({ message: "É preciso informar o CPF!" });
    };

    if (!pacienteInBody.contatoEmergencia) {
      return response
        .status(400)
        .json({ message: "É preciso informar o Contato de Emergência!" });
    };

    switch (pacienteInBody.statusAtendimento) {
      case "AGUARDANDO_ATENDIMENTO":
        break;
      case "EM_ATENDIMENTO":
        break;
      case "ATENDIDO":
        break;
      case "NAO_ATENDIDO":
        break;
      default:
        return response
          .status(400)
          .json({ message: "É preciso informar o status de paciente correto" });
    };

    /* const cpfInTable = await Paciente.findOne({
      where: { cpf: pacienteInBody.cpf }
    }); */

    /* if (cpfInTable.id != pacienteInTable.id) {
      return response.status(400).json({ message: "Já existe outro paciente com este CPF" });
    }; */

    pacienteInTable.nomeCompleto = pacienteInBody.nomeCompleto;
    pacienteInTable.genero = pacienteInBody.genero;
    pacienteInTable.dataNascimento = pacienteInBody.dataNascimento;
    pacienteInTable.cpf = pacienteInBody.body.cpf;
    pacienteInTable.telefone = pacienteInBody.body.telefone;
    pacienteInTable.contatoEmergencia = pacienteInBody.contatoEmergencia;
    pacienteInTable.listaAlergias = pacienteInBody.listaAlergias;
    pacienteInTable.listaCuidados = pacienteInBody.listaCuidados;
    pacienteInTable.convenio = pacienteInBody.convenio;

    await pacienteInTable.save(); // UPDATE

    response.status(200).json(pacienteInTable);
    //response.status(200).json({ message: "Usuário Atualizado " });
  } catch (error) {
    response
      .status(400)
      .json({ message: "Não foi possivel atender sua solicitação!" });
  }
};

module.exports = updatePaciente;
