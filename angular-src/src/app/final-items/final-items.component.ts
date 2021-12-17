import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogFrameComponent } from '../dialog-frame/dialog-frame.component';
import { FinalItem, ProductionService } from '../services/production.service';

@Component({
  selector: 'app-final-items',
  templateUrl: './final-items.component.html',
  styleUrls: ['./final-items.component.scss']
})
export class FinalItemsComponent implements OnInit {

  finalItems: Array<FinalItem> = [];

  constructor(public productionService: ProductionService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.productionService.getFinalItems().subscribe((res:any)=>{
      this.finalItems = res.list;
    })
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
  addFinalItem() {
    this.openDialogAndCallback('add-final-item', {}, (returnData: any) => {
      this.productionService.addFinalItem(returnData).subscribe((res: any) => {
        //location.reload()
      })
    });
  }

  edit(rawMaterial: any) {
    this.openDialogAndCallback('edit-raw-material', { data: rawMaterial }, (returnData: any) => {
      this.productionService.editRawMaterial(returnData).subscribe((res: any) => {
        //location.reload()
      })
    });
  }

  delete(id: number) {
    this.openDialogAndCallback('confirm', {}, (returnData: any) => {
      this.productionService.deleteFinalItem(id).subscribe((res: any) => {
        //location.reload()
      })
    });
  }
}
