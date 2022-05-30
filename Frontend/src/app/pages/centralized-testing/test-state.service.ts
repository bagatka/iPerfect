import { Injectable } from '@angular/core';
import { TasksService } from '../../api/tasks.service';
import { Subject, TestLevel } from '../../components/tasks/models';


export interface TestSetItem {
  taskId: string;
  catalog: string;
  seed: number;
}

export interface TestAnswer {
  taskId: string;
  correctAnswer: number;
}

export class TestState {
  private level?: TestLevel;
  private subject?: Subject;
  private readonly correctAnswers: Map<string, number> = new Map<string, number>();
  private readonly visitedTasks: Array<string> = new Array<string>();

  setLevel(level: TestLevel): void {
    this.level = level;
  }

  getLevel(): TestLevel {
    return this.level!;
  }

  setSubject(subject: Subject): void {
    this.subject = subject;
  }

  getSubject(): Subject {
    return this.subject!;
  }

  addVisitedTask(id: string): void {
    this.visitedTasks.push(id);
  }

  addVisitedTasks(ids: Array<string>): void {
    this.visitedTasks.push(...ids);
  }

  getVisitedTasks(): Array<string> {
    return [...this.visitedTasks];
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
  private state: TestState = new TestState();

  constructor(
    private readonly tasksService: TasksService
  ) {
    const level = localStorage.getItem('level') as TestLevel;
    if (level) {
      const subject = localStorage.getItem('subject') as Subject;
      const testSetItems = JSON.parse(localStorage.getItem('testSetItems')!) as Array<TestSetItem>;
      const visitedTasks = JSON.parse(localStorage.getItem('visitedTasks')!) as Array<string>;

      switch (level) {
        case 'simple':
          this.initializeTest(subject, level, testSetItems, visitedTasks);
          break;
        case 'classic':
        case 'fast':
        case 'student':
          const startDate = localStorage.getItem('startDate') as unknown as number;
          if ((startDate / 1000 + this.getLevelMaxTimeInSeconds(level)) > (Date.now() / 1000)) {
            this.initializeTest(subject, level, testSetItems, visitedTasks);
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
    return this.state.getSubject();
  }

  getLevel(): TestLevel {
    return this.state.getLevel();
  }

  getTestSetItems(): Array<TestSetItem> {
    return JSON.parse(localStorage.getItem('testSetItems')!) as unknown as Array<TestSetItem>;
  }

  getSecondsLeft(): number {
    const startDate = localStorage.getItem('startDate') as unknown as number;
    const maxTime = this.getLevelMaxTimeInSeconds(this.getLevel());

    return (startDate / 1000 + maxTime) - (Date.now() / 1000);
  }

  addVisitedTask(taskId: string): void {
    this.state.addVisitedTask(taskId);

    const visited = this.state.getVisitedTasks();
    localStorage.setItem('visitedTasks', JSON.stringify(visited));
  }

  getVisitedTasks(): Array<string> {
    return this.state.getVisitedTasks();
  }

  initializeState(subject: Subject, level: TestLevel): void {
    this.state = new TestState();
    const testSetItems = this.generateTestSet();
    const visitedTasks: Array<string> = [];

    localStorage.setItem('startDate', Date.now().toString());
    localStorage.setItem('subject', subject);
    localStorage.setItem('level', level);
    localStorage.setItem('testSetItems', JSON.stringify(testSetItems));
    localStorage.setItem('visitedTasks', JSON.stringify(visitedTasks));

    this.initializeTest(subject, level, testSetItems, visitedTasks);
  }

  private initializeTest(
    subject: Subject,
    level: TestLevel,
    testSetItems: Array<TestSetItem>,
    visitedTasks: Array<string>
  ): void {
    this.state.setLevel(level);
    this.state.setSubject(subject);
    this.state.addVisitedTasks(visitedTasks);

    this.tasksService
      .getFullTestAnswers(subject, testSetItems)
      .subscribe(testAnswers => {
        testAnswers.forEach(answer => this.state.addCorrectAnswer(answer.taskId, answer.correctAnswer))
      });
  }

  private generateTestSet(): Array<TestSetItem> {
    const APartItems: Array<TestSetItem> = Array.from(
      { length: 18 },
      (_, i) => {
        return {
          catalog: '2015', // TODO: Implement other years
          taskId: `A${i + 1}`,
          seed: this.getRandom(5)
        }
      }
    );

    const BPartItems: Array<TestSetItem> = Array.from(
      { length: 12 },
      (_, i) => {
        return {
          catalog: '2015', // TODO: Implement other years
          taskId: `B${i + 1}`,
          seed: this.getRandom(5)
        }
      }
    );

    return [...APartItems, ...BPartItems];
  }

  private getRandom(max: number): number {
    return Math.floor(Math.random() * max);
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
