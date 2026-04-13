import App from './App';


import Home from './component/Home';
import About from './component/About';
import Dashboard from './component/Dashboard';
import Login from './component/Login';
import {createBrowserRouter} from 'react-router-dom';



export const approuter = createBrowserRouter([     //configuration Array
  {
    path:'/',
    element:<App/>,
    children:   [
      {
 index:true,
 element:<Home/>
      },  
{
  path:'about',
  element:
    <About/>
},
{
  path:'login',
  element:<Login/>
},
{
  path:'dashboard',
  element:<Dashboard/> 
}
]
  }
])
