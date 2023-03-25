(async()=>{
    const database=require('./db');
    const Equipamento=require('./equipamento');
    await database.sync();
    // ADICIONA UM NOVO REGISTRO A TABELA EQUIPAMENTOS

    /* const novoEquipamento = await Equipamento.create({
        nome:'Escada',
        preco:1500,
        descricao:'sobe e desce'
   })
 
   console.log(novoEquipamento); */
   
   //const equipamentos = await Equipamento.findAll();
   const equipamentos = await Equipamento.findByPk(2);
   console.log(equipamentos);

// ALTERA OS DADOS DE UM REGISTRO DA TABELA EQUIPAMENTOS
//equipamentos.descricao = 'fiz uma alteração';
//await equipamentos.save(); // o save() atualiza a tabela

// para apagar o registro encontrado com o findByPk
await equipamentos.destroy();

})();