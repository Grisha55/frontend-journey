type Title = {
  value: string;
  priority: number;
};

type ButtonProps = {
  text: string;
  type: string;
};

type Image = {
  source: string,
  description: string;
};

type Client = {
  images: Image[];
}

export type Cashback = {
  key: string;
  title: Title;
  texts: string[];
  button: ButtonProps;
  clients: Client;
};