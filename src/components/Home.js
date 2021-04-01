import React, { Component, Profiler } from 'react';
import Navbar from './Navbar';
import Profile from './Profile';
import Skills from './Skills';
import Education from './Education';
import Volunteering from './Volunteering';
import About from './About';


class Home extends Component {
    render() {
        return (
            <section>
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col s12 m4 l3">
                          <Profile />  
                        </div>
                        <div className="col s12 m8 l9">
                            <About />
                            <Skills />
                            <Education />
                            <Volunteering />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}



export default Home;