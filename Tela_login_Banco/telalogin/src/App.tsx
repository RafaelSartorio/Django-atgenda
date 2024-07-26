import { Layout } from "./components/layout";
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import Conta from "./pages/Conta";


function App() {
   return (
     <BrowserRouter>
       <ChakraProvider>
          <Layout>
            <Routes>
              <Route path="/" element = {<HomePage/>} />
              <Route path="/conta/:id" element={<Conta />}/>
            </Routes>
          </Layout>
       </ChakraProvider>
     </BrowserRouter>

  );
}

export default App;
