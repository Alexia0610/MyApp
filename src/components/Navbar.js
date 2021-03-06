import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

class Navbar extends Component {
    render() {
        return (
            <>
                <nav className='red lighten-3'>
                    <div className='container'>
                        <div className='nav-wrapper'>
                            <Link to='/' className='brand-logo'>
                                Alexia's Personal Page
                            </Link>
                            <Link to='/' data-target='side-nav' className='sidenav-trigger'>
                                <i className='material-icons'>menu</i>
                            </Link>
                            <ul className='right hide-on-med-and-down'>
                                <li>
                                    <Link to='/'>
                                        <i className='fas fa-home'></i> Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/skills'>
                                        <i className='fas fa-copy'></i> Skills
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/education'>
                                        <i className='fas fa-graduation-cap'></i> Education
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/volunteering'>
                                        <i className='fas fa-id-badge'></i> Volunteering
                                    </Link>
                                </li> 
                                <li>
                                    <Link to='/search'>
                                        <i className='fas fa-search'></i> Search
                                    </Link>
                                </li> 
                            </ul>
                        </div>
                    </div>
                </nav>
                <ul className='sidenav' id='side-nav'>
                                <li>
                                    <Link to='/'>
                                        <i className='fas fa-home'></i> Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/skills'>
                                        <i className='fas fa-copy'></i> Skills
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/education'>
                                        <i className='fas fa-graduation-cap'></i> Education
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/volunteering'>
                                        <i className='fas fa-id-badge'></i> Volunteering
                                    </Link>
                                </li> 
                            </ul>
            </>
        )
    }
}

export default Navbar;