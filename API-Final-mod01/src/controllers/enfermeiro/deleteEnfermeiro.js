const Enfermeiro = require("../../models/enfermeiro");

async function deleteEnfermeiro(request, response) {

  try {
    const enfermeiroId = request.params.id;
    const enfermeiro = await Enfermeiro.findByPk(enfermeiroId);

    if (!enfermeiro) {
      return response
        .status(404)
        .json({ message: "Não existe enfermeiro com este Identificador" });
    }

    await Enfermeiro.destroy({
      where: { identificador: enfermeiroId },
    });

    //const resposta = `Enfermeiro(a) ${enfermeiro.nome_completo} com ID ${enfermeiro.identificador} foi deletadado com sucesso`
    
    response.status(204)
    //.json(resposta});

  } catch (error) {
    response
      .status(400)
      .json({ message: "Não foi possivel atender sua solicitação!" });
  }
}

module.exports = deleteEnfermeiro;
