// src/components/AIGenerationScreen.js
import { Zap, Rocket, Globe } from 'lucide-react';
import React from 'react';

const AIGenerationScreen = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-4">
      
      {/* Dynamic Visual Element (Simulating work) */}
      <div className="relative w-32 h-32 mb-8">
        <Globe 
          className="w-full h-full text-yellow-500 animate-spin-slow" 
          strokeWidth={1} 
        />
        <Rocket 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-black fill-yellow-500" 
        />
      </div>

      {/* Title and Message */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 flex items-center">
        <Zap className="w-8 h-8 text-yellow-500 mr-3 animate-pulse" />
        Generating Your Personalized Roadmap
      </h2>
      
      <p className="text-xl text-gray-400 mb-8 text-center max-w-xl">
        Our **AI Consultant** is analyzing your skills, education, and goals to forge the optimal path forward.
      </p>

      {/* Progress Steps (Simulated) */}
      <div className="space-y-3 text-left w-full max-w-md">
        <ProgressItem title="1. Analyzing current skill set..." delay={0} />
        <ProgressItem title="2. Benchmarking against career goals..." delay={2000} />
        <ProgressItem title="3. Forging tailored milestones..." delay={4000} />
        <ProgressItem title="4. Finalizing recommendations..." delay={6000} />
      </div>

    </div>
  );
};

// Helper component for simulated progress (uses Tailwind's animation utility)
const ProgressItem = ({ title, delay }) => {
  return (
    <div className="flex items-center text-gray-300">
      <Zap className="w-5 h-5 mr-3 text-yellow-500" />
      <span className={`opacity-0 animate-fade-in`} style={{ animationDelay: `${delay}ms` }}>
        {title}
      </span>
    </div>
  );
};

export default AIGenerationScreen;