document.addEventListener('DOMContentLoaded', function() {
    // Select the login form and add an event listener
    const loginForm = document.querySelector('form');
    const userEmail = document.getElementById('user-email');
    const userPassword = document.getElementById('user-password');
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting immediately
      
      const emailValue = userEmail.value.trim();
      const passwordValue = userPassword.value.trim();
      
      // Basic validation
      let isValid = true;
      let errorMessage = '';
  
      // Email validation (basic)
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!emailValue || !emailPattern.test(emailValue)) {
        isValid = false;
        errorMessage = 'Please enter a valid email address.';
      }
  
      // Password validation (basic)
      if (!passwordValue || passwordValue.length < 6) {
        isValid = false;
        errorMessage = 'Password must be at least 6 characters long.';
      }
  
      // Display error or submit the form
      if (!isValid) {
        alert(errorMessage);
      } else {
        // In real application, you'd send the form data to a server
        alert('Login Successful!');
        // Uncomment the line below if you want to redirect after successful login
        // window.location.href = 'dashboard.html';
      }
    });
  });
  