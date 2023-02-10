import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSlideComponent } from './footer-slide.component';

describe('FooterSlideComponent', () => {
  let component: FooterSlideComponent;
  let fixture: ComponentFixture<FooterSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterSlideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
