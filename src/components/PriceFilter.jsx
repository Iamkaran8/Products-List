import { useDispatch } from "react-redux"
import { filterPrice } from "../redux/slices/ProductsSlice"

export const PriceFilter = () => {
    const dispatch = useDispatch()
    const handleChange = (val) => {
        dispatch(filterPrice(val))
    }
    return (
        <>
            <div>
                <select onChange={(e) => handleChange(e.target.value)} className="border rounded-sm border-pink-400 px-2 py-1">
                    <option value={"Default"}>Default</option>
                    <option value={"Low"} >Low to High</option>
                    <option value={"High"} >High to Low</option>
                </select>
            </div>
        </>
    )
}