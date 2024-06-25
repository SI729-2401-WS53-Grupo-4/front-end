import {Component, OnInit} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatButton, MatIconButton} from "@angular/material/button";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {ToursService} from "../../../tours/services/tours.service";
import {MatIcon} from "@angular/material/icon";
import {Booking} from "../../model/booking.entity";
import {BookingService} from "../../services/booking.service";

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [MatTableModule, MatButton, RouterLinkActive, RouterLink, MatIcon, MatIconButton],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit{
  displayedColumns: string[] = ['title','image','duration','price','delete'];
  dataSource = new MatTableDataSource<any>();
  dataB: Booking[] = [];

  constructor(private tourService: ToursService, private bookingService: BookingService) {}

  private getAllBooking(){
    const bookingId = 1; // Esto es solo un ejemplo, asegúrate de tener el ID correcto
    this.bookingService.getBookingDetails(bookingId).subscribe((response: any) => {
      this.dataB.push(response); // Agrega la reserva al array de reservas
      this.dataSource.data = this.dataB;
    });
  }

  ngOnInit() {
    this.getAllBooking();
  }

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
