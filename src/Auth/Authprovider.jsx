import { createContext,useContext,useState } from "react";
import { useNavigate } from 'react-router-dom';


const AuthContext=createContext()
export const useAuth=()=>(
    useContext(AuthContext)
)

export const AuthProvider=({children})=>{
   

    return (
        <AuthContext.Provider value={{  }}>
            {children}
        </AuthContext.Provider>
    )
}

