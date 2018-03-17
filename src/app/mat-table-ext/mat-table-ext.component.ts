import { Component, Input, OnInit } from '@angular/core';
import { TableExtColumn } from './models';

@Component({
  selector: 'mat-table-ext',
  templateUrl: './mat-table-ext.component.html',
  styleUrls: ['./mat-table-ext.component.css']
})
export class MatTableExtComponent<T> implements OnInit {
  @Input() columns: TableExtColumn<T>[] = [];
  @Input() dataSource: T[] = [];

  constructor() { }

  ngOnInit() {
  }

  get fields() {
    return this.columns.map(col => col.field);
  }
}
