import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

import image from "../../bkg-imgs/image-2.jpg"; 
import { Footer } from "../Footer/Footer";
import { Sidebar } from "../Sidebar/Sidebar";

const style =  {
    backgroundImage: `url(${image})`,
    backgroundPosition: 'center',
    width: '100vw',
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    }
    

  export const Home = () =>{
    return (
        <div style={style}>

            <h1> HOME </h1>
            <Sidebar/>
            <Footer/>
        </div>
    )
}

