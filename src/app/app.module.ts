import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import {DataServiceService} from './services/data-service.service';
import { BookUsageComponent } from './book-usage/book-usage.component';
import { FilterPanelComponent } from './filter-panel/filter-panel.component';

const routes:Routes = [
  { path: '', component: AppComponent },
  { path: 'book-usage', component: BookUsageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BookUsageComponent,
    FilterPanelComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
