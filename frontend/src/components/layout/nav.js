import { Link } from 'react-router-dom';

const Nav = (props) => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Peliculas</Link></li>
                <li><Link to="/Candy">Candy</Link></li>
                <li><Link to="/Buscar">Buscar</Link></li>
                <li><Link to="/Servicio">Servicio</Link></li>
                <li><Link to="/Ingresar">Ingresar</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;