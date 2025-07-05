type Title = {
  value: string;
  priority: number;
};

type Image = {
  source: string;
  description: string;
};

export type Care = {
  key: String;
  title: Title;
  texts: string[];
  image: Image;
};