import { Layout } from "./components/layout";
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import Conta from "./pages/Conta";
import { AppContextProvider } from "./components/AppContext";
  


function App() {
   return (
     <BrowserRouter>
       <AppContextProvider>
        <ChakraProvider>
            <Layout>
              <Routes>
                <Route path="/" element = {<HomePage/>} />
                <Route path="/conta/:id" element={<Conta />}/>
              </Routes>
            </Layout>
        </ChakraProvider>
       </AppContextProvider>
     </BrowserRouter>

  );
}

export default App;
