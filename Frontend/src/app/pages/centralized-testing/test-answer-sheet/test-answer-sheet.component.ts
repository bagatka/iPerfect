import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Cancellation, TestStateService } from '../test-state.service';

enum AnswerOperationType {
  AddAPartTaskId,
  AddAPartAnswerToRemove,
  AddBPartAnswer,
  AddBPartTaskId,
  AddBPartAnswerToEdit
}

@Component({
  templateUrl: './test-answer-sheet.component.html',
  styleUrls: ['./test-answer-sheet.component.scss']
})
export class TestAnswerSheetComponent {
  readonly form;
  formSnapshot: any;

  get AnswerOperationType(): typeof AnswerOperationType {
    return AnswerOperationType;
  }

  get APartAnswerControlGroups(): Array<FormGroup> {
    return (this.form.get('APart') as FormArray).controls as Array<FormGroup>;
  }

  get APartCancellationAnswerControlGroups(): Array<FormGroup> {
    return (this.form.get('APartCancellation') as FormArray).controls as Array<FormGroup>;
  }

  get BPartAnswerControls(): Array<FormControl> {
    return (this.form.get('BPart') as FormArray).controls as Array<FormControl>;
  }

  get BPartCancellationAnswerControlGroups(): Array<FormGroup> {
    return (this.form.get('BPartCancellation') as FormArray).controls as Array<FormGroup>;
  }

  constructor(
    private readonly dialogRef: MatDialogRef<TestAnswerSheetComponent>,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly testStateService: TestStateService
  ) {
    this.form = formBuilder.group(
      {
        APart: formBuilder.array([]),
        APartCancellation: formBuilder.array([]),
        BPart: formBuilder.array([]),
        BPartCancellation: formBuilder.array([])
      }
    );

    const userAnswers = testStateService.getUserAnswers();

    const APart = this.form.get('APart') as FormArray;
    this.getArray(18).forEach((_, index) => {
      const taskAnswers = userAnswers.get(`A${index + 1}`);

      APart.push(
        formBuilder.group(
          {
            1: this.getUserAnswerForTask(taskAnswers, '1'),
            2: this.getUserAnswerForTask(taskAnswers, '2'),
            3: this.getUserAnswerForTask(taskAnswers, '3'),
            4: this.getUserAnswerForTask(taskAnswers, '4'),
            5: this.getUserAnswerForTask(taskAnswers, '5')
          }
        )
      );
    });

    const APartCancellation = this.form.get('APartCancellation') as FormArray;
    this.getArray(6).forEach(_ => {
      APartCancellation.push(formBuilder.group(
          {
            taskId: '',
            answerToCancel: ''
          }
        )
      );
    });

    const BPart = this.form.get('BPart') as FormArray;
    this.getArray(12).forEach((_, index) => {
      const taskAnswer = userAnswers.get(`B${index + 1}`);

      BPart.push(formBuilder.control(taskAnswer ?? ''));
    });

    const BPartCancellation = this.form.get('BPartCancellation') as FormArray;
    this.getArray(2).forEach(_ => {
      BPartCancellation.push(formBuilder.group(
          {
            taskId: '',
            answerToCancel: ''
          }
        )
      );
    });

    const APartCancellations = this.testStateService.getAPartCancellations() ?? [];
    APartCancellations.forEach((cancellation, index) => {
      APartCancellation.controls[index].setValue(cancellation);
    });

    const BPartCancellations = this.testStateService.getBPartCancellations() ?? [];
    BPartCancellations.forEach((cancellation, index) => {
      BPartCancellation.controls[index].setValue(cancellation);
    });

    this.formSnapshot = this.form.getRawValue();
  }

  addChanges(taskId: string, answer: string): void {
    this.testStateService.addUserAnswer(taskId, answer);
    this.formSnapshot = this.form.getRawValue();
  }

  preventEditing(
    element: HTMLInputElement,
    form: FormGroup | FormControl,
    operation: AnswerOperationType,
    metadata?: any
  ): void {
    element.readOnly = true;

    switch (operation) {
      case AnswerOperationType.AddBPartAnswer:
        if (metadata) {
          this.testStateService.addUserAnswer(metadata, form.value);
        }
        break;
      case AnswerOperationType.AddAPartTaskId:
      case AnswerOperationType.AddAPartAnswerToRemove:
      case AnswerOperationType.AddBPartTaskId:
      case AnswerOperationType.AddBPartAnswerToEdit:
        this.checkCancellationPairsAndSave();
        break;
    }

    this.formSnapshot = this.form.getRawValue();
  }

  private getArray(length: number): Array<unknown> {
    return Array.from({ length: length });
  }

  private getUserAnswerForTask(answers: Array<string> | undefined, answerValue: string): boolean {
    if (!answers) {
      return false;
    }

    return !!answers.find(a => a === answerValue);
  }

  private checkCancellationPairsAndSave(): void {
    const APartCancellationControls = (this.form.get('APartCancellation') as FormArray).controls;
    const BPartCancellationControls = (this.form.get('BPartCancellation') as FormArray).controls;

    const ACorrectCancellations = APartCancellationControls
      .map(control => control.value as Cancellation)
      .filter(value => !!(value.taskId && value.answerToCancel));

    const BCorrectCancellations = BPartCancellationControls
      .map(control => control.value as Cancellation)
      .filter(value => !!(value.taskId && value.answerToCancel));

    this.testStateService.setAPartCancellations(ACorrectCancellations);
    this.testStateService.setBPartCancellations(BCorrectCancellations);
  }

  redirectToFinalPage(): void {
    this.dialogRef.close();
    void this.router.navigate(['testing', 'results']);
  }
}
