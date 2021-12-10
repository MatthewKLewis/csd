import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Blueprint, ComponentMaterial, ProductionService, RawMaterial } from 'src/app/services/production.service';
import { DialogFrameComponent } from '../dialog-frame.component';

@Component({
  selector: 'app-add-component-material',
  templateUrl: './add-component-material.component.html',
  styleUrls: ['./add-component-material.component.scss']
})
export class AddComponentMaterialComponent implements OnInit {

  @Input() public data: any

  numbers = [1,2,3,4,5,6,7,8,9,10]
  rawMaterials!: Array<RawMaterial>;
  componentMaterials!: Array<ComponentMaterial>;

  addComponentMaterialForm: FormGroup;  

  blueprint: Blueprint = {
    _id: 0,
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
    this.addComponentMaterialForm = this.fb.group({
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
    this.addComponentMaterialForm.value.blueprint = this.blueprint;
    this.dialogRef.close(this.addComponentMaterialForm.value);
  }

  addIngredient() {
    this.blueprint.recipe.push({
      name: '',
      count: 1,
    })
  }

  changeIngredientName(i: number, event: any) {
    this.blueprint.recipe[i].name = event.option.value;
  }

  changeIngredientCount(i: number, event: any) {
    this.blueprint.recipe[i].count = event.value;
  }

  close() {
    this.dialogRef.close();
  }

}
