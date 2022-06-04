import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  templateUrl: './test-answer-sheet.component.html',
  styleUrls: ['./test-answer-sheet.component.scss']
})
export class TestAnswerSheetComponent {
  readonly form;

  get APartAnswerControlsArray(): Array<FormControl> {
    return (this.form.get('APart') as FormArray).controls as Array<FormControl>;
  }

  get BPartAnswerControlsArray(): Array<FormControl> {
    return (this.form.get('BPart') as FormArray).controls as Array<FormControl>;
  }

  constructor(
    private readonly formBuilder: FormBuilder
  ) {
    this.form = formBuilder.group(
      {
        APart: formBuilder.array([]),
        BPart: formBuilder.array([])
      }
    );

    this.getArray(18).forEach(_ => {
      const APart = this.form.get('APart') as FormArray;
      APart.push(formBuilder.control(new Array<string>(), Validators.required));
    });

    this.getArray(12).forEach(_ => {
      const BPart = this.form.get('BPart') as FormArray;
      BPart.push(formBuilder.control(new Array<string>(), Validators.required));
    });
  }

  hasAnswer(array: Array<string>, answer: string): boolean {
    return array.includes(answer);
  }

  private getArray(length: number): Array<unknown> {
    return Array.from({ length: length });
  }
}
