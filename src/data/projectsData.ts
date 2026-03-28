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
      'Developed CropNurture, an AI-powered web application for Smart India Hackathon to assist farmers with immediate crop disease management.',
      'Integrated a PyTorch ResNet9 model via a Flask API, achieving 98%+ accuracy on 50,000+ images.',
      'Built a predictive recommendation engine analyzing environmental data point arrays to generate data-driven fertilizer insights.'
    ],
    tech: ['React', 'JavaScript', 'Python', 'PyTorch', 'Flask'],
    github: '#',
    external: 'https://sih-1638.vercel.app/',
    image: '/crop-disease.jpeg'
  },
  {
    title: '2D Snake Game for Desktop',
    description: [
      'Developed a fully functional desktop game using C++ and OpenGL.',
      'Implemented core game engine principles including real-time rendering, game loops, and custom event handling.',
      'Optimized internal game state management by utilizing linked lists for dynamic movement capabilities and rapid collision detection.'
    ],
    tech: ['C++', 'Arrays', 'OpenGL', 'Linked Lists'],
    github: 'https://github.com/ankit-0903/2D-Snake-Game-for-Desktop',
    external: '#'
  },
  {
    title: 'Post-Mining Land Usage Platform',
    description: [
      'Developed a data-driven solution for Smart India Hackathon 2023 to identify sustainable repurposing options for post-coal mining land across India.',
      'Analyzed massive GLIS data segments to assess land viability.',
      'Provided strategic recommendations for agriculture, afforestation, and new renewable energy projects.'
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/ankit-0903/Post-Mining-Land-Usage-Website',
    external: '#'
  }
];
