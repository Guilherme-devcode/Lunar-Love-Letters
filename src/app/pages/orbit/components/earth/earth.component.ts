import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-earth',
  templateUrl: './earth.component.html',
  styleUrls: ['./earth.component.scss'],
})
export class EarthComponent implements OnInit {
  constructor() {}
  startDate: moment.Moment = moment('2022-07-12');

  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event']) onScrollAnimation(event: any) {
    let stars: ElementRef | any = document.getElementById('stars');
    let moon: ElementRef | any = document.getElementById('moon');
    let mountains_back: ElementRef | any =
      document.getElementById('mountains_back');
    let mountains_front: ElementRef | any =
      document.getElementById('mountains_front');
    let btn: ElementRef | any = document.getElementById('btn-letsgo');
    let header: ElementRef | any = document.querySelector('header');
    let value: ElementRef | any = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';
    mountains_back.style.top = value * 0.5 + 'px';
    mountains_front.style.top = value * 0 + 'px';
    btn.style.marginTop = value * 1 + 'px';
    header.style.top = value * 0.5 + 'px';
  }

  getYearsAndMonthsSinceStart(): { years: number; months: number } {
    const currentDate = moment();
    const diff = currentDate.diff(this.startDate, 'months');
    if (diff < 12) {
      return { years: 0, months: diff };
    } else {
      const years = Math.floor(diff / 12);
      const months = diff % 12;
      return { years, months };
    }
  }
}
