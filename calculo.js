function calcular(){
    var salario = document.getElementById("salario");
    let salario1 = Number(salario.value)
    var resultado = document.getElementById("resultado");
    if(salario.value.length > 0) {
        if (salario1 <= 1100) {
            resultado.innerHTML = ` A aliquota de inss  para o seu salario é 7,5% <br> <br> o salario liquido = R$ 
            ${(salario1 - (salario1 * 0.075)).toFixed(2).replace('.',',') }`
        } else if (salario1 >= 1100.01 || salario1 <= 2203.48) {
            resultado.innerHTML = `A aliquota de inss  para o seu salario é 9% <br> <br> Salario liquido = R$ ${(salario1 - (salario1 * 0.09)).toFixed(2).replace('.', ',')} `
        }  
    }else {
        window.alert('salario nao informado')
    }
    
} 