import { Children, useContext } from "react"
import { Header } from "./header"
import { Box } from "@chakra-ui/react"
import { AppContext } from "./AppContext"

export const Layout = ({children}: any) => {
    const context = useContext(AppContext)
    console.log(context)
    
    return(
     <>
        <Box minHeight='100vh' backgroundColor=' #40E0D0'>
            <Header />        
             {children}
        </Box>
     </>
 )
}