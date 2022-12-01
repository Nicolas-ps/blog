import { Route } from "react-router";
import Home from "./components/Home";
import Post from "./components/Post";

const Routes = () => {
    return (
        <Routes>
            <Route path="/home" component={Home}/>
            <Route path='/post:id' component={Post}/>
        </Routes>
    );
} 

export default Routes;