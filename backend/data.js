const educationHistory = [
{ id: 1, period: '2023 - Sekarang', institution: 'Universitas Amikom Yogyakarta', major: 'S1 - Teknik Informatika', image: '/amikom.webp' },
{ id: 2, period: '2020 - 2023', institution: 'SMA N 3 KLATEN', major: 'MIPA', image: '/smaga.webp' }
];

const skills = [
  { name: 'Vue.js', level: 'Mahir', image: '/vue.png', percent: 80},
  { name: 'JavaScript', level: 'Mahir', image: 'js.png', percent: 95 },
  { name: 'Tailwind CSS', level: 'Mahir', image: '/tailwind.png', percent: 85 },
  { name: 'Node.js', level: 'Mahir', image: '/nodejs.png', percent: 95},
  { name: 'Express.js', level: 'Mahir', image: '/express.png', percent: 75 },
  { name: 'PostgreSQL', level: 'Mahir', image: 'sql.png', percent: 80 },
  { name: 'GitHub', level: 'Mahir', image: '/github.png', percent: 80 },
  { name: 'HTML5', level: 'Mahir', image: '/html5.png', percent: 85 },
  { name: 'CSS3', level: 'Mahir', image: 'css3.png', percent: 90 },
];


const projects = [
{ title: 'Laundry', image: '/washtop.png',
description: 'Laundry.', tech: [ 'Figma'], link: 'https://www.figma.com/design/faGfPGefqc5Pn6QJfrxgVj/UTS-IMK?node-id=0-1&node-type=canvas&t=1CjPZ3uxK6uURpVb-0' },
{ title: 'Mas Gondrong Rent', image: 'masgondrong.jpeg',
description: 'Sewa Kendaraan Mobil dan Motor', tech: ['Laravel', 'Vue', 'Bootstrap5', 'MySQL'], link: 'https://github.com/Izzaramadhan/FP-MasGondrong' }
];

module.exports = { educationHistory, skills, projects };