import { useState, useEffect, ReactElement, JSXElementConstructor, SyntheticEvent, useContext, createContext } from "react" 
import { useNavigate } from "react-router-dom";

export const RegistrationPage = ():ReactElement<any> => {
    const login_sate = {
        fname: "",
        lname: "",
        age:0

    }
    const [form, setForm ] = useState(login_sate)
    const [isValid, setIsValid ] = useState(false)

    const nav = useNavigate()

    const handleSubmit = (e: SyntheticEvent) =>{
        let target = e.target as HTMLInputElement | any
        console.log('%c  target:', 'color: #0e93e0;background: #aaefe5;', target["fname"].value);
        setForm({
            ...form,
           ...({[target["fname"].name]: target["fname"].value}),
           ...{[target["lname"].name]: target["lname"].value},
           ...{[target["age"].name]: target["age"].value}
        })
        e.preventDefault();
        setIsValid(true)
        // nav("/profile")
    }

    useEffect(()=>{
        if(isValid)
        localStorage.setItem("form", JSON.stringify(form))
    },
    [isValid])

    useEffect(()=>{
            if(localStorage.form) {
                const local_form = JSON.parse(localStorage.form)
                setForm(local_form)
            }
           },
    [])


    const handleRemoveStorage = ()=>{
        localStorage.removeItem("form")
    }
    return (
        <div>
            <h1>
            LOGIN PAGE
            </h1>
        
            <form  onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="fname"> First Name </label>
                    <input type="text" id="fname" name="fname" />
                </div>
                <div>
                    <label htmlFor="lname"> Last Name </label>
                    <input type="text" id="lname" name="lname" />
                </div>
                <div>
                    <label htmlFor="age"> Age </label>
                    <input type="number" id="age" name="age" />
                </div>
                <input type="submit" value="Confirm"/>


            </form>

            <button onClick={handleRemoveStorage}>Remove Storage</button>

  
            
        </div>
    
    )
}