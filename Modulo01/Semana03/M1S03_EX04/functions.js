console.log("Hello World!")


let dataAniv = document.getElementById("data");
let clicarAniv = document.getElementById("clicar");


function clicou () {

    setInterval(() => {
    
    const d1 = new Date();
    const d2 = dataAniv.value;
    

    const diffInMs = new Date (d2) - new Date(d1);
    const diffInDays = diffInMs / (1000*60*60*24);


    if ( diffInDays < 0 && diffInDays > -1) {

        console.log('Parabéns pelo seu aniversário!');

    } else if (diffInDays < -1 ) {

        console.log('Seu aniversário já passou! Só ano que vem!')

    } else {

        console.log('Faltam ' + Math.ceil(diffInDays) + ' dias o para seu aniversário');

    };
    }, 1000 * 3);

};
