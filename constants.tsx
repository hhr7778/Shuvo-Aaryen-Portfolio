import { 
  Palette, 
  PenTool, 
  Monitor, 
  Layout, 
  Box, 
  Smartphone,
  Figma,
  Brush,
  Image as ImageIcon,
  Type
} from 'lucide-react';
import { NavItem, Service, Skill, Project } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export const SKILLS: Skill[] = [
  { name: 'Adobe Photoshop', level: 95, icon: ImageIcon },
  { name: 'Adobe Illustrator', level: 90, icon: PenTool },
  { name: 'Logo Design', level: 95, icon: Brush },
  { name: 'Branding', level: 85, icon: Palette },
  { name: 'UI/UX Design', level: 80, icon: Figma },
  { name: 'Social Media Design', level: 90, icon: Monitor },
];

export const SERVICES: Service[] = [
  {
    title: 'Logo Design',
    description: 'Crafting unique and memorable logos that represent your brand essence.',
    icon: PenTool,
  },
  {
    title: 'Brand Identity',
    description: 'Building cohesive visual systems including color palettes and typography.',
    icon: Palette,
  },
  {
    title: 'Poster Design',
    description: 'Creating impactful visual posters for events, promotions, and art.',
    icon: Layout,
  },
  {
    title: 'Social Media Content',
    description: 'Designing engaging graphics to boost your online presence and engagement.',
    icon: Smartphone,
  },
  {
    title: 'UI/UX Design',
    description: 'Designing user-friendly interfaces for web and mobile applications.',
    icon: Monitor,
  },
  {
    title: 'Packaging Design',
    description: 'Creative packaging solutions that stand out on the shelf.',
    icon: Box,
  },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'EcoLife Branding',
    category: 'Brand Identity',
    imageUrl: 'https://i.postimg.cc/RFpLCvhL/vdv.jpg',
  },
  {
    id: '2',
    title: 'Neon Music Festival',
    category: 'Poster Design',
    imageUrl: 'https://i.postimg.cc/JhqQgNLw/grth.jpg',
  },
  {
    id: '3',
    title: 'Urban Coffee Co.',
    category: 'Logo Design',
    imageUrl: 'https://i.postimg.cc/dtrN6TL1/uilk.jpg',
  },
  {
    id: '4',
    title: 'TechStart App',
    category: 'UI/UX Design',
    imageUrl: 'https://i.postimg.cc/G26zJcRy/VDERG.jpg',
  },
  {
    id: '5',
    title: 'Organic Food Packaging',
    category: 'Packaging',
    imageUrl: 'https://i.postimg.cc/C5D7cWMj/ryt.jpg',
  },
  {
    id: '6',
    title: 'Minimalist Portfolio',
    category: 'Web Design',
    imageUrl: 'https://i.postimg.cc/VvMgK3LQ/ggggg.jpg',
  },
  {
    id: '7',
    title: 'Modern Art Expo',
    category: 'Poster Design',
    imageUrl: 'https://i.postimg.cc/hGgrpCNY/11.jpg',
  },
  {
    id: '8',
    title: 'Green Earth Initiative',
    category: 'Brand Identity',
    imageUrl: 'https://i.postimg.cc/528g5cKL/GR.jpg',
  },
  {
    id: '9',
    title: 'Blue Wave Tech',
    category: 'Logo Design',
    imageUrl: 'https://i.postimg.cc/bYFmp92p/dfb.jpg',
  },
  {
    id: '10',
    title: 'Fashion Week',
    category: 'Event Branding',
    imageUrl: 'https://i.postimg.cc/Dy6L72Np/thfrth.jpg',
  },
  {
    id: '11',
    title: 'Organic Juices',
    category: 'Packaging',
    imageUrl: 'https://i.postimg.cc/c4xt9pJv/gel.jpg',
  },
  {
    id: '12',
    title: 'Creative Agency',
    category: 'Web Design',
    imageUrl: 'https://i.postimg.cc/52tv0hcs/yhtht.jpg',
  },
];

export const CONTACT_INFO = {
  email: 'arave9151@gmail.com',
  phone: '+1 (555) 000-0000', // Placeholder
  address: 'Based in Dhaka, Bangladesh',
};