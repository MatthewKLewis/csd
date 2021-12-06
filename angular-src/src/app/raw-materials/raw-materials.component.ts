import { Component, OnInit } from '@angular/core';
import { ProductionService } from '../services/production.service';

@Component({
  selector: 'app-raw-materials',
  templateUrl: './raw-materials.component.html',
  styleUrls: ['./raw-materials.component.scss']
})
export class RawMaterialsComponent implements OnInit {

  constructor(public productionService: ProductionService) { }

  ngOnInit(): void {
  }

  addRawMaterial() {
    this.productionService.addRawMaterial().subscribe((res:any)=>{
      console.log(res);
    })
  }

}
