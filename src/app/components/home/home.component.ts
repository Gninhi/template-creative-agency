import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [animate(300)]),
      transition(':leave', [animate(500)])
    ])
  ]
})
export class HomeComponent implements OnInit {
  isVisible = false;

  constructor(@Inject(DOCUMENT) document) {}

  ngOnInit() {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.pageYOffset >= 60) {
      this.isVisible = true;
    } else {
      this.isVisible = false;
    }
  }
}
