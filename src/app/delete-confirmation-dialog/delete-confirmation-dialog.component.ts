import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete-confirmation-dialog',
  templateUrl: './delete-confirmation-dialog.component.html',
  styleUrl: './delete-confirmation-dialog.component.scss',
})
export class DeleteConfirmationDialogComponent implements OnInit {
  confirmValue: boolean = false;
  @Output() closeEvent = new EventEmitter<boolean>();
  @Input() confirmText: string = '';
  @Input() buttonLabel = 'Delete';
  isChecked: boolean = false;
  @Output() checkedChange = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}
  confirmModal(value: boolean): void {
    this.confirmValue = value;
    this.closeEvent.emit(this.confirmValue);
  }

  emitCheck(event: any) {
    this.isChecked = event.target.checked;
    if (this.isChecked) {
      this.checkedChange.emit(this.isChecked);
      this.buttonLabel = 'Delete';
    } else {
      this.checkedChange.emit(this.isChecked);
      this.buttonLabel = 'Unlink';
    }
  }
}
