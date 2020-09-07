export interface ICategoryList {
  result: {
    api: string;
    timestamp: Date;
    category: {
      category: string;
      description_th: string;
      description_eng: string;
    };
  };
}
