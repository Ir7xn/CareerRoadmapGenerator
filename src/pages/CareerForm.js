// src/pages/CareerForm.js

import { useState } from 'react';
import { ArrowRight, X } from 'lucide-react'; // X is for tag removal

const CareerForm = ({ onSubmit, initialData }) => {
    // Retaining all fields in state, but removing the multi-step logic
    const [formData, setFormData] = useState(initialData || {
        name: '',
        education: '',
        skills: [],
        interests: '',
        goals: ''
    });
    const [errors, setErrors] = useState({});
    const [newSkillInput, setNewSkillInput] = useState(''); // State for the new skill input

    // --- Core Logic: Combined Validation and Submission ---
    
    const validateForm = () => {
        const newErrors = {};
    
        if (!formData.name) {
            newErrors.name = "Your name is required for personalization.";
        }
        if (!formData.education) {
            newErrors.education = "Education level is required.";
        }
        if (formData.skills.length === 0) {
            newErrors.skills = "Please add at least one skill you are familiar with.";
        }
        if (!formData.interests) {
            newErrors.interests = "Your desired career path is required.";
        }
        if (!formData.goals) {
            newErrors.goals = "Career goals description is required.";
        }
    
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            onSubmit(formData);
        }
    };

    // --- New Skill Tag Logic (from previous steps) ---
    const handleAddSkill = (e) => {
        if (e.key === 'Enter' || e.type === 'blur') {
            e.preventDefault();
            const skill = newSkillInput.trim();
            if (skill && !formData.skills.includes(skill)) {
                setFormData({ ...formData, skills: [...formData.skills, skill] });
                setNewSkillInput('');
            }
        }
    };

    const handleRemoveSkill = (skillToRemove) => {
        setFormData({
            ...formData,
            skills: formData.skills.filter(skill => skill !== skillToRemove)
        });
    };
    // ----------------------------------------------------


    return (
        <div className="min-h-[80vh] py-12 px-4">
            <div className="max-w-3xl mx-auto">
                
                {/* Simplified Header - Removed multi-step progress bar */}
                <h1 className="text-3xl font-bold text-center mb-10 text-yellow-500">
                    Tell Us About Your Journey
                </h1>

                {/* Form Content - Single Step */}
                <div className="bg-gray-900 rounded-xl border border-yellow-500/20 p-8 space-y-6">
                    
                    {/* 1. Personal Information (Name) */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-yellow-500">Personal Information</h2>
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="w-full p-3 bg-black border border-yellow-500/30 rounded-lg text-white focus:border-yellow-500 outline-none"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
                    </div>

                    {/* 2. Education Level */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-yellow-500">Education & Background</h2>
                        <select
                            value={formData.education}
                            onChange={(e) => setFormData({...formData, education: e.target.value})}
                            className="w-full p-3 bg-black border border-yellow-500/30 rounded-lg text-white focus:border-yellow-500 outline-none"
                        >
                            <option value="">Select Education Level</option>
                            <option value="highschool">High School</option>
                            <option value="bachelor">Bachelor's Degree</option>
                            <option value="master">Master's Degree</option>
                            <option value="phd">PhD</option>
                        </select>
                        {errors.education && <p className="text-red-500 text-sm mt-2">{errors.education}</p>}
                    </div>

                    {/* 3. Dynamic Skills Input (Tag System) */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-yellow-500">Current Skills</h2>
                        <p className="mb-3 text-gray-300">Enter skills you're familiar with (Press Enter to add):</p>
                        <input
                            type="text"
                            placeholder="e.g., Basic HTML, Python, SQL"
                            value={newSkillInput}
                            onChange={(e) => setNewSkillInput(e.target.value)}
                            onKeyDown={handleAddSkill} 
                            onBlur={handleAddSkill} 
                            className="w-full p-3 bg-black border border-yellow-500/30 rounded-lg text-white focus:border-yellow-500 outline-none mb-4"
                        />

                        {/* Display Skill Tags */}
                        <div className="flex flex-wrap gap-2 min-h-[40px]">
                            {formData.skills.map((skill, index) => (
                                <span key={index} className="flex items-center bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium shadow-md">
                                    {skill}
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveSkill(skill)}
                                        className="ml-2 text-black hover:text-gray-700 transition-colors"
                                    >
                                        <X size={14} />
                                    </button>
                                </span>
                            ))}
                        </div>
                        {errors.skills && <p className="text-red-500 text-sm mt-2">{errors.skills}</p>}
                    </div>
                
                    {/* 4. Career Interests */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-yellow-500">Career Goals</h2>
                        <input
                            type="text"
                            placeholder="Desired Career (e.g., Web Developer, Data Scientist)"
                            value={formData.interests}
                            onChange={(e) => setFormData({...formData, interests: e.target.value})}
                            className="w-full p-3 bg-black border border-yellow-500/30 rounded-lg text-white focus:border-yellow-500 outline-none mb-4"
                        />
                        {errors.interests && <p className="text-red-500 text-sm mt-2 mb-4">{errors.interests}</p>}

                        <textarea
                            placeholder="Describe your long-term career goals..."
                            value={formData.goals}
                            onChange={(e) => setFormData({...formData, goals: e.target.value})}
                            className="w-full p-3 bg-black border border-yellow-500/30 rounded-lg text-white focus:border-yellow-500 outline-none h-32"
                        />
                        {errors.goals && <p className="text-red-500 text-sm mt-2">{errors.goals}</p>}
                    </div>

                    {/* Navigation Buttons - Single Submit button */}
                    <div className="flex justify-end pt-4">
                        <button
                            onClick={handleSubmit}
                            className="px-6 py-3 bg-yellow-500 text-black rounded-lg font-semibold hover:bg-yellow-400 transition-colors flex items-center"
                        >
                            Generate Roadmap
                            <ArrowRight className="ml-2" size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareerForm;