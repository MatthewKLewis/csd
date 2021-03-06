import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogFrameComponent } from '../dialog-frame.component';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  addRawMaterialForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DialogFrameComponent>,
    private fb: FormBuilder
  ) {
    this.addRawMaterialForm = this.fb.group({
      name: ['', [Validators.required]],
      level: [0, [Validators.required]],
      description: ['',],
    });
  }

  ngOnInit(): void {
    //console.log(this.data);
  }

  submitForm() {
      this.dialogRef.close(this.addRawMaterialForm.value);
  }

  close() {
    this.dialogRef.close();
  }

}
