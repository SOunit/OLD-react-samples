const ComponentContainer = (props) => {
  return (
    <div style={{ backgroundColor: "pink", padding: "1rem", margin: "1rem" }}>
      {props.children}
    </div>
  );
};

export default ComponentContainer;
