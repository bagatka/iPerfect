import { Component, EventEmitter, Input, Optional, Output, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';


@Component({
  selector: 'rfe-checkbox',
  templateUrl: './rfe-checkbox.component.html',
  styleUrls: ['./rfe-checkbox.component.scss']
})
export class RfeCheckboxComponent implements ControlValueAccessor {
  checked: boolean = false;
  disabled: boolean = false;
  invalid: boolean = false;

  @Input() forceDisabled: boolean = false;
  @Output() inputChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  private onChange: ((_: unknown) => void);
  private onTouched: (() => void);

  constructor(
    @Optional() @Self() private readonly ngControl: NgControl
  ) {
    this.onChange = (): void => {};
    this.onTouched = (): void => {};

    if (ngControl) {
      ngControl.valueAccessor = this;
    }
  }

  @Input() set checkboxValue(value: boolean) {
    if (value === undefined || this.disabled || this.forceDisabled || this.ngControl) {
      return;
    }

    this.checked = value;
  }

  writeValue(inputValue: boolean): void {
    this.checked = inputValue;
  }

  registerOnChange(fn: (_: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    if (this.disabled !== disabled) {
      this.disabled = disabled;
    }
  }

  onInputChange(checked: boolean): void {
    if (!this.disabled && !this.forceDisabled) {
      this.checked = checked;

      this.onChange(checked);

      this.invalid = this.ngControl?.invalid ?? false;

      this.inputChange.emit(checked);
    }

    this.onTouched();
  }
}
