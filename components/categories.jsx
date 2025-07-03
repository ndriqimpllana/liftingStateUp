import { useState } from "react";

const CategoryDropdown = () => {
    const [catValue, setCatValue] = useState('')
    return (
        <div>
            <select value={catValue} onChange={e => setCatValue(e.target.value)}>
                <option value="">All</option>
                <option value="clothing">Clothing</option>
                <option value="electronics">Electronics</option>
                <option value="home">Home</option>
            </select>
        </div>
    );
}

export default CategoryDropdown