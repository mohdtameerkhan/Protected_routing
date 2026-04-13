import { useContext } from 'react';
import {Link} from 'react-router-dom';
import { Context } from '../context/AuthContext';

const Nav = ()=>{

    const {userValid} = useContext(Context)

    return(
        <div>
            <ul>
                <li><Link to='/'>Home</Link></li>   
                <li><Link to='about'>About</Link></li>
                <li><Link to='login'>Login</Link></li>
                <li><Link to='dashboard'>Dashboard</Link></li>
            </ul>
        </div>
    )
}

export default Nav;