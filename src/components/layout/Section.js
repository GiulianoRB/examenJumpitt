import React, { Component } from 'react';
import sandra from '../../assets/imagenes/sandra.jpg';
import sandra2 from '../../assets/imagenes/sandra2.jpg';
import freeman from '../../assets/imagenes/freeman.jpg';
import jack from '../../assets/imagenes/jack.jpg';
import Chart from "react-apexcharts";

export default class Section extends Component {

    constructor(props){
        super(props);

        this.state = {
            req : {},
            referidos: [],
            discusion: [],
            perfil: [],
            hello: "Hello World!",
            options: {
                labels: ['Desktop', 'IOS', 'Android'],
                theme: {
                    monochrome: {
                      enabled: true
                    }
                },
                responsive: [{
                  breakpoint: 480,
                  options: {
                    chart: {
                      width: 200
                    },
                    legend: {
                      position: 'bottom'
                    }
                  }
                }]
              },
            series: [],
        }

    } 

    componentDidMount(){            
        fetch('http://www.mocky.io/v2/5ba409112f00005b00968a9d')
        .then(res => res.json())
        .then((data) => {
            let referidos = data.data.top_referrals;
            let discusion = data.data.discussions;
            let series = [data.data.users_by_device_graph.desktop, data.data.users_by_device_graph.iOS, data.data.users_by_device_graph.Android];
            let perfil = [{sandra}, {sandra2}, {freeman}, {jack}];
            this.setState({ req: data, referidos: referidos, discusion: discusion, perfil: perfil, series: series})
        })
        .catch(console.log)
    }

      
    render() {
        return (
            <div id="section">
                <div className="row ">
                    <div className="col-md-2 tituloDasboard">
                        <label className="txtDashboard">DASHBOARD</label>
                        <h4 className="txtInicio">Inicio</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                Users
                            </div>
                            <div className="card-body">
                                <label>Aqui va el grafico de lineas</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">
                                Users by device
                            </div>
                            <div className="card-body">                                
                                <Chart options={this.state.options} series={this.state.series} type="pie" width="380" />
                            </div>
                            <div className="card-footer">
                                <div className="row">
                                    <div className="col-md-6">
                                        <select class="custom-select mt-2">
                                            <option selected>Last week</option>                                
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <label> View Full report</label>
                                    </div>
                                </div>                    
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card" >
                            <div className="card-header">
                                Nuevo mensaje
                            </div>
                            <div className="card-body">
                                <input type="text" placeholder="Título mensaje" className="form-control"/>
                                <textarea name=""  cols="30" rows="10" className="form-control" placeholder="Ingresa tu mensaje"></textarea>
                                <button className="btn btn-primary btn-sm">Enviar mensaje</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-header">
                                Discussions
                            </div>
                            <ul className="list-group list-group-flush">
                                {
                                    this.state.discusion.map((value, index)=>{
                                        return <li className="list-group-item">
                                            <div className="row">
                                                <div className="row-md-2">
                                                    <img src={this.state.perfil[index]} alt="" className="imgMid"/>
                                                </div>
                                                <div className="col-md-10">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <label className="tablero">{value.userName} on {this.state.hello} - {value.date}</label>
                                                        </div>                                                        
                                                    </div>
                                                    <div className="row mensaje">
                                                        <div className="col-md-12">
                                                                {value.message}
                                                        </div>                                                        
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="btn-group btn-group-toggle botonesTablero" data-toggle="buttons">
                                                                <label class="btn active">
                                                                    <button className="btn  btn-light btn-sm">Approve</button> 
                                                                </label>
                                                                <label class="btn ">
                                                                    <button className="btn btn-light btn-sm">Reject</button> 
                                                                </label>
                                                                <label class="btn ">
                                                                    <button className="btn btn-light btn-sm">Edit</button> 
                                                                </label>
                                                            </div> 
                                                        </div>                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    })
                                }
                                
                            </ul>
                            <div className="card-footer">
                                <div className="row">
                                    <div className="col-md-6">
                                        <select class="custom-select mt-2">
                                            <option selected>Last week</option>                                
                                        </select>
                                    </div>
                                    <div className="col-md-6 text-right">
                                        <label>View Full report</label>
                                    </div>
                                </div>                    
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-header">
                                Top referrals
                            </div>
                            <ul className="list-group list-group-flush">
                                {                                    
                                    this.state.referidos.map((value)=>{
                                        return <li className="list-group-item">
                                            <div className="row">
                                                <div className="col-md-6 nombreRef">
                                                    {value.referral_name}
                                                </div>
                                                <div className="col-md-6 valorRef text-right">
                                                    {value.quantity}
                                                </div>
                                            </div> 
                                        </li>
                                    })
                                }                                
                            </ul>
                            <div className="card-footer">
                                <div className="row">
                                    <div className="col-md-6">
                                        <select class="custom-select mt-2">
                                            <option selected>Last week</option>                                
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <label>Full report</label>
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