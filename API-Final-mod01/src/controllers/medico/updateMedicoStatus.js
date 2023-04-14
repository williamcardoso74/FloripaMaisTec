const Medico = require("../../models/medico");

async function updateMedicoStatus(request, response) {
  try {
    const filtroMedico = request.params;

    const findMedico = await Medico.findByPk(filtroMedico.id);

    if (!findMedico.id) {
      return response
        .status(404)
        .json({ message: "Não existe médico com este ID" });
    }

    if (!["ATIVO", "INATIVO"].includes(filtroMedico.status)) {
      return responsestatus(404).json({
        message: "Status Inválido. Utilize: ATIVO ou INATIVO",
      });
    } else {
      findMedico.estado_no_sistema = filtroMedico.status;
      await findMedico.save();

      return response.status(200).json(findMedico);
    }
  } catch (error) {
    response.status(400).json({
      message:
        "Não foi possivel atender sua solicitação de Atualização de Status!",
    });
  }
}

module.exports = updateMedicoStatus;
