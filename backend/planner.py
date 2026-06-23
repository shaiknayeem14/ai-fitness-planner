def calculate_bmi(weight, height_cm):
    height_m = height_cm / 100
    bmi = weight / (height_m * height_m)
    return round(bmi, 2)


def bmi_status(bmi):
    if bmi < 18.5:
        return "Underweight"
    elif bmi < 25:
        return "Normal"
    elif bmi < 30:
        return "Overweight"
    return "Obese"


def calculate_calories(weight, height, age, gender, activity, goal):
    # Simple BMR formula (Mifflin-St Jeor)
    if gender.lower() == "male":
        bmr = 10 * weight + 6.25 * height - 5 * age + 5
    else:
        bmr = 10 * weight + 6.25 * height - 5 * age - 161

    activity_map = {
        "sedentary": 1.2,
        "light": 1.375,
        "moderate": 1.55,
        "active": 1.725
    }

    maintenance = bmr * activity_map.get(activity.lower(), 1.2)

    if goal.lower() == "fat loss":
        maintenance -= 300
    elif goal.lower() == "muscle gain":
        maintenance += 300

    return int(maintenance)


def get_workout_plan(goal, days, time_per_day, equipment):
    days = int(days)
    time_per_day = int(time_per_day)

    if goal.lower() == "fat loss":
        split = [
            "Day 1 - Full Body HIIT + Core",
            "Day 2 - Lower Body + Cardio",
            "Day 3 - Upper Body + Abs",
            "Day 4 - Active Recovery / Walk + Mobility",
            "Day 5 - Full Body Circuit",
            "Day 6 - Cardio + Stretching",
            "Day 7 - Rest"
        ]
    elif goal.lower() == "muscle gain":
        split = [
            "Day 1 - Chest + Triceps",
            "Day 2 - Back + Biceps",
            "Day 3 - Legs",
            "Day 4 - Shoulders + Core",
            "Day 5 - Full Body Strength",
            "Day 6 - Mobility / Light Cardio",
            "Day 7 - Rest"
        ]
    else:
        split = [
            "Day 1 - Full Body Strength",
            "Day 2 - Cardio + Core",
            "Day 3 - Upper Body",
            "Day 4 - Lower Body",
            "Day 5 - Yoga / Mobility",
            "Day 6 - Light Jog / Walk",
            "Day 7 - Rest"
        ]

    selected_days = split[:days]

    workout_details = []
    for day in selected_days:
        if "Rest" in day:
            workout_details.append({
                "day": day,
                "exercises": ["Complete rest", "Light stretching", "Hydration focus"]
            })
            continue

        if equipment.lower() == "gym":
            exercises = [
                f"Warm-up - 5 min",
                f"Compound exercise - 4 sets",
                f"Accessory exercise - 3 sets",
                f"Cardio / cooldown - {max(10, time_per_day//4)} min"
            ]
        elif equipment.lower() == "dumbbells":
            exercises = [
                "Goblet Squats - 3 x 12",
                "Dumbbell Shoulder Press - 3 x 12",
                "Dumbbell Rows - 3 x 12",
                "Push-ups - 3 x 10",
                "Plank - 3 x 30 sec"
            ]
        else:
            exercises = [
                "Bodyweight Squats - 3 x 15",
                "Push-ups / Knee Push-ups - 3 x 10",
                "Lunges - 3 x 12 each leg",
                "Mountain Climbers - 3 x 20",
                "Plank - 3 x 30 sec"
            ]

        workout_details.append({
            "day": day,
            "exercises": exercises
        })

    return workout_details


def get_meal_plan(goal, food_pref, budget, calories):
    food_pref = food_pref.lower()
    budget = budget.lower()

    # Indian student-friendly meal ideas
    if food_pref == "vegetarian":
        breakfast = ["Oats with milk + banana", "2 boiled eggs (optional if ovo-veg) / sprouts", "Peanut chikki"]
        lunch = ["Rice + dal + paneer curry", "Curd", "Salad"]
        snacks = ["Roasted chana", "Fruit", "Buttermilk"]
        dinner = ["2 chapatis + mixed veg curry + dal", "Paneer bhurji / tofu"]
    elif food_pref == "vegan":
        breakfast = ["Oats with soy milk", "Banana + peanut butter toast", "Sprouts salad"]
        lunch = ["Rice + dal + vegetable curry", "Chickpea salad"]
        snacks = ["Roasted peanuts", "Fruit", "Black chana"]
        dinner = ["2 chapatis + tofu curry + sabzi", "Moong dal soup"]
    else:  # non-veg
        breakfast = ["Oats + milk + banana", "Boiled eggs", "Peanut butter bread"]
        lunch = ["Rice + dal + chicken curry / egg curry", "Curd", "Salad"]
        snacks = ["Fruit", "Roasted chana", "Lassi / buttermilk"]
        dinner = ["2 chapatis + egg bhurji / chicken + veg curry"]

    if budget == "low":
        budget_tip = "Focus on budget foods: rice, dal, eggs, peanuts, bananas, curd, sprouts, seasonal vegetables."
    elif budget == "medium":
        budget_tip = "You can include paneer, chicken, oats, fruits, and protein-rich snacks regularly."
    else:
        budget_tip = "You can add premium options like whey protein, nuts, Greek yogurt, and more variety."

    if goal.lower() == "fat loss":
        goal_tip = "Keep dinner lighter, reduce fried food, maintain protein intake, and avoid sugary drinks."
    elif goal.lower() == "muscle gain":
        goal_tip = "Increase protein and total calories slightly with paneer, eggs, chicken, rice, and milk."
    else:
        goal_tip = "Maintain balanced meals with consistent protein, carbs, and hydration."

    return {
        "target_calories": calories,
        "breakfast": breakfast,
        "lunch": lunch,
        "snacks": snacks,
        "dinner": dinner,
        "budget_tip": budget_tip,
        "goal_tip": goal_tip
    }


def build_plan(data):
    name = data.get("name", "User")
    age = int(data.get("age", 20))
    gender = data.get("gender", "male")
    height = float(data.get("height", 170))
    weight = float(data.get("weight", 70))
    goal = data.get("goal", "fat loss")
    activity = data.get("activity", "moderate")
    food_pref = data.get("foodPreference", "vegetarian")
    budget = data.get("budget", "medium")
    workout_days = int(data.get("workoutDays", 5))
    workout_time = int(data.get("workoutTime", 45))
    equipment = data.get("equipment", "none")

    bmi = calculate_bmi(weight, height)
    status = bmi_status(bmi)
    calories = calculate_calories(weight, height, age, gender, activity, goal)
    water_intake = round(weight * 0.035, 2)  # liters approx
    workout = get_workout_plan(goal, workout_days, workout_time, equipment)
    meal = get_meal_plan(goal, food_pref, budget, calories)

    tips = [
        "Sleep at least 7–8 hours daily for better recovery.",
        "Track your progress every 2 weeks instead of checking daily.",
        "Drink enough water and include protein in each meal.",
        "If you feel pain (not muscle soreness), reduce intensity and recover properly."
    ]

    return {
        "name": name,
        "bmi": bmi,
        "bmiStatus": status,
        "dailyCalories": calories,
        "waterIntakeLiters": water_intake,
        "goal": goal,
        "workoutPlan": workout,
        "mealPlan": meal,
        "tips": tips
    }