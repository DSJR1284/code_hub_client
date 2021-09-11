import React from 'react'
import { NavLink } from 'react-router-dom';

 const Nav = () => {
    return (
        <div className='navbar'>
            <ul>                
                <NavLink to="/about" exact >
                <li>About</li>
                </NavLink>

                <NavLink to="/docs" exact >
                <li>Docs</li>
                </NavLink>

                <NavLink to="/hub" exact >
                <li>Hub</li>  
                </NavLink>  
            </ul>
        </div>
    )
}

export default Nav;
