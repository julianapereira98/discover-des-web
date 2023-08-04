// O JavaScript possui function hoisting, permitindo que uma função seja declarada depois de ser utilizada, 
// pois faz algo similar a elevar no código declarações de funções. Porém isso não acontece dentro de variáveis.

// function hoisting

sayMyName();

function sayMyName() {
    console.log('Juliana')
}

// const sayMyName = function() {
//     console.log('Juliana')
// }

