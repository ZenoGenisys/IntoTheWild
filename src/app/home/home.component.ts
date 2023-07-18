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
  quantity2: number = 1;

  @ViewChild('endDateInput', { static: false }) endDateInput!: ElementRef<HTMLInputElement>;
  @ViewChild('startDateInput', { static: false }) startDateInput!: ElementRef<HTMLInputElement>;
  @ViewChild('endDateInput2', { static: false }) endDateInput2!: ElementRef<HTMLInputElement>;
  @ViewChild('startDateInput2', { static: false }) startDateInput2!: ElementRef<HTMLInputElement>;

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

  openWhatsapp2() {
    const startDate2 = this.startDateInput2.nativeElement.value;
    const endDate2 = this.endDateInput2.nativeElement.value;
    const whatsappText = `Hi,
    I am messaging to enquire about availability of rooms for ${this.quantity2} adults on ${startDate2} to ${endDate2}.`;
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
