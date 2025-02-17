// Nav type
export type navLinkType = {
  label: string;
  url: string;
};

// Nav
const navLinks = [
  {
    label: 'Services',
    url: '#services',
  },
  {
    label: 'Projects',
    url: '#works',
  },
  {
    label: 'About',
    url: '#about-me-section',
  },
  {
    label: 'Contact',
    url: '#contact-section',
  },
];
const navbarLinks = [
  {
    label: 'Home',
    url: '#app',
  },
  ...navLinks,
];

const socialLinks = [
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/kerywastaken',
  // },
  // {
  //   label: 'Telegram',
  //   url: 'https://t.me/e_1_e',
  // },
  // {
  //   label: 'GitHub',
  //   url: 'https://github.com/hetari',
  // },
  // {
  //   label: 'LinkedIn',
  //   url: 'https://www.linkedin.com/in/hetari/',
  },
];

const resourceLinks = [
  {
    label: 'Huy Nguyen (the ui designer)',
    url: 'https://www.huyng.xyz',
  },
  {
    label: 'Pillarstack',
    url: 'https://www.pillarstack.com',
  },
  {
    label: 'Figma Template',
    url: 'https://www.figma.com/community/file/1328038510191576951/project-starter-template',
  },
];

const heroText =
  'A video editor and graphic designer, crafting visually stunning and interactive experiences.';

// cal.com
// const dataCalNamespace = '30min';
// const dataCalLink = 'brhoom/30min';
// const dataCalConfig =
//   '{"layout":"month_view", "theme": "dark", "brand": "#8C8C73"}';

export {
  socialLinks,
  resourceLinks,
  heroText,
  navLinks,
  navbarLinks,
  // dataCalNamespace,
  // dataCalLink,
  // dataCalConfig,
};
