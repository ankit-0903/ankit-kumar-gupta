export interface Project {
  title: string;
  description: string[];
  tech: string[];
  github: string;
  external: string;
  image?: string;
}

export const featuredProjects: Project[] = [
  {
    title: 'Crop Disease Prediction & Management System',
    description: [
      'Engineered CropNurture, an AI-powered diagnostic platform recognized as a Smart India Hackathon finalist for crop disease mitigation.',
      'Architected a ResNet9-based classifier with 98%+ accuracy, optimized through a high-performance Flask API backend.',
      'Designed a precision-agriculture recommendation engine that synthesizes environmental data for tailored fertilizer insights.'
    ],
    tech: ['React', 'JavaScript', 'Python', 'PyTorch', 'Flask'],
    github: '#',
    external: 'https://sih-1638.vercel.app/',
    image: '/crop-disease.png'
  },
  {
    title: '2D Snake Game for Desktop',
    description: [
      'Developed a cross-platform desktop arcade game using C++ and the OpenGL graphics library.',
      'Implemented core game engine subsystems including low-latency rendering, iterative game loops, and custom event handlers.',
      'Optimized real-time performance and state tracking by utilizing dynamic data structures for efficient collision detection.'
    ],
    tech: ['C++', 'Arrays', 'OpenGL', 'Linked Lists'],
    github: 'https://github.com/ankit-0903/2D-Snake-Game-for-Desktop',
    external: '#',
    image: '/snake-game.png'
  },
  {
    title: 'Post-Mining Land Usage Platform',
    description: [
      'Developed a data-driven spatial analytics platform for Smart India Hackathon 2023 to evaluate sustainable repurposing of mining land.',
      'Processed large-scale GLIS (Geological Land Information System) datasets to evaluate site viability and restoration potential.',
      'Engineered a strategic framework recommending land usage for agriculture, forestry, and green energy initiatives.'
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/ankit-0903/Post-Mining-Land-Usage-Website',
    external: '#',
    image: '/post-mining.png'
  }
];
