const Paciente = require("../../models/paciente");

async function createPaciente(request, response) {
  try {
    const paciente = {
      nomeCompleto: request.body.nomeCompleto,
      genero: request.body.genero,
      dataNascimento: request.body.dataNascimento,
      cpf: request.body.cpf,
      telefone: request.body.telefone,
      contatoEmergencia: request.body.contatoEmergencia,
      listaAlergias: request.body.listaAlergias,
      listaCuidados: request.body.listaCuidados,
      convenio: request.body.convenio,
      statusAtendimento: request.body.statusAtendimento,
    };

    if (!paciente.nomeCompleto) {
      return response
        .status(400)
        .json({ message: "É preciso informar o nome completo" });
    }

    if (!paciente.dataNascimento) {
      return response
        .status(400)
        .json({ message: "É preciso informar a data de nascimento!" });
    }

    if (!paciente.cpf) {
      return response
        .status(400)
        .json({ message: "É preciso informar o CPF!" });
    }

    if (!paciente.contatoEmergencia) {
      return response
        .status(400)
        .json({ message: "É preciso informar o Contato de Emergência!" });
    }

    switch (paciente.statusAtendimento) {
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
          .status(404)
          .json({ message: "Este status de paciente não existe!" });
    };

    const findPaciente = await Paciente.findOne({
      where: { cpf: paciente.cpf },
    });

    if (findPaciente) {
      return response.status(409).json({ message: "Paciente já cadastrado!" });
    }

    const newPaciente = await Paciente.create(paciente);

    response
      .status(201)
      //.json({message: 'Paciente cadastrado com sucesso'})
      .json(newPaciente);
      
  } catch (error) {
    response
      .status(400)
      .json({ message: "Não foi possivel atender sua solicitação!" });
  }
}

module.exports = createPaciente;
