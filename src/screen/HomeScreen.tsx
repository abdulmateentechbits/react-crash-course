import { useState } from "react"
import { ChildScreen } from "./Child"

export const HomeScreen = ()=>{
    return (
        <div>
            <h1>Parent Screen</h1>
            <ChildScreen/>
        </div>
    )
}