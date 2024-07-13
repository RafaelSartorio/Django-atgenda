import { Box, Center } from "@chakra-ui/react"
import ImageLogo from '../components/imagensConponentes/logoBanco.png'

export const Header = () =>{
    return(
        <Box >
            <Center>
                <img
                    src={ImageLogo} 
                    alt="imagen logo banco"
                    width='300px' 
                />                
            </Center>
        </Box>
    )
}