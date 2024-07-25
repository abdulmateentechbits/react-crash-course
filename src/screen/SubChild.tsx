import { userContext } from "../ContextApi/UserProvider"

export const SubChildScreen = ()=>{
    const {user} = userContext();

    return (
        <div>
            <h1>Sub Child Screen user {user}</h1>
        </div>
    )
}