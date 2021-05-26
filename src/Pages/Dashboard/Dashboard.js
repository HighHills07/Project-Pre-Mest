import './Dashboard.css'
import React from 'react'
import {colorScheme,Button} from "@chakra-ui/react"


function Dashboard() {
    return (
        <div className="main5">

            <div className="nav">
             
             <div className="nav1">
                 <p className="text">High Hills Incorporated</p>
             </div>
             <div className="nav2">
             <Button colorScheme="whatsapp" className="th">Find Collaboraters</Button>
             <Button colorScheme="yellow" className="th">Thesaurus</Button>
             </div>
                
            </div>

            <div className="work">
           
           <div className="membrs" >
               <p className="gm">Great Minds</p>

               <input type="text" placeholder="Search" className="search"></input>
          
           </div>
           <div className="chat"></div>

            </div>
            
        </div>
    )
}

export default Dashboard