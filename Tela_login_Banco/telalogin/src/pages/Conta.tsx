import { Box, Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import { InfoConta } from "../components/InfoConta"
import { useContext, useEffect, useState } from "react"
import { api } from "../api"
import { useNavigate, useParams } from "react-router-dom"
import { AppContext } from "../components/AppContext"


interface UserData {
    email: string,
    password :string,
    name: string
    ballance:number
    id: string
}

const Conta =  () =>{

    const [dadosUsuario , setDadosUsuario] = useState<UserData | null>()
    const {id } = useParams()
    const navegar = useNavigate()

    const  {isLogedIn } = useContext(AppContext)
    console.log(isLogedIn)

    !isLogedIn && navegar('/')
   
    useEffect(()=>{
        const getData = async() => {
            const Data : any | UserData  = await api
            setDadosUsuario(Data) // Colocando os dados da api na variavel dadosUsuario
        }

        getData()
    })

    const dataHoje = new Date()


    if(dadosUsuario && id !== dadosUsuario.id){
        navegar('/')
    }

    return(
        <Box minHeight='100vh'>
            {
               dadosUsuario === null || dadosUsuario === undefined ?
                (<Center>
                    <Spinner
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='blue.500'
                        size='xl'
                        marginTop='300px'
                    />
                </ Center> )
                :
                (
                    <SimpleGrid columns={2} spacing={8}>
                    <>
                        <InfoConta 
                            mainContent={`Bem vindo(a) ${dadosUsuario.name}`}
                            content= 
                            {`
                                ${dataHoje.getUTCDate()}
                                /${dataHoje.getUTCMonth() + 1}/
                                ${dataHoje.getFullYear()}
                                ----
                                ${dataHoje.getUTCHours()} : ${dataHoje.getMinutes()}
                            `}
                        />
                        <InfoConta
                         mainContent="Saldo disponivel"
                         content={`R$ ${dadosUsuario.ballance}`}
                        />                        
                        </>
                    </SimpleGrid>   
                )
            }
                    
        </Box>
        
    )
}

export default Conta