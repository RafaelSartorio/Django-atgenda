import { useContext, useState } from "react"
import { api } from "../api"
import { AppContext } from "../components/AppContext"
import { useNavigate } from "react-router-dom"
import { promises } from "dns"

export const bemVindo = async(email:string ,senha:string): Promise<boolean> =>{
    
    const data : any = await api

    if(email === data.email  && senha === data.password ){
        return true
    }else{
        return false
    }
}