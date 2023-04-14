const Paciente = require("../../models/paciente");

async function updateStatusPaciente(request, response) {
  try {
    const pacienteParams = request.params;

    const pacienteInTable = await Paciente.findByPk(pacienteParams.id);

    if (!pacienteInTable) {
      return response.status(404).json({
        message: "Este ID não corresponde a um paciente. Tente outro!",
      });
    };

    if (["AGUARDANDO_ATENDIMENTO","EM_ATENDIMENTO","ATENDIDO","NAO_ATENDIDO"].includes(pacienteParams.status)) {
      
      pacienteInTable.statusAtendimento = pacienteParams.status;
      await pacienteInTable.save();

      return response.status(200).json(pacienteInTable);

    } else {
      response.status(404).json({
        message: "Status de Paciente Invalido!",
      });
    };

    /* if (
      pacienteParams.status === "AGUARDANDO_ATENDIMENTO" ||
      pacienteParams.status === "EM_ATENDIMENTO" ||
      pacienteParams.status === "ATENDIDO" ||
      pacienteParams.status === "NAO_ATENDIDO"
    ) {
      pacienteInTable.statusAtendimento = pacienteParams.status;
      await pacienteInTable.save();
    } else {
      response.status(404).json({
        message: "Status de Paciente Invalido!",
      });
    }; */

    //response.status(200).json(pacienteInTable);

  } catch (error) {
    response.status(400).json({
      message:
        "Não foi possivel atender sua solicitação de Atualização de Status!",
    });
  }
}

module.exports = updateStatusPaciente;
