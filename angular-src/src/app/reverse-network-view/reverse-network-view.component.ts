import { Component, OnInit } from '@angular/core';
import { ComponentMaterial, ProductionService, RawMaterial } from '../services/production.service';

@Component({
  selector: 'app-reverse-network-view',
  templateUrl: './reverse-network-view.component.html',
  styleUrls: ['./reverse-network-view.component.scss']
})
export class ReverseNetworkViewComponent implements OnInit {

  rawMaterials: Array<RawMaterial> = [];
  chosenMaterial!: RawMaterial | ComponentMaterial;

  constructor(public productionService: ProductionService) { 
    this.productionService.getRawMaterials().subscribe((res:any)=>{ this.rawMaterials = res.list; })
  }

  ngOnInit(): void {
    
  }

  chooseMaterial(evt:any) {
    this.chosenMaterial = evt.value;
    this.productionService.getAllItemsMadeFrom(this.chosenMaterial._id).subscribe((res:any)=>{
      console.log(res);
    })
  }

}
