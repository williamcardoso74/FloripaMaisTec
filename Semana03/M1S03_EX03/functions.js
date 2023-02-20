console.log("Hello World")


let tarefas = [
    'cozinhar',
    'arrumar',
    'varrer',
    'limpar',
    'comprar',
    'passar',
    'lavar',
    'estender',
    'aspirar'
];

console.log('Lista de tarefas inicial: ' + tarefas);

buscar(tarefas);

alterar(tarefas);

remover(tarefas);

adicionar(tarefas);




function buscar (lista) {
    
    let findTemp = lista.find ((tarefa) => {
        return tarefa === 'cozinhar'
    });
    console.log('Função Buscar!');
    console.log('Tarefa '+ findTemp + ' encontrada!');

};


function alterar (lista) {

    let alteraTemp = lista.splice (2,1,'aspirar');
    console.log('Função Alterar!')
    console.log('Lista de Tarefas alterada: '+ lista);

};


function remover (lista) {
    let removerTemp = lista.pop();
    console.log('Última tarefa revomida!' + lista)
    
};


function adicionar (lista) {
    let adicionarTemp = lista.push('consertar');
    console.log('Tarefa adicionada!');
    console.log(lista);

};


