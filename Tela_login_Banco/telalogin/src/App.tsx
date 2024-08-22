import { Layout } from "./components/layout";
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppContextProvider } from "./components/AppContext";
import MainRoutes from "./routes";
  


function App() {
   return (
     <BrowserRouter>
       <AppContextProvider>
        <ChakraProvider>
            <Layout>
              <MainRoutes/>
            </Layout>
        </ChakraProvider>
       </AppContextProvider>
     </BrowserRouter>

  );
}

export default App;
