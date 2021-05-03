function fib(numero){
    if (numero == 0 || numero == 1){
        return numero
    } 
    return fib(numero-1) + fib(numero-2)
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("Ingresa un número: ", num=> {
    console.log('fib(%d)= %d',num,fib(num))
    readline.close()
})
