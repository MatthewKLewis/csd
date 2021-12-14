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
    this.chosenItem = evt.value;

    this.chosenItem.blueprint.recipe.forEach((component: any)=>{
      component.blueprint.recipe.forEach((rawMat:any) => {
        for (let index = 0; index < rawMat.count; index++) {
          this.chosenItemRawMats.push(rawMat);        
        }
      });
    })
  }

  counter(i: number) {
    return new Array(i);
  }

}
