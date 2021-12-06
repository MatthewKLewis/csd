import { Component, Inject, OnInit } from '@angular/core';
import { ProductionService } from '../services/production.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

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
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '50%',
      data: {msg: 'hello'},
    });
    dialogRef.afterClosed().subscribe((res:any) => {
      console.log('The dialog was closed');
    });
  }
}


/* ------------------------------ */


@Component({
  selector: 'dialog-overview-example-dialog',
  template: '<div>Hello</div>',
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}