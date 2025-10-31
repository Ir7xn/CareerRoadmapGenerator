// src/utils/validator.js

const requiredFields = ['userName', 'careerPath', 'milestones'];
const requiredMilestoneFields = ['id', 'title', 'icon', 'duration', 'tasks'];
const validIcons = ["book", "code", "briefcase", "target"];

export const validateRoadmapData = (data) => {
    if (!data || typeof data !== 'object') {
        return "Roadmap data is not a valid object.";
    }

    // Check top-level required fields
    for (const field of requiredFields) {
        if (!data.hasOwnProperty(field)) {
            return `Missing required field: ${field}`;
        }
    }

    // Check milestones array
    if (!Array.isArray(data.milestones) || data.milestones.length === 0) {
        return "Milestones field is invalid or empty.";
    }

    // Check each milestone structure
    for (const [index, milestone] of data.milestones.entries()) {
        for (const field of requiredMilestoneFields) {
            if (!milestone.hasOwnProperty(field)) {
                return `Milestone #${index + 1} is missing required field: ${field}`;
            }
        }
        
        // Validate icon key
        if (!validIcons.includes(milestone.icon)) {
            return `Milestone #${index + 1} has an invalid icon: ${milestone.icon}. Must be one of: ${validIcons.join(', ')}`;
        }
        
        // Validate tasks is an array
        if (!Array.isArray(milestone.tasks) || milestone.tasks.length === 0) {
            return `Milestone #${index + 1} tasks field is invalid or empty.`;
        }
    }

    return null; // Return null if validation passes
};