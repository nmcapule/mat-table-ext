import { TemplateRef } from '@angular/core';

export interface TableExtColumn<T> {
  field: string;
  displayName?: string;
  type?: 'string'|'number'|'date';
  cellTemplate?: TemplateRef<T>;
}