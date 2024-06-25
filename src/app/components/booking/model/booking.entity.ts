export class Booking {
  id: number;
  titleTour: string;
  imageTour: string;
  duration: number;
  price: number;

  constructor() {
    this.id = 0;
    this.titleTour = "";
    this.imageTour = "";
    this.duration = 0;
    this.price = 0;

  }
}
