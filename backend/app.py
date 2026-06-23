from flask import Flask, request, jsonify
from flask_cors import CORS
from planner import build_plan

app = Flask(__name__)
CORS(app)


@app.route("/")
def home():
    return {"message": "AI Fitness Planner Backend Running"}


@app.route("/generate-plan", methods=["POST"])
def generate_plan():
    try:
        data = request.get_json()
        result = build_plan(data)
        return jsonify(result)
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True, port=5000)