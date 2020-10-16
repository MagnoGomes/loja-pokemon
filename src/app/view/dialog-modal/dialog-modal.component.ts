import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.css']
})
export class DialogModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogModalComponent>) { }

  ngOnInit(): void {
  }

  closeDialogModal(): void {
    this.dialogRef.close();
  }

}
