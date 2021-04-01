import React, { Component } from 'react';

class Education extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-content">
                        <h6><strong>EDUCATION</strong></h6>
                        <table className="striped">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>2019 - Present</td>
                                    <td>Bachelor's Degree in Software Development and Economics
                                        Academy of Economic Studies, Faculty of Cibernetics, Statistics and Economic Informatics,
                                        Specialization in Econimic Informatics
                                    </td>
                                </tr>
                                <tr>
                                    <td>2015 - 2019</td>
                                    <td>Profile: Mathematics-Informatics-Bilingual(Romanian-English)
                                        "Traian" National College, Drobeta-Turnu-Severin
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Education;