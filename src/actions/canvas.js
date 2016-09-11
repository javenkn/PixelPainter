export function changeColor(x_coord, y_coord, color) {
  return {
    type: "SET_COLOR",
    data: {
      x: x_coord,
      y: y_coord,
      color: color
    }
  };
}

export function clearCanvas() {
  return {
    type: "CLEAR_CANVAS"
  };
}