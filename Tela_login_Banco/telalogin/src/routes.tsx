import { Route , Routes} from "react-router-dom"
import HomePage from "./pages/Home"
import Conta from "./pages/Conta"
import { useContext } from "react"
import { AppContext } from "./components/AppContext"


const MainRoutes = () =>{
    const {isLogedIn } = useContext(AppContext)
 
    return(
        <Routes>
        <Route path="/" element = {<HomePage/>} />
        <Route path="/conta/:id" element={isLogedIn? <Conta/> : <HomePage/> }/>
        </Routes>
    )
}

export default MainRoutes