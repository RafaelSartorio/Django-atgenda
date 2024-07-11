import { Conta } from "./conta";

export class ContaPf extends Conta{
    id_user : number =  0 

    constructor(id_user: number, name: string ,contaCorrente: number ){
        super(name, contaCorrente)
        this.id_user = id_user
    }

    mostrarConta = () =>{
        console.log(
            "Código do cliente é: ", this.id_user,
            "\nnome do cliente: " , this.getName(),
            "\nConta do cliente: ",this.getContaCorrente(),
            "\nSaldo da conta: ", this.getSaldo()
        )
    }
}