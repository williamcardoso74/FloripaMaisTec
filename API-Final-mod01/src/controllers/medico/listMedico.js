const Medico = require("../../models/medico");

async function listMedico(request, response) {
  try {
    const filtro = request.query;

    if (!filtro.status) {
      const listStatus = await Medico.findAll();
      return response.status(200).json(listStatus);
    } else {
      if (["ATIVO", "INATIVO"].includes(filtro.status)) {
        const listStatus = await Medico.findAll({
          where: { estado_no_sistema: filtro.status },
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

module.exports = listMedico;
