import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { authenticatedNavItems, unAuthenticatedNavItems } from '../../config/header.config';

export const HeaderComponent = ({ loggedIn }: any) => {
    const [navItems, setNavItems] = useState(loggedIn ? [] : unAuthenticatedNavItems);
    const navList = navItems.map(({ to, label }: any, i: number) => 
        <li key={i}>
            <Link to={to}>{label}</Link>
        </li>
    );
    
    return (
        <header className='header d-inline-flex justify-content-space-between'>
            <div className='logo'>
                <h2>AttainU Assignment</h2>
            </div>
            <nav className='nav-list'>
                <ul className='nav-list d-inline-flex'>
                    {navList}
                </ul>
            </nav>
            
        </header>
    );
}