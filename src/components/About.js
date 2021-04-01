import React from 'react';

function About() {
    return (
        <div>
            <div className="card">
                <div className="card-content">
                    <h6 className="mt-bottom">
                        <strong>ABOUT ME</strong>
                    </h6>
                    <p className="grey-text">
                        Hi, I am friendly, kind, curious and very keen on learning new things. 
                    </p>
                </div>
                <div className="card-action">
                    <h6>
                        <strong>PERSONAL INFO</strong> 
                    </h6>
                    <div className="row mt">
                        <div className="col s12 m6l6 xl6">
                            <p><strong>Adress:</strong> Drobeta-Turnu-Severin, MH </p>
                            <p><strong>Email:</strong> alexiaiacobescu19@gmail.com </p>
                            <p><strong>Phone:</strong> 0744585870 </p>
                        </div>
                        <div className="s12 m6 l6 xl6">
                        <p><strong>First Language:</strong> Romanian </p>
                        <p><strong>Second Language:</strong> English </p>
                        <p><strong>Third Language:</strong> French </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;