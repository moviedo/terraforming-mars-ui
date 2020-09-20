export enum Color {
  RED = 'red',
  GREEN = 'green',
  YELLOW = 'yellow',
  BLUE = 'blue',
  BLACK = 'black',
  PURPLE = 'purple',
  NEUTRAL = 'neutral',
}

export function getColors(): Array<string> {
  const colors: Array<string> = Object.values(Color);
  colors.pop();

  return colors;
}
