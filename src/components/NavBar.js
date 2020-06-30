import React from 'react';

import {Link} from 'react-router-dom';

function NavBar(){
    const userName = 'bibekb75';
    const style = {
        color : 'white',
       textDecoration : 'none'
    }
        return(
           
                <nav>
                    <div className = 'logo'>
                        <h1> Syntasso</h1>
                    </div>
                    <ul>
                        <Link style ={style} to ="/"> <li>Home</li></Link>
                        <Link style ={style} to ="myprofile"> <li>My Profile</li> </Link>
                        <Link style ={style} to ="challenges"> <li>Challenges</li> </Link>
                        <Link style ={style} to ="myprofile"> <li>{userName}</li> </Link>
                    </ul>

               
                </nav>
            
            
            
        )
    
}

export default NavBar;