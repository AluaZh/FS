// src/components/navbar/Navbar.js
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";
import "./style.css";
import logo from "../../img/logo.png";
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import Modal from './Modal'; // Ensure this path is correct

const Navbar = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleAvatarClick = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const activeLink = "nav-list__link nav-list__link--active";
    const normalLink = "nav-list__link";

    return (
        <>
            <nav className="nav">
                <div className="container">
                    <div className="nav-row">
                        <NavLink to="/" className="logo">
                            <img src={logo} alt="Logo" />
                        </NavLink>

                        <div className="nav-list-container">
                            <ul className="nav-list">
                                <li className="nav-list__item">
                                    <NavLink to="/" className={({ isActive }) => (isActive ? activeLink : normalLink)}>Главная</NavLink>
                                </li>
                                <li className="nav-list__item">
                                    <NavLink to="/products" className={({ isActive }) => (isActive ? activeLink : normalLink)}>Каталог</NavLink>
                                </li>
                                <li className="nav-list__item">
                                    <NavLink to="/contacts" className={({ isActive }) => (isActive ? activeLink : normalLink)}>Не годен</NavLink>
                                </li>
                            </ul>
                            {/* Place theme button next to nav list */}
                            <div className="theme-button-container">
                                <BtnDarkMode />
                            </div>
                        </div>

                        <div className="avatar-container" onClick={handleAvatarClick}>
                            <Avatar size={75} icon={<UserOutlined />} />
                        </div>
                    </div>
                </div>
            </nav>

            {isModalOpen && <Modal onClose={closeModal} />}
        </>
    );
};

export default Navbar;
