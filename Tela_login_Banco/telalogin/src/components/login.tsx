import { 
    Box, 
    Button, 
    Center, 
    Input,
    Alert, 
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react'

import { bemVindo } from '../service/loginComplete'
import { useState , useEffect } from "react";
import { api } from '../api';
import ImageLogo from '../components/imagensConponentes/logoBanco.png'
import { Link } from 'react-router-dom';


export const ConponentsLogin = () =>
    {    
    const [email , setEmail] = useState('')
    const [password , setpassword] = useState('')

    

    //login dados digitados === dados da api -> true login bem sucedido , false-> falha no login 

    return (

        
        <Box backgroundColor="white" marginTop='15px' padding='20px' borderRadius='9px'>

            <Center>
                <strong>
                    Tela de login 
                </strong>                
            </Center> 
           
            <Input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder='Email ou Usuario'
                type='Email'
                marginTop='5px' />
            <Input
                value={password}
                onChange={(event)=> setpassword(event.target.value)}
                placeholder='Senha'
                type='password'
                marginTop='10px' />

            <Link to='conta/1'>
             <Button marginTop='30px' width='100%' backgroundColor='#00CED1' >Entrar</Button>
            </Link>
        </Box>
    )
}
