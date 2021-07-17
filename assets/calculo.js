function calcular(){
    var salario = document.getElementById("salario")
    let salarioValor = Number(salario.value);
    let salarioLiquido = 0;
    let faixa1 =  1100 * 0.075;
    let faixa2 =  0;
    let faixa3 = 0;
    let faixa4 = 0;
    let inss = 0;
    let aliquota = 0;
    var resultado = document.getElementById("resultado");
    if(salario.value.length > 0) {
        if (salarioValor <= 1100) {
            aliquota = 0.075 * 100;
            inss = (salarioValor * (aliquota / 100)).toFixed(2).replace('.', ',');
            salarioLiquido = (salarioValor - (salarioValor * 0.075));
        } else if (salarioValor >= 1100.01 && salarioValor <= 2203.48) {
            faixa1 = 1100 * 0.075;
            faixa2 = (salarioValor - 1100) * 0.09; 
            aliquota = ((faixa1 + faixa2) / salarioValor) * 100;
            inss = (salarioValor * (aliquota / 100)).toFixed(2).replace('.', ',');
            salarioLiquido = salarioValor - inss;
        } else if (salarioValor >= 2203.49 && salarioValor <= 3305.22) {
            faixa1 = 1100 * 0.075;
            faixa2 = (2203.48 - 1100) * 0.09; 
            faixa3 = (salarioValor - 2203.48) * 0.12;
            aliquota = ((faixa1 + faixa2 + faixa3) / salarioValor) * 100;
            inss = (salarioValor * (aliquota / 100)).toFixed(2).replace('.', ',');
            salarioLiquido = salarioValor - (faixa1 + faixa2 + faixa3);
        } else if (salarioValor >= 3305.23 && salarioValor <= 6433.57) {
            faixa1 = 1100 * 0.075;
            faixa2 = (2203.48 - 1100) * 0.09; 
            faixa3 = (3305.22 - 2203.48) * 0.12;
            faixa4 = (salarioValor - 3305.22) * 0.14; 
            aliquota = ((faixa1 + faixa2 + faixa3 + faixa4) / salarioValor) * 100;
            inss = (salarioValor * (aliquota / 100)).toFixed(2).replace('.', ',');
            salarioLiquido = salarioValor - (faixa1 + faixa2 + faixa3 - faixa4);
        } else {
            aliquota = 11.68;
            inss = ((aliquota * 6433.57) / 100).toFixed(2).replace('.', ',');
            salarioLiquido = salarioValor - 751.99
        }
         
    }else {
        window.alert('salario nao informado')
    }
    resultado.innerHTML = `Alíquota efetiva = ${aliquota.toFixed(2).replace('.', ',')}% <br> Valor Inss ${inss} <br> Salario liquido = R$ ${salarioLiquido.toFixed(2).replace('.', ',')}`
    
    
} 