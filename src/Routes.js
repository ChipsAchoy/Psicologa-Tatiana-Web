import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";

export const Routes = ()    => {

    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
            </Switch>
        </Router>
    );

};