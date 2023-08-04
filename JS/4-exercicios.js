// Variáveis e tipos de dados

    // declaração or declaration
    // var name

    // atribuição or assignment
    // name = "Juliana"

    // qual o tipo de dado
    // console.log(typeof name)

    // agrupamento de declarações
    // let age, isHuman
    
    // age = 25
    // isHuman = true 

    // multiplos argumentos na função
    // console.log(name, age, isHuman)

    // concatenando texto + variáveis
    // console.log('a ' + name + ' tem ' + age + ' anos')

    // interpolando valores com template literals
    // console.log(`${name} tem ${age} anos`)

// Obejcts

    // const person = {
    //     name: "John",
    //     age: 30,
    //     weight: 88.6,
    //     isAdmin: true
    // }

    // Acessando as propriedades do objeto
    // console.log(`${person.name} tem ${person.age} anos`)

// Array

    // const animals = [
    //     'Lion',
    //     'Monkey',
    //     {
    //         name:'Cat',
    //         age: 3}
    // ]

    // Acessando os valores dentro do Array
    // console.log(animals)
    // console.log(animals[2])
    // console.log(animals.length)


// Exercícios

// 1. Declare uma variável de nome weight
    // var weight

// 2. Qual o tipo de dados variável acima?
    // console.log(typeof weight)

// 3. Declare uma variável e atribua valores para cada um dos dados
    // let name = "João"
    // let idade = 22
    // let stars = 105.4
    // let isSubscribed = true

// 4. A variável student abaixo é de que tipo?
    let student = {}
    console.log(typeof student)

// 4.1 Atribua a ela as mesmas propriedades e valores do ex. 3
    student = {
        name: "Maria",
        age: 35,
        weight: 70,
        isSubscribed: false
    }

// 4.2 Mostre no console a seguinte mensagem
    console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg`)

// 5. Declare uma variável do tipo Array, ne nome students e atribua nenhum valor
    let students = []
    console.log(students)

// 6. Reatribua valor para a variável acima colocando os valores do objeto student da questão 4

    students = [student]
    console.log(students)

// 7. Coloque no console o valor da posição zero do Array acima
    console.log(students[0])


// 8. Crie um novo sutudent e coloque na posição 1 do Array students
    let student1 = {
        name: "José",
        age: 23,
        weight: 90,
        isSubscribed: true
    }

    students[1] = student1
    console.log(students)
