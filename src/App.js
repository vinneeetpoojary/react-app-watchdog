import './App.css';
import * as React from "react";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import LoginForm from './Components/FormPages/LoginForm';
import RegistrationForm from './Components/FormPages/RegistrationForm';
import ResidentDetailsForm from './Components/FormPages/ResidentDetailsForm';
import VisitorDetailsForm from './Components/FormPages/VisitorDetailsForm';
import SignupForm from './Components/FormPages/SignupForm';
import Navbar from './Components/Navbar/Navbar';
import FilteringTable from './Components/Table/FilteringTable';
import Features from './Pages/Features';
import BasicTable from './Components/Table/BasicTable';
import SortingTable from "./Components/Table/SortingTable"

function App() {
 
  return (
    <Router>
  <main>
  <Navbar/>
   <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/contact" component={Contact}/>
    <Route path="/features" exact component={Features}/>
    <Route path="/login" exact component={LoginForm}/>
    <Route path="/register" exact component={RegistrationForm}/>
    <Route path="/resform" exact component={ResidentDetailsForm}/>
    <Route path="/visform" exact component={VisitorDetailsForm}/>
    <Route path="/signup" exact component={SignupForm}/>
    <Route path="/table2" exact component={FilteringTable}/>
    <Route path="/table1" exact component={BasicTable}/>
    <Route path="/table3" exact component={SortingTable}/>
   </Switch>
   <Footer/>
  </main>
  </Router>
  );
}

export default App;
