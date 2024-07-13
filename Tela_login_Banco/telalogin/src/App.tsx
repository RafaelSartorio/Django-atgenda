import { layout } from "@chakra-ui/react"
import { Layout } from "./components/layout";
import { Box  , ChakraProvider } from '@chakra-ui/react'
import { ConponentsLogin } from "./components/login";



function App() {
  return (

    <ChakraProvider>
      <Box minHeight='100vh' backgroundColor=' #40E0D0' padding='30px'>
        <Layout>
          <ConponentsLogin/>
        </Layout>
      </Box>
    </ChakraProvider>    
  );
}

export default App;
