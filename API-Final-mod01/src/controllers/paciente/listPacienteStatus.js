const Paciente = require("../../models/paciente");

async function listPacienteStatus(request, response) {
  try {
    const status = request.query.status;

    switch (status) {
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

    if (status) {
      const listStatus = await Paciente.findAll({
        where: { statusAtendimento: status },
      });
      return response.status(200).json(listStatus);
    } else {
      const listStatus = await Paciente.findAll();
      return response.status(200).json(listStatus);
    };

  } catch (error) {
    response
      .status(400)
      .json({ message: "Não foi possivel atender sua solicitação!" });
  };
};

module.exports = listPacienteStatus;
