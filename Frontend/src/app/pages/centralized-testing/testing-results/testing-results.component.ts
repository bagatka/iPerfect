import { Component, OnInit } from '@angular/core';
import { TestResult, TestStateService } from '../test-state.service';

@Component({
  selector: 'app-testing-results',
  templateUrl: './testing-results.component.html',
  styleUrls: ['./testing-results.component.scss']
})
export class TestingResultsComponent implements OnInit {
  testResults!: TestResult;

  constructor(
    private readonly testStateService: TestStateService
  ) { }

  ngOnInit(): void {
    if (this.testStateService.isActiveSession()) {
      this.testResults = this.testStateService.completeTest();
    } else {
      this.testResults = this.testStateService.getResults()!;
    }
  }
}
