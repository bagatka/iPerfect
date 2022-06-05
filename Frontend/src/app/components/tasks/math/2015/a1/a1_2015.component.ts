import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TasksService } from '../../../../../api/tasks.service';
import { MetadataBase } from '../../../models';
import { CoordinateLine, Stroke } from '../../../shared/rfe-coordinate-line/rfe-coordinate-line.model';
import { TaskComponentBase, TaskComponentMode } from '../../../task-component-base.directive';


interface A1_2015Metadata extends MetadataBase {
  coordinateLine: CoordinateLine;
}

@Component({
  selector: 'a1_2015',
  templateUrl: './a1_2015.component.html',
  styleUrls: ['./a1_2015.component.scss']
})
export class A1_2015Component extends TaskComponentBase implements OnInit {
  viewReady = false;
  modelConfigurationForm!: FormGroup;

  get coordinateLineModel(): CoordinateLine {
    return this.modelConfigurationForm.get('coordinateLine')?.value;
  }

  get strokeValueFromArray(): FormArray {
    return this.modelConfigurationForm.get('coordinateLine.strokes.values') as FormArray ?? this.formBuilder.array([]);
  }

  get answersFromArray(): FormArray {
    return this.modelConfigurationForm.get('answers') as FormArray ?? this.formBuilder.array([]);
  }

  get taskText(): string {
    return this.modelConfigurationForm.get('taskText')?.value;
  }

  get answers(): Array<string> {
    return this.answersFromArray.value;
  }

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly tasksService: TasksService
  ) {
    super();
  }

  ngOnInit(): void {
    this.subject = 'math';
    this.id = 'A1';
    this.catalog = '2015';

    switch (this.mode) {
      case TaskComponentMode.Create:
        this.initializeCreateState()
        break;
      case TaskComponentMode.Edit:
        this.initializeEditMode();
        break;
      case TaskComponentMode.Play:
        this.initializePlayMode();
        break;
    }
  }

  addStrokeValue(): void {
    this.strokeValueFromArray.push(
      this.formBuilder.group({
        name: ['', [Validators.required]],
        value: [0, [Validators.required]]
      })
    )
  }

  removeStrokeValue(i: number): void {
    this.strokeValueFromArray.removeAt(i);
  }

  printJson(): void {
    console.log(JSON.stringify(this.modelConfigurationForm.value))
  }

  applyJson(json: string): void {
    const value: A1_2015Metadata = JSON.parse(json);

    this.strokeValueFromArray.clear();

    value.coordinateLine.strokes.values.forEach(item => {
      this.strokeValueFromArray.push(
        this.formBuilder.group({
          name: [item.name, [Validators.required]],
          value: [item.value, [Validators.required]]
        })
      )
    });

    this.modelConfigurationForm.patchValue(value);
  }

  private initializeCreateState(): void {
    const defaultInterval = 30;
    const defaultStrokesCount = 10;

    const strokesArray: Array<Stroke> = Array.from(
      { length: defaultStrokesCount },
      () => ({
        name: 'A',
        value: '1'
      })
    );

    const model: A1_2015Metadata = {
      coordinateLine: {
        strokes: {
          interval: defaultInterval,
          values: strokesArray
        }
      },
      taskText: '',
      answers: Array.from({ length: 5 }, (_, index) => `${index}`),
      correctAnswer: '0'
    };

    this.modelConfigurationForm = this.buildForm(model);
    this.viewReady = true;
  }

  private initializeEditMode(): void {
    this.tasksService
      .getTaskMetadata<A1_2015Metadata>(this.subject, this.catalog, this.id, this.seed)
      .subscribe(value => {
          this.modelConfigurationForm = this.buildForm(value);
          this.patchForm(value);
          this.viewReady = true;
        }
      );
  }

  private initializePlayMode(): void {
    this.tasksService
      .getTaskMetadata<A1_2015Metadata>(this.subject, this.catalog, this.id, this.seed)
      .subscribe(value => {
          this.modelConfigurationForm = this.buildForm(value);
          this.patchForm(value);
          this.viewReady = true;
        }
      );
  }

  private buildForm(model: A1_2015Metadata): FormGroup {
    return this.formBuilder.group({
      taskText: ['', [Validators.required]],
      correctAnswer: [0, [Validators.required]],
      answers: this.formBuilder.array(model.answers.map(
          item => this.formBuilder.control([item, [Validators.required]])
        )
      ),
      coordinateLine: this.formBuilder.group({
        strokes: this.formBuilder.group({
          interval: [model.coordinateLine.strokes.interval, [Validators.required]],
          values: this.formBuilder.array(model.coordinateLine.strokes.values.map(item => {
              return this.formBuilder.group({
                name: [item.name, [Validators.required]],
                value: [item.value, [Validators.required]]
              })
            })
          )
        })
      })
    });
  }

  private patchForm(model: A1_2015Metadata): void {
    this.modelConfigurationForm.patchValue(model);
  }
}
