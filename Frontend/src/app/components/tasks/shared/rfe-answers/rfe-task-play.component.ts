import { Component, Input } from '@angular/core';

@Component({
  selector: 'rfe-task-play',
  templateUrl: './rfe-task-play.component.html',
  styleUrls: ['./rfe-task-play.component.scss']
})
export class RfeTaskPlayComponent {
  @Input() taskText: string = '';
  @Input() answers: Array<string> = [];
  @Input() images: boolean = false;
}
