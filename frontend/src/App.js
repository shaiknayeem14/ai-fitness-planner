import React, { useState } from "react";
import PlannerForm from "./components/PlannerForm";
import ResultCard from "./components/ResultCard";

function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold gradient-text mb-4">
            AI Personalized Workout & Diet Planner
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Generate a personalized workout and Indian diet plan based on your
            fitness goal, body metrics, food preference, budget, and available resources.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <PlannerForm setResult={setResult} />
          <ResultCard result={result} />
        </div>
      </div>
    </div>
  );
}

export default App;