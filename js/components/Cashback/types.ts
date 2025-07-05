type Title = {
  value: string;
  priority: number;
};

type ButtonProps = {
  text: string;
  type: string;
};

export type Cashback = {
  key: string;
  title: Title;
  texts: string[];
  button: ButtonProps;
};