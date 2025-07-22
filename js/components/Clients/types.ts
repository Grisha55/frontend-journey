type Image = {
  lightSource: string;
  darkSource: string;
  description: string;
};

type Client = {
  image: Image;
};

export type Clients = {
  key: string;
  clients: Client[];
};