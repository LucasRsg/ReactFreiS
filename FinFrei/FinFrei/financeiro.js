import prompt from 'prompt-sync'
let ler = prompt()

//Depositar Saldo
export function depositar (saldo) {
    let continuar = true
    while (continuar) {
        console.log('Quanto dinheiro deseja depositar?')
        let qntD = Number( ler() )

        if (qntD > 0) {
            continuar = false

            let v = saldo + qntD
            return v
        }
    }
}

//Sacar Saldo
export function sacar (saldo) {
    let continuar = true

    while (continuar) {
        console.log('Quanto dinheiro deseja sacar?')
        let qntS = Number( ler() ) 

        if (qntS > 0 && qntS <= saldo) {
            continuar = false

            let v = saldo - qntS
            return v
        }

        else {
            console.log('Opção inválida! Tente novamente.')
        }
    }
}

//Consultar Saldo
export function exibirSaldo (saldo) {
    return saldo
}