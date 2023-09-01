
// import { useContext } from "react";
// import { CategoriesContext } from "../../components/context/categories.context";
// import { ProductContext } from "../../components/context/products.context";
// import CategoryPreview from "../../components/category-preview/category-preview.component";
import { Route, Routes } from 'react-router-dom';
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import "./shop.styles.scss";


const Shop = () => {

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>

    )
}

export default Shop;