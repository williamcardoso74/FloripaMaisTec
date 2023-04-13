const Paciente = require("../../models/paciente");

async function listPacienteId(request, response) {
  try {
    const pacienteId = request.params.id;
    const paciente = await Paciente.findByPk(pacienteId);

    if (paciente) {
      return response.status(200).json(paciente);
    } else {
      return response
        .status(404)
        .json({ message: "Paciente com este ID não existe!" });
    }
  } catch (error) {
    response
    .status(400)
    .json({ message: "Não foi possivel atender sua solicitação!" });
  };
};

module.exports = listPacienteId;
