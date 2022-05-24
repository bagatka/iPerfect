import { Injectable } from '@angular/core';
import { Subject, TestLevel } from '../../components/tasks/models';


export class TestState {
  private level?: TestLevel;
  private subject?: Subject;
  private readonly correctAnswers: Map<string, number> = new Map<string, number>();

  setLevel(level: TestLevel): void {
    this.level = level;
  }

  setSubject(subject: Subject): void {
    this.subject = subject;
  }

  addCorrectAnswer(id: string, answer: number): void {
    this.correctAnswers.set(id, answer);
  }

  validateAnswer(id: string, answerTry: number): boolean {
    return this.correctAnswers.get(id) === answerTry;
  }
}

@Injectable()
export class TestStateService {
  private readonly state: TestState = new TestState();

  constructor() {
    const level = localStorage.getItem('level') as TestLevel;
    if (level) {
      const subject = localStorage.getItem('subject') as Subject;

      switch (level) {
        case 'simple':
          this.state.setLevel(level);
          this.state.setSubject(subject);
          break;
        case 'classic':
        case 'fast':
        case 'student':
          const startDate = localStorage.getItem('startDate') as unknown as number;
          if ((startDate / 1000 + this.getLevelMaxTimeInSeconds(level)) > (Date.now() / 1000)) {
            this.state.setLevel(level);
            this.state.setSubject(subject);
            break;
          }

          localStorage.clear();
          break;
      }
    }
  }

  isActiveSession(): boolean {
    return this.getSubject() && this.getLevel() && (this.getSecondsLeft() > 0 || this.getLevel() === 'simple');
  }

  getSubject(): Subject {
    return localStorage.getItem('subject') as Subject;
  }

  getLevel(): TestLevel {
    return localStorage.getItem('level') as TestLevel;
  }

  getSecondsLeft(): number {
    const startDate = localStorage.getItem('startDate') as unknown as number;
    const maxTime = this.getLevelMaxTimeInSeconds(this.getLevel());

    return (startDate / 1000 + maxTime) - (Date.now() / 1000);
  }

  initializeState(subject: Subject, level: TestLevel): void {
    localStorage.setItem('subject', subject);
    localStorage.setItem('level', level);
    localStorage.setItem('startDate', Date.now().toString());

    this.state.setLevel(level);
    this.state.setSubject(subject);
  }

  private getLevelMaxTimeInSeconds(level: TestLevel): number {
    switch (level) {
      case 'classic':
        return 210 * 60;
      case 'fast':
        return 105 * 60;
      case 'student':
        return 60 * 60;
      default:
        return -1;
    }
  }
}
