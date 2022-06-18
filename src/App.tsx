import './App.css';
import { MainApp}  from "./components/sample-comp"
import { Clock } from './components/clock';
import { RegistrationPage } from './components/RegistrationPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Formcard } from './components/form-card';
import { LoginPage } from './components/login';
import { Logout } from './components/logout';
import image from "./bkg-imgs/image-2.jpg"; 
import { Footer } from './components/footer';
import { GalleryPage } from './components/gallery';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const style =  {
// backgroundImage: `url(${image})`,
backgroundPosition: 'center',
backgroundColor: "orange",
width: '100vw',
height: '100vh',
backgroundSize: 'cover',
backgroundRepeat: 'no-repeat',
margin: "auto"
}

function App() {
  
  return (
    <div className="main_container"  style = { style}>
        <Clock/>
           <Router>
         <div className="main_navigation align-text-top space-x-16 drop-shadow-2xl  text-emerald-500">
          <Link className='hover:text-4xl hover:text-red-400' to="/">Home </Link> 
          
          <Link className='hover:text-4xl hover:text-red-400 ' to="/register">No Account? Register </Link>
          <Link className='hover:text-4xl hover:text-red-400' to="/login">Log In Page </Link>
          <Link className='hover:text-4xl hover:text-red-400' to="/gallery"> Gallery </Link>
          <Link className='hover:text-4xl hover:text-red-400' to="/profile"> Profile </Link>

        </div>
        <div className="main_body">
              <Routes>
                  <Route path="/"  element={
                  <h1 className='text-orange-500 drop-shadow-2xl backdrop-contrast-200 font-bold' style={ { fontSize: 70,fontFamily: 'Palatino Linotype'}}> 
                  Welcome to Nica's Place!
                   </h1>}/>
                   <Route path="/test"  element={<MainApp />}  />
                   <Route path="/register" element={<RegistrationPage />} />
                   <Route path="/profile" element={<Formcard />} />
                   <Route path="/login" element={<LoginPage />} />
                   <Route path="/gallery" element={<GalleryPage />} />
              </Routes>
        </div>
           
        </Router>
         
         <div className="main_footer">
         <Footer/>
           </div>
    </div>
  );
}

export default App;
