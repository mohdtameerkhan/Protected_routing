import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {users} from '../data/user';




const Login =() =>
{
    const [name,setName] = useState('')
    const[userexist,setUserexist] = useState(true)
    const navigate = useNavigate()
    
    const handlesubmit = (e)=>
    {
        e.preventDefault();
          
          const foundName = users.find(user => user.name === name )
           if (foundName)
           {
            alert('user found')
            setName('')
            return navigate('/dashboard')
           }
           else {
            alert('user not found create and account')
            setUserexist(false)
           }
    }    
        return(
userexist ? <div>  
            <h1>Login Page</h1>
            <form onSubmit={handlesubmit}> 
            <input type='text' required placeholder='Enter your Name' value={name}  onChange={(e)=>{setName(e.target.value)}} /> <br />
             <br/>
            <button type='button '>login</button>
            </form>
        </div> :
        <div>
            <h1>Register Page</h1>
            <form>
            <input type='text' required placeholder='Enter NEW USER' value={name}  onChange={(e)=>{setName(e.target.value)}} /> <br />
             <br/>
              <button type='button '>New User</button>
            </form>
        </div> 
    )
}
export default Login;