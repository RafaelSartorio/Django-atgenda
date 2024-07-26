import { Children } from "react"
import { Header } from "./header"
import { Box } from "@chakra-ui/react"

export const Layout = ({children}: any) => {
    return(
     <>
        <Box minHeight='100vh' backgroundColor=' #40E0D0'>
            <Header />        
             {children}
        </Box>
     </>
 )
}