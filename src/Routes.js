import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Components/Home";
import Blogs from "./Components/Blogs";

export const Routes = ()    => {

    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/Blogs" component={Blogs} />
            </Switch>
        </Router>
    );

};