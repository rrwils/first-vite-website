import HpRectangle from "./HpRectangle";
import Highlight from "./Highlight";
import FavoritesToggle from "./FavoritesToggle";

const Card = ({ data, hoveredIndex, setHoveredIndex, baseColor, hoverColor }) => {
    return (
        <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(0, 250px))",
                gap: "8px 24px",
                maxWidth: 1000,
                fontFamily: "sans-serif",
                justifyContent: "center",
              }}>
            {data.map((d, i) => {
                const backgroundColor = i === hoveredIndex ? hoverColor : baseColor;

                return (
                    <div
                        className="card"
                        key={i}
                        style={{ backgroundColor, cursor: "pointer" }}
                        onMouseEnter={() => setHoveredIndex(i)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <h2>{d.name}</h2>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${d.id}.png`} alt={d.name} />
                        <p><Highlight type={d.type}>{d.type}</Highlight></p>
                        <HpRectangle hp={d.hp} attack={d.attack} />
                        <FavoritesToggle />
                    </div>
                );
            })}
        </div>
    )
}

export default Card;