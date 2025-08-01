import config from '~/config.json';

export const navLinks = [
  {
    label: 'Projects',
    pathname: '/#project-1',
  },
  {
    label: 'Details',
    pathname: '/#details',
  },
  
  {
    label: 'Contact',
    pathname: '/contact',
  },
];

export const socialLinks = [
  {
    label: 'Twitter',
    url: `https://x.com/${config.twitter}`,
    icon: 'twitter',
  },
  {
    label: 'Instagram',
    url: `https://instagram.com/${config.instagram}`,
    icon: 'instagram',
  },
  {
    label: 'Facebook',
    url: `https://www.facebook.com/${config.facebook}`,
    icon: 'facebook',
  },
  {
    label: 'LinkedIn',
    url: `https://www.linkedin.com/in/${config.linkedin}`,
    icon: 'linkedin',
  },
  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
];
