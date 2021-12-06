import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogFrameComponent } from '../dialog-frame/dialog-frame.component';
import { ProductionService } from '../services/production.service';

@Component({
  selector: 'app-final-items',
  templateUrl: './final-items.component.html',
  styleUrls: ['./final-items.component.scss']
})
export class FinalItemsComponent implements OnInit {

  constructor(public productionService: ProductionService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addFinalItem() {
    const dialogRef = this.dialog.open(DialogFrameComponent, {
      width: '50%',
      height: '50%',
      data: {frame: 'add-final-item'},
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
