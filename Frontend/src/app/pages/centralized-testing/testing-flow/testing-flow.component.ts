import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, TestLevel } from '../../../components/tasks/models';
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
    private readonly testStateService: TestStateService
  ) {
    if (this.testStateService.isActiveSession()) {
      this.subject = testStateService.getSubject();
      this.level = testStateService.getLevel();
      this.tasks = testStateService.getTestSetItems().map(item => ({ ...item, visited: false }));
    }
  }

  ngOnInit(): void {
    if (!this.testStateService.isActiveSession()) {
      this.redirectToFinalPage();
    }
    this.timeLeft = this.calculateTimeLeft();
    this.updateInterval = setInterval(() => this.timeLeft = this.calculateTimeLeft(), 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.updateInterval);
  }

  navigateToTask(taskId: string): void {
    void this.router.navigate(['testing', taskId]);
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
