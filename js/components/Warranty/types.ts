type Title = {
  value: string;
  priority: number;
};

type Image = {
  source: string;
  description: string;
};

export type Warranty = {
  key: string;
  title: Title;
  texts: string[];
  image: Image;
};