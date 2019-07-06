import React, { Component } from 'react';
import Lana from '../../assets/imagenes/lana.jpg';

export default class Header extends Component {
    constructor(props){
        super(props);

        this.state = {
            req : {}
        }
    }

    componentDidMount(){        
        fetch('http://www.mocky.io/v2/5ba409112f00005b00968a9d')
        .then(res => res.json())
        .then((data) => {
            this.setState({ req: data })
        })
        .catch(console.log)
    }
    
    render() {
        return (
            <div className="row main">
                <div className="col-md-9 buscar">
                    <label htmlFor=""><i className="fas fa-search"> </i> Buscar...</label>
                </div>
                <div className="col-md-3">
                    <div className="row">
                        <div className="col-md-2 bell text-center">
                            <i className="fas fa-bell"><span className="badge badge-danger rounded-circle notificaciones">{this.state.req.notifications_count}</span></i>
                                                       
                        </div>
                        <div className="col-md-10">
                            <div className="row">
                                <div className="col-md-3">
                                    <img src={Lana} alt="" className="rounded-circle img-responsive mt-2 imgMid"/>
                                </div>
                                <div className="col-md-5">
                                    <label className="nombreUsuario mt-2">{this.state.req.userName}</label>
                                </div>
                                <div className="col-md-4">
                                    <div className="dropdown mt-2">
                                        <button className="btn btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" href="#">Perfil</a>
                                            <a className="dropdown-item" href="#">FAQ</a>
                                            <a className="dropdown-item" href="#">Cerrar sesión</a>
                                        </div>
                                    </div>
                                </div>
                            </div>                   
                        </div>
                    </div>
                </div>
            </div>   
        );
    }
}