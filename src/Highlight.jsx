export const palette = [
  { type: "Grass", color: "#469e3a", fontColor: "white"},
  { type: "Fire", color: "#df3d40", fontColor: "white"},
  { type: "Water", color: "#0c5eb4", fontColor: "white" },
  { type: "Electric", color: "#52d4c9", fontColor: "black" },
  { type: "Psychic", color: "#F28E2B", fontColor: "white" },
  { type: "Normal", color: "#b7aca8", fontColor: "black" },
  { type: "Dragon", color: "#e548ed", fontColor: "white" },
  { type: "Ghost", color: "#272122", fontColor: "white" },
  { type: "Fighting", color: "#9a5f3d", fontColor: "white" },
  { type: "Rock", color: "#a56ab1", fontColor: "white" },
];

const Highlight = ({ children, type }) => {
  const match = palette.find(
    (p) => p.type === type
  );
  const backgroundColor = match?.color ?? "rgba(0,0,0,0.08)";
  const textColor = match?.fontColor ?? "rgba(0,0,0,0.08)";

  return (
    <span
      style={{
        backgroundColor,
        color: textColor,
        padding: "2px 6px",
        borderRadius: 4,
        fontWeight: 600,

      }}
    >
      {children}
    </span>
  );
};

export default Highlight;
