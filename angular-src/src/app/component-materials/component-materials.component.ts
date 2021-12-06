import { Component, OnInit } from '@angular/core';
import { ProductionService } from '../services/production.service';

@Component({
  selector: 'app-component-materials',
  templateUrl: './component-materials.component.html',
  styleUrls: ['./component-materials.component.scss']
})
export class ComponentMaterialsComponent implements OnInit {

  constructor(public productionService: ProductionService) { }

  ngOnInit(): void {
  }

}
