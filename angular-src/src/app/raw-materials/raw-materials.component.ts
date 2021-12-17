import { Component, Inject, OnInit } from '@angular/core';
import { ProductionService, RawMaterial } from '../services/production.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { DialogFrameComponent } from '../dialog-frame/dialog-frame.component';

@Component({
  selector: 'app-raw-materials',
  templateUrl: './raw-materials.component.html',
  styleUrls: ['./raw-materials.component.scss']
})
export class RawMaterialsComponent implements OnInit {

  rawMaterials: Array<RawMaterial> = [];

  constructor(public productionService: ProductionService, public dialog: MatDialog) {
    productionService.getRawMaterials().subscribe((res: any) => {
      this.rawMaterials = res.list;
    })
  }

  ngOnInit(): void { }

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
  addRawMaterial() {
    this.openDialogAndCallback('add-raw-material', {}, (returnData: any) => {
      this.productionService.addRawMaterial(returnData).subscribe((res: any) => {
        //location.reload()
      })
    });
  }

  edit(rawMaterial: any) {
    this.openDialogAndCallback('edit-raw-material', rawMaterial, (returnData: any) => {
      this.productionService.editRawMaterial(returnData).subscribe((res: any) => {
        //location.reload()
      })
    });
  }

  delete(id: number) {
    this.openDialogAndCallback('confirm', {}, (returnData: any) => {
      this.productionService.deleteRawMaterial(id).subscribe((res: any) => {
        //location.reload()
      })
    });
  }
}