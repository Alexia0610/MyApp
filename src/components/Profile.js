import React, { Component } from 'react';
import ImgProfile from '../images/avatar.png';
import { HashLink as Link } from 'react-router-hash-link';

class Profile extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-image">
                        <img className="activator" src={ImgProfile} alt="Iacobescu Alexia-Maria" />
                        <Link className="btn-floating halfway-fab waves-effect wave-light red">
                            <i className="material-icons activator">...</i>
                        </Link>
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">
                            Iacobescu Alexia-Maria
                        </span>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">
                            Follow Me
                            <i className="material-icons right">x</i>
                        </span>
                        <p className="flex-container">
                            <i className="fab fa-facebook-f grey-text text-darken-4 social-style"></i>
                            <i className="fab fa-instagram grey-text text-darken-4 social-style"></i>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;