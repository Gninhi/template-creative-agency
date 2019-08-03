import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-why-choose-us',
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.scss']
})
export class WhyChooseUsComponent implements OnInit {

  images = [1, 2, 3].map(() => `https://picsum.photos/720/360?random&t=${Math.random()}`);

  constructor() { }

  ngOnInit() {
  }

}
