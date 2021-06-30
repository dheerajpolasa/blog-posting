import React from 'react';

import './Navbar.css';

function Navbar(props) {
    const { user, signOut, signInWithGoogle } = props;
    console.log(signOut, signInWithGoogle);
    return (
        <nav className="nav">
            <li className="logo">Blog App</li>
            <div>
                <li>Products</li>
                <li>Pricing</li>
                <li>Docs</li>
                <li>Company</li>
            </div>
            <li className="button" onClick={user ? signOut : signInWithGoogle }>{user ? 'SignOut' : 'SignIn' }</li>
        </nav>
    )
}

export default Navbar
