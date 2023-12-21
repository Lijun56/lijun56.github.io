/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'C Deign lab',
    position: 'Software Developer and Research Assistant',
    url: 'https://engineering.purdue.edu/cdesign/wp/',
    startDate: '2022-06-01',
    summary: '',
    highlights: [
      'Developed a MR(mixed reality) application for human pose detection, utilizing ARkit and Yolo item segmentation.',
      'Developed a scalable website application for 300 students, promoting microcontroller programming education and catering to user requirements',
    ],
  },
  {
    name: 'LyoHUB Lab',
    position: 'Full Stack Developer',
    url: 'https://engineering.purdue.edu/VIP/teams/LyoHUB',
    startDate: '2022-01-01',
    endDate: '2022-05-01',
    summary: '',
    highlights: [
      'Facilitated data transmission and web request between frontend and Dockerized backend service, contributing to product robustness and efficiency',
      'Led a team of 5 to design a data visualization website with interactive functionalities using Plotly and Flask,' +
        " catering to the product's user-friendly interface",
      'Managed the data compilation of 10,000+ drugs over 80 years, enhancing product data storage efficiency through Docker',
    ],
  },
];

export default work;
