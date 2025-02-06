import { useQuery } from "@tanstack/react-query";
import Navbar from "../components/layout/Navbar";
import { Product } from "../interfaces/product.interface";
import { Link } from "react-router";

const HomePage = () => {

    const getProducts = async () => {
        const res = await fetch('http://localhost:3000/api/product');
        if(!res.ok) throw new Error('Error al obtener los productos');
        return await res.json();
    }

    const {data, error} = useQuery({
        queryKey: ['products'],
        queryFn: getProducts
    });

    return(
        <>
            <Navbar/>
            <div className="flex gap-2 max-w-5xl mx-auto p-2 justify-center">
                {
                    data?.map((product:Product) => (<CardProduct key={product.id} name={product.name} category={product.category} price={product.price}/>))
                }
            </div>
        </>
    )
}

const CardProduct:React.FC<Product> = ({name, id, category, price}) => {
    return(
        <div className="w-48 h-72 shadow rounded-md p-2 flex flex-col" key={id}>
            <div className="bg-slate-100 w-full h-30 rounded-sm">
            </div>
            <div className="flex flex-col flex-1 justify-between h-full">
                <div>
                    <p className="font-bold">${price}</p>
                    <h2 className="text-xl font-bold capitalize leading-2 mt-3 text-three">{name}</h2>
                    <Link to={''} className="font-thin leading-3 text-slate-400 transition-colors duration-300 ease-in-out hover:text-black">{category?.name}</Link>
                </div>
                <button className="btn btn-primary">Agregar al carrito</button>
            </div>
        </div>
    )
};

export default HomePage;