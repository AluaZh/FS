import { NavLink } from "react-router-dom"
import "./style.css"
import { useEffect, useState } from "react";
import { getProducts } from "../../helpers/productsList";
import Product from "../../pages/Product";

export default function Products ({ title, img, index, description, price }) {
    return (
        <NavLink to={`/project/${index}`}>
            <li className="project">
                <img 
                    src={img} 
                    alt={title} className="project__img" 
                />
                <h3 className="project__title">
                    {title}
                </h3>
                <p className="project__price">
                    {'Цена: ' + Math.round(price) + ' тг'}
                </p>
                <h4 className="project__description">
                    {description}
                </h4>
            </li>
        </NavLink>
    )
}