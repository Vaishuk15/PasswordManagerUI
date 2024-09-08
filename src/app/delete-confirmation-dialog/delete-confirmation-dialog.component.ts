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
  constructor() {}

  ngOnInit(): void {}
  confirmModal(value: boolean): void {
    this.confirmValue = value;
    this.closeEvent.emit(this.confirmValue);
  }
}
