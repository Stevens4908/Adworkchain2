import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import foto from '../../assets/img/Grupo1.JPG'
import '../../styles/estilos_nosotros.css'

function FotoNosotros () {
    return ( 

        <React.Fragment>

        <div className="container-fluid   contain_nosotros">
            <div className="row justify-content-center">
                <div className="col-md-9  ">
                        <p className="titulo_nosotros text-center mt-5">SOBRE NOSOTROS</p>
                            <div className="row justify-content-center">
                                <div className="col-md-7">
                                    <img className="foto_nosotros img-fluid mx-auto d-block" style={{opacity:"1"}} src={foto} ></img>
                                </div>
                            </div>
                              
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-sm-12 col-md-11 ">
                        <p className="text-center mt-3 color_nosotros">En ADWORKCHAIN somos  un equipo de desarrolladores que
                        integramos tecnologías emergentes como software, inteligencia artificial, realidad 
                        virtual, realidad aumentada y áreas asociadas como diseño gráfico, producción audiovisual
                        y marketing, con la finalidad de dar soluciones que permitan que nuestros clientes logren sus objetivos. </p> 
                </div>
            </div>
        </div>

        </React.Fragment>

     );
}

export default FotoNosotros;