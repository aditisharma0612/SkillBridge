let quizzes = {
    webDevelopment: [
        {
            question: "What is HTML?",
            options: ["Hyper Text Markup Language", "High Text Markup Language", "Home Tool Markup Language"],
            correctAnswer: 0
        },
        {
            question: "Which tag is used for inserting images in HTML?",
            options: ["<img>", "<image>", "<src>"],
            correctAnswer: 0
        },
        {
            question: "What does CSS stand for?",
            options: ["Cascading Style Sheets", "Cascading System Sheets", "Creative Style Sheets"],
            correctAnswer: 0
        },
        {
            question: "Which of the following is a CSS preprocessor?",
            options: ["Sass", "React", "Node.js"],
            correctAnswer: 0
        },
        {
            question: "What does 'JS' stand for?",
            options: ["JavaScript", "Java Style", "JQuery Script"],
            correctAnswer: 0
        },
        {
            question: "What is used to create dynamic content in HTML?",
            options: ["JavaScript", "CSS", "HTML5"],
            correctAnswer: 0
        },
        {
            question: "Which of these is a JavaScript library?",
            options: ["React", "Java", "Python"],
            correctAnswer: 0
        }
    ],
    dataScience: [
        {
            question: "What is the main programming language used in Data Science?",
            options: ["Python", "Java", "C++"],
            correctAnswer: 0
        },
        {
            question: "Which library is commonly used for data manipulation in Python?",
            options: ["Pandas", "NumPy", "Matplotlib"],
            correctAnswer: 0
        },
        {
            question: "What does 'EDA' stand for in data science?",
            options: ["Exploratory Data Analysis", "Engineered Data Analysis", "End Data Analysis"],
            correctAnswer: 0
        },
        {
            question: "Which tool is commonly used for data visualization?",
            options: ["Tableau", "Power BI", "Excel"],
            correctAnswer: 0
        },
        {
            question: "Which machine learning algorithm is supervised?",
            options: ["Linear Regression", "K-Means", "PCA"],
            correctAnswer: 0
        },
        {
            question: "Which technique is used for reducing the dimensionality of data?",
            options: ["PCA", "Clustering", "Reinforcement Learning"],
            correctAnswer: 0
        },
        {
            question: "Which Python library is used for deep learning?",
            options: ["TensorFlow", "Flask", "Django"],
            correctAnswer: 0
        }
    ],
    // Add the rest of the domain quizzes here...
};

let courseLinks = {
    webDevelopment: "https://www.coursera.org/courses?query=web%20development",
    dataScience: "https://www.coursera.org/courses?query=data%20science",
    ai: "https://www.coursera.org/courses?query=artificial%20intelligence",
    cloudComputing: "https://www.coursera.org/courses?query=cloud%20computing",
    mobileDevelopment: "https://www.coursera.org/courses?query=mobile%20development",
    cyberSecurity: "https://www.coursera.org/courses?query=cyber%20security",
    devOps: "https://www.coursera.org/courses?query=devops"
};

let selectedQuiz = [];
let domainSelect = document.getElementById("domain-select");
let quizContainer = document.getElementById("quiz-container");
let questionContainer = document.getElementById("question-container");
let submitQuizButton = document.getElementById("submit-quiz");
let startQuizButton = document.getElementById("start-quiz");
let resultText = document.getElementById("result-text");
let exploreCoursesButton = document.getElementById("explore-courses");

function loadQuiz(domain) {
    selectedQuiz = quizzes[domain];
    quizContainer.style.display = "block";
    questionContainer.innerHTML = "";
    selectedQuiz.forEach((quiz, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.className = "question";
        questionDiv.innerHTML = `
            <p><strong>${quiz.question}</strong></p>
            ${quiz.options.map((option, i) => `
                <label>
                    <input type="radio" name="question-${index}" value="${i}">
                    ${option}
                </label><br>
            `).join('')}
        `;
        questionContainer.appendChild(questionDiv);
    });
    submitQuizButton.style.display = "inline-block";
}

startQuizButton.addEventListener("click", () => {
    const selectedDomain = domainSelect.value;
    if (selectedDomain) {
        loadQuiz(selectedDomain);
    } else {
        alert("Please select a domain!");
    }
});

submitQuizButton.addEventListener("click", () => {
    let score = 0;
    selectedQuiz.forEach((quiz, index) => {
        const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
        if (selectedOption && parseInt(selectedOption.value) === quiz.correctAnswer) {
            score++;
        }
    });

    // Display the score result
    resultText.innerHTML = `You scored ${score} out of ${selectedQuiz.length}.`;

    // Show the result and explore courses button
    document.getElementById("quiz-result").style.display = "block";

    // Check if the score is low and show the explore courses button
    if (score < 4) {
        exploreCoursesButton.style.display = "inline-block";
        exploreCoursesButton.addEventListener("click", () => {
            const selectedDomain = domainSelect.value;
            window.location.href = courseLinks[selectedDomain]; // Redirect to the course page for the domain
        });
    } else {
        exploreCoursesButton.style.display = "none"; // Hide the button if score is sufficient
    }
});



    