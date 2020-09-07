import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfigComponent } from './config/config.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { SeriesListComponent } from './series-list/series-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ConfigComponent,
    CategoryListComponent,
    SeriesListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
