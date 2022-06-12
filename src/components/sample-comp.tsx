
import { useState, useEffect, ReactElement, JSXElementConstructor } from "react" 
   export const MainApp = (props:any): ReactElement<any | JSXElementConstructor<any>> => {
    const [count, setCount] = useState(0)
    const [text, setText] = useState("")
    const [confirmText, setConfirmText] = useState("")
  
    const handleCount = (operation: string) => {
      if (operation === "plus") setCount(count + 1)
      if (operation === "minus") setCount(count - 1)
    }
  
    const handleText = (e: any) => {
      const { target } = e
      setText(target.value)
    }
    const handleConfirm = () => {
      setConfirmText(text)
    }
    return ( 
    <div >
      <h1 style = {{fontFamily: 'Lucida Grande' } } >
      Count: {
        count
      } <div >
  
      <label > Text: {
        confirmText
      } </label> 
  
      </div> <div >
      <input name = "firstName"
      onChange = {
        handleText
      }
      /> <button name = "confirmbtn"
      onClick = {handleConfirm} >
      Confirm </button> </div>
  
  
  
      <button name = "addbtn"
      onClick = {
        () => handleCount("plus")
      } >
      increment </button>
  
      <button name = "minusbtn"
      onClick = {
        () => handleCount("minus")
      } >
      decrement </button> </h1> </div>
    );
  }
  