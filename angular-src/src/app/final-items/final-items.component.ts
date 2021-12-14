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

  addFinalItem() {
    const dialogRef = this.dialog.open(DialogFrameComponent, {
      width: '50%',
      disableClose: true,
      data: {frame: 'add-final-item'},
    });
    dialogRef.afterClosed().subscribe((res:any) => {
      if (res) {
        this.productionService.addFinalItem(res).subscribe((res:any)=>{
          location.reload();
        })
      } else {
        console.log('The dialog was closed with no data returned.');
      }
    });
  }

  edit(any:any) {

  }

  delete(any:any) {

  }
}
