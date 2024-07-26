import { promises } from "dns"
import { resolve } from "path"

const conta = {
    email: 'Rafael.Sartorio@gmail.com',
    password :'1234567689',
    name: 'Rafael Sartório',
    ballance: 2000.00,
    id : "1"
}

export const api = new Promise((resolve)=> {
    setTimeout(()=>{
        resolve(conta)
    }, 3000)
})