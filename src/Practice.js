import React,{Component} from 'react';
import SocialIcons from './components/SocialIcons'


class Practice extends Component{
    render(){
    const title ='Working with basic loops';
    const style ={height:'10px'}
    const fileName = 'index.js';
    const divStyle ={
        backgroundColor :'#3D4A60',
        color: 'white',
        height: '50px',
    }

    const fontStyle ={
        fontWeight:'normal',
        marginTop: '0px',
        marginBottom:'0px',
        paddingTop: '12px',
        paddingLeft: '15px'
    }
   
    
    return(
        <div>
            <div className = 'practice'>
                <div className ='dashbar'>
                    <h1>{title}</h1>
                </div>
                <div className = "progress">
                    <progress style = {style} value="25" max ="100"></progress>
                    <h3>5/15 Points</h3>
                </div>
                </div>

            <div className = 'instnwork'>
                <div className = 'instructions'>
                    <h1>Hello. Render Markdowns here</h1>
                </div>

                <div className = 'ide'>
                    <div className = 'filename'>
                    <h3>{fileName}</h3>
                    </div>

                   
                    <div className = 'numbering'>
                        im numbering.
                    </div>

                    <div className = 'codes'>
                       im code.
                    </div>

                    <div className ='options'>
                        im options.<br/>(as shown in figma)
                    </div>

                    <div className ='submitnow'>
                        <button type ='submit' className ='submitnowbutton'>Submit</button>
                    </div>
                
                </div>
                <div className = 'socialShare'>
                <div>
                <h2> Need some help? Ask your friends:
                <SocialIcons />  
                </h2>
                
                </div>

                <div>

                <button>View Solution</button>

                </div>
            </div>
            <div className ='result'>

                <div className = 'testcases'>
                    <div className = 'testtitle'>
                        <h1> Test Cases</h1>
                    </div>

                    <div className ='cases'>

                        <div>
                        <img src="https://img.icons8.com/flat_round/29/000000/delete-sign.png"/>
                        <h2> TestCase 1</h2>
                        </div>

                        <div>
                        <img src="https://img.icons8.com/flat_round/29/000000/delete-sign.png"/>
                        <h2> TestCase 2</h2>
                        </div>

                        <div>
                        <img src="https://img.icons8.com/flat_round/29/000000/delete-sign.png"/>
                        <h2> TestCase 3</h2>
                        </div>

                        <div>
                        <img src="https://img.icons8.com/flat_round/29/000000/delete-sign.png"/>
                        <h2> TestCase 4</h2>
                        </div>

                        

                    </div>
               
                </div>

                <div className = 'messages'>
                    <div className = 'messagetitle'>
                        <div>
                        <h1>Message</h1>
                        </div>

                        <div style = {divStyle}>
                            <h3 style ={fontStyle} >Successfully Compiled</h3>
                        </div>

                        <div>
                        <h1>Input</h1>
                        </div>

                        <div style = {divStyle}>
                            <h3 style ={fontStyle} >Hello</h3>
                        </div>

                        <div>
                        <h1>Output</h1>
                        </div>

                        <div style = {divStyle}>
                            <h3 style ={fontStyle} >H e l l o</h3>
                        </div>

                        
                    </div>
                </div>
               
            </div>

            </div>

            
            
            
           
            
        </div>
    )
}
}
export default Practice;