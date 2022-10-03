import { Route, BrowserRouter as Router, useLocation } from "react-router-dom/";
import Introduction from "./Introduction";
import WhereTo from './WhereTo';
import Output from './Output';
import Statements from './Statement'
import Syntax from "./Syntax";
import Comment from './Comment';
import Home from './Home';
const Main = (props) => {
    const { path } = props;
    console.log("MAIN content  ", path);

    return (<>
        <Router>
            <Route path="/JS HOME" component={Home} />
            <Route path="/JS Introduction" component={Introduction} />
            <Route path="/JS Where To" component={WhereTo} />
            <Route path="/JS Output" component={Output} />
            <Route path="/JS Statements" component={Statements} />
            <Route path="/JS Syntax" component={Syntax} />
            <Route path="/JS Comment" component={Comment} />

        </Router>

    </>)
}


export default Main;

