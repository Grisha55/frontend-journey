export type StoreFromApi = {
  lightSource: string;
  darkSource: string;
  description: string;
};

type Client = {
  image: StoreFromApi;
};

export type Clients = {
  key: string;
  clients: Client[];
};