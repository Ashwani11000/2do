import React from 'react';
import {Link} from 'react-router-dom';

const linkStyle= {
    color: '#fff',
    textDecoration: 'none'
}

function Header(){
    return (
        <header style={headerStyle}>
            <h1>
                TodoList 
            </h1>
            <Link style={linkStyle} to="/2do">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
            
        </header>
    )
}

const headerStyle={
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding:'10px'
}

export default Header;