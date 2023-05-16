const Place = require('../../models/place');

async function deletePlaces (req, res) {
    try {
        const { idTest } = req.params.id;
    
        const idExists = await Place.findOne({
          where: { id: idTest },
        });
    
        if (!idTest) {
          return res.status(400).json({ message: "É preciso informar o ID" });
        }
    
        if (idExists) {
          await Place.destroy({
            where: { id: idTest },
            force: true,
          });
          return res.status(200).json({ message: "Este id foi deletado!" });
        } else {
          return res
            .status(400)
            .json({ message: "Este id não existe! Tente outro!" });
        }
      } catch (error) {
        res.status(400).json({ message: "Sua solicitação não pode ser atendida!" });
      }
};

module.exports = deletePlaces;