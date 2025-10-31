#  Career Roadmap Generator

**An AI-Powered Solution for Personalized Career Planning.**

The **Career Roadmap Generator** is a modern, full-stack application that leverages cutting-edge AI to transform generic advice into personalized, actionable career development plans. It dynamically creates **5-stage, structured roadmaps** tailored to the user's skills and professional goals, effectively bridging the gap between education and industry readiness.

## 💻 Tech Stack

* **Frontend:** React.js, JavaScript, Tailwind CSS
* **AI Integration:** Gemini API (Large Language Model - LLM)
* **Development Tools:** Git, GitHub

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

1.  Node.js (LTS version recommended)
2.  A Gemini API Key (available from Google AI Studio)

### Installation

1.  **Clone the Repository:**
    ```bash
    git clone [Your-Repo-Link-Here]
    cd career-roadmap-generator
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set Up Environment Variables:**
    Create a file named `.env` in the root directory and add your API key:
    ```
    REACT_APP_GEMINI_API_KEY="YOUR_API_KEY_HERE"
    ```

4.  **Run the Application:**
    ```bash
    npm start
    # or
    yarn start
    ```
    The application will open in your browser at `http://localhost:3000`.

---

## 🔧 How to Operate (Generating a Roadmap)

The generator is designed for a seamless, three-step user experience to deliver a highly customized career plan.

### **Step 1: Define Your Starting Point**

1.  Navigate to the main page of the application (`http://localhost:3000`).
2.  In the first input field, enter your **Current Skills** (e.g., *Python, SQL, HTML, basic Java*). Use commas or spaces to separate skills.
3.  In the second input field, enter your **Current Education/Experience Level** (e.g., *Junior Developer, recent graduate, self-taught*).

### **Step 2: Define Your Goal**

1.  In the third input field, clearly state your **Desired Career Goal** (e.g., *Senior Data Scientist, Cloud Security Engineer, UX/UI Designer*). The more specific you are, the better the result.
2.  (Optional) Specify any constraints or long-term goals in the final input field (e.g., *Must be a remote job, focus on cloud tools, or target a management role in 5 years*).

### **Step 3: Generate and Review**

1.  Click the **"Generate Roadmap"** button.
2.  The application will send your inputs to the Gemini API, which will analyze the data against industry standards and generate a comprehensive career plan.
3.  The results will display a **5-stage roadmap** visualization:
    * **Phase 1 (Foundations):** Focuses on core, domain-specific prerequisites.
    * **Phases 2-4 (Core Growth):** Outlines essential tools, technologies, and project milestones.
    * **Phase 5 (Specialization):** Targets advanced concepts to reach a senior/expert level.
4.  Each phase will contain **3-4 minimal, actionable tasks** to guide your next steps.

---

## 🤝 Contribution

This project is a personal portfolio piece. While public contributions are not currently accepted, feel free to fork the repository for your own use and experimentation!
