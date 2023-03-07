//Retornar uma lista separada pelos usuários
// com idades menores de 18
// e outra com os usuários maiores ou iguais a 18.




function separarUser() {
    let users = [
        {nome: "luis", idade: 26},
        {nome: "norma", idade: 16},
        {nome: "daiana", idade: 26},
        {nome: "jorge", idade: 16},
        {nome: "kauan", idade: 16},
        {nome: "charles", idade: 26},
        {nome: "marco", idade: 16},
        {nome: "bruno", idade: 16}
    ];

    let menoresDe18 = users.filter(n => n.idade < 18);

    let maioresDe18 = users.filter(n => n.idade >= 18);

    console.log("Todas as idades: ");
    console.log(users);

    console.log("Menores de 18");
    console.log(menoresDe18);

    console.log("Maiores de 18");
    console.log(maioresDe18);

}

separarUser();