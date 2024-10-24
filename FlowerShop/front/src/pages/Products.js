import Product from "../components/product/Product"
import React, { useEffect, useState } from 'react';
import { getProducts } from "../helpers/productsList";
import { NavLink } from "react-router-dom";


export default function Products () {
    const [products, setProducts] = useState([]);  
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        getProducts().then(data => {
            setProducts(data);  
            setLoading(false); 
        });
    }, []); 
    
    if (loading) {
        return <div>Загрузка...</div>;
    }

    if (!Array.isArray(products)) {
        return <div>Продукты не найдены</div>;
    }

    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Каталог букетов</h2>
                <ul className="products">
                    {products.map((product, index) => (
                        <NavLink key={product.id} to={`/product/${product.id}`}>
                            <li className="product">
                                <img 
                                    src={product.imgURL} 
                                    alt={product.title} 
                                    className="project__img" 
                                />
                                <h3 className="project__title">
                                    {product.title}
                                </h3>
                            </li>
                        </NavLink>
                    ))}
                </ul>
            </div>
        </main>
    )
}