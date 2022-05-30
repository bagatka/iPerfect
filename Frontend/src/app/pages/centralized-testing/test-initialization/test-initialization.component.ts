import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, TestLevel } from '../../../components/tasks/models';
import { TestStateService } from '../test-state.service';


@Component({
  templateUrl: './test-initialization.component.html',
  styleUrls: ['./test-initialization.component.scss']
})
export class TestInitializationComponent implements OnInit {
  testSettingsForm!: FormGroup;

  get subjectSelected(): boolean {
    return this.testSettingsForm.get('subject')?.valid ?? false;
  }

  get mathSelected(): boolean {
    return this.testSettingsForm.get('subject')?.value as Subject === 'math';
  }

  get physicsSelected(): boolean {
    return this.testSettingsForm.get('subject')?.value as Subject === 'physics';
  }

  get selectedLevel(): TestLevel {
    return this.testSettingsForm.get('level')?.value as TestLevel;
  }

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly testStateService: TestStateService
  ) {
  }

  ngOnInit(): void {
    this.testSettingsForm = this.formBuilder.group({
      level: [null, [Validators.required]],
      subject: [null, [Validators.required]]
    });
  }

  setSubject(subject: Subject): void {
    this.testSettingsForm.get('subject')?.setValue(subject);
  }

  setLevel(level: TestLevel): void {
    this.testSettingsForm.get('level')?.setValue(level);
  }

  startTesting(): void {
    const subject = this.testSettingsForm.get('subject')!.value as Subject;
    const level = this.testSettingsForm.get('level')!.value as TestLevel;
    this.testStateService.initializeState(subject, level);

    void this.router.navigate(['testing', 'A1']);
  }
}
