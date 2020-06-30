import React from 'react';
import ActivityCard from './components/ActivityCard';

export default function Challenges(){

    const style ={
        backgroundColor : '#3D4A60'
        // in css file challenges are actually labelled as course or related words
    }

    const h3style ={
        textAlign:'left',
        fontWeight:'bold'
        
    }
    return(
        <div style ={style}>
            
        <div className ='actualwork'>
            <h3 className ='courseh3'>Challenges</h3>
            <div className = 'courses'>

            <ActivityCard 
            
            title = 'Java (Beginner)'
            description ='Description here'
            action ='Start' 
            src ="https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png" />

            <ActivityCard 
            
            title = 'C++ (Advanced)'
            description ='Description here'
            action ='Start' 
            src ="https://img.icons8.com/color/48/000000/c-plus-plus-logo.png" />

            <ActivityCard 
            
            title = 'JavaScript (Beginner)'
            description ='Description here'
            action ='Start' 
            src ="https://img.icons8.com/color/48/000000/javascript.png"/>

            <ActivityCard 
            
            title = 'C (Advanced)'
            description ='Description here'
            action ='Start' 
            src ="https://img.icons8.com/color/48/000000/c-programming.png" />

            <ActivityCard 
            
            title = 'HTML (advanced)'
            description ='Description here'
            action ='Start' 
            src ="https://img.icons8.com/color/48/000000/html-5.png" />

            <ActivityCard 
            
            title = 'Angular (Beginner)'
            description ='Description here'
            action ='Start' 
            src ="https://img.icons8.com/color/48/000000/angularjs.png" />
            
            </div>
            
            
        </div>

        </div>
    )
}