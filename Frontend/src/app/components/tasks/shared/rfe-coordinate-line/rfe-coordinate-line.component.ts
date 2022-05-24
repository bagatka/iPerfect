import { Component, Input } from '@angular/core';
import { CoordinateLine } from './rfe-coordinate-line.model';

@Component({
  selector: 'rfe-coordinate-line',
  templateUrl: './rfe-coordinate-line.component.html',
  styleUrls: ['./rfe-coordinate-line.component.scss']
})
export class RfeCoordinateLineComponent {
  @Input() model?: CoordinateLine;
}
