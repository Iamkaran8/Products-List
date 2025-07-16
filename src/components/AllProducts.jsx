import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { FetchProducts } from "../api/FetchProducts";
import { AllProducts, loadingState } from "../redux/slices/ProductsSlice";
import '../App.css'
import { Skeleton } from "./Skeleton";

export const AllProductsList = () => {

    const dispatch = useDispatch();
    const products = useSelector(AllProducts);
    const loading = useSelector(loadingState)

    useEffect(() => {
        dispatch(FetchProducts())
    }, [])


    return (
        <>
            <div className="flex flex-wrap gap-4 justify-center p-2">
                {loading ? (<Skeleton />) : (products.length === 0 ? <div className="flex justify-center items-center h-100"> <h3>No Products Found...</h3> </div> : products.map((prod) => (
                    <div key={prod.id} className="border border-slate-100 rounded-xl w-[100%] md:w-[45%] lg:w-[30%] flex flex-col items-center   gap-2 p-4 hover:shadow-xl">
                        <img className="h-[200px] w-[150px]" src={prod.image} alt={prod.title} />
                        <h4 className="text-center text-[20px]">{prod.title}</h4>
                        <div className="flex ">
                            <h4 >Category : </h4><p className="text-bold  "> {prod.category}</p>
                        </div>
                        <div className="flex ">
                            <h4 >Price : </h4><p className="text-bold  ">$ {prod.price}</p>
                        </div>

                    </div>
                )))}

            </div>
        </>
    )
}