import React from 'react'
import {Link} from 'react-router-dom';


export default function MyProfile(){

    const style ={
        
    }
    return(
       
      
           <fieldset>
                <legend><h1> My Profile</h1></legend>
        <div className = "myprofile">
            <div className = "picture">
                <div className = 'pp'>
                    <p> Bibek Bhujel</p>    
                </div> 
               
                <h5>bibekbhujel75</h5>
                <h5>Pokhara, Nepal</h5>
            </div>

            <div className = "description">
                

                <div className = "details">
                    <div className = "name">
                        <form action = "#" >

                        <div className = "naam">
                            <div className = "gap">
                                <label for = "fname" required>First Name </label><br/>
                                <input type = "textarea" placeholder="First Name" required></input> <br/>
                            </div>

                            <div className = "gap">
                                <label for = "lname" >Last Name </label><br />
                                <input type = "textarea" placeholder="Last Name" required></input><br />
                            </div>
                        </div>

                        <div className = "naam">
                        <div className = "gap">
                            <label for = "email" required>E-mail</label><br />
                            <input type = "textarea" placeholder="example@email.com"></input><br />
                        </div>

                            <div className = "gap">
                                <label for = "location">Country</label><br />
                                <input type = "textarea" placeholder="Your Current Residence"></input><br />
                            </div>
                        </div>

                        <div className = 'website'>
                            <label for = "website">Website/URL</label><br />
                            <input type = "textarea" id = "website"></input><br />
                        </div>

                        <div className = 'password'>
                            <label for ='password'>Update Password</label><br />
                            <input type = "password" id = "newpassword" placeholder='New Password'></input><br />
                            <input type = "password" id = "oldpassword" placeholder="Retype Old Password"></input><br />
                        </div>

                        <div className = "updatebutton">
                          <button type="submit" className= "update">Update Profile</button> 
                       </div>
                       
                        </form>

                    </div>
                    
                </div>

               
            </div>
        </div>
        </fieldset>
        
       
    )
}
