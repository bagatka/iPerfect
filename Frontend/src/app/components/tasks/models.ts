export interface MetadataBase {
  taskText: string;
  answers: Array<string>;
  correctAnswer: string;
}

export type Subject = 'math' | 'physics';
export type TestLevel = 'simple' | 'classic' | 'fast' | 'student';
