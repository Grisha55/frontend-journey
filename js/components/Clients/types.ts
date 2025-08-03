export type BrandFromApi = {
  lightSource: string;
  darkSource: string;
  description: string;
};

type Client = {
  image: BrandFromApi;
};

export type Clients = {
  key: string;
  clients: Client[];
};