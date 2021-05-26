import Signin from './Pages/Signin/Signin'
import Signup from './Pages/Signup/Signup'
import Dashboard from './Pages/Dashboard/Dashboard'
import Landing from './Pages/Landing/Landing'
import {Switch, Route} from 'react-router-dom'


function App() {
  return (
   
   <Switch>
     <Route exact path='/' component={Landing}/>
     <Route exact path='/Signin' component={Signin}/>
     <Route exact path='/Signup' component={Signup}/>
     <Route exact path='/Dashboard' component={Dashboard}/>


    </Switch>

     








    
  );
}

export default App;
