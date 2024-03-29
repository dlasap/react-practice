import { useEffect, useState } from "react"
import { getClockTime } from "../helper"

export const Clock = () => {
   
    const [clock_display, setClockDisplay]: any = useState(0)
    useEffect(() => {setClockDisplay(new Date().getTime() + 1000)},[])
    useEffect(() => {
         setTimeout(( )=>{setClockDisplay(new Date())}, 1000);
    })
    return ( 
    <div>
        <h3 style = { {fontFamily: 'Fira Code'  }}>
          Date: : { new Date().toLocaleDateString()} <br/>
          Time : { getClockTime(new Date(clock_display)) 
      } </h3> 
      </div>
    )
  }