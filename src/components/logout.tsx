import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast, ToastOptions } from 'react-toastify';
import { POST_REQUEST } from "../helper";
const { ENDPOINt = "http://localhost:6001" } = process.env;

const default_toast_options:ToastOptions = {
    autoClose: 500,
    position: 'top-right'
}


export const Logout = () =>{
    const [cookies, _, removeCookie] = useCookies(['access_token']);
    const nav = useNavigate()

    
const logout = async () =>{
    try{
        const { data: {success, message} } = await POST_REQUEST(`${ENDPOINt}/user_logout`, {}) as any
      
        removeCookie("access_token")
        toast[success ? "success" : "error"](message, default_toast_options)
        toast("Logging Out...",default_toast_options)

        setTimeout(() => {
            nav("/login")
        }, 1500);
        return {
            success,
            message
        }
    } catch(error:any){
        toast["error"](error.response.data.message, default_toast_options)
        throw new Error(error)
    }
}


    return (
      <div>
          <span>
              <button onClick={()=>nav("/") }> Home </button>
              <button onClick={logout}> Log Out</button>
          </span>
          <ToastContainer/>
      </div>

    )
}