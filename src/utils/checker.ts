import { exercises } from "./../config/exercises";

export function exerciseExists(index: number) {
  return index > 0 && index <= exercises.length;
}
