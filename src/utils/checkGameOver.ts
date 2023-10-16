import { Coordinate } from "../types/types";

export function checkGameOver(snakeHead: Coordinate, boundaries: any): boolean {
  return (
    snakeHead.x < boundaries.xMin ||
    snakeHead.x > boundaries.xMax ||
    snakeHead.y < boundaries.yMin ||
    snakeHead.y > boundaries.yMax
  );
}
