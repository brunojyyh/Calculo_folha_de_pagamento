const calcula = () => {
    var salario = document.getElementById("salario")
    let salarioValor = Number(salario.value);
    let base = 0;
    let faixa1 =  1100 * 0.075;
    let faixa2 =  0;
    let faixa3 = 0;
    let faixa4 = 0;
    let inss = 0;
    let aliquota = 0;
    var resultado = document.querySelector("[data-resultado]");
    var teste = document.getElementById("teste")
    if(salario.value.length > 0) {
        if (salarioValor <= 1100) {
            aliquota = 0.075 * 100;
            inss = (salarioValor * (aliquota / 100)).toFixed(2).replace('.', ',');
            base = (salarioValor - (salarioValor * 0.075));
        } else if (salarioValor >= 1100.01 && salarioValor <= 2203.48) {
            faixa1 = 1100 * 0.075;
            faixa2 = (salarioValor - 1100) * 0.09; 
            aliquota = ((faixa1 + faixa2) / salarioValor) * 100;
            inss = (salarioValor * (aliquota / 100)).toFixed(2).replace('.', ',');
            base = (salarioValor - (faixa1 + faixa2));
        } else if (salarioValor >= 2203.49 && salarioValor <= 3305.22) {
            faixa1 = 1100 * 0.075;
            faixa2 = (2203.48 - 1100) * 0.09; 
            faixa3 = (salarioValor - 2203.48) * 0.12;
            aliquota = ((faixa1 + faixa2 + faixa3) / salarioValor) * 100;
            inss = (salarioValor * (aliquota / 100)).toFixed(2).replace('.', ',');
            base = salarioValor - (faixa1 + faixa2 + faixa3);
        } else if (salarioValor >= 3305.23 && salarioValor <= 6433.57) {
            faixa1 = 1100 * 0.075;
            faixa2 = (2203.48 - 1100) * 0.09; 
            faixa3 = (3305.22 - 2203.48) * 0.12;
            faixa4 = (salarioValor - 3305.22) * 0.14; 
            aliquota = ((faixa1 + faixa2 + faixa3 + faixa4) / salarioValor) * 100;
            inss = (salarioValor * (aliquota / 100)).toFixed(2).replace('.', ',');
            base = salarioValor - (faixa1 + faixa2 + faixa3 + faixa4);
        } else {
            aliquota = 11.68;
            inss = ((aliquota * 6433.57) / 100).toFixed(2).replace('.', ',');
            base = salarioValor - 751.99
        }
         
    }else {
        window.alert('salario nao informado')
    }
    // if(document.getElementById('sim').checked) {
    //     teste.innerHTML = `opcao  marcada = SIM `
    // } else {
    //     teste.innerHTML = `opcao marcada = Não`
    // }
    resultaInss = `Alíquota efetiva = ${aliquota.toFixed(2).replace('.', ',')}% <br> Valor Inss ${inss} <br> Base para Irrf = R$ ${base.toFixed(2).replace('.', ',')}` 

    resultado.classList.add('folha__inss');


    let baseIrrf = base;
    let aliquotaIrrf = 0;
    let deducao = 0;
    if (baseIrrf <= 1903.98) {
        aliquotaIrrf = 0;
    } else if (baseIrrf >= 1903.99 && baseIrrf <= 2826.65) { 
        aliquotaIrrf = 0.075;
        deducao = 142.80
    } else if (baseIrrf >= 2826.66 && baseIrrf <= 3751.05) {
        aliquotaIrrf = 0.15;
        deducao = 354.80
    } else if (baseIrrf >= 3751.06 && baseIrrf <= 4664.68 ) {
        aliquotaIrrf = 0.225;
        deducao = 636.13
    } else {
        aliquotaIrrf = 0.275
        deducao = 869.36
    }
    let irrf = ((base * aliquotaIrrf) - deducao).toFixed(2);
    base = base - ((base * aliquotaIrrf) - deducao) 
    let resultadoIrrf = `Aliquota irrf = ${(aliquotaIrrf * 100).toFixed(2).replace('.',',')}% <br> Parcela a deduzir = ${deducao} <br> irrf = ${irrf} <br> Salario Liquido = R$ ${(base).toFixed(2).replace('.',',')}`
    resultado.innerHTML = `<p class="folha__titulo">Inss:</p>${resultaInss} <hr> <p class="folha__titulo">IRRF:</p>${resultadoIrrf}`
    
   
} 
    const botao = document.querySelector('[data-botao]')
    botao.addEventListener('click', calcula)
    
    
// function calcular(){
    