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
            style={{
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 28,
                height: 28,
                lineHeight: 1,
            }}
            className={checked ? "favorite checked" : "favorite"}
        >
            <i className={checked ? "fas fa-star" : "far fa-star"} style={{ fontSize: 18 }} />
        </span>
    );
};

export default FavoritesToggle;