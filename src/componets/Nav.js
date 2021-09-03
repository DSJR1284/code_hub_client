import React from 'react'

 const Nav = () => {
    return (
        <div className='navbar'>
            <ul>
                <NavLink to="/hub" exact >
                <li>Hub</li>  
                </NavLink>      

                <NavLink to="/about" exact >
                <li>About</li>
                </NavLink>

                <NavLink to="/docs" exact >
                <li>Docs</li>
                </NavLink>
            </ul>
        </div>
    )
}

export default Nav;
