type Title = {
  value: string;
  priority: number;
};

type Store = {
  name: string;
  key: string;
};

type Image = {
  source: string;
  description: string;
};

export type Download = {
  key: String;
  title: Title;
  texts: string[];
  stores: Store[];
  image: Image;
};