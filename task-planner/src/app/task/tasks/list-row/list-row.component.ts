import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HelperService} from '../../../shared/services/helper.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-list-row]',
  templateUrl: './list-row.component.html',
  styleUrls: ['./list-row.component.css'],
})
export class ListRowComponent implements OnInit {
  @Input() name;
  @Input() category;
  @Input() dateStart;
  @Input() dateEnd;
  @Input() status;
  @Input() id;
  @Output() deleteTaskEmitter = new EventEmitter<string>();
  constructor(
    public helpService: HelperService
  ) { }

  ngOnInit(): void {
  }
  deleteTask() {
    this.deleteTaskEmitter.emit(this.id);
  }
}
