export interface EducationNode {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  gradeLabel: string;
  description: string;
  current: boolean;
}

export const educationData: EducationNode[] = [
  {
    degree: 'BE in Computer Science & Engineering',
    institution: 'BMS Institute of Technology and Management',
    location: 'Bengaluru, Karnataka, India',
    period: '2022 — 2026',
    grade: 'CGPA: 8.77 / 10',
    gradeLabel: 'Current',
    description: 'Key coursework: Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, Computer Networks, Machine Learning, and Database Management Systems.',
    current: true,
  },
  {
    degree: 'Higher Secondary Education (Grade 12)',
    institution: 'Arniko Awasiya Secondary School',
    location: 'Biratnagar, Morang, Nepal',
    period: '2020 — 2021',
    grade: 'CGPA: 3.29 / 4',
    gradeLabel: 'National Examination Board',
    description: 'Completed higher secondary with a focus on Science and Mathematics. Developed a strong foundation in Physics, Chemistry, and Computer Science.',
    current: false,
  },
  {
    degree: 'Secondary Education (Grade 10)',
    institution: 'Sagarmatha Secondary Boarding School',
    location: 'Biratnagar, Morang, Nepal',
    period: '2019',
    grade: 'CGPA: 3.45 / 4',
    gradeLabel: 'National Examination Board',
    description: 'Completed Secondary Education Examination (SEE) with distinction. Built core academic fundamentals in Mathematics, Science, and English.',
    current: false,
  },
];
