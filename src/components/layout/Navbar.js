import React, { Component } from 'react';
import ListItems from './ListItems';
import Logo from '../../assets/iconos/logo1.png';

export default class Navbar extends Component {

    constructor(props){
        super(props);

        this.state = {
            req : [],            
        }
    }

    componentDidMount(){        
        fetch('http://www.mocky.io/v2/5ba409112f00005b00968a9d')
        .then(res => res.json())
        .then((data) => {
            
            let arreglo = data.data.sections;            
            this.setState({ req: arreglo })
        })
        .catch(console.log)
        

    }
    
    render() {
        
        return (
            
            <div id="sidebar">
                          
                <h6 className="titulo text-center"><img className="imgPeque" src={Logo} alt=""/> Cool Dashboard</h6>
                <ul className="lista">
                {                       
                    this.state.req.map((value, index)=>{                        
                        return <ListItems name={value.section_name} key={value.id_section} icono={this.props.iconos[index]}/>                    
                    })
                }
                </ul>                
            </div>
        );
    }
}