import { Component } from '@angular/core';

@Component({
  templateUrl: './test-answer-sheet.component.html',
  styleUrls: ['./test-answer-sheet.component.scss']
})
export class TestAnswerSheetComponent  {
  getArray(length: number): Array<unknown> {
    return Array.from({ length: length });
  }
}
