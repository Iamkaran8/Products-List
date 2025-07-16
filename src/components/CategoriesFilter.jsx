import { useDispatch, useSelector } from "react-redux";
import { category, filterCategories } from "../redux/slices/ProductsSlice";

export const CategoriesFilter = () => {
    const categories = useSelector(category);
    const dispatch = useDispatch();

    const handleChange = (data) => {
        dispatch(filterCategories(data))
        console.log(data)
    }
    return (
        <>
           <div>
             <select onChange={(e) => handleChange(e.target.value)} className="border rounded-sm px-2 py-1 border-purple-400">
                <option value={"All Categories"}>All Categories</option>
                {categories.map((data, i) => <option key={i} value={data}>{data}</option>)}
            </select>
           </div>
        </>
    )
}