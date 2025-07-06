type Link = {
  text: string;
  url: string;
};

type DevIcon = {
  url: string;
  iconSrc: string;
  iconAlt: string;
};

type Column = 
  | {
      type: 'default';
      title: string;
      links: Link[];
    }
  | {
      type: 'social';
      title: string;
      socialIcons: DevIcon[];
    }
  | {
      type: 'contact';
      title: string;
      email: string;
    };

  type Logo = {
  src: string;
  alt: string;
  url: string;
};

export type Footer = {
  logo: Logo;
  columns: Column[];
  infoTexts: string[];
  developerLogo: {
    src: string;
    alt: string;
    url: string;
  };
};