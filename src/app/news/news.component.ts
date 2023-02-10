import { Component } from '@angular/core';
import { news } from 'src/config/config.module';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  sliderdata = news
}
