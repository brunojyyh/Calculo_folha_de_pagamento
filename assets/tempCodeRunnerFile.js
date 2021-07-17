 resultado.innerHTML = ` A aliquota de inss  para o seu salario é 7,5% <br> <br> o salario liquido = R$ 
            ${(salarioValor - (salarioValor * 0.075)).toFixed(2).replace('.',',') }`