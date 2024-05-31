import {Component, OnInit} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatButton} from "@angular/material/button";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {ToursService} from "../tours/services/tours.service";

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [MatTableModule, MatButton, RouterLinkActive, RouterLink],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit {
  displayedColumns: string[] = ['title','image'];
  dataSource = new MatTableDataSource<any>();

  constructor(private tourService: ToursService) {}

  ngOnInit() {
    this.tourService.toursPagados$.subscribe(tours => {
      this.dataSource.data = tours;
    })
  }
}
