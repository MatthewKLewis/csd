import { Component, OnInit } from '@angular/core';
import { ProductionService } from '../services/production.service';

@Component({
  selector: 'app-final-items',
  templateUrl: './final-items.component.html',
  styleUrls: ['./final-items.component.scss']
})
export class FinalItemsComponent implements OnInit {

  constructor(public productionService: ProductionService) { }

  ngOnInit(): void {
  }

}
