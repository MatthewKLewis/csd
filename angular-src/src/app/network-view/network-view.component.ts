import { Component, OnInit } from '@angular/core';
import { FinalItem, ProductionService, RawMaterial } from '../services/production.service';

@Component({
  selector: 'app-network-view',
  templateUrl: './network-view.component.html',
  styleUrls: ['./network-view.component.scss']
})
export class NetworkViewComponent implements OnInit {

  finalItems: Array<FinalItem> = [];
  chosenItem!: FinalItem;
  chosenItemRawMats: Array<RawMaterial> = [];

  constructor(public productionService: ProductionService) { 
    this.productionService.getFinalItems().subscribe((res:any)=>{
      this.finalItems = res.list;
    })
  }

  ngOnInit(): void {
  }

  chooseFinalItem(evt:any) {
    this.chosenItemRawMats = [];
    this.chosenItem = evt.value;

    for (let i = 0; i < this.chosenItem.blueprint.recipe.length; i++) { //for each component
      for (let j = 0; j < this.chosenItem.blueprint.recipe[i].count; j++) { //for each component count
        for (let k = 0; k < this.chosenItem.blueprint.recipe[i].blueprint.recipe.length; k++) { //for each raw mat
          for (let l = 0; l < this.chosenItem.blueprint.recipe[i].blueprint.recipe[k].count; l++) { //for each raw mat count
            this.chosenItemRawMats.push(this.chosenItem.blueprint.recipe[i].blueprint.recipe[k])
          }       
        }
      }
    }
  }

  counter(i: number) {
    return new Array(i);
  }

}
