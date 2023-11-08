import Login from "./Components/Login"
import "./App.css"
import Profail from "./Components/Profail"
import UserContextProvider from "./Context/UserContextProvider"
function App() {
  

  return (
    
   <UserContextProvider >
   <p>hiii</p>
   <Login/>
   <Profail />
   
    </UserContextProvider>
    
  )
}

export default App
