
function validatesignup() {
    var name = document.getElementById("name").value;
    // Get the value of the input field with id="email"
    var email = document.getElementById("email").value;
    // Get the value of the input field with id="password"
    var password = document.getElementById("password").value;
    // Regular expression to check if the email is in the correct format
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // Check if the email is empty
    var regName = /\d+$/g; // Javascript reGex for Name validation
    var passwordConfirm = document.getElementById("confirmpassword").value;
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (name == "") {
        alert("Name must be there");
        return false;
      }
    if (name.match(regName)) {
        alert("enter a valid name");
        return false;
      }
    if (email == "") {
      alert("Email field must be filled out");
      return false;
    }
    // Check if the email is in the correct format
    if (!email.match(emailRegex)) {
      alert("Please enter a valid email address");
      return false;
    }
    // Check if the password is empty
    if (password == "") {
      alert("Password field must be filled out");
      return false;
    }
    // Send a request to the server to check the user's credentials
    // If the credentials are correct, return true to submit the form
    // If the credentials are incorrect, display an error message and return false to prevent the form from being submitted
    
     // Check if the password is strong enough
  if (!password.match(passwordRegex)) {
    alert("Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one number");
    return false;
  }
  // Check if the password confirmation is empty
  if (passwordConfirm == "") {
    alert("Password confirmation field must be filled out");
    return false;
  }
  // Check if the passwords match
  if (password != passwordConfirm) {
    alert("Passwords do not match");
    return false;
  }
  alert("Successful Signup go back to login page");
  window.location = "Loginpage.html";// Redirecting to other page.
  return false;
  }
  // function login(){
  //   Window.location = "./Loginpage"
  // }