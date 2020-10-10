import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-list-row',
  templateUrl: './list-row.component.html',
  styleUrls: ['./list-row.component.css']
})
export class ListRowComponent implements OnInit {
  @Input() name;
  @Input() category;
  @Input() dateStart;
  @Input() dateEnd;
  @Input() status;
  @Output() deleteTaskEmitter = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  deleteTask() {
    this.deleteTaskEmitter.emit(this.name);
  }
}
