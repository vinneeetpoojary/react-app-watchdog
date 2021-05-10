import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { Link } from "react-router-dom";
import ResidentDetails from './ResidentDetails';
import VisitorDetailForm from './VisitorDetailForm';
function Contact(){
    return(
        <div className="h-screen">
           <Router>
               <Switch>
               <Route path="/userdetail" component={ResidentDetails}/>
                <Route path="/visitordetail" component={VisitorDetailForm}/>
               </Switch>
           </Router>
           <Link to="/userdetail">
                       <button>resident signup page</button>
            </Link>
            <Link to="/visitordetail">
                       <button>visitorform</button>
            </Link>
        </div>
    )
}
export default Contact