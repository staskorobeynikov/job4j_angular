import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HelperService} from '../../../shared/services/helper.service';


@Component({
  selector: 'app-list-row',
  templateUrl: './list-row.component.html',
  styleUrls: ['./list-row.component.css'],
})
export class ListRowComponent implements OnInit {
  @Input() name;
  @Input() category;
  @Input() dateStart;
  @Input() dateEnd;
  @Input() status;
  @Output() deleteTaskEmitter = new EventEmitter<string>();
  constructor(
    public helpService: HelperService
  ) { }

  ngOnInit(): void {
  }
  deleteTask() {
    this.deleteTaskEmitter.emit(this.name);
  }
}
