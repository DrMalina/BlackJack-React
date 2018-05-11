/*
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './partials/header.js';
import Game from './partials/game.js';
import SideBarMenu from './partials/sidebar.js';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import './sass/main.css;

/!*@import '../fontello/fontello-e5c3186a/css/fontello.css';*!/

class App extends React.Component{
    constructor(props){
        super(props)

        this.state={
            show: false
        }
    }

    toggleMenu=()=>{
        this.setState({
            show: !this.state.show
        })

    }

    render(){
        return(
                <HashRouter>
                    <div>
                        <div>
                            <SideBarMenu toggleMenu={this.toggleMenu} show={this.state.show}/>
                            <Header toggleMenu={this.toggleMenu}/>
                            <Switch>
                                <Route path='/game' component={Game}/>
                            </Switch>
                        </div>
                    </div>
                </HashRouter>
        )
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});*/
