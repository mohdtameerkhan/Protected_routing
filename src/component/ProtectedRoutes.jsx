import { Children, useContext} from "react";
import { Context } from "../context/AuthContext";
import { Navigate, } from "react-router-dom";


export const ProtectRouter = ({children})=>{
    const {userValid} = useContext(Context) 
   

    if (!userValid){
        return <Navigate to="/login" replace/>
    }
    return children
}