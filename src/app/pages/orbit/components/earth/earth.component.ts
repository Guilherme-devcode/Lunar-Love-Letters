import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-earth',
  templateUrl: './earth.component.html',
  styleUrls: ['./earth.component.scss'],
})
export class EarthComponent implements OnInit {
  constructor() {}
  startDate: moment.Moment = moment('2022-08-12');
  public days: number = 0;
  public hours: number = 0;
  public minutes: number = 0;
  public seconds: number = 0;
  public anniversaryDay: number = 12; // Dia do aniversário de namoro
  public diff: number = 0;
  public isOpen: boolean = false;

  ngOnInit(): void {
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let nextAnniversaryMonth = month;
    if (month >= 11) {
      nextAnniversaryMonth = 0;
      year += 1;
    } else {
      nextAnniversaryMonth += 1;
    }
    let nextAnniversaryDate = new Date(
      year,
      nextAnniversaryMonth,
      this.anniversaryDay
    );
    this.diff = nextAnniversaryDate.getTime() - today.getTime();
    setInterval(() => {
      this.diff = nextAnniversaryDate.getTime() - new Date().getTime();
      this.days = Math.floor(this.diff / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (this.diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.minutes = Math.floor((this.diff % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((this.diff % (1000 * 60)) / 1000);
    }, 1000);
  }

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
