import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DestinationFormComponent } from '../destination-form/destination-form.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(public addDestinationDialog: MatDialog) { }

  ngOnInit(): void {
  }

  openAddDestinationDialog() {
    const dialogRef = this.addDestinationDialog.open(DestinationFormComponent, { disableClose: true });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

}
