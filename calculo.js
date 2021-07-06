function calcular(){
    var salario = document.getElementById("salario");
    let salario1 = Number(salario.value)
    var resultado = document.getElementById("resultado");
    if(salario.value.length > 0) {
        resultado.innerHTML =  `o seu salario é: ${salario1 + 5000}`
    }else {
        window.alert('salario nao informado')
    }
    
} 