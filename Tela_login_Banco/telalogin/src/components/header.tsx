import { Box, Center } from "@chakra-ui/react"
import ImageLogo from '../components/imagensConponentes/logoBanco.png'

export const Header = () =>{    
    return(      
        <Box backgroundColor="#4682B4">
            <Center fontSize='50px' color='white' 
> 
                <h1>
                 O Banco dos Bancos
                </h1>   
            </Center>
        </Box>
    )
}