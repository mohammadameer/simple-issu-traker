export default tag => {
  const style = {
    padding: 5,
    marginRight: 5,
    borderRadius: 5,
    color: "#fff",
    textAlign: "center"
  };

  if (tag === "low") {
    style.backgroundColor = "#2c80d3";
  } else if (tag === "normal") {
    style.backgroundColor = "#2cd362";
  } else if (tag === "urgent") {
    style.backgroundColor = "#d32c4f";
  }

  return style;
};
