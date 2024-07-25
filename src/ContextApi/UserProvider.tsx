// Assignment
// step 1: define the types of the states, functions that you want to use in you screens or components
// step 2: provide a default values for that types
// step 3: define you actuall states or functions
// step 4: export them by providing them to value props 

// step 5: use them inside your components, screens

import { createContext, useContext, useState } from "react";

interface UserContextType {
    user: string;
    setUser: (value: string) => void;
    isLoggedIn: boolean;
    setIsLoggedIn: (value: boolean) => void;

}

const defaultValue: UserContextType = {
    user:"",
    isLoggedIn: false,
    setIsLoggedIn:()=>{},
    setUser:()=>{}
};


export const UserContext = createContext<UserContextType>(defaultValue);


const UserProdvider = ({children}:{children:any})=>{
    const [user,setUser] = useState("Abdul Mateen");
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    
    //
    //
    //
    //
    //
    //



    return (
        <UserContext.Provider value={{user,isLoggedIn,setIsLoggedIn,setUser}}>
            {children}
        </UserContext.Provider>
    )
}
export const userContext = ()=>useContext(UserContext);

export default UserProdvider;