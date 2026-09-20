import type { PortfolioData } from '../types/portfolio'

export const portfolio: PortfolioData = {
  name: 'Ankur Gangwar',
  role: 'Software Developer',
  tagline: 'Building scalable web applications and exploring AI-powered solutions. Passionate about creating clean, responsive, and impactful software',
  about:
    'I am a B.Tech student at MNNIT Allahabad passionate about software engineering, full-stack development, and AI/ML. I enjoy creating intuitive applications, learning modern technologies, and strengthening my problem-solving skills through Data Structures & Algorithms. I am always looking for opportunities to build products that make a real impact',
  location: 'India',
  email: 'ankurgangwar4575@gmail.com',
  resumeUrl: '/Resume Software2.pdf',
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/ankurgangwar4575-tech' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ankur-gangwar/' },
  ],
  codingProfiles: [ { label: 'LeetCode', href: 'https://leetcode.com/u/ankur01-02/' },
  { label: 'CodeForces', href: 'https://codeforces.com/profile/ankur009' },
  { label: 'CodeChef', href: 'https://www.codechef.com/users/ankur01_02' },
  { label: 'GeeksForGeeks', href: 'https://www.geeksforgeeks.org/profile/ankur02?tab=activity' },],
  skillGroups: [
    { title: 'Programming Languages', skills: ['C++', 'Python', 'JavaScript', 'TypeScript', 'Java'] },
    { title: 'Frontend', skills: ['React.js', 'Tailwind CSS', 'HTML', 'CSS'] },
    { title: 'Backend', skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "OAuth 2.0"
] },
    { title: 'Databases', skills: ['MongoDB', 'MySQL'] },
    { title: 'Developer Tools', skills: ['Git', 'GitHub', 'VS Code', "Postman","Jupyter Notebook"] },
    { title: 'Machine Learning', skills: ["Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Streamlit", "Joblib"] },
  ],
  experience: [],
  projects: [
    {
      title: 'E-Commerce Growth Analytics',
      description: 'Co-developed an end-to-end machine learning platform and business intelligence dashboard for E-Commerce analytics',
      technologies: ["Python", "Scikit-learn", "LightGBM", "FastAPI", "React", "Tailwind CSS"],
      image: '/images/projects/e-commerce.png',
      liveUrl: 'https://saless-analyticss.vercel.app',
      repoUrl: "https://github.com/ankurgangwar4575-tech/E-Commerce-Sales-Analytics"
    },
    {
      title: 'SpendSmart — Full Stack Expense Tracker',
      description: 'Developed a comprehensive expense tracking platform with real-time budget monitoring',
      technologies: [ "MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Google OAuth"],
      image: '/images/projects/spendsmart.png',
      liveUrl: 'https://spendsmart-inky-theta.vercel.app/',
      repoUrl: "https://github.com/ankurgangwar4575-tech/Expense-Tracker"
    },
      {
      title: 'Briefly - AI Dialogue Summarizer',
      description: 'Briefly turns long conversations, meeting notes, and chat transcripts into short, clear summaries.  It combines a fine-tuned T5 Transformer model with a polished React interface, so users can paste a dialogue and receive the essential context in seconds.',
      technologies: ["React", "TypeScript", "Python", "Hugging Face Transformers", "T5","FastAPI","Uvicorn"],
      image: '/images/projects/Text.png',
      repoUrl: "https://github.com/ankurgangwar4575-tech/TextSummarizer"
    },
    {
      title: 'Mario Playing Agent - A Double Deep Q-Learning Agent',
      description: 'An AI agent that learns to play Super Mario Bros from stacked grayscale game frames using Double Deep Q-Learning (Double DQN)',
      technologies: ["Python", "PyTorch", "Deep Reinforcement Learning"],
      image: '/images/projects/mario.png',
      repoUrl: "https://github.com/ankurgangwar4575-tech/MarioPlayingAgent"
    },
    {
      title: 'Flappy Bird - A reinforcement-learning project ',
      description: 'A reinforcement-learning project that trains a Deep Q-Network (DQN) agent to play Flappy Bird using PyTorch and Gymnasium',
      technologies: ["Python", "PyTorch", "Deep Reinforcement Learning"],
      image: '/images/projects/flappy.png',
      repoUrl: "https://github.com/ankurgangwar4575-tech/FlappyBird"
    },
    {
      title: 'Digit Classifier - A full-stack web application',
      description: 'Built a full-stack web application that recognizes handwritten digits using three trained PyTorch models: CNN, RNN, and LSTM',
      technologies: ["React", "TypeScript", "Python", "PyTorch","FastAPI", "Deep Learning", "Vercel"],
      image: '/images/projects/digit.png',
      liveUrl: 'https://classifydigit.vercel.app/',
      repoUrl: "https://github.com/ankurgangwar4575-tech/DigitClassifier"
    },
    {
      title: 'SmartCart - Customer Segmentation System',
      description: 'Built a machine learning pipeline to segment e-commerce customers based on purchasing behavior',
      technologies: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
      image: '/images/projects/smartcart.png',
      liveUrl: 'https://smartcart-clustering.streamlit.app/',
      repoUrl: "https://github.com/ankurgangwar4575-tech/SmartCart-Clustering-System"
    },
    {
      title: 'CreditWise - Loan Approval Prediction System',
      description: 'Developed a machine learning classification system to predict loan approvals from applicant data',
      technologies: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
      image: '/images/projects/creditwise.png',
      liveUrl: 'https://loan-classifier.streamlit.app/',
      repoUrl: "https://github.com/ankurgangwar4575-tech/CreditWise-Loan-Approval-System"
    },
    {
      title: 'AQI Predictor - Prediction of the Air Quality Index',
      description: 'Developed a machine learning model to predict Air Quality Index (AQI) based on environmental data, providing insights for better air quality management',
      technologies: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
      image: '/images/projects/aqi.png',
      liveUrl: 'https://aqi-predictor-sepia.vercel.app/',
      repoUrl: "https://github.com/ankurgangwar4575-tech/AQI-Predictor"
    },
  ],
  education: [
    {
      institution: 'Motilal Nehru National Institute of Technology Allahabad',
      degree: 'Bachelor of Technology in Chemical Engineering',
      period: '2024 — 2028',
      score: 'CGPA : 9.17/10',
    },
    {
      institution: 'New Age Public School, Bilaspur',
      degree: 'Class XII, CBSE Board',
      period: '2022 - 2023',
      score: 'Percentage: 96.50%',
    },
    {
      institution: 'New Age Public School, Bilaspur',
      degree: 'Class X, CBSE Board',
      period: '2020 - 2021',
      score: 'Percentage: 97.16%',
    },
  ],
}
