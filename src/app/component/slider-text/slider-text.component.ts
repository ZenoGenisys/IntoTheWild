import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HomeDesCard } from '../../../config/config.module';

@Component({
  selector: 'app-slider-text',
  templateUrl: './slider-text.component.html',
  styleUrls: ['./slider-text.component.scss']
})
export class SliderTextComponent {
  sliderdata = HomeDesCard;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', '', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 1
      }
    },
    nav: false
  }
}
