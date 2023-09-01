import { createContext, useEffect, useState } from "react";

// import PRODUCTS from "../../shop-data.json";
import { getCategoriesAndDocument } from "../../utils/firebase/firebase.utils";

// import SHOP_DATA from "../../shop-data";

export const CategoriesContext = createContext({
    categoriesMap: {}
});
export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categorymap = await getCategoriesAndDocument();
            setCategoriesMap(categorymap)
        }

        getCategoriesMap()
    }, [])



    const value = { categoriesMap }
    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    )
}