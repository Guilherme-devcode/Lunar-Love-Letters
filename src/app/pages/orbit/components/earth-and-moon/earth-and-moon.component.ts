import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-earth-and-moon',
  templateUrl: './earth-and-moon.component.html',
  styleUrls: ['./earth-and-moon.component.scss'],
})
export class EarthAndMoonComponent implements OnInit {
  showTitle: boolean = false;
  showClick: boolean = false;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.showTitle = true;
    }, 500);
    setTimeout(() => {
      this.showClick = true;
    }, 10000);
  }
}
