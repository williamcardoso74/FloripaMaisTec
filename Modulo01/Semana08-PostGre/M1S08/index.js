(async()=>{
    const database = require('./db');
    const Cadastro = require('./cadastro');
    await database.sync();

    // INSERINDO NOVOS REGISTROS NA TABELA "CADASTRO"

    const novoCadastro1 = await Cadastro.create({
        nome:'Jose da Siva',
        dt_nasc:'1999-08-08',
        telefone:'048999998888'
    });

    const novoCadastro2 = await Cadastro.create({
        nome:'Maria Jose',
        dt_nasc:'2000-09-09',
        telefone:'048999997777'
    });

    const novoCadastro3 = await Cadastro.create({
        nome:'João de Barro',
        dt_nasc:'1980-12-15',
        telefone:'048999996666'
    });

    // ATUALIZANDO REGISTROS NA TABELA "CADASTRO"

    let cad1 = await Cadastro.findByPk(1);
    cad1.nome = 'José Souza da Silva';
    await cad1.save(); // o save() atualiza a tabela

    let cad2 = await Cadastro.findByPk(2);
    cad2.nome = 'Maria José da Silva';
    await cad2.save(); // o save() atualiza a tabela

    let cad3 = await Cadastro.findByPk(3);
    cad3.nome = 'João de Barro da Silva';
    await cad3.save(); // o save() atualiza a tabela */


    // APAGA UM REGISTRO NA TABELA "CADASTRO"

    // para apagar o registro encontrado com o findByPk

    let apaga1 = await Cadastro.findByPk(3);
    await apaga1.destroy();

})();