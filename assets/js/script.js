function calculoIMC() {
    let altura = document.querySelector('.alt').value;
    let peso = document.querySelector('.kg').value;
    altura /= 100;
    let IMC = (peso / (altura * altura)).toFixed(2);

    if (IMC >= 0 && IMC <= 18.5) {
        window.alert(`Seu IMC é de ${IMC}. Você está abaixo do peso!`);
    } else if (IMC >= 18.5 && IMC <= 24.90) {
        window.alert(`Seu IMC é de ${IMC}. Você está saudável!`);
    } else if (IMC >= 25.00 && IMC <= 29.90) {
        window.alert(`Seu IMC é de ${IMC}. Você está com sobrepeso!`);
    } else if (IMC >= 30.00 && IMC <= 39.90) {
        window.alert(`Seu IMC é de ${IMC}. Você está Obeso!`);
    } else if (IMC >= 40.00) {
        window.alert(`Seu IMC é de ${IMC}. Você está com Obesidade grave!`);
    }
}

function limpar(){
    document.querySelector('.alt').value = '';
    document.querySelector('.kg').value = '';
}