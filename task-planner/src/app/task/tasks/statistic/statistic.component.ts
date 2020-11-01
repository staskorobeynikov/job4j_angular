import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {

  @Input() tasksAll;
  @Input() tasksPlanned;
  @Input() tasksOverdue;
  @Input() tasksFinished;

  constructor() { }

  ngOnInit(): void {
  }
}
