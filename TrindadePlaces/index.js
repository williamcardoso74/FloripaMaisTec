const express = require("express");
const connection = require("./src/database");
const Place = require("./src/models/place");

const app = express();

app.use(express.json());

connection.authenticate();
connection.sync();

const port = 3333;

app.listen(port, () => {
  console.log(`Servidor ${port} Trindade Places OnLine`);
});

// M1S09-EX03
app.post("/places", async (req, res) => {
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
});

// M1S09-EX04 - busca a lista de lugares
app.get("/places", async (req, res) => {
  const places = await Place.findAll();
  res.status(200).json(places);
});

// M1S09-EX05 - deleta um lugar

app.delete('/places/:id', async (req,res) => {

  try {
    
    const { idTest } = req.params.id;
    
    const idExists = await Place.findOne({
      where: { id : idTest }
    });

    if (!idTest) {
      return res.status(400).json({ message: "É preciso informar o ID" });
    };

    if (idExists) {
        await Place.destroy({
          where: { id: idTest },
          force: true,
        });
        return res
        .status(200)
        .json({ message: "Este id foi deletado!" });
    } else {
        return res
        .status(400)
        .json({ message: "Este id não existe! Tente outro!" });
    };
    

  } catch (error) {
    res.status(400).json({ message: "Sua solicitação não pode ser atendida!" });
  }
});


// EXERCÍCIO M1S09_EX06 - ROTA PUT

app.put('/places/:id', async (req,res) => {

  try {
    
    const idTest = req.params.id;
    
    /* if (!idTest) {
      return res.status(400).json({ message: "É preciso informar o ID" });
    }; */

    const {
      name,
      telefone,
      opening_hours,
      description,
      latitude,
      longitude
    } = req.body;

    const idExists = await Place.findByPk(idTest);

    if (idExists) {

      const updated = await Place.findByPk(idTest);

      updated.name = name,
      updated.telefone = telefone,
      updated.opening_hours = opening_hours,
      updated.description = description,
      updated.latitude = latitude,
      updated.longitude = longitude

      const placeUpdated = await updated.save();

      return res
      .status(200)
      .json({ message: `Place foi atualizado!` });

    } else {
        return res
        .status(400)
        .json({ message: "Este id não existe! Tente outro!" });
    };
    
  } catch (error) {
    res.status(400).json({ message: "Sua solicitação não pode ser atendida!" });
  };

});