import { Component, Inject, OnInit } from '@angular/core';
import { ProductionService } from '../services/production.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import { DialogFrameComponent } from '../dialog-frame/dialog-frame.component';

@Component({
  selector: 'app-raw-materials',
  templateUrl: './raw-materials.component.html',
  styleUrls: ['./raw-materials.component.scss']
})
export class RawMaterialsComponent implements OnInit {

  constructor(public productionService: ProductionService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addRawMaterial() {
    const dialogRef = this.dialog.open(DialogFrameComponent, {
      width: '50%',
      height: '50%',
      data: {frame: 'add-raw-material'},
    });
    dialogRef.afterClosed().subscribe((res:any) => {
      if (res) {
        console.log(res);
        this.productionService.addRawMaterial(res).subscribe((res)=>{
          console.log(res);
        })
      } else {
        console.log('The dialog was closed with no data returned.');
      }
    });
  }
}