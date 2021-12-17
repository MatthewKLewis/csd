import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogFrameComponent } from '../dialog-frame.component';

@Component({
  selector: 'app-edit-raw-material',
  templateUrl: './edit-raw-material.component.html',
  styleUrls: ['./edit-raw-material.component.scss']
})
export class EditRawMaterialComponent implements AfterViewInit {

  @Input() public data: any
  addRawMaterialForm: FormGroup;

  disciplines: Array<string> = ['Mining', 'Mushroom Gathering', 'Scrapping', 'Spidersilk Gathering']
  levels: Array<number> = [0,5,10,15,20,25,30,35,40,45,50,55,60]

  constructor(
    public dialogRef: MatDialogRef<DialogFrameComponent>,
    private fb: FormBuilder
  ) {
    this.addRawMaterialForm = this.fb.group({
      name: ['', [Validators.required]],
      level: [0, [Validators.required]],
      description: ['', [Validators.required]],
      discipline: ['',],
    });
  }

  ngAfterViewInit(): void {
    console.log(this.data.data);
    this.addRawMaterialForm = this.fb.group({
      name: [this.data.data.name, [Validators.required]],
      level: [this.data.data.level, [Validators.required]],
      description: [this.data.data.description, [Validators.required]],
      discipline: [this.data.data.discipline]
    });
  }

  submitForm() {
    this.addRawMaterialForm.value._id = this.data.data._id;
    this.dialogRef.close(this.addRawMaterialForm.value);
  }

  close() {
    this.dialogRef.close();
  }

}
