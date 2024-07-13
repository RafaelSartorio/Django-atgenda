import { Box , Button, Center, Input} from '@chakra-ui/react'
import { bemVindo } from '../service/loginComplete'

export const ConponentsLogin = () =>
(
    <Box backgroundColor="white" marginTop='15px' padding='20px' borderRadius='9px'>

        <Center>
            <h1>
                Tela de login
            </h1>
        </Center>
        <Input
            placeholder='Digite o seu Email'
            type='Email'
            marginTop='5px' />
        <Input
            placeholder='Digite a sua senha'
            type='password'
            marginTop='10px' />

        <Button  onClick={bemVindo} marginTop='30px' width='100%' backgroundColor='#00CED1' >Entrar</Button>

    </Box>
)

