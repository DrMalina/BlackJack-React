import React from 'react';

class Close extends React.Component {
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
            <div className='sidebar_Header'>
                <i className="icon-cancel" onClick={this.handleClick}></i>
            </div>
        )
    }
}

export default Close;