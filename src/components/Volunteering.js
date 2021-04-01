import React, { Component } from 'react';

class Volunteering extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-content">
                        <h6><strong>VOLUNTEERING</strong></h6>
                        <div className="row">
                            <div className="col s12 m4 l4 xl4">
                                <p className="teal year_exp white-text">
                                  October
                                  <strong>2020</strong> - Present 
                                </p>
                            </div>
                            <div className="col s12 m8 l8 xl8">
                                <blockquote className="no-pad">
                                    <h6 className="no-pad mt-bottom">
                                        <strong>BOS Romania</strong>
                                    </h6>
                                </blockquote>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12 m4 l4 xl4">
                                <p className="teal year_exp white-text">
                                  September
                                  <strong>2018</strong> - August <strong>2019</strong> 
                                </p>
                            </div>
                            <div className="col s12 m8 l8 xl8">
                                <blockquote className="no-pad">
                                    <h6 className="no-pad mt-bottom">
                                        <strong>Lions Club Drobeta Turnu Severin</strong>
                                    </h6>
                                </blockquote>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12 m4 l4 xl4">
                                <p className="teal year_exp white-text">
                                  September
                                  <strong>2016</strong> - June <strong>2017</strong> 
                                </p>
                            </div>
                            <div className="col s12 m8 l8 xl8">
                                <blockquote className="no-pad">
                                    <h6 className="no-pad mt-bottom">
                                        <strong>Scientia Nemus Organization - "Active Youth" Club</strong>
                                    </h6>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Volunteering;