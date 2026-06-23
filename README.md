# Personalized Workout & Diet Planner with AI

A full-stack web application that generates **personalized workout and diet plans** for students and individuals based on their **fitness goals, body metrics, food preferences, budget, activity level, and available workout resources**.

This project is designed to solve the problem of **generic fitness apps** that fail to consider:
- individual student needs
- Indian / cultural food habits
- budget constraints
- available equipment (home / dumbbells / gym)
- realistic schedules

The system takes user inputs and generates:
- **BMI and health summary**
- **Daily calorie estimate**
- **Personalized workout routine**
- **Budget-friendly diet plan**
- **Hydration recommendation**
- **Fitness tips**

---

# Features

## User Inputs
The user can provide:
- Name
- Age
- Gender
- Height
- Weight
- Fitness goal (Fat Loss / Muscle Gain / Maintenance)
- Activity level
- Food preference (Vegetarian / Non-Veg / Vegan)
- Budget level
- Workout days per week
- Workout time per day
- Available equipment (No Equipment / Dumbbells / Gym)
- Notes such as allergies or special needs

## Generated Output
The system generates:
- BMI calculation
- BMI status (Underweight / Normal / Overweight / Obese)
- Estimated daily calorie requirement
- Water intake recommendation
- Workout split based on goal and available time
- Diet plan based on food preference and budget
- AI-style fitness and recovery tips

---

# Tech Stack

## Frontend
- React.js
- Tailwind CSS
- Axios

## Backend
- Python
- Flask
- Flask-CORS

---

# Project Structure

```bash
ai-fitness-planner/
│
├── backend/
│   ├── app.py
│   ├── planner.py
│   └── requirements.txt
│
└── frontend/
    ├── package.json
    ├── tailwind.config.js
    ├── postcss.config.js
    ├── public/
    │   └── index.html
    └── src/
        ├── index.js
        ├── App.js
        ├── index.css
        └── components/
            ├── PlannerForm.js
            └── ResultCard.js
```

---

# How the Project Works

## Step 1: User fills the form
The user enters fitness details such as age, height, weight, goal, food preference, and workout resources.

## Step 2: Frontend sends data to backend
React sends the form data to the Flask backend through an API request.

## Step 3: Backend processes the data
The backend:
- calculates BMI
- calculates calorie requirements
- generates a workout plan
- generates a diet plan
- prepares hydration and fitness suggestions

## Step 4: Frontend displays results
The generated plan is displayed in a clean dashboard format showing:
- BMI summary
- calories
- water intake
- workout plan
- meal plan
- fitness suggestions

---

# Installation and Setup

## Prerequisites
Make sure the following are installed on your system:

### 1. Python
Install Python 3.10 or above.

Check version:
```bash
python --version
```

### 2. Node.js and npm
Install Node.js (LTS version recommended).

Check version:
```bash
node -v
npm -v
```

---

# Step-by-Step Setup

## 1. Clone or create the project folder
If you already have the project folder, go inside it:

```bash
cd ai-fitness-planner
```

---

# Backend Setup

## 2. Open terminal and move to backend folder
```bash
cd backend
```

## 3. Install backend dependencies
```bash
pip install -r requirements.txt
```

## 4. Run the Flask backend
```bash
python app.py
```

If everything is correct, you should see output similar to:

```bash
* Running on http://127.0.0.1:5000
```

Backend will run on:

```bash
http://127.0.0.1:5000
```

---

# Frontend Setup

## 5. Open another terminal and move to frontend folder
From project root:

```bash
cd frontend
```

## 6. Install frontend dependencies
```bash
npm install
```

If Axios or Tailwind are not installed, run:

```bash
npm install axios
npm install -D tailwindcss postcss autoprefixer
```

## 7. Start the React frontend
```bash
npm start
```

Frontend will open at:

```bash
http://localhost:3000
```

---

# Running the Full Project

To run the project successfully, you need **both backend and frontend running at the same time**.

## Terminal 1
```bash
cd ai-fitness-planner/backend
python app.py
```

## Terminal 2
```bash
cd ai-fitness-planner/frontend
npm start
```

Then open:

```bash
http://localhost:3000
```

---

# API Endpoint

## Generate Fitness Plan
### Endpoint:
```http
POST /generate-plan
```

