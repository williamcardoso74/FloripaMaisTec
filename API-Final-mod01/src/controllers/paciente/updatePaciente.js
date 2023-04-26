const Paciente = require("../../models/paciente");

async function updatePaciente (request, response) {
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
    
    if (pacienteInBody.dataNascimento === "") {
      return response
        .status(400)
        .json({ message: "É preciso informar a data de nascimento!" });
    }

    if (pacienteInBody.contatoEmergencia === "") {
      return response
        .status(400)
        .json({ message: "É preciso informar o Contato de Emergência!" });
    }



    pacienteInTable.nomeCompleto = pacienteInBody.nomeCompleto || pacienteInTable.nomeCompleto;
    pacienteInTable.genero = pacienteInBody.genero || pacienteInTable.genero;
    pacienteInTable.dataNascimento = pacienteInBody.dataNascimento || pacienteInTable.dataNascimento;
    pacienteInTable.cpf = pacienteInBody.cpf || pacienteInTable.cpf;
    pacienteInTable.telefone = pacienteInBody.telefone || pacienteInTable.telefone;
    pacienteInTable.contatoEmergencia = pacienteInBody.contatoEmergencia || pacienteInTable.contatoEmergencia;
    pacienteInTable.listaAlergias = pacienteInBody.listaAlergias || pacienteInTable.listaAlergias;
    pacienteInTable.listaCuidados = pacienteInBody.listaCuidados || pacienteInTable.listaCuidados;
    pacienteInTable.convenio = pacienteInBody.convenio || pacienteInTable.convenio;

    await pacienteInTable.save(); // UPDATE

    const resposta = {
      nomeCompleto: pacienteInTable.nomeCompleto,
      genero: pacienteInTable.genero,
      dataNascimento: pacienteInTable.dataNascimento,
      cpf: pacienteInTable.cpf,
      telefone: pacienteInTable.telefone,
      contatoEmergencia: pacienteInTable.contatoEmergencia,
      listaAlergias: pacienteInTable.listaAlergias,
      listaCuidados: pacienteInTable.listaCuidados,
      convenio: pacienteInTable.convenio
    };
    
    response.status(200).json(resposta);

  } catch (error) {
    response
    .status(400)
    .json({ message: "Não foi possivel atender sua solicitação!" });
  };

};

module.exports = updatePaciente;
