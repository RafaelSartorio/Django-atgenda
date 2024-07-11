import { Conta } from "./conta";

export class ContaPj extends Conta{
    private id_empresa: number = 0 
    private saldoAtual: number = 0 

    constructor(name: string , contaCorrente: number, id_empresa: number ) {
        super(name, contaCorrente)
        this.id_empresa = id_empresa
    }

    mostrarConta = () =>{
        console.log(
            "Código da empresa é: ", this.id_empresa,
            "\nnome do cliente: " , this.getName(),
            "\nConta do cliente: ",this.getContaCorrente(),
            "\nSaldo da conta: ", this.getSaldo()
        )
    }

    pegarEmpréstimos = (saldoEmprestimo: number) =>{
        this.saldoAtual = this.getSaldo()
        this.saldoAtual = this.saldoAtual + saldoEmprestimo
        this.setSaldo(this.saldoAtual)

    }
}