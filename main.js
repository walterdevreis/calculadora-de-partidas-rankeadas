let saldoVitorias = calculo(190, 91)
let nivelDoHeroi = nivel(saldoVitorias)

console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de " + nivelDoHeroi)

function calculo(vitorias, derrotas){
    let resultado = vitorias - derrotas
    return resultado
}

function nivel(saldoVitorias){
    let resultado = ""

    if(saldoVitorias < 10){
        resultado = "Ferro"
    }
    else if(saldoVitorias > 11 && saldoVitorias < 20){
        resultado = "Bronze"
    }
    else if(saldoVitorias > 21 && saldoVitorias < 50){
        resultado = "Prata"
    }
    else if(saldoVitorias > 51 && saldoVitorias < 80){
        resultado = "Ouro"
    }
    else if(saldoVitorias > 81 && saldoVitorias < 90){
        resultado = "Diamante" 
    }
    else if(saldoVitorias > 91 && saldoVitorias < 100){
        resultado = "Lendário"
    }
    else if(saldoVitorias >= 101){
        resultado = "Imortal"
    }
    return resultado
}