import { createContext, useState } from "react"

interface UserUA{
    user:string,
    isLogedIn: boolean,
    setsisLogedIn: (isLogedIn: boolean) => void
    
  }
  
export const AppContext = createContext({} as  UserUA)
  
export const AppContextProvider = ( {children}: any) =>{
    const [isLogedIn , setsisLogedIn ] = useState<boolean>(false)
    const user = 'Rafael'
    return(
      <AppContext.Provider value={{user,isLogedIn,setsisLogedIn }}>
        {children}
      </AppContext.Provider>
    )
  
  }