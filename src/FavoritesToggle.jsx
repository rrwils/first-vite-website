import { useState } from "react";

const FavoritesToggle = ( {initiallyChecked = false, onToggle }) => {
    const [checked, setChecked] = useState(initiallyChecked);

    const handleClick = () => {
        const next = !checked;
        setChecked(next);
        onToggle?.(next);
    };

    return (
        <span
            onClick={handleClick}
            style={{ cursor: "pointer", display: "inline-flex", alignItems: "center", marginTop: "15px"}}
            className={checked ? "favorite checked" : "favorite"}
        >
            <i className={checked ? "fas fa-star" : "far fa-star" }/>
            
        </span>
    );
};

export default FavoritesToggle;