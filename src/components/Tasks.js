import React from 'react';
import {Link} from 'react-router-dom';

export class Tasks extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){
       
       const style ={
           fontWeight: 'normal'
       }
        
    return(
        <Link to ="practice"><div className = 'tasks'>
            <div className = 'titlebar'>
            <h2 style ={style}>{this.props.title}</h2>
            <h5>{this.props.status}</h5>
            </div>

            <div className ="desc">
                <h4> {this.props.description}</h4>
            </div>
            
        </div>
        </Link>
    )
}
}
