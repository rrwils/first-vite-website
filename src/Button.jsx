import { palette } from "./Highlight";

const Button = ({ selectedType, onSelect }) => {
  const types = ["All", ...palette.map((p) => p.type)];

  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      {types.map((type) => {
        const isSelected = type === selectedType;
        const paletteItem = palette.find((p) => p.type === type);
        const backgroundColor = paletteItem?.color ?? "#ddd";
        const color = paletteItem?.fontColor ?? "black";

        return (
          <button
            key={type}
            onClick={() => onSelect(type)}
            style={{
              backgroundColor,
              color,
              cursor: "pointer",
              border: isSelected ? "2px solid #333" : "1px solid rgba(0,0,0,0.2)",
              borderRadius: 999,
              padding: "6px 12px",
              fontWeight: isSelected ? 700 : 500,
            }}
          >
            {type}
          </button>
        );
      })}
    </div>
  );
};

export default Button;
