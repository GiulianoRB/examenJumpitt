import React, { Component } from 'react';
import { Link } from 'react-router-dom';




export default class ListItems extends Component {
    
    render() {

        return (
            <li>
                <Link to="/"><i className={this.props.icono} > </i> {this.props.name}</Link>
            </li>
        );
    }
}