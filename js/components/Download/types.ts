import { TitleData } from "../../ui/Title/types";

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
  title: TitleData;
  texts: string[];
  stores: Store[];
  image: Image;
};