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
    <div className="App" style={style}>
      {/* <img src="https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/> */}
      <header className="App-header" >
        <Clock/>
        </header>
         <div>
           <body className="App-header" >
           <Router>
         <h6 className='Links'>
          <Link to="/">Home</Link> <br/>
          <Link to="/register">No Account? Register</Link><br/>
          <Link to="/login">Log In Page</Link><br/>
          <Link to="/profile"> Profile </Link>
        </h6>
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
        </Router>
           </body>
         
         </div>
    </div>
  );
}

export default App;
