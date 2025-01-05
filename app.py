from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("ai.html")


import requests
from flask_cors import CORS


CORS(app)

# Hugging Face API Key
API_KEY = "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"
API_URL = "https://api-inference.huggingface.co/models/gpt2"
HEADERS = {"Authorization": f"Bearer {API_KEY}"}

# Function to interact with Hugging Face API


def query_huggingface(prompt):
    print(f"Querying Hugging Face with prompt: {prompt}")  # Add this debug statement
    response = requests.post(API_URL, headers=HEADERS, json={"inputs": prompt})
    if response.status_code == 200:
        return response.json()
    else:
        print(f"Error from Hugging Face: {response.json()}")  # Add this debug statement
        return {"error": response.json()}

# def query_huggingface(prompt):
#     response = requests.post(API_URL, headers=HEADERS, json={"inputs": prompt})
#     if response.status_code == 200:
#         return response.json()
#     else:
#         return {"error": response.json()}

# 1. Personalized Career Guidance
@app.route("/career-suggestions", methods=["POST"])
def career_suggestions():
    data = request.json
    user_input = data.get("prompt", "")
    prompt = f"Suggest career options for: {user_input}"
    result = query_huggingface(prompt)
    return jsonify(result)




# 2. Skill Gap Analysis
@app.route("/skill-gap", methods=["POST"])
def skill_gap():
    data = request.json
    career = data.get("career", "")
    prompt = f"Suggest skills required for: {career}"
    result = query_huggingface(prompt)
    return jsonify(result)

# 3. Resume Generation
@app.route("/generate-resume", methods=["POST"])
def generate_resume():
    data = request.json
    resume = data.get("resume", "")
    prompt = f"Optimize resume for: {resume}"
    result = query_huggingface(prompt)
    return jsonify(result)

# 4. College Recommendations
@app.route("/college-recommendations", methods=["POST"])
def college_recommendations():
    data = request.json
    academic_record = data.get("academic_record", "")
    prompt = f"Suggest colleges for: {academic_record}"
    result = query_huggingface(prompt)
    return jsonify(result)

# 5. Mentor Matching
@app.route("/mentor-matching", methods=["POST"])
def mentor_matching():
    data = request.json
    interest = data.get("interest", "")
    prompt = f"Find mentors for: {interest}"
    result = query_huggingface(prompt)
    return jsonify(result)

# 6. Learning Resources
@app.route("/learning-resources", methods=["POST"])
def learning_resources():
    data = request.json
    goals = data.get("goals", "")
    prompt = f"Suggest learning resources for: {goals}"
    result = query_huggingface(prompt)
    return jsonify(result)

# 7. Market Insights
@app.route("/market-insights", methods=["POST"])
def market_insights():
    data = request.json
    interest = data.get("interest", "")
    prompt = f"Provide market insights for: {interest}"
    result = query_huggingface(prompt)
    return jsonify(result)

# # Home route updated to load ai.html
# @app.route('/')
# def index():
#     return render_template('ai.html')

if __name__ == "__main__":
    app.run(debug=True, port=5001)  # Change port number here



