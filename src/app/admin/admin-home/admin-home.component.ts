import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddDestinationModalComponent } from '../add-destination-modal/add-destination-modal.component';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openAddDestinationModal() {
   this.dialog.open(AddDestinationModalComponent, {
      minWidth: '450px', minHeight: '400px'
    });

  }

}
