import { useEffect, useState } from "react"
import { getClockTime } from "../helper"

export const Clock = () => {
   
    const [clock_display, setClockDisplay]: any = useState(0)
    useEffect(() => {setClockDisplay(new Date().getTime() + 1000)},[])
    useEffect(() => {
         setTimeout(( )=>{setClockDisplay(new Date())}, 1000);
    })
    return ( 
    <div className="grid place-items-center drop-shadow-2xl text-black hover:backdrop-contrast-150">
          { new Date().toDateString()} <br/>
          { getClockTime(new Date(clock_display))  } 
      </div>
    )
  }