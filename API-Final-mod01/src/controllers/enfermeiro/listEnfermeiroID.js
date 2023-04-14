const Enfermeiro = require("../../models/enfermeiro");

async function listEnfermeiroID(request, response) {
  try {
    const enfermeiroId = request.params.id;
    const enfermeiro = await Enfermeiro.findByPk(enfermeiroId);

    if (enfermeiro) {
      return response.status(200).json(enfermeiro);
    } else {
      return response
        .status(404)
        .json({ message: "Não existe enfermeiro com este ID!" });
    }
  } catch (error) {
    response
      .status(400)
      .json({ message: "Não foi possivel atender sua solicitação!" });
  }
}

module.exports = listEnfermeiroID;
