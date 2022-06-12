import { useContext, useEffect, useState } from "react"
import { useCookies } from "react-cookie"
import jwt_decode from "jwt-decode"
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom"
import { GET_REQUEST } from "../helper"
import { Logout } from "./logout";
export const Formcard = () =>{
    const [cookies, _] = useCookies(['access_token']);
    const [details, setDetails ] = useState({
        ["First Name"] : "",
        ["Last Name"] : "",
        ["User Name"] :"",
        ["User Role"] : "",
    })

    const nav = useNavigate()
    useEffect(()=>{
        if(!cookies["access_token"]&& !document.cookie) {
           nav("/login")
           return
        }
        const fetchUser = async (user_id: string) =>{
            const { data } = await GET_REQUEST(`http://localhost:6001/user/${user_id}`) as Record<string,any>
            const display_data = {
                ["First Name"] : data.first_name  || "",
                ["Last Name"] : data.last_name  || "",
                ["User Name"] : data.username  || "",
                ["User Role"] : data.user_role  || "",
            }
           setDetails({
               ...display_data
           })
         }
    
     const { user_id, username, user_role }: Record<string,any> = jwt_decode(cookies["access_token"])
        fetchUser(user_id)

    },[])
    return (
        <div>
            <h3>
            Profile of {`${details["First Name"]} ${details["Last Name"]}`}
            </h3>
            <div>
                {
                    Object.entries(details).map(([key,value])=>{
                        return (
                            <div> {`${key} : ${value}`}</div>
                        )
                    }) 
                }
                <Logout/>               
                <ToastContainer/>
            </div>
        </div>
    )
}