import { NavLink } from "react-router-dom"
import "./style.css"
import { useEffect, useState } from "react";
import { getProducts } from "../../helpers/productsList";
import Product from "../../pages/Product";

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
                <h2 className="title-1">Продукты</h2>
                <ul className="products">
                    {products.map((product, index) => (
                        <Product
                            key={index}
                            title={product.title}
                            img={product.img}
                            index={index}
                        />
                    ))}
                </ul>
            </div>
        </main>
    );

    // return (
    //     <NavLink to={`/project/${index}`}>
    //         <li className="project">
    //             <img 
    //                 src={img} 
    //                 alt={title} className="project__img" 
    //             />
    //             <h3 className="project__title">
    //                 {title}
    //             </h3>
    //         </li>
    //     </NavLink>
    // )
}