import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-raw-material',
  templateUrl: './add-raw-material.component.html',
  styleUrls: ['./add-raw-material.component.scss']
})
export class AddRawMaterialComponent implements OnInit {

  @Input() public data: any

  constructor() { }

  ngOnInit(): void {
  }

}
