import React from 'react';
import Hero from '../components/Hero';
import ToolCard from '../components/ToolCard';
import HeroImage from '../assets/Hero.png';
import CamFiToolLogo from '../assets/CamFiToolLogo.png';
import CamGenToolLogo from '../assets/CamGenToolLogo.png';
import CamTrainToolLogo from '../assets/CamTrainToolLogo.png';
import CamQToolLogo from '../assets/CamQToolLogo.png';
import GenerativeZooLogo from '../assets/GenerativeZoo.png';

const heroData = {
  title: "TASTI Web Platform Closed Beta Program",
  description: "TASTI WEB PLATFORM is an innovative solution designed to create synthetic images for industrial applications. Our platform uses artificial intelligence to revolutionize image creation processes for factories and production facilities.",
  buttonText: "Join Our Beta Program",
  buttonLink: "/trydemo",
  image: HeroImage,
  imageAlt: "TASTI Platform"
};

const tools = [
  {
    title: 'CamFITool',
    image: CamFiToolLogo,
    description: [
      'Add various types of errors to existing images',
      'Adjust different distortion levels',
      'Automatically add noise, blur and other anomalies',
      'Making artificially created errors realistic',
      'Create large data sets with batch processing'
    ],
    link: '/camfitool'
  },
  {
    title: 'CamGenTool',
    image: CamGenToolLogo,
    description: [
      'Synthetic image generation based on sample images',
      'Create several variations with different parameters',
      'Adjust position, color and size of objects',
      'Customize image background and lighting conditions',
      'Create large data sets with batch production'
    ],
    link: '/camgentool'
  },
  {
    title: 'CamTrainTool',
    image: CamTrainToolLogo,
    description: [
      'Training LoRA (Low-Rank Adaptation) models',
      'Customize models with custom data sets',
      'Fine-tuning training parameters',
      'Analyze and evaluate model performance',
      'Visually monitoring the training process'
    ],
    link: '/camtraintool'
  },
  {
    title: 'CamQTool',
    image: CamQToolLogo,
    description: [
      'Realism analysis of synthetic images',
      'Image quality and clarity assessment',
      'Image histogram and texture analysis',
      'Comparison with reference images',
      'Quality score calculation with various metrics'
    ],
    link: '/camqtool'
  },
  {
    title: 'GenerativeZoo',
    image: GenerativeZooLogo,
    description: [
      'GenerativeZoo is an innovative generative algorithm library developed using Python and PyTorch. Developed within the Xecs TASTI project (nr. 2022005), it is a unique collection of 27 different models, brought together by standardized, user-friendly and independent code structures. The library offers practical solutions to researchers and developers with comprehensive documentation and example scenarios.'
    ],
    link: '',
    showLink: false
  }
];

const Home = () => {
  return (
    <div>
      <Hero {...heroData} />
      <h2 className="text-3xl font-bold mt-10 mb-6">TASTI Web Platform Toolkit</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, index) => (
          <ToolCard key={index} {...tool} />
        ))}
      </div>
    </div>
  );
};

export default Home; 