import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { ICategory } from '../ICategory';

@Component({
  selector: 'app-stat-category',
  templateUrl: './stat-category.component.html',
  styleUrls: ['./stat-category.component.css'],
})
export class StatCategoryComponent implements OnInit {
  constructor(private configService: ConfigService) {}

  categoryResult: ICategory;

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.configService.getData().subscribe((data) => {
      this.categoryResult = data;
    });
  }
}
