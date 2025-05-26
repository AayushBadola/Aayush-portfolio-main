
export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  gradient: string;
  featured: boolean;
  category: 'ML/AI' | 'Systems' | 'Web' | 'Game';
}

export const projects: Project[] = [
  {
    id: 'brain-cancer',
    title: 'Brain Cancer Classifier',
    description: 'Convolutional Neural Network (CNN) built with TensorFlow/Keras to classify brain MRI images into Glioma, Meningioma, and a general Tumor category. Based on Brain Cancer Dataset',
    tech: ['Python', 'TensorFlow', 'Keras', 'CNN', 'Medical Imaging'],
    github: 'https://github.com/AayushBadola/BrainCancerClassifier',
    gradient: 'from-red-500 to-pink-500',
    featured: true,
    category: 'ML/AI'
  },
  {
    id: 'fetus-health',
    title: 'Fetus Health Classification',
    description: 'Fetal Health Classification via custom Deep Learning (CNN-Transformer). Features Optuna HPO, AdamW, label smoothing, and GPU-accelerated training pipeline for high-accuracy CTG analysis.',
    tech: ['Python', 'TensorFlow', 'Keras', 'Optuna', 'AdamW', 'CNN-Transformer'],
    github: 'https://github.com/AayushBadola/FetusHealth',
    gradient: 'from-purple-500 to-indigo-500',
    featured: true,
    category: 'ML/AI'
  },
  {
    id: 'exoplanet-detection',
    title: 'Exo Planet Detection',
    description: 'Machine learning pipeline for detecting exoplanets from Kepler Space Telescope data. Implements data preprocessing, model training (Random Forest), evaluation, and prediction, using Hydra for configuration and MLflow for experiment tracking',
    tech: ['Python', 'Machine Learning', 'Random Forest', 'Hydra', 'MLflow', 'Kepler Data'],
    github: 'https://github.com/AayushBadola/Exo-Planet-Detection',
    gradient: 'from-blue-500 to-cyan-500',
    featured: true,
    category: 'ML/AI'
  },
  {
    id: 'hospital-system',
    title: 'Hospital System',
    description: 'Hospital Dashboard System using C++ to check what doctors are now in charge of which patient',
    tech: ['C++', 'System Design', 'Dashboard'],
    github: 'https://github.com/AayushBadola/HospitalSystem',
    gradient: 'from-green-500 to-emerald-500',
    featured: false,
    category: 'Systems'
  },
  {
    id: 'aquant',
    title: 'Aquant',
    description: 'Built a modular C library to simplify tasks like input handling, string manipulation, memory management, and error checking. Focused on writing safe, reusable, and efficient code with thorough documentation and testing.',
    tech: ['C', 'Library Development', 'Memory Management', 'Testing'],
    github: 'https://github.com/AayushBadola/Aquant',
    gradient: 'from-yellow-500 to-orange-500',
    featured: false,
    category: 'Systems'
  },
  {
    id: 'student-database',
    title: 'Student Database',
    description: 'A student database to store, edit, see, delete student info in C using "Aquant library" for increased functionality',
    tech: ['C', 'Database', 'CRUD Operations', 'Aquant Library'],
    github: 'https://github.com/AayushBadola/Student-Database',
    gradient: 'from-teal-500 to-blue-500',
    featured: false,
    category: 'Systems'
  },
  {
    id: 'atomix',
    title: 'Atomix',
    description: 'Atomix is a small, straightforward C++ library designed to provide basic utility functions for common programming needs, particularly useful in console-based applications or for simple data processing tasks.',
    tech: ['C++', 'Library Development', 'Utilities', 'Console Applications'],
    github: 'https://github.com/AayushBadola/Atomix',
    gradient: 'from-indigo-500 to-purple-500',
    featured: false,
    category: 'Systems'
  },
  {
    id: 'web-assistant',
    title: 'Web Assistant',
    description: 'A virtual speech assistant',
    tech: ['Web Technologies', 'Speech Recognition', 'AI Assistant'],
    github: 'https://github.com/AayushBadola/Assistant',
    gradient: 'from-pink-500 to-rose-500',
    featured: false,
    category: 'Web'
  },
  {
    id: 'anomaly-detector',
    title: 'Anomaly Detector',
    description: "It's designed to ingest data from various sources (like application metrics, sensor readings, event counts), process it efficiently using asyncio, apply statistical anomaly detection algorithms over sliding windows, and trigger configurable actions (like logging or sending webhooks) when anomalies are found.",
    tech: ['Python', 'Asyncio', 'Statistical Analysis', 'Real-time Processing', 'Webhooks'],
    github: 'https://github.com/AayushBadola/Anomaly-Detection',
    gradient: 'from-red-500 to-orange-500',
    featured: false,
    category: 'ML/AI'
  },
  {
    id: 'task-manager',
    title: 'Task Manager Using Python',
    description: 'A task management application built with Python',
    tech: ['Python', 'Task Management', 'CLI'],
    github: 'https://github.com/AayushBadola/TaskManager',
    gradient: 'from-slate-500 to-gray-500',
    featured: false,
    category: 'Systems'
  },
  {
    id: 'nba-game',
    title: 'NBA Guess Game',
    description: 'A guessing game about NBA players made during Harvard CS50 Python Course using NBA API',
    tech: ['Python', 'NBA API', 'Game Development', 'CS50'],
    github: 'https://github.com/AayushBadola/NBA-guessing-game',
    gradient: 'from-orange-500 to-red-500',
    featured: false,
    category: 'Game'
  }
];

export const featuredProjects = projects.filter(p => p.featured);
export const otherProjects = projects.filter(p => !p.featured);
