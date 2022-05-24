export interface CoordinateLine {
  strokes: {
    interval: number;
    values: Array<Stroke>;
  }
}

export interface Stroke {
  name: string;
  value: string;
}
