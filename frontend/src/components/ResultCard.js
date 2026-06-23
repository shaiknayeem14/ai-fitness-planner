import React from "react";

function ResultCard({ result }) {
  if (!result) {
    return (
      <div className="glass rounded-3xl p-6 min-h-[500px] flex items-center justify-center text-center">
        <div>
          <h2 className="text-2xl font-bold text-violet-300 mb-3">Your Personalized Plan Will Appear Here</h2>
          <p className="text-gray-300">
            Fill the form and click <span className="font-semibold text-cyan-300">Generate My AI Fitness Plan</span>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="glass rounded-3xl p-6 shadow-2xl overflow-y-auto max-h-[85vh]">
      <h2 className="text-3xl font-bold text-violet-300 mb-4">
        {result.name}'s Fitness Plan
      </h2>

      {/* Summary */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="bg-slate-900/60 rounded-2xl p-4">
          <p className="text-gray-400">BMI</p>
          <h3 className="text-2xl font-bold">{result.bmi}</h3>
          <p className="text-cyan-300">{result.bmiStatus}</p>
        </div>
        <div className="bg-slate-900/60 rounded-2xl p-4">
          <p className="text-gray-400">Daily Calories</p>
          <h3 className="text-2xl font-bold">{result.dailyCalories} kcal</h3>
          <p className="text-cyan-300">{result.goal}</p>
        </div>
        <div className="bg-slate-900/60 rounded-2xl p-4">
          <p className="text-gray-400">Water Intake</p>
          <h3 className="text-2xl font-bold">{result.waterIntakeLiters} L</h3>
          <p className="text-cyan-300">per day</p>
        </div>
      </div>

      {/* Workout Plan */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-4 text-cyan-300">Workout Plan</h3>
        <div className="space-y-4">
          {result.workoutPlan.map((dayObj, idx) => (
            <div key={idx} className="bg-slate-900/60 rounded-2xl p-4">
              <h4 className="text-lg font-semibold text-violet-300 mb-2">{dayObj.day}</h4>
              <ul className="list-disc list-inside text-gray-200 space-y-1">
                {dayObj.exercises.map((ex, i) => (
                  <li key={i}>{ex}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Meal Plan */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-4 text-cyan-300">Diet Plan</h3>

        <div className="grid gap-4">
          <MealSection title="Breakfast" items={result.mealPlan.breakfast} />
          <MealSection title="Lunch" items={result.mealPlan.lunch} />
          <MealSection title="Snacks" items={result.mealPlan.snacks} />
          <MealSection title="Dinner" items={result.mealPlan.dinner} />
        </div>

        <div className="mt-4 bg-slate-900/60 rounded-2xl p-4">
          <p className="mb-2"><span className="font-semibold text-violet-300">Budget Tip:</span> {result.mealPlan.budget_tip}</p>
          <p><span className="font-semibold text-violet-300">Goal Tip:</span> {result.mealPlan.goal_tip}</p>
        </div>
      </div>

      {/* Tips */}
      <div>
        <h3 className="text-2xl font-bold mb-4 text-cyan-300">AI Suggestions</h3>
        <div className="bg-slate-900/60 rounded-2xl p-4">
          <ul className="list-disc list-inside text-gray-200 space-y-2">
            {result.tips.map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function MealSection({ title, items }) {
  return (
    <div className="bg-slate-900/60 rounded-2xl p-4">
      <h4 className="text-lg font-semibold text-violet-300 mb-2">{title}</h4>
      <ul className="list-disc list-inside text-gray-200 space-y-1">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ResultCard;