const Medico = require ('../../models/medico');

async function listMedicoID (request, response) {
    try {
        const medicoId = request.params.id;
        const medico = await Medico.findByPk(medicoId);
    
        if (medico) {
          return response.status(200).json(medico);
        } else {
          return response
            .status(404)
            .json({ message: "Não existe medico com este ID!" });
        }
      } catch (error) {
        response
        .status(400)
        .json({ message: "Não foi possivel atender sua solicitação!" });
      };

};

module.exports = listMedicoID;