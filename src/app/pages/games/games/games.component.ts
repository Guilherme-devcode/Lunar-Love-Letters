import { Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  currentIframe: string = 'lovequest';

  constructor() {}
  ngOnInit(): void {}

  setIframe(id: string) {
    this.currentIframe = id;
  }
}
