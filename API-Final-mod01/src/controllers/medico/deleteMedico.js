const Medico = require("../../models/medico");

async function deleteMedico(request, response) {
  try {
    const medicoId = request.params.id;
    const medico = await Medico.findByPk(medicoId);

    if (!medico) {
      return response
        .status(404)
        .json({ message: "Não existe médico com este ID" });
    }

    await Medico.destroy({
      where: { id: medicoId },
    });

    response.status(204)
    //.json({ messagem: `Medico foi deletado com sucesso!` });
  } catch (error) {
    response
      .status(400)
      .json({ message: "Não foi possivel atender sua solicitação!" });
  }
}

module.exports = deleteMedico;
