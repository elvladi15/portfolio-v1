export default function Skill({ skill }) {
  const { name, image } = skill;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#fff",
        borderRadius: "1rem",
        overflow: "hidden",
        textAlign: "center",
        padding: "2rem 1rem",
        width: "250px",
      }}
    >
      <img
        style={{
          height: "55%",
        }}
        src={image}
        alt="skill image"
      />
      <h3 className="fw-bold">{name}</h3>
    </div>
  );
}
