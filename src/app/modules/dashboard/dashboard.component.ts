import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  tasks = [];

  ngOnInit() {
    this.tasks = [
      { name: 'Watch One Piece', duration: 'Due in 5 Days', completed: true, color: 'success' },
      { name: 'TSDS Remaining Episodes', duration: 'Due in 2 Days', completed: true, color: 'primary' },
      { name: 'Complete Attack on Titan', duration: 'Due in 12 Days', completed: true, color: 'warning' },
      { name: 'Review Log Horizon', duration: 'Due in 1 Day', completed: true, color: 'primary' },
      { name: 'One Piece #Ep-965', duration: 'Due in 7 Days', completed: true, color: 'warning' },
    ]
  }
}