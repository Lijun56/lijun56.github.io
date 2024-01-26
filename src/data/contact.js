import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faBilibili } from '@fortawesome/free-brands-svg-icons/faBilibili';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
// import { faAngellist } from '@fortawesome/free-brands-svg-icons/faAngellist';
// import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/lijun56',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.linkedin.com/in/lijun-legend-zhu/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://space.bilibili.com/xxxxxxx',
    label: 'Bilibili',
    icon: faBilibili,
  },
  {
    link: 'https://www.instagram.com/lijunzhu001/',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: 'mailto:zhu944@purdue.edu',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
