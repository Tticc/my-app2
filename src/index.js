import React, {Component,} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Game from "./app/Game"
import ShoppingList from "./app/ShoppingList"
import Hook from "./app/Hook"
// const Index = React.lazy(() => import("./components/Index/Index"));


class App extends Component{

    render() {
        const id = "0000001";
        return (
            <Router>
                <Root>
                    <Sidebar>
                        <SidebarItem key="/app/game">
                            <Link to={'/app/game'}>
                                game
                            </Link>
                        </SidebarItem>
                        <SidebarItem key="/app/shop">
                            <Link to={'/app/shop'}>
                                shopping list
                            </Link>
                        </SidebarItem>
                        <SidebarItem key="/app/hook">
                            <Link to={'/app/hook'}>
                                hook
                            </Link>
                        </SidebarItem>
                        <SidebarItem key="/app/id">
                            <Link to={`/app/${id}`}>
                                show id
                            </Link>
                        </SidebarItem>
                    </Sidebar>
                    <React.StrictMode>
                    <Main>
                        <Switch>{/*如果不加Switch，可能会同时匹配多条，显示多个component*/}
                            <Route path="/app/game" component={Game}/>
                            <Route path="/app/shop" component={ShoppingList}/>
                            <Route path="/app/hook" component={Hook}/>
                            {/*最通用的匹配放到最后*/}
                            <Route path={"/app/:id"} component={ShowId}/>
                        </Switch>
                    </Main>
                    </React.StrictMode>
                </Root>
            </Router>
        );
    }
}
const ShowId = (pa) => {
    const {match} = pa;
    return (<h1>here will be the id: {match.params.id}</h1>);
}

const Root = (props) => {
    return (<div style={{
        display:'flex'
    }} {...props}></div>);
};
const Sidebar = (props) => {
    return (<div style={{
        with:'33vw',
        height:'100vh',
        overflow:'auto',
        background:'#eee'
    }} {...props}></div>);
};
const SidebarItem = (props) => {
    return (<div style={{
        whiteSpace:'nowrap',
        textOverflow:'ellipsis',
        overflow:'hidden',
        padding:'5px 10px'
    }} {...props}></div>);
};
const Main = (props) => {
    return (<div style={{
        flex:1,
        height:'100vh',
        overflow:'auto',
    }} {...props}></div>);
};


// ========================================


ReactDOM.render(
    <App></App>,
  document.getElementById('root')
);
