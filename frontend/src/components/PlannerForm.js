import React, { useState } from "react";
import axios from "axios";

function PlannerForm({ setResult }) {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "male",
    height: "",
    weight: "",
    goal: "fat loss",
    activity: "moderate",
    foodPreference: "vegetarian",
    budget: "medium",
    workoutDays: 5,
    workoutTime: 45,
    equipment: "none",
    notes: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("http://127.0.0.1:5000/generate-plan", form);
      setResult(res.data);
    } catch (err) {
      alert("Error connecting to backend. Make sure Flask server is running.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const inputStyle =
    "w-full p-3 rounded-xl bg-slate-800 border border-slate-600 outline-none focus:border-cyan-400";

  return (
    <div className="glass rounded-3xl p-6 shadow-2xl">
      <h2 className="text-2xl font-bold mb-6 text-cyan-300">Enter Your Details</h2>

      <form onSubmit={submitForm} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <input
            className={inputStyle}
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            className={inputStyle}
            type="number"
            name="age"
            placeholder="Age"
            value={form.age}
            onChange={handleChange}
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <select className={inputStyle} name="gender" value={form.gender} onChange={handleChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <select className={inputStyle} name="goal" value={form.goal} onChange={handleChange}>
            <option value="fat loss">Fat Loss</option>
            <option value="muscle gain">Muscle Gain</option>
            <option value="maintenance">Maintenance</option>
          </select>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            className={inputStyle}
            type="number"
            name="height"
            placeholder="Height (cm)"
            value={form.height}
            onChange={handleChange}
            required
          />
          <input
            className={inputStyle}
            type="number"
            name="weight"
            placeholder="Weight (kg)"
            value={form.weight}
            onChange={handleChange}
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <select className={inputStyle} name="activity" value={form.activity} onChange={handleChange}>
            <option value="sedentary">Sedentary</option>
            <option value="light">Light Activity</option>
            <option value="moderate">Moderate</option>
            <option value="active">Active</option>
          </select>

          <select
            className={inputStyle}
            name="foodPreference"
            value={form.foodPreference}
            onChange={handleChange}
          >
            <option value="vegetarian">Vegetarian</option>
            <option value="non-veg">Non-Veg</option>
            <option value="vegan">Vegan</option>
          </select>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <select className={inputStyle} name="budget" value={form.budget} onChange={handleChange}>
            <option value="low">Low Budget</option>
            <option value="medium">Medium Budget</option>
            <option value="high">High Budget</option>
          </select>

          <select className={inputStyle} name="equipment" value={form.equipment} onChange={handleChange}>
            <option value="none">No Equipment</option>
            <option value="dumbbells">Dumbbells</option>
            <option value="gym">Gym Access</option>
          </select>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            className={inputStyle}
            type="number"
            name="workoutDays"
            placeholder="Workout Days / Week"
            value={form.workoutDays}
            onChange={handleChange}
          />
          <input
            className={inputStyle}
            type="number"
            name="workoutTime"
            placeholder="Workout Time / Day (min)"
            value={form.workoutTime}
            onChange={handleChange}
          />
        </div>

        <textarea
          className={inputStyle}
          rows="3"
          name="notes"
          placeholder="Any allergies / medical notes / special needs"
          value={form.notes}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="w-full py-3 rounded-xl font-bold text-lg bg-gradient-to-r from-violet-600 to-cyan-500 hover:scale-[1.02] transition"
        >
          {loading ? "Generating Plan..." : "Generate My AI Fitness Plan"}
        </button>
      </form>
    </div>
  );
}

export default PlannerForm;