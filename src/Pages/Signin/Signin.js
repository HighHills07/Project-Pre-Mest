import './Signin.css'
import {useHistory} from 'react-router-dom'

import yes from "./me.jpg"

function Signin(){

    let history = useHistory()

   function signin() {
       history.push('/Dashboard')
       
   }

   function signup() {
       history.push('/Signup')
       
   }

    return(
        <div className="main">


            <div className="top">
                <img src={yes} className="img" alt="profile picture" />

            </div>

           
           <input type="text" placeholder="Username" className="f1" />
           <input type="password" placeholder="Password" className="f1" />
         
          <button className="si1" onClick={signin}>
              Sign in
          </button>
         
          <p  className="link">Forgot Password</p>
          
          <p className="link" onClick={signup} >Don't have an account?</p>
          

          
            </div>


           






           

            
           
        

                

                    
        

            

            





    
    )
}
export default Signin;

































