import {useContext, useState} from 'react';
import {users} from '../data/user';
import { Context } from '../context/AuthContext';




const Login =() =>
{
    const [name,setName] = useState('')
     const {setUserValid} = useContext(Context)
    
    const handlesubmit = (e)=>
    {
        e.preventDefault();
          
          const foundName = users.find(user => user.name === name )
           if (foundName)
           {
            setUserValid(true)
            alert('user found')
            setName('')
           }
           else {
            alert('user not found create and account')
           }
    }    
        return( <div>  
            <h1>Login Page</h1>
            <form onSubmit={handlesubmit}> 
            <input type='text' required placeholder='Enter your Name' value={name}  onChange={(e)=>{setName(e.target.value)}} /> <br />
             <br/>
            <button type='button '>login</button>
            </form>
        </div> 
    )
}
export default Login;