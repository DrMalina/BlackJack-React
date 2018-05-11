import React from 'react';
import Close from "./closeButton";

class SideBarMenu extends React.Component{
    constructor(props){
        super(props)
    }


    toggleMenu=()=>{


        /*console.log('sidebar: ',this.state.show)*/


        if(typeof this.props.toggleMenu === 'function'){
            this.props.toggleMenu()
        }
    }


    render(){

        if(this.props.show === true){
            return (
                <div className='sidebar open'>
                    <Close toggleMenu={this.toggleMenu}/>
                </div>
            )
        } else {
            return (
                <div className='sidebar'></div>
            )
        }

    }
}

export default SideBarMenu