import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.scss']
})
export class DashboardTableComponent implements OnInit {

  data = [];

  constructor() { }

  ngOnInit(): void {
    this.data = [
      { title: 'Seven Deadly Sins', email: 'Adventure, Fantasy', amount: '79+', technologies: 'Meliodas, Elizabeth Liones', status: 'Liked' },
      { title: 'Fog Hill of Five Elements', email: 'Action, Historical, Martial Arts, Fantasy', amount: '3', technologies: 'Wen Ren Yu Xuan, Beast of Wrath', status: 'In Progress' },
      { title: 'The God of High School', email: '	Comedy, Martial arts, Supernatural', amount: '13', technologies: 'Mori Jin, Daewi Han', status: 'Loved' },
      { title: 'Log Horizon', email: 'Adventure, Fantasy, Science Fiction', amount: '57+', technologies: 'Shiroe, Naotsugu', status: 'Disliked' },
    ];
  }

}
