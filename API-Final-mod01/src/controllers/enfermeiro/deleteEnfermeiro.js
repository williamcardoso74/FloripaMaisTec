const Enfermeiro = require("../../models/enfermeiro");

async function deleteEnfermeiro(request, response) {

  try {
    const enfermeiroId = request.params.id;
    const enfermeiro = await Enfermeiro.findByPk(enfermeiroId);

    if (!enfermeiro) {
      return response
        .status(404)
        .json({ message: "Não existe enfermeiro com este ID" });
    }

    await Enfermeiro.destroy({
      where: { id: enfermeiroId },
    });

    response.status(204)
    //.json({ messagem: "Enfermeiro foi deletado com sucesso!" });

  } catch (error) {
    response
      .status(400)
      .json({ message: "Não foi possivel atender sua solicitação!" });
  }
}

module.exports = deleteEnfermeiro;
