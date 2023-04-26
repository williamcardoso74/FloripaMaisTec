const Atendimento = require("../../models/atendimento");
const Paciente = require("../../models/paciente");
const Medico = require("../../models/medico");

async function atendimento(request, response) {
  try {
    const paramsInBody = request.body;

    if (!paramsInBody.data_atendimento) {
      return response
        .status(400)
        .json({ message: "É preciso informar a data do atendimento" });
    }

    if (!paramsInBody.id_paciente) {
      return response.status(400).json({ message: "Falta o ID do Paciente" });
    }

    if (!paramsInBody.id_medico) {
      return response.status(400).json({ message: "Falta o ID do Médico" });
    }

    const findPaciente = await Paciente.findByPk(paramsInBody.id_paciente);
    if (!findPaciente) {
      return response
        .status(404)
        .json({ message: "Este paciente não existe no Cadastro" });
    }

    const findMedico = await Medico.findByPk(paramsInBody.id_medico);
    if (!findMedico) {
      return response
        .status(404)
        .json({ message: "Este médico não existe no Cadastro" });
    }

    const newAtendimento = paramsInBody;
    await Atendimento.create(newAtendimento);

    findPaciente.atendimentos++;
    findPaciente.statusAtendimento = "ATENDIDO";
    await findPaciente.save();

    findMedico.atendimentos_realizados++;
    await findMedico.save();

    const resposta = `Medico ${findMedico.nome_completo} atendeu o paciente ${findPaciente.nomeCompleto} no dia ${paramsInBody.data_atendimento}`;
    response.status(200).json({...newAtendimento,resposta});
    
  } catch (error) {
    response
      .status(400)
      .json({ message: "Não foi possivel atender sua solicitação!" });
  }
}

module.exports = atendimento;
