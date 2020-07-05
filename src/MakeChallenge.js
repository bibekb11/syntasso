import React from 'react';
import {Link} from 'react-router-dom';

 class MakeChallenge extends React.Component{
    render(){
        return(
            <div className = 'makechallenge'>

                <div className ='challengecontentz'>

                <div>
                    <label for = 'difficulty'>Difficulty</label>
                    <select id="difficulty" name="difficulty">
                        <option disabled selected value> -- select an option -- </option>
                        <option value="easy">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="expert">Expert</option>
                    </select>
                </div>


                <div>
                    <label for = 'title'>Title</label><br/>
                    <input type = 'textarea' placeholder= 'Title of the Challenge'></input>
                </div>

                <div>
                    <label for = 'description'>Description</label><br/>
                    <input type = 'textarea' placeholder= 'Description of the Challenge'></input>
                </div>

                <div>
                    <label for = 'problemstatement'>Problem Statement</label><br/>
                    <input type = 'textarea'></input>
                </div>


                <div>
                    <label for = 'points'>Points</label><br/>
                    <input type = 'textarea' placeholder="Number"></input>
                </div>


                <div>
                    <label for = 'sampleinput'>Sample Input</label><br/>
                    <input type = 'textarea'></input>
                </div>

                <div>
                    <label for = 'sampleoutput'>Sample Output</label><br />
                    <input type = 'textarea'></input>
                </div>

                <div>
                    <label for = 'tags'>Tags</label><br />
                    <input type = 'textarea'></input>
                </div>

                <Link to ="/">
                    <button type='submit'>
                        Submit
                    </button>
                </Link>

                </div>
                </div>
           
        )
    }
}

export default MakeChallenge;