import { useDispatch, useSelector } from "react-redux"
import { category, filterCategories } from "../redux/slices/ProductsSlice"
import { CategoriesFilter } from "./CategoriesFilter"
import { PriceFilter } from "./PriceFilter"
import { SearchBar } from "./SearchBar"

export const Filters = () => {



    return (
        <>
            <div className="border m-2 p-2 rounded-sm border-sky-300 shadow-md flex flex-col gap-4 justify-between py-4">
                <div>
                    <h3 className="text-[20px]">Filters</h3>
                </div>
                <div className="gap-4 flex flex-col" >
                    <SearchBar />
                    <CategoriesFilter />
                    <PriceFilter />
                </div>
            </div>
        </>
    )
}