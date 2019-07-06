import React, { Component } from 'react';

export default class Footer extends Component {    
    render() {
        return (
            <div className="row footer">
                <div className="col-md-10">
                    <ul className="nav pt-3">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Service</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Blog</a>
                        </li>
                    </ul>                    
                </div>
                <div className="col-md-2">
                    <label className="copyright pt-4">Copyright <i className="far fa-copyright"></i> 2018</label>
                </div>
            </div>
        );
    }
}