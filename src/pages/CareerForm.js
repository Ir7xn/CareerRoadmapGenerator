import { useState } from 'react';
import { CheckCircle, Circle, ArrowRight } from 'lucide-react';

const CareerForm = ({ onSubmit, initialData }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(initialData || {
    name: '',
    education: '',
    skills: [],
    interests: '',
    goals: ''
  });
  const [errors, setErrors] = useState({});

  const steps = [
    { id: 1, title: "Personal Info" },
    { id: 2, title: "Skills & Education" },
    { id: 3, title: "Career Goals" }
  ];

  const validateStep = () => {
    const newErrors = {};
    
    if (currentStep === 1 && !formData.name) {
      newErrors.name = "Name is required";
    }
    if (currentStep === 2 && !formData.education) {
      newErrors.education = "Education level is required";
    }
    if (currentStep === 3 && !formData.goals) {
      newErrors.goals = "Career goals are required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      if (currentStep < 3) {
        setCurrentStep(currentStep + 1);
      } else {
        onSubmit(formData);
      }
    }
  };

  const skillOptions = [
    "JavaScript", "React", "Python", "Java", "Spring Boot",
    "Node.js", "MongoDB", "SQL", "AWS", "Docker"
  ];

  return (
    <div className="min-h-[80vh] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-12">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center flex-1">
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 
                  ${currentStep >= step.id 
                    ? 'bg-yellow-500 border-yellow-500' 
                    : 'border-gray-600'}`}>
                  {currentStep > step.id ? (
                    <CheckCircle className="w-6 h-6 text-black" />
                  ) : (
                    <span className={currentStep >= step.id ? 'text-black' : 'text-gray-400'}>
                      {step.id}
                    </span>
                  )}
                </div>
                <span className={`ml-3 ${currentStep >= step.id ? 'text-white' : 'text-gray-500'}`}>
                  {step.title}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className={`flex-1 h-0.5 mx-4 
                  ${currentStep > step.id ? 'bg-yellow-500' : 'bg-gray-600'}`} />
              )}
            </div>
          ))}
        </div>

        {/* Form Content */}
        <div className="bg-gray-900 rounded-xl border border-yellow-500/20 p-8">
          {currentStep === 1 && (
            <div>
              <h2 className="text-2xl font-bold mb-6 text-yellow-500">Personal Information</h2>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full p-3 bg-black border border-yellow-500/30 rounded-lg text-white focus:border-yellow-500 outline-none"
              />
              {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <h2 className="text-2xl font-bold mb-6 text-yellow-500">Education & Skills</h2>
              <select
                value={formData.education}
                onChange={(e) => setFormData({...formData, education: e.target.value})}
                className="w-full p-3 bg-black border border-yellow-500/30 rounded-lg text-white focus:border-yellow-500 outline-none mb-6"
              >
                <option value="">Select Education Level</option>
                <option value="highschool">High School</option>
                <option value="bachelor">Bachelor's Degree</option>
                <option value="master">Master's Degree</option>
                <option value="phd">PhD</option>
              </select>
              
              <div>
                <p className="mb-3 text-gray-300">Select your skills:</p>
                <div className="grid grid-cols-2 gap-3">
                  {skillOptions.map(skill => (
                    <label key={skill} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.skills.includes(skill)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFormData({...formData, skills: [...formData.skills, skill]});
                          } else {
                            setFormData({...formData, skills: formData.skills.filter(s => s !== skill)});
                          }
                        }}
                        className="w-4 h-4 accent-yellow-500"
                      />
                      <span className="text-white">{skill}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <h2 className="text-2xl font-bold mb-6 text-yellow-500">Career Goals</h2>
              <input
                type="text"
                placeholder="Career interests (e.g., Web Developer, Data Scientist)"
                value={formData.interests}
                onChange={(e) => setFormData({...formData, interests: e.target.value})}
                className="w-full p-3 bg-black border border-yellow-500/30 rounded-lg text-white focus:border-yellow-500 outline-none mb-4"
              />
              <textarea
                placeholder="Describe your long-term career goals..."
                value={formData.goals}
                onChange={(e) => setFormData({...formData, goals: e.target.value})}
                className="w-full p-3 bg-black border border-yellow-500/30 rounded-lg text-white focus:border-yellow-500 outline-none h-32"
              />
              {errors.goals && <p className="text-red-500 text-sm mt-2">{errors.goals}</p>}
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            {currentStep > 1 && (
              <button
                onClick={() => setCurrentStep(currentStep - 1)}
                className="px-6 py-3 border border-yellow-500 text-yellow-500 rounded-lg hover:bg-yellow-500 hover:text-black transition-colors"
              >
                Previous
              </button>
            )}
            <button
              onClick={handleNext}
              className="ml-auto px-6 py-3 bg-yellow-500 text-black rounded-lg font-semibold hover:bg-yellow-400 transition-colors flex items-center"
            >
              {currentStep === 3 ? 'Generate Roadmap' : 'Next'}
              <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerForm;