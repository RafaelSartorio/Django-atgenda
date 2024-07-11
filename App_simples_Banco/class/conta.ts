export abstract class Conta {
    private readonly name: string 
    private readonly contaCorrente: number 
    private saldo: number = 0 
    private status: boolean = true

    constructor(name: string , contaCorrente: number) {
        this.name = name
        this.contaCorrente = contaCorrente         
    }

    sacarDinheiro =(saldo_retirada: number) =>{
        if(this.validarConta()){
            if(this.saldo > saldo_retirada){
                this.saldo = this.saldo  - saldo_retirada
                console.log("Retirada efetuada. Seu novo saldo é R$", this.saldo)
                return this.saldo
            }else{
                console.log("Saldo insuficiente")
            }
        }else{
            console.log("Não foi possivel realizar a autenticação da conta")
        }
    }
    
    depositarDinheiro =(saldo_adicionado: number) =>{
        if(this.validarConta()){
           this.saldo = this.saldo + saldo_adicionado
           console.log("Deposito efetuada. Seu novo saldo é R$", this.saldo)
            return this.saldo 
        }else{
            console.log("Não foi possivel realizar a autenticação da conta")
        }
    }

    validarConta =() : boolean =>{
        if(this.status) {
            return this.status
        }

        return false
    }

    getName = (): string =>{
        return this.name
    }
    getContaCorrente = ():number =>{
        return this.contaCorrente
    }
    getSaldo = (): number =>{
        return this.saldo
    }

    setSaldo = (saldo:number) : number =>{
        this.saldo = saldo
        return this.saldo
    }


}


// depositar (saldo + valor depositado) , sacar(saldo - valor retirado) , validação, 