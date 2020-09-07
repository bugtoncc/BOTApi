import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { ICategoryList } from '../Interface/ICategoryList';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent implements OnInit {
  constructor(private configService: ConfigService) {}

  categoryListResult: ICategoryList;
  title: string;

  ngOnInit(): void {
    this.title = 'Category list';
    this.getData();
  }

  getData(): void {
    this.configService.getCategoryList().subscribe((data) => {
      this.categoryListResult = data;
    });
  }
}
