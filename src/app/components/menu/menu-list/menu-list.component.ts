import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss'],
})
export class MenuListComponent implements OnInit {
  list: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.list = [
      'Food',
      'Hobby',
      'Skill',
      'Clothes',
      'Status',
      'Journal',
      ' ',
      'Sleep',
    ];
  }
}
