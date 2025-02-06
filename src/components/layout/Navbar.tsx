import { FiSearch } from "react-icons/fi";
import { Link, NavLink } from "react-router";

const Navbar = () => {
    return(
        <header className="flex justify-between items-center px-2 py-4 shadow mb-2">
            <Link to={'/'}>
                <h2 className="text-three text-3xl font-black">3 Digitos</h2>
            </Link>
            <label className="relative" htmlFor="search">
                <div className="absolute top-1 left-1">
                    <FiSearch />
                </div>
                <input type="text" className="rounded-sm pl-6 outline-none border border-gray-500 bg-gray-300 focus:border-blue-400" placeholder="azucar" id="search"/>
            </label>
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