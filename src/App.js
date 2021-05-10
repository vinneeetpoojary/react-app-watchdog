import './App.css';
import * as React from "react";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import UserSignup from './Pages/UserSignup';
import VisitorDetailForm from './Pages/VisitorDetailForm';
import UserDetailsForm2 from './Pages/UserDeatilsForm2';
import temp from './Pages/temp';
import ResidentDetails from './Pages/ResidentDetails';
import NavbarDropdown from './Components/NavbarDropdown';
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
    <Route path="/login"  component={Login}/>
    <Route path="/register"  component={UserSignup}/>
    <Route path="/resform" component={ResidentDetails}/>
    <Route path="/visform" component={VisitorDetailForm}/>
    <Route path="/indexres" component={UserDetailsForm2}/>
    <Route path="/temp" component={temp}></Route>
   </Switch>
   <Footer/>
  </main>
  </Router>
  );
}

export default App;
