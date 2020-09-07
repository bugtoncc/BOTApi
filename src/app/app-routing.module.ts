import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryListComponent } from '../app/category-list/category-list.component';
import { SeriesListComponent } from '../app/series-list/series-list.component';

const routes: Routes = [
  { path: 'category-list', component: CategoryListComponent },
  { path: 'series-list/:category', component: SeriesListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
