let resultado = 0;
let tela = "0";
let memoria = "";
let sinal = "";
document.getElementById("tela").innerHTML = tela;

function acrescentar(numero){
    if (tela == "0"){
        tela = numero;
        document.getElementById("tela").innerHTML = tela;
    } else {
        tela += numero;
        document.getElementById("tela").innerHTML = tela;
    }
}

function acrescentar_ponto(){
    if (tela == "0"){
        tela = "0.";
        document.getElementById("tela").innerHTML = tela;
    } else if (!tela.includes(".")){
        tela += ".";
        document.getElementById("tela").innerHTML = tela;
    }
}

function apagar(){
    if (tela.length <= 1){
        tela = "0";
        document.getElementById("tela").innerHTML = tela;
    } else {
        tela = tela.slice(0, -1);
        document.getElementById("tela").innerHTML = tela;
    }
}

function limpar(){
    resultado = 0;
    tela = "0";
    memoria = "";
    sinal = "";
    document.getElementById("tela").innerHTML = tela;
}

function somar(){
    igual();
    sinal = "+";
    tela = parseFloat(tela); //conversão
    memoria = tela; //envio à memoria
    document.getElementById("tela").innerHTML = tela;
    tela = "0";
}

function subtrair(){
    igual();
    sinal = "-";
    tela = parseFloat(tela);
    memoria = tela;
    document.getElementById("tela").innerHTML = tela;
    tela = "0";
}

function multiplicar(){
    igual();
    sinal = "xx";
    tela = parseFloat(tela);
    memoria = tela;
    document.getElementById("tela").innerHTML = tela;
    tela = "0";
}

function dividir(){
    igual();
    sinal = "d/";
    tela = parseFloat(tela);
    memoria = tela;
    document.getElementById("tela").innerHTML = tela;
    tela = "0";
}

function igual(){
    if (memoria == "0"){
        memoria = "0";
    } else {
        if (sinal == "+"){
            tela = parseFloat(tela);
            tela = memoria + tela;
            tela = String(tela);
            memoria = "0";
            document.getElementById("tela").innerHTML = tela;
        } else if (sinal == "-"){
            tela = parseFloat(tela);
            tela = memoria - tela;
            tela = String(tela);
            memoria = "0";
            document.getElementById("tela").innerHTML = tela;
        } else if (sinal == "xx"){
            tela = parseFloat(tela);
            tela = memoria * tela;
            tela = String(tela);
            memoria = "0";
            document.getElementById("tela").innerHTML = tela;
        } else if (sinal == "d/"){
            tela = parseFloat(tela);
            tela = memoria / tela;
            tela = String(tela);
            memoria = "0";
            document.getElementById("tela").innerHTML = tela;
        }
    }
}