import { ToastContainer, toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom"
import { SyntheticEvent, useEffect, useState } from "react"
import axios from"axios"
import { useCookies } from 'react-cookie';
import Button from '@mui/material/Button';

const { ENDPOINt = "http://localhost:6001" } = process.env;

// import jwt_decode from "jwt-decode"
// const def_credentials = {
// 	"username":"SuperAdmin@dna.com",
// 	"password":"1234"
// }

const default_toast_options:ToastOptions = {
    autoClose: 500,
    position: 'top-right'
}

export const LoginPage = () =>{
const [loginDetails, setLoginDetails] = useState({})
const [isLoggedIn, setIsLoggedIn ] = useState(false)
const [cookies, _, removeCookie] = useCookies(['access_token']);
const nav = useNavigate()

const verifyLogin = async (params:any) =>{
    try {
        const { data : { success, message}} = await axios.post(`${ENDPOINt}/user_login`, params, {
            withCredentials: true,
            headers: { 'Content-Type': 'application/json'},
        })
        toast[success ? "success" : "error"](message, default_toast_options)
        if(success) {
            setIsLoggedIn(true)
        }
        return {
            success,message
        }
    } catch (error: any) {
        const { response: {data}} = error
        const derived_error = error.response.data
        console.log("LOGIN ERROR",derived_error)
        toast["error"](Array.isArray(derived_error.message) 
        ? derived_error.message.join(",") : derived_error.message, default_toast_options )
        throw new Error(`${JSON.stringify(data)}`)
    }
}

const handleText = (e: SyntheticEvent) =>{
const { target: {value,name} } = e as any
setLoginDetails({
    ...loginDetails,
    [name]: value
})}

useEffect(()=>{
if(cookies["access_token"]) {
    setIsLoggedIn(true)
}
},[])

useEffect(()=>{
    if(isLoggedIn ) {
        toast["success"]("Redirecting to Home Page.",default_toast_options)
        setTimeout(() => {
            nav("/profile")
        }, 1500);
    }
}, [isLoggedIn])

return (
 <div>
      <div className="text-black text-2xl">
            <label>
                Username: 
                <input id="username" name="username" onChange={handleText}/>
            </label>
            <br></br>
            <label>
                Password:
                <input id="password" name="password" onChange={handleText}/>
            </label>
      </div>
          <Button variant="contained" onClick={()=>verifyLogin(loginDetails)}>Log In</Button>
      <ToastContainer/>
 </div>
)
}