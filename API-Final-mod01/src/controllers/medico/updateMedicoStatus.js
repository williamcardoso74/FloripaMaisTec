const Medico = require("../../models/medico");

async function updateMedicoStatus(request, response) {
  try {
    const filtroMedico = request.params;

    const statusInBody = request.body.estado_no_sistema;

    const findMedico = await Medico.findByPk(filtroMedico.id);

    if (!findMedico) {
      return response
        .status(404)
        .json({ message: "Não existe médico com este ID" });
    }

    if (!["ATIVO", "INATIVO"].includes(statusInBody)) {
      return responsestatus(404).json({
        message: "Status Inválido. Utilize: ATIVO ou INATIVO",
      });
    } else {
      findMedico.estado_no_sistema = statusInBody;
      await findMedico.save();

      const resposta = {
        nome_completo: findMedico.nome_completo,
        estado_no_sistema: findMedico.estado_no_sistema
      };

      return response.status(200).json(resposta);
    }
  } catch (error) {
    response.status(400).json({
      message:
        "Não foi possivel atender sua solicitação de Atualização de Status!",
    });
  }
}

module.exports = updateMedicoStatus;
