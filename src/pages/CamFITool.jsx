import React from 'react';
import Hero from '../components/Hero';
import ToolDataCard from '../components/ToolDataCard';
import CamFIToolImage from '../assets/CamFITool.png';
import CamFIToolData1 from '../assets/CamFIToolData1.png';
import UseCase from '../assets/UseCase.png';

const heroData = {
  title: "CamFITool (Camera Fault Injection Tool)",
  description: "CamFITool is a powerful tool that automatically adds various image errors to existing images, creating a dataset full of distortions and anomalies. This tool is ideal for training your machine learning models with various error scenarios.",
  image: CamFIToolImage,
  imageAlt: "CamFITool Demo"
};

const toolData1 = {
  title: "Features",
  features: [
    "Add various types of errors to existing images",
    "Adjust different distortion levels",
    "Automatically add noise, blur and other anomalies",
    "Making artificially created errors realistic",
    "Create large data sets with batch processing"
  ],
  image: CamFIToolData1,
  imageAlt: "CamFITool Features"
};

const toolData2 = {
  title: "Use Cases",
  features: [
    "Training fault detection models for quality control systems",
    "Anomaly detection in production lines",
    "Testing the robustness of image processing algorithms",
    "Data enrichment and enhancing model resilience"
  ],
  image: UseCase,
  imageAlt: "CamFITool Use Cases"
};

const CamFITool = () => {
  return (
    <div className="space-y-16 py-8">
      <Hero {...heroData} />
      <ToolDataCard {...toolData1} />
      <ToolDataCard {...toolData2} />
    </div>
  );
};

export default CamFITool;
