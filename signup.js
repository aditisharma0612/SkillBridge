document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.querySelector('form'); // Select the signup form
    const nameInput = document.getElementById('signup-name');
    const emailInput = document.getElementById('signup-email');
    const passwordInput = document.getElementById('signup-password');
    const confirmPasswordInput = document.getElementById('signup-confirm-password');
  
    signupForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent form submission
      
      // Get input values
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
      const confirmPassword = confirmPasswordInput.value.trim();
  
      // Validation flags
      let isValid = true;
      let errorMessage = '';
  
      // Full Name Validation
      if (!name || name.length < 3) {
        isValid = false;
        errorMessage = 'Full name must be at least 3 characters long.';
      }
  
      // Email Validation (basic)
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!email || !emailPattern.test(email)) {
        isValid = false;
        errorMessage = 'Please enter a valid email address.';
      }
  
      // Password Validation
      if (!password || password.length < 6) {
        isValid = false;
        errorMessage = 'Password must be at least 6 characters long.';
      }
  
      // Confirm Password Validation
      if (password !== confirmPassword) {
        isValid = false;
        errorMessage = 'Passwords do not match.';
      }
  
      // Display validation message or success
      if (!isValid) {
        alert(errorMessage);
      } else {
        alert('Signup successful! Welcome to SkillBridge.');
        // Redirect or clear form after success
        signupForm.reset();
        // Example redirect to login page:
        // window.location.href = 'login.html';
      }
    });
  });
  