import React from "react";

const ServicioPage = (props) => {
    return(
        
        <header>
            <div className="holder">
                <div className="container">
                    <div className="row">
                        <div className="col"></div>
                    </div>
                </div>
                <nav>
                    <ul>
                        <li><a href="peliculas.html">PELICULAS</a></li>
                        <li><a  href="candy.html">CANDY</a></li>
                        <li><a class="activo" href="servicio.html">SERVICIO</a></li>
                        <li><a href="buscar.html">BUSCAR</a></li>
                        <li><a href="ingresar.html">INGRESAR</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default ServicioPage;