import React from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import Menu from "./menu";
/*import '../fontello/fontello-e5c3186a/css/fontello.css';*/



class StartGame extends React.Component{
    render(){

        return (
            <aside onClick={this.handleClick}>
                <NavLink className='header_startGame' to='/game'> <span className='starter'>Play the game</span></NavLink>
            </aside>
        )
    }
}

class Header extends React.Component{
    constructor(props){
        super(props)
    }

    toggleMenu=()=>{
        if(typeof this.props.toggleMenu === 'function'){
            this.props.toggleMenu()
        }
    }



    render(){

        return(
            <HashRouter>
            <header className='header'>
                <div className='headerElements'>
                    <Menu toggleMenu={this.toggleMenu}/>
                    <div>
                        <NavLink className='logo' to='/'> <h1>BlackJack</h1> </NavLink>
                    </div>
                   <StartGame/>
                </div>
            </header>
            </HashRouter>
        )
    }
}

export default Header;

/*style={this.state.toggleMenu ? sidebarStyle : normalStyle}*/