import  {useContext} from 'react'
import UserContext from '../Context/UserContext'
function Profail() {
    const {user} = useContext(UserContext)
    if(!user) return <div>Please Login</div>
    return <div>Welcome {user.username}</div>
}

export default Profail
