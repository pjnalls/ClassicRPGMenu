import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
})
export class ClockComponent implements OnInit {
  time: string = '';
  shel: string = '';
  constructor() {}

  ngOnInit(): void {
    let date: Date = new Date();

    this.time = this.getTime(date);
    this.shel = '6000';

    setInterval(() => {
      this.time = this.getTime(date);
      date = new Date();
    }, 1000);
  }

  getTime(date: Date) {
    let hours: number = date.getHours(),
      minutes: any = date.getMinutes(),
      seconds: number = date.getSeconds(),
      ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${ampm}`;
  }
}
