export interface ISeriesList {
  result: {
    api: string;
    timestamp: Date;
    series: {
      category: string;
      series_code: string;
      series_name_th: string;
      series_name_eng: string;
      observation_start: string;
      observation_end: string;
      last_update_date: Date;
    };
  };
}
