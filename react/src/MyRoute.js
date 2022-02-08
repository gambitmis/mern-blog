import {BrowserRouter, Switch, Route} from "react-router-dom"
import App from "./App"
import FormComponent from "./components/FormComponent"
import SingleComponent from "./components/SingleComponent"

const MyRoute=()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App}></Route>
                <Route path="/create" exact component={FormComponent}></Route>
                <Route path="/blog/:slug" exact component={SingleComponent}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default MyRoute;