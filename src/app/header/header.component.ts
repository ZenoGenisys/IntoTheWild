import { Component } from '@angular/core';
import { HeaderLinks } from '../../config/config.module'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  Links = HeaderLinks;

}
