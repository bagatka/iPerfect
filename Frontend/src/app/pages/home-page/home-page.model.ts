export interface SessionModel {
  date: Date;
  math: SubjectModel;
  physics: SubjectModel;
}

export interface SubjectModel {
  title: string;
  time: string;
}
