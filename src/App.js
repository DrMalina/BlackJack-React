import React from 'react';
import Header from './js/partials/header.js';
import Game from './js/partials/game.js';
import Home from './js/partials/content.js';
import SideBarMenu from './js/partials/sidebar.js';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import 'animate.css';
import './sass/main.css';


class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            show: false,
        }
    }

   /* static getDerivedStateFromProps (nextProps,prevState){
        if(prevState.show===nextProps.show){
            return null
        }

        return {
            show: nextProps.show
        }
    }*/

    toggleMenu=()=>{
        this.setState({
            show: !this.state.show,
        },()=>{
            console.log('App: ',this.state.show);
        })

    }

    render(){

        return(
            <HashRouter>
                <div>
                    <SideBarMenu show={this.state.show} toggleMenu={this.toggleMenu}/>
                    <div className={this.state.show ? 'main open' : 'main'}>
                        <Header toggleMenu={this.toggleMenu} show={this.state.show}/>
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route path='/game' component={Game}/>
                        </Switch>
                    </div>
                </div>
            </HashRouter>
        )
    }
}

export default App;

/*style={this.state.show ? sidebarStyle : normalStyle}*/
