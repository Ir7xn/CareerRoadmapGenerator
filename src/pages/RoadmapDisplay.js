// pages/RoadmapDisplay.js
import React from 'react';
import { RefreshCw, Book, Code, Briefcase, Target, CheckCircle, Clock, ArrowRight } from 'lucide-react';
const RoadmapDisplay = ({ roadmap, onRegenerate, onStartNew }) => {
  // Icon mapping for milestones
  const getIcon = (iconName) => {
    const icons = {
      book: Book,
      code: Code,
      briefcase: Briefcase,
      target: Target
    };
    return icons[iconName] || Book;
  };



  return (
    <div className="min-h-[80vh] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-white">Your Career Roadmap,</span>
            <span className="text-yellow-500"> {roadmap.userName}</span>
          </h1>
          <p className="text-xl text-gray-300">
            Path to becoming a <span className="text-yellow-500 font-semibold">{roadmap.careerPath}</span>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={onRegenerate}
            className="flex items-center px-6 py-3 border border-yellow-500 text-yellow-500 rounded-lg hover:bg-yellow-500 hover:text-black transition-colors"
          >
            <RefreshCw className="mr-2" size={20} />
            Regenerate
          </button>
          <button
            onClick={onStartNew}
            className="flex items-center px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-yellow-500 hover:text-yellow-500 transition-colors"
          >
            Start New Journey
          </button>
        </div>

        {/* Timeline Roadmap */}
        <div className="relative">
          {/* Vertical line for desktop, hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-yellow-500/30"></div>
          
          {roadmap.milestones.map((milestone, index) => {
            const Icon = getIcon(milestone.icon);
            const isEven = index % 2 === 0;
            
            return (
              <div key={milestone.id} className="relative mb-12">
                {/* Mobile Layout */}
                <div className="md:hidden">
                  <div className="bg-gray-900 border border-yellow-500/30 rounded-xl p-6 hover:border-yellow-500/50 transition-colors">
                    <div className="flex items-start mb-4">
                      <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4">
                        <Icon className="w-6 h-6 text-black" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-yellow-500">{milestone.title}</h3>
                        <p className="text-gray-400 flex items-center mt-1">
                          <Clock className="w-4 h-4 mr-1" />
                          {milestone.duration}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {milestone.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className={`hidden md:flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Content Card */}
                  <div className={`w-5/12 ${isEven ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-gray-900 border border-yellow-500/30 rounded-xl p-6 hover:border-yellow-500/50 transition-all hover:transform hover:scale-105">
                      <div className={`flex items-center mb-4 ${isEven ? 'justify-end' : ''}`}>
                        <h3 className="text-xl font-bold text-yellow-500">{milestone.title}</h3>
                      </div>
                      <p className={`text-gray-400 mb-4 flex items-center ${isEven ? 'justify-end' : ''}`}>
                        <Clock className="w-4 h-4 mr-1" />
                        {milestone.duration}
                      </p>
                      <ul className={`space-y-2 ${isEven ? 'text-right' : ''}`}>
                        {milestone.tasks.map((task, taskIndex) => (
                          <li key={taskIndex} className={`flex items-start ${isEven ? 'flex-row-reverse' : ''}`}>
                            <CheckCircle className={`w-5 h-5 text-yellow-500 ${isEven ? 'ml-2' : 'mr-2'} mt-0.5 flex-shrink-0`} />
                            <span className="text-gray-300">{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Center Icon */}
                  <div className="w-2/12 flex justify-center">
                    <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center z-10 shadow-lg shadow-yellow-500/30">
                      <Icon className="w-8 h-8 text-black" />
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="w-5/12"></div>
                </div>

                {/* Connector Arrow (between milestones) */}
                {index < roadmap.milestones.length - 1 && (
                  <div className="hidden md:flex justify-center my-4">
                    <ArrowRight className="text-yellow-500/50 rotate-90" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RoadmapDisplay;