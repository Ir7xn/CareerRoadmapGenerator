// src/components/ErrorScreen.js

import { AlertTriangle, Home, RefreshCw } from 'lucide-react';
import React from 'react';

const ErrorScreen = ({ onTryAgain, onStartNew, message }) => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-4">
      <AlertTriangle className="w-20 h-20 text-red-500 mb-6" />
      
      <h2 className="text-3xl font-bold text-white mb-3">
        Roadmap Generation Failed!
      </h2>
      
      <p className="text-xl text-gray-400 mb-6 text-center max-w-lg">
        We encountered a critical error while generating your career roadmap.
      </p>

      {/* Display specific error message */}
      <blockquote className="bg-red-900/50 border-l-4 border-red-500 p-4 mb-8 max-w-md w-full text-red-300 text-sm">
          **Error Message:** {message || "An unknown network or API configuration error occurred."}
      </blockquote>

      {/* Action Buttons */}
      <div className="flex space-x-4">
        <button
          onClick={onTryAgain}
          className="flex items-center px-6 py-3 bg-yellow-500 text-black rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
        >
          <RefreshCw className="mr-2" size={20} />
          Try Again
        </button>
        <button
          onClick={onStartNew}
          className="flex items-center px-6 py-3 border border-yellow-500 text-yellow-500 rounded-lg hover:bg-yellow-500 hover:text-black transition-colors"
        >
          <Home className="mr-2" size={20} />
          Start New Search
        </button>
      </div>
    </div>
  );
};

export default ErrorScreen;