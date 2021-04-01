import React, { Component } from 'react';

class Skills extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-content">
                        <h6>
                            <strong>PROFESSIONAL SKILLS</strong>
                        </h6>
                        <div className="row mt-top">
                            <div className="col s6">
                                <p>C/C++</p>
                                <div className="progress red lighten-5">
                                    <div 
                                        className="determinate red lighten-2" 
                                        style={{ width: '89%' }}>
                                    </div>
                                </div>
                            </div>
                            <div className="col s6">
                                <p>OOP</p>
                                <div className="progress red lighten-5">
                                    <div 
                                        className="determinate red lighten-2" 
                                        style={{ width: '90%' }}>
                                    </div>
                                </div>
                            </div>
                            <div className="col s6">
                                <p>Java</p>
                                <div className="progress red lighten-5">
                                    <div 
                                        className="determinate red lighten-2" 
                                        style={{ width: '50%' }}>
                                    </div>
                                </div>
                            </div>
                            <div className="col s6">
                                <p>C#</p>
                                <div className="progress red lighten-5">
                                    <div 
                                        className="determinate red lighten-2" 
                                        style={{ width: '50%' }}>
                                    </div>
                                </div>
                            </div>
                            <div className="col s6">
                                <p>PL/SQL</p>
                                <div className="progress red lighten-5">
                                    <div 
                                        className="determinate red lighten-2" 
                                        style={{ width: '60%' }}>
                                    </div>
                                </div>
                            </div>
                            <div className="col s6">
                                <p>PYTHON</p>
                                <div className="progress red lighten-5">
                                    <div 
                                        className="determinate red lighten-2" 
                                        style={{ width: '30%' }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills