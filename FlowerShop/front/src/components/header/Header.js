import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    Создайте уникальный букет для дамы
                </h1>
                <div className="header__text">
                    <p></p>
                </div>
                <a href="#" className="btn"><Link to="/arcane">Заказать</Link></a>
            </div>
        </header>
    );
}
