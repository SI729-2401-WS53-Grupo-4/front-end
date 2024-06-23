import {Component, OnInit} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatButton, MatIconButton} from "@angular/material/button";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {ToursService} from "../tours/services/tours.service";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [MatTableModule, MatButton, RouterLinkActive, RouterLink, MatIcon, MatIconButton],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {
  displayedColumns: string[] = ['title','image','duration','price','delete'];
  dataSource = new MatTableDataSource<any>();

  constructor(private tourService: ToursService) {}

  /*ngOnInit() {
    this.tourService.getToursPagados().subscribe(tours => {
      this.dataSource.data = tours;
    })
  }
  deleteTour(id: number){
    this.tourService.deleteTourPagado(id).subscribe(()=>{
      this.ngOnInit();
    })
  }*/
}
