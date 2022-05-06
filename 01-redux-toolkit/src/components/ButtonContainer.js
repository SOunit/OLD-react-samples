const ButtonContainer = (props) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          width: "50%",
          height: "10rem",
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default ButtonContainer;
