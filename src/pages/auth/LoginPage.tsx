import { Link } from "react-router";

const LoginPage = () => {
    return(
        <section>
            <h3 className="text-2xl">Iniciar sesión</h3>
            <form className="flex flex-col gap-1">
                <div className="flex items-center">
                    <label className="w-24" htmlFor="email">Email:</label>
                    <input className="border pl-1 rounded-sm" type="email" id="email"/>
                </div>
                <div className="flex items-center">
                    <label className="w-24" htmlFor="password">Contraseña:</label>
                    <input className="border pl-1 rounded-sm" type="password" id="password"/>
                </div>
                <p>¿No tenes cuenta? <Link to={'/auth/register'} className="font-bold hover:text-primary transition-colors duration-300 ease-in-out">Registrate</Link></p>
                <button className="px-4 py-2 cursor-pointer rounded-lg font-medium capitalize bg-three text-secondary hover:bg-slate-500 hover:text-white">Iniciar</button>
            </form>
        </section>
    )
}

export default LoginPage;