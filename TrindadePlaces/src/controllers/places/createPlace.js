const Place = require('../../models/place');

async function createPlaces(req, res) {

    try {
        const place = {
          name: req.body.name,
          telefone: req.body.telefone,
          opening_hours: req.body.opening_hours,
          description: req.body.description,
          latitude: req.body.latitude,
          longitude: req.body.longitude,
        };
    
        const findPlace = await Place.findOne({
          where: { name: place.name },
        });
    
        if (findPlace) {
          res.status(400).json({ message: "Lugar já cadastrado" });
        } else {
          const newPlace = await Place.create(place);
        }
    
        res.json(place);
      } catch (error) {
        res
          .status(500)
          .json({ message: "Não conseguimos processar a sua solicitação" });
      }
};

module.exports = createPlaces;