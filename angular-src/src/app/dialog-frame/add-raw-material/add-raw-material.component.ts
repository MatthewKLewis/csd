import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogFrameComponent } from '../dialog-frame.component';

@Component({
  selector: 'app-add-raw-material',
  templateUrl: './add-raw-material.component.html',
  styleUrls: ['./add-raw-material.component.scss']
})
export class AddRawMaterialComponent implements OnInit {

  @Input() public data: any
  addRawMaterialForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DialogFrameComponent>,
    private fb: FormBuilder
  ) {
    this.addRawMaterialForm = this.fb.group({
      name: ['', [Validators.required]],
      level: [0, [Validators.required]],
      discipline: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    console.log(this.data);
  }

  submitForm() {
      this.dialogRef.close(this.addRawMaterialForm.value);
  }

}
