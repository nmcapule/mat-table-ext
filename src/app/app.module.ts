import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatTableExtModule } from './mat-table-ext/mat-table-ext.module';
import { AppComponent} from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MatTableExtModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
