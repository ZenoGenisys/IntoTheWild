import { Component } from '@angular/core';
import { footerSlider } from 'src/config/config.module';

@Component({
  selector: 'app-footer-slide',
  templateUrl: './footer-slide.component.html',
  styleUrls: ['./footer-slide.component.scss']
})
export class FooterSlideComponent {

  sliderdata = footerSlider

}
