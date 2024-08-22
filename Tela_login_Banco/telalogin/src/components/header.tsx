import { Box, Button, Center, Flex, Spacer } from "@chakra-ui/react"
import ImageLogo from '../components/imagensConponentes/logoBanco.png'
import { useContext } from "react"
import { AppContext } from "./AppContext"
import { px } from "framer-motion"
import { useNavigate } from "react-router-dom"

export const Header = () =>{    
    const {setsisLogedIn , isLogedIn } = useContext(AppContext)
    const navigate = useNavigate()

    const logout = () =>{
        setsisLogedIn(false)
        navigate('/')
    }

    return(
        <Flex  backgroundColor="#4682B4" padding= '10px' > 
            <Box>
                <Center fontSize='35px' color='white' > 
                    <h1>
                    O Banco dos Bancos
                    </h1>   
                </Center>
                <Spacer/>
            </Box>
            {
                isLogedIn && (
                    <>
                        <Spacer/>
                        <Button  
                            onClick={() => logout() }
                        >
                            Sair
                        </Button>
                    </>
                )
            }
        </Flex>
    )
}