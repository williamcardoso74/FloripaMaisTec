const Enfermeiro = require('../../models/enfermeiro');

async function updateEnfermeiro (request, response) {

    try {
        const enfermeiroInTable = await Enfermeiro.findByPk(request.params.id);
    
        if (!enfermeiroInTable) {
          return response
            .status(404)
            .json({ message: "Não existe Enfermeiro com este ID, tente outro!" });
        };
    
        const enfermeiroInBody = {
            nome_completo : request.body.nome_completo,
            genero: request.body.gnero,
            data_nascimento: request.body.data_nascimento,
            cpf: request.body.cpf,
            telefone: request.body.telefone,
            instituicao_ensino_formacao : request.body.instituicao_ensino_formacao,
            cadastro_cofen_uf: request.body.cadastro_cofen_uf
        };
    
        if (!enfermeiroInBody.nome_completo) {
            return response
              .status(400)
              .json({ message: "É preciso informar o nome completo do Enfermeiro" });
          };
      
          if (!enfermeiroInBody.data_nascimento) {
            return response
              .status(400)
              .json({ message: "É preciso informar a data de nascimento!" });
          };
      
          if (!enfermeiroInBody.cpf) {
            return response
              .status(400)
              .json({ message: "É preciso informar o CPF!" });
          };
      
          if (!enfermeiroInBody.instituicao_ensino_formacao) {
            return response
              .status(400)
              .json({ message: "É preciso informar a instituição de ensino da formação" });
          };
      
          if (!enfermeiroInBody.cadastro_cofen_uf) {
            return response
              .status(400)
              .json({ message: "É preciso informar o COFEN/UF do Enfermeiro" });
          };
                          
          enfermeiroInTable.nome_completo = enfermeiroInBody.nome_completo;
          enfermeiroInTable.genero = enfermeiroInBody.genero;
          enfermeiroInTable.data_nascimento = enfermeiroInBody.data_nascimento;
          enfermeiroInTable.cpf = enfermeiroInBody.cpf;
          enfermeiroInTable.telefone = enfermeiroInBody.telefone;
          enfermeiroInTable.instituicao_ensino_formacao = enfermeiroInBody.instituicao_ensino_formacao;
          enfermeiroInTable.cadastro_cofen_uf = enfermeiroInBody.cadastro_cofen_uf;
              
          await enfermeiroInTable.save();
          response.status(200).json(enfermeiroInTable);
    
      } catch (error) {
        response
          .status(400)
          .json({ message: "Não foi possivel atender sua solicitação!" });
          console.log(error);
      };

};

module.exports = updateEnfermeiro;