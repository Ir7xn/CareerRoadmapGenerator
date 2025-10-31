// src/data/mockRoadmap.js

export const mockRoadmap = {
  // This simulates the successful JSON output from the AI
  userName: "Default User", 
  careerPath: "Web Development Specialist", // Default goal
  milestones: [
    { 
      id: 1, 
      title: "Phase 1: Foundational Skills", 
      icon: "book", 
      duration: "3 Months", 
      tasks: [
        "Complete a Modern JavaScript ES6 course.", 
        "Master HTML5 and CSS3 for responsive design.", 
        "Build 3 small static portfolio projects."
      ] 
    },
    { 
      id: 2, 
      title: "Phase 2: Framework Specialization", 
      icon: "code", 
      duration: "4 Months", 
      tasks: [
        "Complete a comprehensive React/Next.js tutorial.", 
        "Build a multi-page application using React hooks and state.", 
        "Learn and implement API calls using the `fetch` function."
      ] 
    },
    { 
      id: 3, 
      title: "Phase 3: Deployment & Job Readiness", 
      icon: "briefcase", 
      duration: "5 Months", 
      tasks: [
        "Learn and use version control with Git and GitHub.", 
        "Deploy a full-stack application using Vercel or Netlify.", 
        "Prepare CV, optimize LinkedIn, and start mock interviews."
      ] 
    },
  ]
};