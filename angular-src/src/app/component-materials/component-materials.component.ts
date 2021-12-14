import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogFrameComponent } from '../dialog-frame/dialog-frame.component';
import { ComponentMaterial, ProductionService } from '../services/production.service';

@Component({
  selector: 'app-component-materials',
  templateUrl: './component-materials.component.html',
  styleUrls: ['./component-materials.component.scss']
})
export class ComponentMaterialsComponent implements OnInit {

  componentMaterials: Array<ComponentMaterial> = [];

  constructor(public productionService: ProductionService, public dialog: MatDialog) { 
    productionService.getComponentMaterials().subscribe((res: any) => {
      this.componentMaterials = res.list;
    })
  }

  ngOnInit(): void {
  }

  addComponentMaterial() {
    const dialogRef = this.dialog.open(DialogFrameComponent, {
      width: '50%',
      disableClose: true,
      data: {frame: 'add-component-material'},
    });
    dialogRef.afterClosed().subscribe((res:any) => {
      if (res) {
        //console.log(res);
        this.productionService.addComponentMaterial(res).subscribe((res:any)=>{
          location.reload();
        })
      } else {
        console.log('The dialog was closed with no data returned.');
      }
    });
  }

  edit(any:any) {}

  delete(any:any) {}
}
