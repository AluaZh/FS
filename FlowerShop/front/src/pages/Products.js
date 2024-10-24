import Product from "../components/product/Product"
import React, { useEffect, useState } from 'react';
import { getProducts } from "../helpers/productsList";
import { NavLink } from "react-router-dom";
import Filter from "../components/filter/Filter";


export default function Products () {
    const [products, setProducts] = useState([]); 
    const [filteredProducts, setFilteredProducts] = useState([]); 
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        getProducts().then(data => {
            setProducts(data);  
            setFilteredProducts(data); 
            setLoading(false); 
        });
    }, []); 

    const handleFilter = (searchTerm, category) => {
        const filtered = products.filter(product => {
            const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = category === "all" || product.category === category;
            return matchesSearch && matchesCategory;
        });
        setFilteredProducts(filtered);
    };
    
    if (loading) {
        return <div>Загрузка...</div>;
    }

    if (!Array.isArray(products)) {
        return <div>Продукты не найдены</div>;
    }

    console.log("products:", products)

    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Каталог букетов</h2>
                <Filter onFilter={handleFilter}/>
                <ul className="products">
                    {products.map((product, index) => (
                        <NavLink key={product.id} to={`/product/${product.id}`}>
                            <Product
                                className="product" 
                                title={product.title} 
                                img={product.imgURL}
                                description={product.description} 
                                price={product.price}
                                index={index} 
                            />
                        </NavLink>
                    ))}
                </ul>
            </div>
        </main>
    )
}