const HpRectangle = ({ hp, attack }) => {
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems: "flex-start", marginTop: 20 }}>
        <span style={{fontSize: "12px"}}>HP: {hp}</span>
      <div
        style={{
          width: hp,
          height: 10,
          backgroundColor: "#1e2e4f",
          margin: "5px 0",
        }}
      />

        <span style={{fontSize: "12px"}}>Attack: {attack}</span>
      <div
        style={{
          width: attack,
          height: 10,
          backgroundColor: "#1e2e4f",
          margin: "5px 0",
        }}
      />
    </div>
  );
};

export default HpRectangle;