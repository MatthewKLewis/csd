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
