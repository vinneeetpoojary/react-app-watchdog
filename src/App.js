import './App.css';
import * as React from "react";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import NavbarDropdown from './Components/Navbar/NavbarDropdown';
import LoginForm from './Components/FormPages/LoginForm';
import RegistrationForm from './Components/FormPages/RegistrationForm';
import ResidentDetailsForm from './Components/FormPages/ResidentDetailsForm';
import VisitorDetailsForm from './Components/FormPages/VisitorDetailsForm';
import SignupForm from './Components/FormPages/SignupForm';

function App() {
  const [isOpen,setIsOpen]=React.useState(false)
  const toggle=()=>(
    setIsOpen(!isOpen)
  )
  React.useEffect(()=>{
    const hideMenu=()=>{
      if(window.innerWidth >768 && isOpen){
        setIsOpen(false);
      }
    }
    window.addEventListener("resize",hideMenu)
  })
  return (
    <Router>
  <main>
    <Navbar toggle={toggle}/>
    <NavbarDropdown toggle={toggle} isOpen={isOpen}/>
   <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/contact" component={Contact}/>
    <Route path="/login" exact component={LoginForm}/>
    <Route path="/register" exact component={RegistrationForm}/>
    <Route path="/resform" exact component={ResidentDetailsForm}/>
    <Route path="/visform" exact component={VisitorDetailsForm}/>
    <Route path="/signup" exact component={SignupForm}/>
   </Switch>
   <Footer/>
  </main>
  </Router>
  );
}

export default App;
