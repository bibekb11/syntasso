import React from 'react'
import { Tasks } from './components/Tasks'

export default class CourseContent extends React.Component{
    render(){
       
        return(

            
            <div className = 'courseContent'>
                <div className='coursetitle'>
                    <h2>Title of the Course</h2>
                </div>

                <div className = 'problemcontainer'>
                    <div className='selector'>
                        
                        <h3>Filter by:</h3>
                            <select id="difficulty" name="difficulty">
                                <option disabled selected value> --Difficulty-- </option>
                                <option value="easy">Beginner</option>
                                <option value="intermediate">Intermediate</option>
                                <option value="expert">Expert</option>
                            </select>

                            <select id="state" name="state">
                                <option disabled selected value> --State-- </option>
                                <option value="completed">Completed</option>
                                <option value="incomplete">Not completed</option>
                                
                            </select>

                    </div>
                       
                    
                    
                </div>

                <div className = 'problem'>
                   <Tasks 
                    title = 'Intro'
                    status = 'Completed'
                    description = 'Playing with Variables'
                   />   
                   
                   <Tasks 
                    title = 'Project'
                    status = 'Incomplete'
                    description = 'Use loops to imitate Magic 8 Ball'
                   />   

                    <Tasks 
                    title = 'Overloading'
                    status = 'Completed'
                    description = 'Play with functions'
                   />   

                    <Tasks 
                    title = 'File Handling'
                    status = 'Incomplete'
                    description = 'Do some tasks related to file handling'
                   />   

                    <Tasks 
                    title = 'Project'
                    status = 'Incomplete'
                    description = 'Create a basic app to schedule a marathon run for people with different age groups.'
                   />   
                       
                </div>

            </div>

           
            
        )
    }
}
