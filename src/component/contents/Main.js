import { Route ,BrowserRouter as Router } from "react-router-dom/";

import Introduction from "./Introduction";
import About from "./About";

const Main=()=>{
 console.log("Routing ")
 return (<>
    <Router>
    <Route  path="/JS Introduction"   component={Introduction}      />
    <Route  path="/about"   component={About}      />
 
 </Router>
 
 </>)
}


export default Main ;

