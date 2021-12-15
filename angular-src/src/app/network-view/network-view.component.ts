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
  rawComponentsOfFinalItem: Map<any,any> = new Map()

  nodeTier: number = 0;

  constructor(public productionService: ProductionService) { 
    this.productionService.getFinalItems().subscribe((res:any)=>{
      this.finalItems = res.list;
    })
  }

  ngOnInit(): void {
  }

  chooseFinalItem(evt:any) {
    this.chosenItem = evt.value;
    this.rawComponentsOfFinalItem = new Map();
    this.populateRawComponentArray(this.chosenItem);
    console.log(this.rawComponentsOfFinalItem)
  }

  repeater(ingred: any) {
    let retArray: any[] = []
    for (let index = 0; index < ingred.count; index++) {
      retArray.push(ingred);
    }
    return retArray
  }

  populateRawComponentArray(item: any) {
    if (item.type == 'raw') {
      this.rawComponentsOfFinalItem.set(item.name, this.rawComponentsOfFinalItem.get(item.name) + 1 || 1);        
    } 
    else {
      for (let i = 0; i < item.blueprint.recipe.length; i++) {
        for (let j = 0; j < item.blueprint.recipe[i].count; j++) {
          this.populateRawComponentArray(item.blueprint.recipe[i]);
        }
      }
    }
  }

}