const Place = require('../../models/place');

async function listPlaces (req, res) {
    const places = await Place.findAll();
    res.status(200).json(places);
};

module.exports = listPlaces;