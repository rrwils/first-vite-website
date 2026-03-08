const HpRectangle = ({ hp, attack }) => {
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems: "flex-start" }}>
        <span>HP: {hp}</span>
      <div
        style={{
          width: hp,
          height: 20,
          backgroundColor: "#1e2e4f",
          margin: "5px 0",
        }}
      />

        <span>Attack: {attack}</span>
      <div
        style={{
          width: attack,
          height: 20,
          backgroundColor: "#1e2e4f",
          margin: "5px 0",
        }}
      />
    </div>
  );
};

export default HpRectangle;