export function selectAColor(color) {
  return {
    type: "SELECT_COLOR",
    data: {
      color: color
    }
  };
}