### Backend URL:
```bash
http://127.0.0.1:5000/generate-plan
```

### Sample Request Body
```json
{
  "name": "Nayeem",
  "age": 21,
  "gender": "male",
  "height": 170,
  "weight": 75,
  "goal": "fat loss",
  "activity": "moderate",
  "foodPreference": "vegetarian",
  "budget": "medium",
  "workoutDays": 5,
  "workoutTime": 45,
  "equipment": "dumbbells",
  "notes": "No allergies"
}
```

### Sample Response
```json
{
  "name": "Nayeem",
  "bmi": 25.95,
  "bmiStatus": "Overweight",
  "dailyCalories": 2200,
  "waterIntakeLiters": 2.63,
  "goal": "fat loss",
  "workoutPlan": [
    {
      "day": "Day 1 - Full Body HIIT + Core",
      "exercises": [
        "Goblet Squats - 3 x 12",
        "Dumbbell Shoulder Press - 3 x 12",
        "Dumbbell Rows - 3 x 12"
      ]
    }
  ],
  "mealPlan": {
    "target_calories": 2200,
    "breakfast": ["Oats with milk + banana"],
    "lunch": ["Rice + dal + paneer curry"],
    "snacks": ["Roasted chana", "Fruit"],
    "dinner": ["2 chapatis + mixed veg curry + dal"],
    "budget_tip": "Focus on affordable protein and seasonal foods.",
    "goal_tip": "Keep dinner lighter and avoid sugary drinks."
  },
  "tips": [
    "Sleep at least 7–8 hours daily.",
    "Drink enough water.",
    "Track progress every 2 weeks."
  ]
}
```

---

# Example User Flow

## Input
- Age: 20
- Height: 168 cm
- Weight: 72 kg
- Goal: Fat Loss
- Food Preference: Vegetarian
- Budget: Low
- Equipment: No Equipment

## Output
The system generates:
- BMI and health category
- calorie target
- 5-day workout plan
- Indian vegetarian diet plan
- budget tips
- hydration advice

---

# Important Notes

## 1. Keep backend running before using frontend
The frontend sends API requests to Flask backend.  
If backend is not running, the frontend will show an error.

## 2. Default backend URL
Frontend currently sends request to:

```bash
http://127.0.0.1:5000/generate-plan
```

If you change backend port, update the frontend API URL as well.

---

# Troubleshooting

## Problem: `node is not recognized`
### Solution:
Install Node.js from the official website and restart terminal.

Then check:
```bash
node -v
npm -v
```

---

## Problem: `python is not recognized`
### Solution:
Install Python and make sure **Add Python to PATH** is enabled during installation.

Then check:
```bash
python --version
```

---

## Problem: Frontend opens but no data is generated
### Possible reason:
Backend is not running.

### Fix:
Run backend first:
```bash
cd backend
python app.py
```

---

## Problem: CORS / API connection issue
Make sure:
- backend is running on port **5000**
- frontend is running on port **3000**
- Flask CORS package is installed

---

# Future Improvements

This project can be extended with more advanced features such as:

- User login and signup
- MongoDB database integration
- Save previous plans
- Weekly progress tracking
- Weight tracking charts
- Real AI integration using OpenAI / Gemini
- PDF report download
- Personalized hostel / Indian student meal suggestions
- Chatbot-based fitness assistant
- Voice-based input
- Admin dashboard

---

# Use Cases

This project is useful for:
- Students who need low-cost fitness guidance
- Beginners who want structured workout and meal plans
- Users with home workout limitations
- Users who need Indian food based suggestions
- College mini project / major project submission
- AI / web development portfolio projects

---

# Learning Outcomes from this Project

By building this project, you will understand:
- Full-stack web development
- React frontend development
- Flask backend development
- REST API communication
- Form handling and state management
- Personalized recommendation logic
- Fitness data calculations such as BMI and calories
- Dynamic UI design with Tailwind CSS

---

# Conclusion

The **Personalized Workout & Diet Planner with AI** is a practical and student-focused fitness application that generates customized fitness recommendations based on user needs, goals, food habits, and budget constraints.

Unlike generic fitness applications, this system aims to provide **personalized, realistic, and affordable** workout and diet planning for students and beginners.

---

# Author
**Your Name Here**

If you want, you can replace this section with:
- your name
- college name
- department
- project guide / mentor details
