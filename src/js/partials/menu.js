import React from 'react';

class Menu extends React.Component{
    constructor(props){
        super(props)
    }

    handleClick=()=>{
        if(typeof this.props.toggleMenu === 'function'){
            this.props.toggleMenu()
        }
    }
    render(){

            return(
                    <nav>
                        <i className="icon-menu" onClick={this.handleClick}>Menu</i>
                    </nav>
            )

    }
}

export default Menu;