import { Project, MethodologyItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Spotify Origins',
    description: 'An interactive web application mapping artist origins from user playlists to visualize geographic musical preferences.',
    tags: ['Data Viz', 'Creative Coding', 'React', 'D3.js'],
    size: 'large', // 2x2
  },
  {
    id: '2',
    title: 'BXLGIS City',
    description: 'Cartographic platform for city agents. Implementing Continuous Discovery habits within public service.',
    tags: ['Product Strategy', 'GovTech', 'SaaS'],
    size: 'medium', // 1x2 (Tall)
  },
  {
    id: '3',
    title: 'Café Costermans',
    description: 'Bespoke restaurant website focusing on heritage and minimal aesthetics.',
    tags: ['Freelance', 'Front-end'],
    size: 'small', // 1x1
  },
  {
    id: '4',
    title: 'Décider avec le Vivant',
    description: 'Service design research project exploring ecological decision making in urban planning.',
    tags: ['Research', 'Ecology', 'Service Design'],
    size: 'medium', // 1x2 (Tall) or Wide depending on layout choice, let's go Tall to fit bento
  },
];

export const METHODOLOGY: MethodologyItem[] = [
  {
    id: 'm1',
    title: 'Discovery',
    description: 'Mapping opportunities through user interviews, data analysis, and user flow definitions.',
    icon: 'discovery',
  },
  {
    id: 'm2',
    title: 'Prototyping',
    description: 'Defining information architecture and MVP scope through rapid wireframing and testing.',
    icon: 'prototyping',
  },
  {
    id: 'm3',
    title: 'Craft',
    description: 'High-fidelity UI design and robust engineering with a focus on micro-interactions and accessibility.',
    icon: 'craft',
  },
];
