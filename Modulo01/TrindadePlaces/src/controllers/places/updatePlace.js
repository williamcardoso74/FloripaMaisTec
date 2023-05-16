const Place = require('../../models/place');

async function updatePlaces (req, res) {
    try {
        const idTest = req.params.id;
    
        const { name, telefone, opening_hours, description, latitude, longitude } =
          req.body;
    
        const idExists = await Place.findByPk(idTest);
    
        if (idExists) {
          const updated = await Place.findByPk(idTest);
    
          (updated.name = name),
            (updated.telefone = telefone),
            (updated.opening_hours = opening_hours),
            (updated.description = description),
            (updated.latitude = latitude),
            (updated.longitude = longitude);
    
          const placeUpdated = await updated.save();
    
          return res.status(200).json({ message: `Place foi atualizado!` });
        } else {
          return res
            .status(400)
            .json({ message: "Este id não existe! Tente outro!" });
        }
      } catch (error) {
        res.status(400).json({ message: "Sua solicitação não pode ser atendida!" });
      }
};

module.exports = updatePlaces;