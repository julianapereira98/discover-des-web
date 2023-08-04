/* Strings - cadeia de caracteres

"" - aspas duplas
'' - aspas simples
`` - template literals ou template strings. Interpolação: permite inserir expressões dentro de template literals

*/

console.log('Juliana')
console.log("Juli'ana")
console.log(`Juliana ${1+1}`)


/* Number - identificados de números

33 - inteiros
12.5 - reais ou float
Nan - Not a Number
Infinity - infinito

*/

console.log(-33)
console.log(12.5 + 12)
console.log(12.5 / "asdf")
console.log(Infinity)

/* Boolean 

true - verdadeiro
false - falso

*/

console.log(true)
console.log(false)

/* Undefined vs null

Undefined - representa valores indefinidos
null - considerado como um objeto vazio

Ou seja, algo indefinido não existe, já algo null existe mas não tem valor algum.

*/

console.log(null)
console.log(undefined)
console.log(undefined === null)

/* Object

Propriedades - atributos
Funcionalidades - métodos

{ propriedade: "valor"}

*/

console.log({
        name: "Juliana",
        idade: 25,
})


/* Array (vetores)

    - uma lista
    - agrupamento de dados

    ["Juliana", 25]

*/

console.log([
    "Leite",
    "Ovos",
    2])

/* Conforme o ECMAScript Standard (o padrão do orgão que padroniza o JavaScript) temos 9 tipos de dados:

* Data types
    * Primitive, Primitive Value
    * Structural
    * Structural Primitive

# Primitivos: 
    - String
    - Number
    - Boolean
    - Undefined
    - Symbol
    - BigInt
    
# Estruturais:
    - Object
        - Array
        - Map
        - Set
        - Date
    - Function
    
# Primitivo estrutural
    - null

*/