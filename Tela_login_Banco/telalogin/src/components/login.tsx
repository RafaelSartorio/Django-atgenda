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

export const  ConponentsLogin = ({children} : any) =>
    {    
      

    //login dados digitados === dados da api -> true login bem sucedido , false-> falha no login 

    return (

        
        <Box backgroundColor="white" marginTop='15px' padding='20px' borderRadius='9px'>
            { children }
            
        </Box>
    )
}
