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
   </Switch>
   <Footer/>
  </main>
  </Router>
  );
}

export default App;
