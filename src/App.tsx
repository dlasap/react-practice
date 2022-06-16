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
import image from "./bkg-imgs/image.jpeg"; 
import { Footer } from './components/footer';
const divStyle = {
  container: {
      backgroundImage: `url(${"https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh'
  }
};

const style =  {
backgroundImage: `url(${image})`,
backgroundPosition: 'center',
width: '100vw',
height: '100vh',
backgroundSize: 'cover',
backgroundRepeat: 'no-repeat',
}

function App() {
  
  return (
    <div className="main_container" style={style}>
        <Clock/>
           <Router>
         <div className="main_navigation">
          <Link to="/">Home </Link> 
          <Link to="/register">No Account? Register </Link>
          <Link to="/login">Log In Page </Link>
          <Link to="/profile"> Profile </Link>
        </div>
        <div className="main_body">
              <Routes>
                  <Route path="/"  element={
                  <h1 style={ {fontFamily: 'Fira Code'}}> 
                  Greetings Fellow Mortals!
                   </h1>}/>
                   <Route path="/test"  element={<MainApp />}  />
                   <Route path="/register" element={<RegistrationPage />} />
                   <Route path="/profile" element={<Formcard />} />
                   <Route path="/login" element={<LoginPage />} />
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
