import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import ShoppingList from "./components/ShoppingList/ShoppingList"
import Game from "./components/Game/Game"
// const Game = React.lazy(() => import("./components/Game/Game"));


class App extends Component{
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/app/game" component={Game}/>
                </Switch>
            </Router>
        );
    }
}



// ========================================


ReactDOM.render(
    <App></App>,
  document.getElementById('root')
);
