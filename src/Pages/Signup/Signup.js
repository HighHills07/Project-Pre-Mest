import './Signup.css'
import {useHistory} from 'react-router-dom'
// import yea from './img3.jpg'

function Signup() {

    let history=useHistory()
    function signup() {
        history.push('/Dashboard')
        
    }
    return(

        <div className="main2">
               
           <input type="text" placeholder="First Name" className="f1" />
           <input type="text" placeholder="Last Name" className="f1" />
           <input type="text" placeholder="Email" className="f1" />
           <input type="password" placeholder="Password" className="f1" />
           <input type="password" placeholder="Confirm Password" className="f1" />
           
          <button className="si2" onClick={signup} >
              Sign up
          </button>
        </div>

 





    )
    
}

export default Signup;
