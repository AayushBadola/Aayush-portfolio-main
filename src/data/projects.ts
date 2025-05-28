
export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  gradient: string;
  featured: boolean;
  category: 'ML/AI' | 'Systems' | 'Web' | 'Game' | 'Backend';
  image: string;
}

export interface Article {
  id: string;
  title: string;
  description: string;
  url: string;
  date: string;
  gradient: string;
  image: string;
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
    category: 'ML/AI',
    image: '/lovable-uploads/1afda38b-7a7a-4fe5-95e2-40e009767c79.png'
  },
  {
    id: 'fetus-health',
    title: 'Fetus Health Classification',
    description: 'Fetal Health Classification via custom Deep Learning (CNN-Transformer). Features Optuna HPO, AdamW, label smoothing, and GPU-accelerated training pipeline for high-accuracy CTG analysis.',
    tech: ['Python', 'TensorFlow', 'Keras', 'Optuna', 'AdamW', 'CNN-Transformer'],
    github: 'https://github.com/AayushBadola/FetusHealth',
    gradient: 'from-purple-500 to-indigo-500',
    featured: true,
    category: 'ML/AI',
    image: '/lovable-uploads/bf2e5955-2d4c-4b89-ba95-965b04d22abe.png'
  },
  {
    id: 'exoplanet-detection',
    title: 'Exo Planet Detection',
    description: 'Machine learning pipeline for detecting exoplanets from Kepler Space Telescope data. Implements data preprocessing, model training (Random Forest), evaluation, and prediction, using Hydra for configuration and MLflow for experiment tracking',
    tech: ['Python', 'Machine Learning', 'Random Forest', 'Hydra', 'MLflow', 'Kepler Data'],
    github: 'https://github.com/AayushBadola/Exo-Planet-Detection',
    gradient: 'from-blue-500 to-cyan-500',
    featured: true,
    category: 'ML/AI',
    image: '/lovable-uploads/99fa5058-d5ab-4d5d-ac20-f2b0c6937236.png'
  },
  {
    id: 'anomaly-detector',
    title: 'Anomaly Detector',
    description: "It's designed to ingest data from various sources (like application metrics, sensor readings, event counts), process it efficiently using asyncio, apply statistical anomaly detection algorithms over sliding windows, and trigger configurable actions (like logging or sending webhooks) when anomalies are found.",
    tech: ['Python', 'Asyncio', 'Statistical Analysis', 'Real-time Processing', 'Webhooks'],
    github: 'https://github.com/AayushBadola/Anomaly-Detection',
    gradient: 'from-red-500 to-orange-500',
    featured: false,
    category: 'ML/AI',
    image: '/lovable-uploads/c226f29a-6322-4eac-b148-8f501992d868.png'
  },
  {
    id: 'hospital-system',
    title: 'Hospital System',
    description: 'Hospital Command Line System using C++ to check what doctors are now in charge of which patient',
    tech: ['C++', 'System Design', 'Command Line'],
    github: 'https://github.com/AayushBadola/HospitalSystem',
    gradient: 'from-green-500 to-emerald-500',
    featured: false,
    category: 'Systems',
    image: '/lovable-uploads/6f285141-6a58-4dfc-b1d9-9372335a9166.png'
  },
  {
    id: 'aquant',
    title: 'Aquant',
    description: 'Built a modular C library to simplify tasks like input handling, string manipulation, memory management, and error checking. Focused on writing safe, reusable, and efficient code with thorough documentation and testing.',
    tech: ['C', 'Library Development', 'Memory Management', 'Testing'],
    github: 'https://github.com/AayushBadola/Aquant',
    gradient: 'from-yellow-500 to-orange-500',
    featured: false,
    category: 'Systems',
    image: '/lovable-uploads/72232d13-447f-402c-aba2-e1dc4d3e7693.png'
  },
  {
    id: 'student-database',
    title: 'Student Database',
    description: 'A student database to store, edit, see, delete student info in C using "Aquant library" for increased functionality',
    tech: ['C', 'Database', 'CRUD Operations', 'Aquant Library'],
    github: 'https://github.com/AayushBadola/Student-Database',
    gradient: 'from-teal-500 to-blue-500',
    featured: false,
    category: 'Systems',
    image: '/lovable-uploads/4fd1fb65-bc82-4177-af69-9567151f33c7.png'
  },
  {
    id: 'atomix',
    title: 'Atomix',
    description: 'Atomix is a small, straightforward C++ library designed to provide basic utility functions for common programming needs, particularly useful in console-based applications or for simple data processing tasks.',
    tech: ['C++', 'Library Development', 'Utilities', 'Console Applications'],
    github: 'https://github.com/AayushBadola/Atomix',
    gradient: 'from-indigo-500 to-purple-500',
    featured: false,
    category: 'Systems',
    image: '/lovable-uploads/da9fb423-92b6-4b22-a562-a8b07a5245bc.png'
  },
  {
    id: 'task-manager',
    title: 'Task Manager Using Python',
    description: 'A task management application built with Python',
    tech: ['Python', 'Task Management', 'CLI'],
    github: 'https://github.com/AayushBadola/TaskManager',
    gradient: 'from-slate-500 to-gray-500',
    featured: false,
    category: 'Backend',
    image: '/lovable-uploads/d4a3b6f8-855d-455b-9c08-a87ac569021a.png'
  },
  {
    id: 'web-assistant',
    title: 'Web Assistant',
    description: 'A virtual speech assistant',
    tech: ['Web Technologies', 'Speech Recognition', 'AI Assistant'],
    github: 'https://github.com/AayushBadola/Assistant',
    gradient: 'from-pink-500 to-rose-500',
    featured: false,
    category: 'Web',
    image: '/lovable-uploads/681d816f-9ac3-449c-987e-1baa96b37efb.png'
  },
  {
    id: 'nba-game',
    title: 'NBA Guess Game',
    description: 'A guessing game about NBA players made during Harvard CS50 Python Course using NBA API',
    tech: ['Python', 'NBA API', 'Game Development', 'CS50'],
    github: 'https://github.com/AayushBadola/NBA-guessing-game',
    gradient: 'from-orange-500 to-red-500',
    featured: false,
    category: 'Game',
    image: '/lovable-uploads/37d9e8e5-4b54-4552-a763-51ec76fca953.png'
  }
];

