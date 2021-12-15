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
  }

  repeater(ingred: any) {
    let retArray: any[] = []
    for (let index = 0; index < ingred.count; index++) {
      retArray.push(ingred);
    }
    return retArray
  }

}