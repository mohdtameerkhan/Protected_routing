
import Nav from './component/Nav';
import {Outlet} from 'react-router-dom';





const App = () =>{

  return (
    <>
    <Nav/>
      <Outlet/> 
    </>
  )
}


export default App;
