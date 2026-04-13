
import Nav from './component/Nav';
import {Outlet} from 'react-router-dom';
import { Context } from './context/AuthContext';
import { useState } from 'react';

const App = () =>{

  const [userValid, setUserValid] = useState(false)

  
  return (
    <Context.Provider value={{userValid, setUserValid}}>
        <Nav/>
      <Outlet/> 
    </Context.Provider >
   
  )
}


export default App;
