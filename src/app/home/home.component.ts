import { Component, OnInit } from '@angular/core';
import { HomeReadMore, rooms } from 'src/config/config.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  sliderdata = HomeReadMore
  roomCard = rooms
  quantity: number = 1;

  counter(index: number) {
    let res = [];
    for (let i = 0; i < index; i++) {
      res.push(i);
    }
    return res;
  }
}
