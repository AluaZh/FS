import React, { useState } from "react";
import "./style.css"

export default function Filter({ onFilter }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [category, setCategory] = useState("all");

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
        onFilter(e.target.value, category);
    };

    const handleSelectChange = (e) => {
        setCategory(e.target.value);
        onFilter(searchTerm, e.target.value);
    };

    return (
        <div className="filter">
            <input 
                type="text" 
                placeholder="Поиск" 
                value={searchTerm}
                onChange={handleInputChange}
                className="filte-input"
            />
            <select value={category} onChange={handleSelectChange} className="filte-select">
                <option value="all"></option>
                <option value="1">Авторские букеты</option>
                <option value="2">Монобукеты</option>
            </select>
        </div>
    );
}
