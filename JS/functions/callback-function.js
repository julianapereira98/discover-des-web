// Uma callback function é uma função que está sendo passada para outra função como parâmetro.

// Callback function
function sayMyName(name) {
    // console.log(name)
    console.log('antes de executar uma callback')
    name()
    console.log('depois de executar uma callback')
}

sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)