const Enfermeiro = require('../../models/enfermeiro');

async function listEnfermeiro (request, response) {
    try {
        
          const lista = await Enfermeiro.findAll();
          response.status(200).json(lista);
          
      } catch (error) {
        response
          .status(400)
          .json({ message: "Não foi possivel atender sua solicitação!" });
      }
};

module.exports = listEnfermeiro;