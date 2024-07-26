import { useState } from "react"
import { api } from "../api"

export const bemVindo = async(email:string ,senha:string) =>{
    const data : any = await api

    if(email === data.email  && senha === data.password ){
        alert(`Seja muito bem vindo Sr(Sra) ${data.name} `)
    }else{
        alert('Email ou senha incorretos')
    }

    alert(`Seja bem vindo ${email}`)
}