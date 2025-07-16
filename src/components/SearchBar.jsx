import { useDispatch } from "react-redux"
import { searchQuery } from "../redux/slices/ProductsSlice";

export const SearchBar = () => {
    const dispatch = useDispatch();
    const handleChange = (query) => {
        dispatch(searchQuery(query))
    }
    return (
        <>
            <input className="border border-emerald-400 rounded-sm px-2 py-1" type="text" placeholder="Search..." onChange={(e) => handleChange(e.target.value)} />
        </>
    )
}