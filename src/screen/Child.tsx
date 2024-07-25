import { userContext } from "../ContextApi/UserProvider"
import { SubChildScreen } from "./SubChild"

export const ChildScreen = ()=>{
    const {user,isLoggedIn,setIsLoggedIn,setUser} = userContext();

    if (!isLoggedIn) {
        return (
            <>
                <h1>Login to see the child screen</h1>
                <button onClick={()=>setIsLoggedIn(true)}>Log in</button>
            </>
        )
    }

    return (
        <div>
            <h1>Child Screen : {user}</h1>
            <button onClick={()=>setUser("John Doe")}>Update user</button>
            <SubChildScreen />
        </div>
    )
}