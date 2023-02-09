import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orbit',
  templateUrl: './orbit.component.html',
  styleUrls: ['./orbit.component.scss'],
})
export class OrbitComponent implements OnInit {
  showTitle = false;
  showMonologue = false;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.showMonologue = true;
    }, 1000);
    setTimeout(() => {
      this.showTitle = true;
    }, 10000);
  }
}
