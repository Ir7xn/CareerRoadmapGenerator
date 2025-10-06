import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import CareerForm from './pages/CareerForm';
import RoadmapDisplay from './pages/RoadmapDisplay';
import { apiService } from './services/apiService';
import './index.css';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [formData, setFormData] = useState({
    name: '',
    education: '',
    skills: [],
    interests: '',
    goals: ''
  });
  const [roadmapData, setRoadmapData] = useState(null);

  // Handle form submission - ready for Spring Boot integration
  const handleFormSubmit = async (data) => {
    setFormData(data);
    
    try {
      // For now, generate mock data - replace with actual API call
      const mockRoadmap = generateMockRoadmap(data);
      setRoadmapData(mockRoadmap);
      
      // Future Spring Boot integration:
      // const response = await apiService.generateRoadmap(data);
      // setRoadmapData(response.data);
      
      setCurrentPage('roadmap');
    } catch (error) {
      console.error('Error generating roadmap:', error);
    }
  };

  // Generate mock roadmap data
  const generateMockRoadmap = (data) => {
    return {
      userName: data.name,
      careerPath: data.interests || "Full Stack Developer",
      milestones: [
        {
          id: 1,
          title: "Foundation Phase",
          duration: "0-3 months",
          tasks: [
            "Learn HTML, CSS, JavaScript basics",
            "Complete online tutorials",
            "Build 3 simple projects"
          ],
          icon: "book"
        },
        {
          id: 2,
          title: "Skill Building",
          duration: "3-6 months",
          tasks: [
            "Master React.js framework",
            "Learn backend with Spring Boot",
            "Complete certification course"
          ],
          icon: "code"
        },
        {
          id: 3,
          title: "Project Phase",
          duration: "6-9 months",
          tasks: [
            "Build full-stack application",
            "Contribute to open source",
            "Create portfolio website"
          ],
          icon: "briefcase"
        },
        {
          id: 4,
          title: "Career Launch",
          duration: "9-12 months",
          tasks: [
            "Apply for internships",
            "Network with professionals",
            "Land your dream job"
          ],
          icon: "target"
        }
      ]
    };
  };

  const regenerateRoadmap = () => {
    const newRoadmap = generateMockRoadmap(formData);
    setRoadmapData(newRoadmap);
  };

  return (
    <div className="min-h-screen bg-black text-white font-poppins">
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
      />
      
      <main className="min-h-[calc(100vh-8rem)]">
        {currentPage === 'landing' && (
          <LandingPage onGetStarted={() => setCurrentPage('form')} />
        )}
        
        {currentPage === 'form' && (
          <CareerForm 
            onSubmit={handleFormSubmit}
            initialData={formData}
          />
        )}
        
        {currentPage === 'roadmap' && roadmapData && (
          <RoadmapDisplay 
            roadmap={roadmapData}
            onRegenerate={regenerateRoadmap}
            onStartNew={() => {
              setFormData({
                name: '',
                education: '',
                skills: [],
                interests: '',
                goals: ''
              });
              setCurrentPage('form');
            }}
          />
        )}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;