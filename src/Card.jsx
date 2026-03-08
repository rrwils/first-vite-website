import HpRectangle from "./HpRectangle";
import Highlight from "./Highlight";
import FavoritesToggle from "./FavoritesToggle";

const Card = ({ data, hoveredIndex, setHoveredIndex, baseColor, hoverColor }) => {
    return (
        <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(0, 250px))",
                gap: "10px 10px",
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
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <h2 style={{ margin: 0 }}>{d.name}</h2>
                        <FavoritesToggle />
                    </div>
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${d.id}.png`}
                      alt={d.name}
                      width="100"
                      height="100"
                      style={{ display: "block", margin: "0 auto" }}
                    />
                        <p style={{margin: 0}}><Highlight type={d.type}>{d.type}</Highlight></p>
                        <HpRectangle hp={d.hp} attack={d.attack} />
                    </div>
                );
            })}
        </div>
    )
}

export default Card;