import { Box } from "@chakra-ui/react"
import { api } from "../api"
import { useEffect, useState } from "react"

interface IText {
    mainContent: string
    content:string

}

export const InfoConta = ({mainContent: Maincontent, content}: IText) =>{
 
    return(
        <Box
        backgroundColor='white'
        marginTop='30px'
        padding={30}
        paddingRight={20}
        textAlign='center' 
        borderRadius={30}
        fontSize='2xl'
        >
           <h1>{Maincontent}</h1> 
           <h2>{content}</h2>
        </Box>
    )
}