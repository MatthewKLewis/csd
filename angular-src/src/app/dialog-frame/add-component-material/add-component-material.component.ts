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

  numbers = [1,2,3,4,5,6,7,8,9,10];
  disciplines: Array<string> = ['Mining', 'Mushroom Gathering', 'Scrapping', 'Spidersilk Gathering']

  rawMaterials!: Array<RawMaterial>;
  componentMaterials!: Array<ComponentMaterial>;
  allMaterials!: Array<RawMaterial | ComponentMaterial>;

  addComponentMaterialForm: FormGroup;  

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
    this.productionService.getRawMaterials().subscribe((res:any)=>{ 
      this.rawMaterials = res.list 
      this.productionService.getComponentMaterials().subscribe((res:any)=>{ 
        this.componentMaterials = res.list
        this.allMaterials = [...this.rawMaterials, ...this.componentMaterials];
      })
    });
    this.addComponentMaterialForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['',],
      level: [0],
      blueprint: [this.blueprint, [Validators.required]]
    });
  }

  ngOnInit(): void {
    //console.log(this.data);
  }

  submitForm() {
    this.blueprint.name = this.addComponentMaterialForm.value.name + " Blueprint"
    this.addComponentMaterialForm.value.blueprint = this.blueprint;
    this.dialogRef.close(this.addComponentMaterialForm.value);
  }

  addIngredient() {
    this.blueprint.recipe.push({
      _id: '',
      name: '',
      count: 1,
    })
  }

  changeIngredientName(i: number, event: any) {
    if (event.option.value.level > this.addComponentMaterialForm.value.level) {
      this.addComponentMaterialForm.value.level = event.option.value.level
      this.blueprint.level = event.option.value.level;
    }
    this.blueprint.recipe[i] = { _id: event.option.value._id };
  }

  changeIngredientCount(i: number, event: any) {
    this.blueprint.recipe[i].count = event.value;
  }

  close() {
    this.dialogRef.close();
  }

}
