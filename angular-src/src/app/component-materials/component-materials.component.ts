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

  openDialogAndCallback(frame: string, data: any, callback: Function | null) {
    const dialogRef = this.dialog.open(DialogFrameComponent, {
      width: '50%',
      disableClose: true,
      data: { frame: frame, data: data },
    });
    dialogRef.afterClosed().subscribe((data: any) => {
      if (data && callback) {
        callback(data);
      } else {
        console.log('no data returned from dialog.')
      }
    });
  }

  //add-raw-material
  addComponentMaterial() {
    this.openDialogAndCallback('add-component-material', {}, (returnData: any) => {
      this.productionService.addComponentMaterial(returnData).subscribe((res: any) => {
        location.reload()
      })
    });
  }

  edit(rawMaterial: any) {
    this.openDialogAndCallback('edit-raw-material', { data: rawMaterial }, (returnData: any) => {
      this.productionService.editRawMaterial(returnData).subscribe((res: any) => {
        location.reload()
      })
    });
  }

  delete(id: number) {
    this.openDialogAndCallback('confirm', {}, (returnData: any) => {
      this.productionService.deleteComponentMaterial(id).subscribe((res: any) => {
        location.reload()
      })
    });
  }
}