export const articles: Article[] = [
  {
    id: 'self-supervised-learning',
    title: 'Harnessing Intrinsic Structure: The Self-Supervised Learning Revolution',
    description: 'Exploring the revolutionary approach of self-supervised learning and its impact on modern AI systems.',
    url: 'https://medium.com/@aayush.badola2/harnessing-intrinsic-structure-the-self-supervised-learning-revolution-9d96cd012b50',
    date: '2025',
    gradient: 'from-green-400 to-blue-500',
    image: '/lovable-uploads/6617a301-2b16-4ea5-9b6d-00526808ba6c.png'
  },
  {
    id: 'transparently-complex-ai',
    title: 'Beyond the Trade-off: Transparently Complex AI',
    description: 'Examining the balance between AI complexity and transparency in modern machine learning systems.',
    url: 'https://medium.com/@aayush.badola2/beyond-the-trade-off-transparently-complex-ai-89b955853673',
    date: '2025',
    gradient: 'from-purple-400 to-pink-500',
    image: '/lovable-uploads/a2e7e5c0-77ec-4930-8080-fde0d330b85f.png'
  },
  {
    id: 'particles-cosmos',
    title: 'Particles of Cosmos: From Python to Trinity',
    description: 'A deep dive into computational physics and the intersection of programming with cosmic phenomena.',
    url: 'https://medium.com/@aayush.badola2/particles-of-cosmos-from-trinity-to-python-06d49b6df773',
    date: '2025',
    gradient: 'from-blue-400 to-purple-500',
    image: '/lovable-uploads/060dcdbf-d5a8-47d3-9722-87bc37aa59f8.png'
  },
  {
    id: 'silicon-mind',
    title: 'Silicon Mind: The Technical Chasm of ANN Brain Replacement',
    description: 'Analyzing the technical challenges and possibilities of artificial neural networks replacing biological brain functions.',
    url: 'https://medium.com/@aayush.badola2/silicon-mind-the-technical-chasm-of-ann-brain-replacement-3b175c9114c4',
    date: '2025',
    gradient: 'from-cyan-400 to-green-500',
    image: '/lovable-uploads/bc658e14-e593-4f5c-aba2-38227811e267.png'
  },
  {
    id: 'deepseek-llm',
    title: 'DeepSeek LLM Architecture Explained',
    description: 'Technical breakdown of the DeepSeek LLM architecture and its innovative approaches to language modeling.',
    url: 'https://medium.com/@aayush.badola2/deepseek-llm-architecture-explained-f945972c0a96',
    date: '2025',
    gradient: 'from-red-400 to-orange-500',
    image: '/lovable-uploads/cfc54862-742a-483f-8a1c-de0332d5b3d0.png'
  }
];

export const featuredProjects = projects.filter(p => p.featured);
export const otherProjects = projects.filter(p => !p.featured);

export const getProjectsByCategory = (category: string) => {
  if (category === 'All') return projects;
  return projects.filter(p => p.category === category);
};
