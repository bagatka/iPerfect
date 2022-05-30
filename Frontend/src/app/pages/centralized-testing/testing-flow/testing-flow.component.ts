import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, TestLevel } from '../../../components/tasks/models';
import { TestAnswerSheetComponent } from '../test-answer-sheet/test-answer-sheet.component';
import { TestSetItem, TestStateService } from '../test-state.service';


export interface TaskProgressItem extends TestSetItem {
  visited: boolean;
}

@Component({
  templateUrl: './testing-flow.component.html',
  styleUrls: ['./testing-flow.component.scss']
})
export class TestingFlowComponent implements OnInit, OnDestroy {
  level!: TestLevel;
  subject!: Subject;
  timeLeft!: string;
  updateInterval!: NodeJS.Timeout;

  tasks: Array<TaskProgressItem> = [];

  get showAllTasks(): boolean {
    return this.level === 'simple' || this.level === 'classic';
  }

  get currentTask(): TestSetItem {
    const taskId = this.route.snapshot.paramMap.get('taskId');
    return this.tasks.find(item => item.taskId === taskId)!;
  }

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    public dialog: MatDialog,
    private readonly testStateService: TestStateService
  ) {
    if (this.testStateService.isActiveSession()) {
      this.subject = testStateService.getSubject();
      this.level = testStateService.getLevel();
      this.tasks = testStateService.getTestSetItems().map(item => ({ ...item, visited: false }));
      const visitedTasks = testStateService.getVisitedTasks();
      this.tasks = this.tasks.map(task => {
        if (visitedTasks.find(visitedTaskId => visitedTaskId === task.taskId)) {
          return {
            ...task,
            visited: true
          };
        }

        return task;
      })
    }
  }

  ngOnInit(): void {
    if (!this.testStateService.isActiveSession()) {
      this.redirectToFinalPage();
    }

    const currentTask = this.route.snapshot.paramMap.get('taskId')!;

    if (this.tasks.find(item => item.taskId === currentTask)!.visited) {
      const targetTask = this.tasks.find(item => !item.visited);

      if (targetTask) {
        this.navigateToTask(targetTask.taskId);
      } else {
        this.redirectToFinalPage();
      }
    }

    this.timeLeft = this.calculateTimeLeft();
    this.updateInterval = setInterval(() => this.timeLeft = this.calculateTimeLeft(), 1000);
    this.testStateService.addVisitedTask(currentTask);
    this.tasks.find(item => item.taskId === currentTask)!.visited = true;
  }

  ngOnDestroy(): void {
    clearInterval(this.updateInterval);
  }

  navigateToTask(taskId: string): void {
    if (
      (this.level === 'student' || this.level === 'fast')
      && this.tasks.find(item => item.taskId === taskId)!.visited
    ) {
      return;
    }

    this.testStateService.addVisitedTask(taskId);
    this.tasks.find(item => item.taskId === taskId)!.visited = true;
    void this.router.navigate(['testing', taskId]);
  }

  openAnswersSheetDialog(): void {
    this.dialog
      .open(TestAnswerSheetComponent);
  }

  private calculateTimeLeft(): string {
    if (this.level === 'simple') {
      return 'Неограниченное время';
    }

    const allSecondsLeft = this.testStateService.getSecondsLeft();

    if (allSecondsLeft < 0) {
      this.redirectToFinalPage();
    }

    const hoursLeft = Math.floor(allSecondsLeft / 60 / 60);
    const minutesLeft = Math.floor((allSecondsLeft - 60 * 60 * hoursLeft) / 60);
    const secondsLeft = Math.floor((allSecondsLeft - 60 * 60 * hoursLeft - 60 * minutesLeft));
    return `${hoursLeft}:${minutesLeft}:${secondsLeft}`;
  }

  private redirectToFinalPage(): void {
    void this.router.navigate(['testing', 'results']);
  }
}
