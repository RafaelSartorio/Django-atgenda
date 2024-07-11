import { Conta } from "./conta";

export class ContaAcrescimo extends Conta{
    private saldoAtual: number = 0


    constructor(name: string ,contaCorrente: number){
        super(name, contaCorrente)
    }

    depositarDinheiro =(saldo_adicionado: number) =>{
        if(this.validarConta()){
            this.saldoAtual = this.getSaldo()
            this.saldoAtual = this.saldoAtual + ((saldo_adicionado * 0.1) + saldo_adicionado)
            return this.setSaldo(this.saldoAtual)             
        }else{
            console.log("Erro na validação ")
        }
            
    }

    mostrarConta = () =>{
        console.log(
            "\nnome do cliente: " , this.getName(),
            "\nConta do cliente: ",this.getContaCorrente(),
            "\nSaldo da conta: ", this.getSaldo()
        )
    }

}