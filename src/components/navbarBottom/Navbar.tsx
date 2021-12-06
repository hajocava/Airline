import { NavLink } from "react-router-dom"
import './styles.sass'

export const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="icons-container">
                <NavLink to="/boletos" >
                    <i className="fas fa-ticket-alt"></i>
                </NavLink>
                <NavLink to="/" >
                    <i className="fas fa-compass"></i>
                </NavLink>
                <NavLink to="/carrito" >
                    <i className="fas fa-shopping-cart"></i>
                </NavLink>
            </div>
        </nav>
    )
}
