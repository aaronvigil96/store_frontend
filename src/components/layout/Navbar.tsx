import { Link, NavLink } from "react-router";

const Navbar = () => {
    return(
        <header className="flex justify-between items-center p-2 bg-three">
            <Link to={'/'}>
                <h2 className="text-secondary text-3xl font-black">3 Digitos</h2>
            </Link>
            <nav className="flex gap-2">
                <NavLink to={'/auth/login'} className={({isActive}) => ` btn btn-primary ${isActive ? "active-link" : ""}`}>
                    iniciar sesión
                </NavLink>
                <NavLink to={'/auth/register'} className={({isActive}) => ` btn btn-primary ${isActive ? "active-link" : ""}`}>
                    registrarse
                </NavLink>
            </nav>
        </header>
    )
}


export default Navbar;