/* 

# Variáveis 
    - Nomes simbólicos para algum valor
    - atalhos de código 
    - identificadores
    - 3 tipos de variáveis
        - var
        - let
        - const - valor constante que não pode ser alterado

*/

    var clima = "Quente"
    clima = true

    console.log(clima)


/* 

O JavaScript é uma linguagem fracamente tipada e dinâmica, ou seja, ao declarar uma variável não é necessário estabelecer um tipo específico e o tipo do valor da variável pode mudar conforme o código.

*/

    console.log(typeof clima)

/* 


#Scope 
    Escopo determina a visibilidade de uma variável em um código


## Block Statement
    É o código presente dentro de chaves

*/

    {
        let x = 0
        console.log(x)
    }

/* 

## var
    O escopo do var é global e também local, ou seja, uma variável declarada com var poderá ser usada em todo o código (hoisting:, o js joga a var para cima, mas não define um valor).

*/

    // var x
    console.log('> existe x antes do bloco? ', x)

    {
        var x = 0 
    }

    console.log('> existe x depois do bloco? ', x)

/*

## let e const

Diferentemente de var, const e let são variáveis com escopo local, ou seja, só são visíveis no escopo onde foram criadas e em escopos interiores ao de criação. Em uma variável let, porém, pode-se alterar o valor em um escopo e o valor irá persistir no escopo de criação.

*/

    // console.log('> existe y antes do bloco? ', y)

    {
        let y = 0 
        console.log('> existe y? ', y)

    }

    // console.log('> existe y depois do bloco? ', y)


/* 


## Nomeando variáveis
    - JavaScript é case-sensitive (sensível à letras maiúsculas e minúsculas)
    - aceita a cadeia de caracteres Unicode, podendo receber acentuações. 
    
    * Posso:
        * Iniciar com caracteres especiais: $ _
        * iniciar com letras
        * colocar acentos
        * letras maiúsculas e minúsculas fazem a diferença. 

    * Não posso:
        * Iniciar com números
        * colocar espaços vazios
    
    * Ideal:
        * Colocar nomes significativos, que fazem sentido na aplicação
        * que explique o que a variável é ou faz
        * camel case - "chefIfName"
        * snake_case - "chef_if_name"
        * escrever em inglês
*/