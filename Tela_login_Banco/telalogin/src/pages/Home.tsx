import { Box, Button, Center, ChakraProvider, Input, Link } from "@chakra-ui/react"
import { ConponentsLogin } from "../components/login"
import { useContext, useState } from "react"
import { bemVindo } from "../service/loginComplete"
import { useNavigate } from "react-router-dom"
import { AppContext } from "../components/AppContext"
import { api } from "../api"

const HomePage =() =>{

    const [email , setEmail] = useState('')
    const [password , setpassword] = useState('')

    const navigate = useNavigate()
    const { setsisLogedIn } = useContext(AppContext)


    const validateUser = async (email: string , password: string) =>{
        const loggedIn = await bemVindo(email, password)

        const data: any = await api

        if(!loggedIn){
            alert(`Email ou senha estão invalidos`)
            navigate('/')
        }else{
            setsisLogedIn(true)
            navigate(`/conta/${data.id}`)
        }
    }

    return(
        <Box>         
            <ConponentsLogin>
            <Center>
                <strong>
                    Tela de login 
                </strong>                
            </Center> 
           
            <Input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder='Digite o seu email'
                type='Email'
                marginTop='5px' />
            <Input
                value={password}
                onChange={(event)=> setpassword(event.target.value)}
                placeholder='Digite a sua senha'
                type='password'
                marginTop='10px' />

            
             <Button 
             marginTop='30px' 
             width='100%' 
             backgroundColor='#00CED1'
             onClick={() => validateUser(email, password)} 
             >Entrar</Button>
            
            </ConponentsLogin>
        </Box>   
      
    )
}

export default HomePage