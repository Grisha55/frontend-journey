// Image interface used in multiple places
type Image = {
  src: string;
  alt: string;
};

// Logo button interface
type Logo = {
  type: string;
  id: string;
  img: Image;
};

// Menu item interface
type MenuItem = {
  href: string;
  text: string;
};

// Navigation menu interface
type Menu = {
  id: string;
  items: MenuItem[];
};

// Navigation interface
type Nav = {
  menu: Menu;
};

// Language option interface
type LangOption = {
  value: string;
  text: string;
};

// Language select interface
type LangSelect = {
  id: string;
  options: LangOption[];
};

// Language selector interface
type Language = {
  arrow: Image;
  select: LangSelect;
};

// Theme button interface
type ThemeButton = {
  type: string;
  id: string;
  img: Image;
};

// Burger button interface
type BurgerButton = {
  id: string;
  type: string
};

// Header actions interface
type HeaderActions = {
  lang: Language;
  theme: ThemeButton;
  burger: BurgerButton;
};

export type Header = {
  logo: Logo;
  nav: Nav;
  actions: HeaderActions;
};