
function calculateScore() {
    let score = 0;

    // Get the values of the selected answers
    let q1Answer = document.querySelector('input[name="q1"]:checked');
    let q2Answer = document.querySelector('input[name="q2"]:checked');
    let q3Answer = document.querySelector('input[name="q3"]:checked');

    // Calculate score based on the selected answers
    if (q1Answer) score += parseInt(q1Answer.value);
    if (q2Answer) score += parseInt(q2Answer.value);
    if (q3Answer) score += parseInt(q3Answer.value);

    // Display the score
    document.getElementById("result").innerHTML = "Your total score: " + score;

    // Optionally, you can store the score in a variable or database
    console.log("Total Score: " + score);

    // Check if the score qualifies for job or course recommendations
    if (score >= 12) {
        document.getElementById("result").innerHTML += "<br>You're eligible for job recommendations!";
        redirectToLinkedInJobRecommendations(); // Call function to redirect to LinkedIn
    } else {
        document.getElementById("result").innerHTML += "<br>We recommend some courses for you.";
        redirectToCourseraCourses(); // Call function to redirect to Coursera
    }
}


// Redirect the user to Coursera for course recommendations
function redirectToCourseraCourses() {
    const userSkills = 'JavaScript, CSS, Database'; // Example user skills, you can dynamically set this
    const searchUrl = `https://www.coursera.org/courses?query=${userSkills}`;
    window.location.href = searchUrl; // Redirect to Coursera search page
}




