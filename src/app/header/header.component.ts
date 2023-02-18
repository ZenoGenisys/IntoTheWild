import { HeaderLinks } from '../../config/config.module'
import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  Links = HeaderLinks;

  constructor(private elementRef: ElementRef) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const header = this.elementRef.nativeElement.querySelector('#menu-wrap');

    if (offset > 50) {
      header.classList.add('cbp-af-header-shrink');
    } else {
      header.classList.remove('cbp-af-header-shrink');
    }
  }
}
