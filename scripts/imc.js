const calcular = document.getElementById('calcular');

function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(nome == ''){
        alert('Digite seu nome');
    }else if(altura == '' || altura <= 0){
        alert('Digite uma altura válida');
    }else if(peso == '' || peso <= 0){
        alert('Digite um peso válido');
    }else{
        const valorIMC = (peso/(altura*altura)).toFixed(2);
        let classificacao = "";
        if(valorIMC < 18.5){
            classificacao = 'Peso abaixo do normal';
        }else if(valorIMC < 24.9){
            classificacao = 'Peso normal';
        }else if(valorIMC < 29.9){
            classificacao = 'Sobrepeso';
        }else if(valorIMC < 34.9){
            classificacao = 'Obesidade grau 1';
        }else if(valorIMC < 39.9){
            classificacao = 'Obesidade grau 2';
        }else{
            classificacao = 'Obesidade grau 3';
        }
        resultado.innerHTML = `<p>${nome}, seu IMC é ${valorIMC}. <br> Você esta com ${classificacao}</p>`;
    }
}

calcular.addEventListener('click', imc);