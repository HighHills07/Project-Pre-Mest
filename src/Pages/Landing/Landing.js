import './Landing.css'
import {useHistory} from 'react-router-dom'
import {colorScheme,Button} from "@chakra-ui/react"
import nay from "./img2.png"
import {FaFacebook} from 'react-icons/fa'


function Landing() {

  let history = useHistory()
       
    

    function signin() {
        history.push('/Signin')
        
    }

    function signup () {
      history.push('/Signup')
      
    }

 

    return(


      <div className="mainL">
         


          <div className="box1">

          <div className="x1">
                <p className="text" >High Hills Incorporated</p>
                </div>  
       
        <div className="x2">
              
              </div> 
        
        <div className="x3">
              
              
              
              <Button   onClick={signup} className="ss" >Sign up</Button>
              <Button  onClick={signin} className="ss" >Sign in</Button>
              </div>  
                
                </div>       
          <div className="box2">

                <div className="y1" >
                      <img src={nay} className="imgq" />
                      
                      </div> 
                
                
                <div className="y2" >
                     <p className="text1" >WELCOME</p>
                     <p className="text2" >to the place of great ideas.</p>

                     <p className="text2" >Feel free to collaborate,</p>
                     <p className="text2" >plan and share big thoughts.</p>
                     
                     
                </div>

                
                </div>  
         
         
            <div className="box3">
            <Button colorScheme="facebook" leftIcon={<FaFacebook />}  >
                    Let's get social!
              </Button>
            </div>
         

            

            
            

       
       
       
        


        </div>



      

      



    )
    
}




export default Landing;