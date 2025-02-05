import { Outlet } from "react-router";
import Navbar from "../../components/layout/Navbar";

const AuthPage = () => {
    return(
        <>
            <Navbar/>
            <div className="max-w-max border mx-auto bg-secondary mt-2 rounded-sm p-2">
                <h2 className="text-3xl">Autenticación</h2>
                <Outlet/>
            </div>
        </>
    )
}

export default AuthPage;