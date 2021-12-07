import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogFrameComponent } from '../dialog-frame.component';

@Component({
  selector: 'app-add-component-material',
  templateUrl: './add-component-material.component.html',
  styleUrls: ['./add-component-material.component.scss']
})
export class AddComponentMaterialComponent implements OnInit {

  @Input() public data: any
  addComponentMaterialForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DialogFrameComponent>,
    private fb: FormBuilder
  ) {
    this.addComponentMaterialForm = this.fb.group({
      name: ['', [Validators.required]],
      level: [0, [Validators.required]],
      description: ['',],
    });
  }

  ngOnInit(): void {
    //console.log(this.data);
  }

  submitForm() {
      this.dialogRef.close(this.addComponentMaterialForm.value);
  }

}
