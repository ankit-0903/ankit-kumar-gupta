export interface Publication {
  title: string;
  year: string;
  description: string;
  link?: string;
}

export interface Achievement {
  title: string;
  description: string;
  year: string;
}

export const publications: Publication[] = [
  {
    title: 'Convolutional Neural Networks for Crop Disease Detection & Outbreak Prediction',
    year: '2025',
    description: 'Published and presented at IEEE ICONAT 2025 featuring a hybrid ResNet18 and XGBoost framework for disease classification. Engineered a scalable model trained on 54,000+ images, achieving 98% classification accuracy and a 0.99 F1-score by integrating geospatial NDVI environmental indicators.',
    link: 'https://ieeexplore.ieee.org/document/11362585'
  }
];

export const achievements: Achievement[] = [
  {
    title: 'Amazon ML Summer School 2025',
    description: 'Selected for the highly-competitive national-level Machine Learning program hosted by Amazon.',
    year: '2025'
  },
  {
    title: 'Anveshana\'25 Prototype Competition',
    description: 'National level Top 13 Finalist out of 56 competing engineering teams.',
    year: '2025'
  },
  {
    title: 'Smart India Hackathon 2024',
    description: 'National Finalist for AI-powered CropNurture solutions.',
    year: '2024'
  },
  {
    title: 'PBL Open Day 2024',
    description: 'Winner for the Best Project Prototype award.',
    year: '2024'
  },
  {
    title: 'Smart India Hackathon 2023',
    description: 'National Finalist for data-driven post-mining solutions.',
    year: '2023'
  }
];
