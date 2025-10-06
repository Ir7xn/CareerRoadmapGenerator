// API service for Spring Boot integration
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080/api';

export const apiService = {
  generateRoadmap: async (formData) => {
    const response = await fetch(`${API_BASE_URL}/roadmap/generate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    return response.json();
  },
  
  downloadPDF: async (roadmapId) => {
    const response = await fetch(`${API_BASE_URL}/roadmap/${roadmapId}/pdf`);
    return response.blob();
  }
};