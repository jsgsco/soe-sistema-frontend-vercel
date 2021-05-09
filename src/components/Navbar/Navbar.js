import { List } from 'react-bootstrap-icons'

import './Navbar.sass'

const Navbar = () => {

    //TODO: Falta agregar funcionalidad al boton List

    return (
        <div className="nav">
            <div className="nav_nav">
                Navegacion
            </div>
            <List 
                size={26} 
                className="nav_menu"
            />
        </div>
    )
}

export default Navbar
