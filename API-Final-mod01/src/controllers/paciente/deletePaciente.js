const Paciente = require("../../models/paciente");

async function deletePaciente(request, response) {
  try {
    const pacienteId = request.params.id;
    const paciente = await Paciente.findByPk(pacienteId);

    if (!paciente) {
      return response
        .status(404)
        .json({ message: "Não existe usuário com este ID" });
    };

    await Paciente.destroy({
        where: {id: pacienteId}
    });
    
    response
      .status(200)
      .json({ messagem: `Usuário foi deletado com sucesso!` });

  } catch (error) {
    response
    .status(400)
    .json({ message: "Não foi possivel atender sua solicitação!" });
  };
};

module.exports = deletePaciente;
