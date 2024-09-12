import { depositar, sacar, exibirSaldo } from './financeiro.js'
import { menu } from './menu.js'

import prompt from 'prompt-sync'
let ler = prompt()

export function app () {
    let cont = 0 
    let a = []

    console.log('Informe o valor do saldo')
    let s = Number( ler() )

    if (cont == 0) {
        a[0] = s
        cont++
    }

    let c = true

    while (c) {
        let o = menu()

        if (o == 'D') {
            s = depositar(s)
            console.clear()

            a[cont] = s
            cont++
        }

        else if(o == 'S') {
            s = sacar(s)
            console.clear()

            a[cont] = s
            cont++
        }

        else if (o == 'E') {
            let valor = exibirSaldo(s)

            console.clear()
            console.log(`Valor atual do saldo: R$${valor}\n`)
        }

        else if (o == 'C') {
            s = a[cont -2]
            console.clear()
        }

        else if (o == 'SAIR') {
            c = false
        }

        else {
            console.clear()
            console.log('Opção inválida! Tente novamente.\n')
        }
    }

    return 'Obrigado por usar nossos serviços do FinFrei!'
}