import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogFrameComponent } from '../dialog-frame/dialog-frame.component';
import { ProductionService } from '../services/production.service';

@Component({
  selector: 'app-component-materials',
  templateUrl: './component-materials.component.html',
  styleUrls: ['./component-materials.component.scss']
})
export class ComponentMaterialsComponent implements OnInit {

  constructor(public productionService: ProductionService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addComponentMaterial() {
    const dialogRef = this.dialog.open(DialogFrameComponent, {
      width: '50%',
      height: '50%',
      data: {frame: 'add-component-material'},
    });
    dialogRef.afterClosed().subscribe((res:any) => {
      if (res) {
        console.log(res);
      } else {
        console.log('The dialog was closed with no data returned.');
      }
    });
  }
}
