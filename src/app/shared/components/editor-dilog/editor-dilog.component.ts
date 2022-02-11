import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditorDialog } from './editor-dialog.model';

@Component({
  selector: 'app-editor-dilog',
  templateUrl: './editor-dilog.component.html',
  styleUrls: ['./editor-dilog.component.scss']
})
export class EditorDilogComponent implements OnInit {
  title: string;
  record: object;
  cancel: string;
  save: string;
  constructor(
    public dialogRef: MatDialogRef<EditorDilogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EditorDialog
  ) {
    this.title = data.title;
    this.record = data.record;
    this.cancel = data.cancel;
    this.save = data.save;
  }

  ngOnInit() {
  }

  onConfirm(): void {
    this.dialogRef.close('data');
  }

  onDismiss(): void {
    this.dialogRef.close('cancelled');
  }

}
