import React, { Component } from 'react';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Sidebar extends Component {
    
    render() {
        return (
            <ul>
                <li><i><FontAwesomeIcon icon={faHome} /> </i>Inicio</li>                
                <li>Correos</li>
                <li>Crear plantilla</li>
                <li>Información</li>
                <li>Data</li>
                <li>Usuarios</li>
                <li>Historial</li>
            </ul>
        );
    }
}