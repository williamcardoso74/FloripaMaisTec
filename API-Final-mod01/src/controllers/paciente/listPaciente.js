const Paciente = require("../../models/paciente");

async function listPaciente(request, response) {
  try {
    const filtro = request.query;

    if (!filtro.status) {
      const listStatus = await Paciente.findAll();
      return response.status(200).json(listStatus);
    } else {
      if (
        [
          "AGUARDANDO_ATENDIMENTO",
          "EM_ATENDIMENTO",
          "ATENDIDO",
          "NAO_ATENDIDO",
        ].includes(filtro.status)
      ) {
        const listStatus = await Paciente.findAll({
          where: { statusAtendimento: filtro.status },
        });
        return response.status(200).json(listStatus);
      } else {
        return response
          .status(404)
          .json({ message: "Este status de paciente não existe!" });
      }
    }
    
  } catch (error) {
    response
      .status(400)
      .json({ message: "Não foi possivel atender sua solicitação!" });
  }
}

module.exports = listPaciente;
