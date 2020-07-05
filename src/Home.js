import React from 'react'
import {Link} from 'react-router-dom';
import ActivityCard from './components/ActivityCard'


export default function Home(){

    
    return(

      
        <div>
        <div className = "home">
            
            <h3> Tutorials</h3>

            <div className = 'menus'>
                <div className = 'box1'>
                    <h3> Continue from where you left off?</h3>
                    <div className = 'cont'>
                    <img className = "jsicon" src="https://img.icons8.com/color/96/000000/javascript.png"/> 
                    <h2> Working with loops.</h2>
                    </div>
                </div>


                <div className = 'box2'>
                    <h1> You may also be interested in:</h1>
                    <div className ="langicon">
                    <img src="https://img.icons8.com/color/96/000000/java-coffee-cup-logo.png"/>
                    <img src="https://img.icons8.com/color/96/000000/c-plus-plus-logo.png"/>
                    <img src="https://img.icons8.com/color/96/000000/c-programming.png"/>
                    <img src="https://img.icons8.com/color/96/000000/react-native.png"/>
                    <img src="https://img.icons8.com/color/96/000000/html-5.png"/>
                    <img src="https://img.icons8.com/color/96/000000/angularjs.png"/>


                    </div>
                </div>



                <div className = 'box3'>
                    <div className = 'innerbox3'>
                    <h1> You have</h1>
                    <div className = 'prize'>
                    <img src="https://img.icons8.com/color/96/000000/prize-money.png"/>
                    <h2> 123 active points</h2>
                    </div>
                    </div>

                    <div className = 'innerbox4'>
                        <h1>Your Progress</h1>
                        <div className = "insideib4">
                        
                        <img  src="https://img.icons8.com/color/48/000000/javascript.png"/> 
                        
                       
                        <progress value="50" max="100"> 50% </progress>
                        </div>
                        <h2> Keep it up.</h2>
                    </div>
                    
                </div>
                
                    <div className = 'box4'>
                        <h1> Here's a daily challenge for you.</h1> 
                        <Link to = "/coursecontent">
                            <div className = 'insidebox4'>  
                                <img src="https://img.icons8.com/color/96/000000/c-programming.png"/> 
                                <h2> Working with pointers.</h2>
                            </div>
                         </Link>
                         </div> 
               

                <div className = 'box5'>
                    <h1> Make your own challenges.</h1>
                    <div className = 'insidebox5'>
                    <Link to = "/makechallenge">
                            <div className = 'bhitra'>
                          
                            <button className='makechallenge'>
                             <h1>Start Now </h1>
                             </button>
                             <div className = "arrowicon">
                             <img src="https://img.icons8.com/pastel-glyph/48/000000/circled-right.png"/>
                            </div>
                            </div>
                            </Link>
                            
                    </div>
                </div>
            
        </div>

        <div className = 'activities'>
            <h3>Your Activities</h3>   

            <div className = 'activitycard'>
            <ActivityCard 
            
                title = 'Java (Beginner)'
                description ='Description here'
                action ='Resume' 
                src ="https://img.icons8.com/color/60/000000/java-coffee-cup-logo.png" />

            <ActivityCard 
            
            title = 'C++ (Advanced)'
            description ='Description here'
            action ='Resume' 
            src ="https://img.icons8.com/color/60/000000/c-plus-plus-logo.png" />

            <ActivityCard 
            
            title = 'JavaScript (Beginner)'
            description ='Description here'
            action ='Resume' 
            src ="https://img.icons8.com/color/60/000000/javascript.png"/>

            <ActivityCard 
            
            title = 'C (Advanced)'
            description ='Description here'
            action ='Resume' 
            src ="https://img.icons8.com/color/60/000000/c-programming.png" />

            <ActivityCard 
            
            title = 'HTML (advanced)'
            description ='Description here'
            action ='Resume' 
            src ="https://img.icons8.com/color/60/000000/html-5.png" />

            <ActivityCard 
            
            title = 'Angular (Beginner)'
            description ='Description here'
            action ='Resume' 
            src ="https://img.icons8.com/color/60/000000/angularjs.png" />
            
            
            </div> 
        </div>    

        </div>

        
        </div>
       



        
    )
}