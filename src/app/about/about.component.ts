import { Component } from '@angular/core';
import { HomeReadMore } from 'src/config/config.module';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  sliderdata = HomeReadMore

}
