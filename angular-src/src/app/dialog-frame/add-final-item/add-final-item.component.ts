import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Blueprint, ComponentMaterial, ProductionService, RawMaterial } from 'src/app/services/production.service';
import { DialogFrameComponent } from '../dialog-frame.component';

@Component({
  selector: 'app-add-final-item',
  templateUrl: './add-final-item.component.html',
  styleUrls: ['./add-final-item.component.scss']
})
export class AddFinalItemComponent implements OnInit {

  @Input() public data: any

  numbers = [1,2,3,4,5,6,7,8,9,10]
  rawMaterials!: Array<RawMaterial>;
  componentMaterials!: Array<ComponentMaterial>;

  addFinalItemForm: FormGroup;  

  blueprint: Blueprint = {
    name: '',
    level: 0,
    recipe: [],
    discipline: '',
    description: ''
  };

  constructor(
    public productionService: ProductionService,
    public dialogRef: MatDialogRef<DialogFrameComponent>,
    private fb: FormBuilder
  ) {
    this.productionService.getRawMaterials().subscribe((res:any)=>{ this.rawMaterials = res.list })
    this.productionService.getComponentMaterials().subscribe((res:any)=>{ this.componentMaterials = res.list })
    this.addFinalItemForm = this.fb.group({
      name: ['', [Validators.required]],
      level: [0, [Validators.required]],
      description: ['',],
      blueprint: [this.blueprint, [Validators.required]]
    });
  }

  ngOnInit(): void {
    //console.log(this.data);
  }

  submitForm() {
    this.blueprint.name = this.addFinalItemForm.value.name + " Blueprint"
    this.addFinalItemForm.value.blueprint = this.blueprint;
    this.dialogRef.close(this.addFinalItemForm.value);
  }

  addIngredient() {
    this.blueprint.recipe.push({
      _id: '',
      name: '',
      count: 1,
    })
  }

  changeIngredientName(i: number, event: any) {
    this.blueprint.recipe[i] = event.option.value;
  }

  changeIngredientCount(i: number, event: any) {
    this.blueprint.recipe[i].count = event.value;
  }

  close() {
    this.dialogRef.close();
  }

}
