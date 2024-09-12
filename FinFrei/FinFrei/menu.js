import prompt from 'prompt-sync'
let ler = prompt()

export function menu () {
    console.log(`Escolha uma opção:
    D - Depositar
    S - Sacar
    E - Exibir Saldo
    C - Cancelar Operação
    Sair - Terminar Programa`)
    
    let opcao = ler().toUpperCase()
    return opcao
}