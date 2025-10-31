// src/App.js (Final and Corrected)

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import CareerForm from './pages/CareerForm';
import RoadmapDisplay from './pages/RoadmapDisplay';
import AIGenerationScreen from './components/AIGenerationScreen'; 
import ErrorScreen from './components/ErrorScreen'; 
import { aiService } from './services/aiService'; 
import { validateRoadmapData } from './utils/validator'; 

import './App.css'; 

const App = () => {
  const [currentPage, setCurrentPage] = useState('landing');
  const [roadmapData, setRoadmapData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); 
  const [lastInputData, setLastInputData] = useState(null); // <-- NEW: Stores the last successful input

  // Function to handle the form submission and initiate roadmap generation
  const handleGenerateRoadmap = async (formData) => {
    // 1. Start loading state and clean up previous data/errors
    setIsLoading(true); 
    setCurrentPage('loading'); 
    setRoadmapData(null); 
    setError(null); 
    setLastInputData(formData); // <-- Store the input data

    // 2. Generate the detailed prompt (using the unbiased version)
    const aiPrompt = `
You are an expert career consultant specializing in creating **unbiased, beginner-friendly, and modular** learning paths for various tech domains. 
Your primary goal is to generate a comprehensive **5-stage** career roadmap that starts from the user's *current* skill level and leads them to their specific career goal.
Each milestone must be **optimal and minimal**, containing only 3 to 4 core actionable tasks.

**User Input Details:** Name: ${formData.name}
Education Level: ${formData.education}
Current Skills: ${formData.skills.join(', ')}
Desired Career Path: ${formData.interests}
Long-Term Goals: ${formData.goals}

**Roadmap Requirements:**
1.  **Structure:** Must contain exactly **5 Milestones**.
2.  **Milestone 1 Focus (Foundations):** The title must be "Phase 1: Foundational Concepts for [Desired Career Path]". The tasks MUST focus exclusively on **domain-specific entry-level prerequisites**. 
3.  **Milestone 2 Focus (Core Tools):** The title must be "Phase 2: Introduction to Core Tools & Technologies." Tasks must cover the main software and languages specific to the domain.
4.  **Task Count:** Each milestone must contain **3 to 4** actionable and specific tasks.
5.  **JSON Format:** The JSON MUST conform strictly to the following structure: { userName: string, careerPath: string, milestones: [{id: number, title: string, icon: "book"|"code"|"briefcase"|"target", duration: string, tasks: string[]}]}.
6.  **Output:** The JSON object is the ONLY thing returned.
`;
    
    console.log("AI Prompt Generated. Calling AI Service...");

    // 3. Call the REAL AI Service with robust error handling
    try {
        const generatedData = await aiService.generateRoadmap(aiPrompt);
        
        const validationError = validateRoadmapData(generatedData);
        if (validationError) {
            throw new Error(`Invalid AI response structure: ${validationError}`);
        }

        setRoadmapData(generatedData);
        setCurrentPage('roadmap'); // Success: Move to the display page

    } catch (err) {
        console.error("Roadmap generation failed:", err);
        setError(err.message);
        setCurrentPage('error'); 
    } finally {
        setIsLoading(false);
    }
  };
  
  // <-- NEW FUNCTION: Instant Regeneration using last successful input
  const handleInstantRegenerate = () => {
    if (lastInputData) {
      // Re-run the main generation function with the stored data
      handleGenerateRoadmap(lastInputData);
    } else {
      // Fallback if somehow the data is missing
      setCurrentPage('form');
    }
  };


  const renderPage = () => {
    // 1. Error Screen check
    if (currentPage === 'error' && error) {
        return (
            <ErrorScreen 
                message={error} 
                onTryAgain={() => setCurrentPage('form')}
                onStartNew={() => setCurrentPage('landing')}
            />
        );
    }
    
    // 2. Loading Screen check
    if (isLoading || currentPage === 'loading') {
      return <AIGenerationScreen />;
    }
    
    // 3. Normal Page Rendering
    switch (currentPage) {
      case 'landing':
        return <LandingPage onGetStarted={() => setCurrentPage('form')} />;
      case 'form':
        return <CareerForm onSubmit={handleGenerateRoadmap} />; 
      case 'roadmap':
        if (roadmapData) {
          return (
            <RoadmapDisplay 
              roadmap={roadmapData} 
              // Now passes the new INSTANT regeneration function
              onRegenerate={handleInstantRegenerate} 
              onStartNew={() => setCurrentPage('landing')}
            />
          );
        }
        return <CareerForm onSubmit={handleGenerateRoadmap} />; 
      default:
        return <LandingPage onGetStarted={() => setCurrentPage('form')} />;
    }
  };

  return (
    // ... (rest of the App component structure is unchanged)
    <div className="min-h-screen bg-black text-white">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="container mx-auto">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;