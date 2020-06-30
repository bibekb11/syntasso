import React from 'react';
import {Link} from 'react-router-dom';

export default class ActivityCard extends React.Component{

    constructor(props) {
        super(props);
        
    }
    render(){
        const style ={
            textAlign:'left',
            fontWeight:'bold'
            
        }

        
   
    
    return(
        <div className = 'actcard'>
            <div className = 'content'>
                <h3 style = {style}> {this.props.title}</h3> 
                <div className = 'challengedesc'>
                    <h4>{this.props.description}</h4>
                </div>
                <Link to = "coursecontent">
                <a href = "#">
                <div className = 'buttonClass'>
                 <h4>{this.props.action} </h4>
                <img src="https://img.icons8.com/pastel-glyph/35/000000/circled-right.png"/>
                </div>
                </a>
                </Link>

            </div>

            <div className ='courseicon'>
                <img src={this.props.src}/>
            </div>
        
        </div>
    )
}
}

