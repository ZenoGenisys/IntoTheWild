import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HomeReadMore, rooms } from 'src/config/config.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  sliderData = HomeReadMore
  roomCard = rooms
  quantity: number = 1;

  @ViewChild('endDateInput', { static: false }) endDateInput!: ElementRef<HTMLInputElement>;
  @ViewChild('startDateInput', { static: false }) startDateInput!: ElementRef<HTMLInputElement>;

  ngAfterViewInit() {
    const inputValue = this.endDateInput.nativeElement.value;
    console.log("inputValue", inputValue);
  }

  openWhatsapp() {
    const startDate = this.startDateInput.nativeElement.value;
    const endDate = this.endDateInput.nativeElement.value;
    const whatsappText = `Hi,
    I am messaging to enquire about availability of rooms for ${this.quantity} adults on ${startDate} to ${endDate}.`;
    const whatsappLink = `https://wa.me/918610728170?text=${encodeURIComponent(whatsappText)}`;
    window.open(whatsappLink, '_blank');
  }



  counter(index: number) {
    let res = [];
    for (let i = 0; i < index; i++) {
      res.push(i);
    }
    return res;
  }
}
