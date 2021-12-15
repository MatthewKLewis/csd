import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-network-node',
  template: `
    <div class="wrapper">
      <b>{{level}} - {{chosenMaterial.name}}</b>
      <div class="row" *ngFor="let ingred of chosenMaterial.blueprint.recipe">
          <div class="row" *ngFor="let iteration of repeater(ingred)">
  
              <div class="raw" *ngIf="iteration.type == 'raw'">
                <p>{{ingred.name}}</p>
              </div>
  
              <div class="indent" *ngIf="iteration.type == 'component'">
                <app-network-node [level]="level + 1" [chosenMaterial]="iteration"></app-network-node>
              </div>
  
          </div>
      </div>
    </div>

  `,
  styleUrls: ['./network-node.component.scss']
})
export class NetworkNodeComponent implements OnInit {

  @Input() chosenMaterial!: any;
  @Input() level!: number;

  constructor() {
  }

  ngOnInit(): void {  
    //console.log(this.chosenMaterial);
  }

  repeater(ingred: any) {
    let retArray: any[] = []
    for (let index = 0; index < ingred.count; index++) {
      retArray.push(ingred);
    }
    return retArray
  }

}
