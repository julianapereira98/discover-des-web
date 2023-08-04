/* 
Prototype

O JavaScript possui uma característica chamada Prototype, que é uma série de funcionalidades e atributos que já existem nativamente em diversos tipos de dados, 
que são lidados como objetos. 

Para ver a lista de possibilidades, digite no console:

 "exemplo_string".__proto__

Pode ser utilizado nos seguintes tipos
* Integer
* Boolean
* String
* Array

*/

// -------------------------------------------------

/* Type conversion coersion

Type conversion se trata de uma conversão de tipo feita pelo dev, explicitamente, 
e pode ser feita de diversas maneiras, por exemplo com o método Number().

Já type coersion é uma mudança de tipos feita pelo próprio JavaScript, implicitamente, 
por exemplo quando você tenta somar um número na forma string com um número do tipo número.

*/

console.log('9' + 5) // ocorre concatenação, nesse caso utilizou type coersion

console.log(Number('9' + 5)) // ocorre a soma, nesse caso utilizou explicitamente type conversion

// -------------------------------------------------

/* Strings em números

É possível transformar números em formato de string através do método Number()
 e números em formato number em string usando o método String().

 */

 let string1 = "123"
 console.log(Number(string1))

 let number1 = 321
 console.log(String(number1))

// -------------------------------------------------

/* Contando caracteres e digitos

Para contar a quantidade de caracteres em uma string é possível usar o método length(), 
também é possível contar a quantidade de algarismos em um número transformando o número em string 
e usando o mesmo método.

*/

let word1 = "paralelepipedo"
console.log(word1.length)

// descobrindo quantos digitos de um número
let number2 = 1234
console.log(String(number2).length)

// -------------------------------------------------

/* Casas decimais

Para determinar uma quantia de casas decimais de um número pode-se usar o método toFixed() 
colocando como argumento quantas casas decimais o número terá. 
Para mudar a formatação do número de separado por ponto para separado por vírgula 
é possível usar o método replace(".", ","). O resultado final será do tipo string, 
e a conversão para o tipo número não será possível por que a vírgula não é considerada parte de um número.

*/

let number3 = 345.54542
console.log(number3.toFixed(2).replace(".",","))

// -------------------------------------------------

/* Maiúsculas e minúsculas

Para transformar uma string em letras maiúsculas pode-se usar o método toUpperCase(), 
e ao contrário, também é possível usar o toLowerCase() para transformar uma string em todas letras minúsculas.

*/

let word2 = "Programação"
console.log(word2.toUpperCase())

let word3 = "Programação"
console.log(word2.toLowerCase())

// -------------------------------------------------

/*
Separando strings

Para separar um texto por espaços, pode-se usar o método split(" "), 
que transforma o texto em um array de strings baseado no argumento, 
que no caso são os espaços. Para juntar esse array é possível usar o método join('"), 
que juntaria essas palavras sem nenhum separador, porém colocando um argumento, 
no caso um underscore ( join("_") ) as palavras são juntadas com o argumento de separador.

*/

let phrase = "Eu quero viver o amor"
let myarray = phrase.split(" ")
let phraseUnderscore = myarray.join("_")

console.log(phraseUnderscore)

// -------------------------------------------------

/* Encontrando palavras em frases

Para verificar se um texto possui uma palavra específica, podemos usar o método includes(), 
passando como argumento a palavra a ser verificada, que retorna um valor true se encontrar a palavra, 
e falso se não, lembrando sempre que o método é case sensitive.
*/

let phrase2 = "Eu quero viver o amor"
console.log(phrase2.includes("amor")) // case sensitive

// -------------------------------------------------

/* Criando array com construtor

Para criar um array com um método construtor, usa-se new Array(args), 
passando como argumento o tamanho deste vetor ou os valores, 
por exemplo: const array = new Array("a", "b", "c").

*/

let myarray2 = new Array('a','b','c')
console.log(myarray2)


// -------------------------------------------------

/*Elementos do Array

Para contar a quantidade de elementos em um array pode-se usar o método length.

*/

console.log([
    "a",
    {type: "array"},
    function() {return "hi!"}
].length)

// -------------------------------------------------

/*Strings para arrays

Para transformar uma string em um array, pode-se usar o objeto Array com o método from(), 
passando como argumento a string a ser transformada em array. 
Por exemplo console.log(Array.from("developer").

*/

let word4 = "manipulação"
console.log(Array.from(word4))

// -------------------------------------------------

/*
Manipulando arrays

Existem várias maneiras de manipular arrays, como: 
o método push(), que adiciona um elemento no final do array, 
o método unshift(), que adiciona um elemento no começo do array, 
o método pop(), que retira um elemento do final do array, 
o método shift(), que retira um elemento do começo do array, 
o método slice(), que recebe como argumentos a posição de início e a posição do fim da parte que você quer selecionar, e retorna os valores destas posições, 
o método splice(), que recebe como argumentos a posição de início e a quantidade de elementos que você quer remover 
e o método indexOf(), que encontra o index do valor que recebe como argumento em um array.

*/

let techs = ["html", "css", "js"]

techs.push("nodejs")
techs.unshift("sql")
techs.pop()
techs.shift()
console.log(techs.slice(1,2))
techs.splice(1,1)
let index = techs.indexOf("js")
console.log(index)
console.log(techs)