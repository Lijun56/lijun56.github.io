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
    name: 'Ziro(C Design Lab)',
    position: 'Software Developer and Research Assistant',
    url: 'https://engineering.purdue.edu/cdesign/wp/',
    startDate: '2022-06-01',
    endDate: '2024-05-01',
    summary: '',
    highlights: [
      'Developed a VR school using Unity for Oculus, integrating ChatGPT to provide immersive VR lessons',
      'Designed a scalable website application for 300 students, promoting micro-controller programming education',
    ],
  },
  {
    name: 'Makusafe',
    position: 'Data Scientist Intern',
    url: 'https://engineering.purdue.edu/VIP/teams/LyoHUB',
    startDate: '2022-01-01',
    endDate: '2022-05-01',
    summary: '',
    highlights: [
      'Led a neural network team using TensorFlow and PyTorch, preprocessing large-scale sensor data with normalization and feature selection techniques',
      'Built a fall-risk prediction model using worker wearables, achieving 92% accuracy through iterative training with cross - validation on a dataset of 1 million samples.',
      'Managed GitHub workflows to improve code reviews and version control, facilitating project delivery',
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
      'Led a team of 5 to design a data visualization website with interactive functionalities using Plotly and Flask,'
      + " catering to the product's user-friendly interface",
      'Managed the data compilation of 10,000+ drugs over 80 years, enhancing product data storage efficiency through Docker',
    ],
  },
  {
    name: 'Brose Group',
    position: 'Software Developer Intern',
    url: 'https://www.brose.com/de-en/',
    startDate: '2020-12-01',
    endDate: '2021-06-01',
    summary: '',
    highlights: [
      'Designed an HCI (human-machine communication) system using Arduino and C++ to control car components',
      'Earned the Innovative Engineering Excellence Award at Brose innovation department.',
    ],
  },
];

export default work;
