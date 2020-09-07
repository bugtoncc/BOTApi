import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../config.service';
import { ISeriesList } from '../Interface/ISeriesList';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css'],
})
export class SeriesListComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private configService: ConfigService
  ) {}

  seriesListResult: ISeriesList;
  categoryTitle: string;
  title: string;

  ngOnInit(): void {
    this.title = 'Series list';
    this.getData();
  }

  getData(): void {
    const category = this.route.snapshot.paramMap.get('category');
    this.configService.getSeriesList(category).subscribe((data) => {
      this.seriesListResult = data;
      this.categoryTitle = category;
    });
  }
}
