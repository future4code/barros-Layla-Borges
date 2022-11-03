import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function useProtectePage(){
    const navigate=useNavigate()
    useEffect(()=>{
        const token=localStorage.getItem('token')
        if (!token){
            navigate("/")
        }
    },[navigate]
    )
}