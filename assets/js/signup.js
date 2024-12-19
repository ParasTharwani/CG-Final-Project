
 // count-down functionality 
// getting the values
var daysInput = document.getElementById("days")
console.log(daysInput)
var hoursInput = document.getElementById("hours")
var minutesInput = document.getElementById("minutes")
var secondsInput = document.getElementById("seconds")
function updateCountDown(){

    // Declaring the time
var targetDate = new Date("12-01-2024").getTime()
var today = new Date().getTime();
console.log(today);
console.log(targetDate)

var diff = targetDate - today;
// converting the values
if(diff <= 0){
    document.getElementById("count").textContent = "holiday season off ended"
} else {
    var daysConverted = Math.floor(diff / (1000 * 60 * 60 * 24) ) 
console.log(daysConverted)

var hoursConverted = Math.floor(diff / (1000 * 60 * 60 ) % 24)
console.log(hoursConverted);

var minutesConverted = Math.floor(diff / (1000 * 60  ) % 60)
console.log(minutesConverted);

var secondsConverted = Math.floor(diff / (1000) % 60)
console.log(secondsConverted);

// inserting the values
daysInput.value = daysConverted;
hoursInput.value = hoursConverted;
minutesInput.value = minutesConverted;
secondsInput.value = secondsConverted;
}

}
updateCountDown()

setInterval(() => {updateCountDown() 
}, 1000);

// login  validation
jQuery.validator.setDefaults({
    debug: true,
    success: "valid"
  });
  $(document).ready(function () {
  
    $('#login-form').validate({
      rules: {
        email: {
          required: true,
          email: true
        },
        password: {
          required: true,
          minlength: 6
        }
      },
      messages: {
        email: {
          required: "Please enter your email address",
          email: "Please enter a valid email address"
        },
        password: {
          required: "Please provide a password",
          minlength: "Your password must be at least 6 characters long"
        }
      }
    });
  
    // Login Button Click
    $('#login-btn').on('click', function (e) {
      e.preventDefault(); 
      if ($('#login-form').valid()) {
        //  SweetAlert confirmation 
        Swal.fire({
          title: 'Confirm Login',
          text: 'Are you sure you want to log in?',
          icon: 'question',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, log in'
        }).then((result) => {
          if (result.isConfirmed) {
            
            Swal.fire('Logged In!', 'You are now logged in.', 'success');
     
          }
        });
      }
    });
  })
  

  
  // sign-up submission

  $(document).ready(function () {
    $('#signup-form').validate({
      rules: {
        'first-name': {
          required: true,
          minlength: 2
        },
        'last-name': {
          required: true,
          minlength: 2
        },
        email: {
          required: true,
          email: true
        },
        telephone: {
          required: true,
          digits: true,
          minlength: 10,
          maxlength: 15
        },
        password: {
          required: true,
          minlength: 6
        },
        'confirm-password': {
          required: true,
          equalTo: "#password"
        },
        terms: {
          required: true
        }
      },
      messages: {
        'first-name': {
          required: "Please enter your first name",
          minlength: "First name must be at least 2 characters"
        },
        'last-name': {
          required: "Please enter your last name",
          minlength: "Last name must be at least 2 characters"
        },
        email: {
          required: "Please enter your email address",
          email: "Please enter a valid email address"
        },
        telephone: {
          required: "Please enter your phone number",
          digits: "Please enter only numbers",
          minlength: "Phone number must be at least 10 digits",
          maxlength: "Phone number must be at most 15 digits"
        },
        password: {
          required: "Please enter a password",
          minlength: "Password must be at least 6 characters"
        },
        'confirm-password': {
          required: "Please confirm your password",
          equalTo: "Passwords do not match"
        },
        terms: {
          required: "You must agree to the terms and policies"
        }
      }
    });

    $('#signup-btn').on('click', function (e) {
      e.preventDefault();
  

      if ($('#signup-form').valid()) {
     
        Swal.fire({
          title: 'Confirm Signup',
          text: 'Are you sure you want to create an account?',
          icon: 'question',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, create account'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire('Account Created!', 'Your account has been successfully created.', 'success');
          }
        });
      }
    });
  });

  $(document).ready(function () {

    //  validation on the contact form
    $('#contact-form').validate({
      rules: {
        username: {
          required: true,
          minlength: 3
        },
        email: {
          required: true,
          email: true
        },
        queries: {
          required: true,
          minlength: 5
        }
      },
      messages: {
        username: {
          required: "Please enter your name",
          minlength: "Your name must be at least 3 characters long"
        },
        email: {
          required: "Please enter your email address",
          email: "Please enter a valid email address"
        },
        queries: {
          required: "Please enter your query",
          minlength: "Your query must be at least 5 characters long"
        }
      }
    });
  
    // Contact Form Submit alert
    $('#contact-submit').on('click', function (e) {
      e.preventDefault(); 
      if ($('#contact-form').valid()) {
       
        Swal.fire({
          title: 'Confirm Submission',
          text: 'Are you sure you want to submit your query?',
          icon: 'question',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, submit'
        }).then((result) => {
          if (result.isConfirmed) {
            
            Swal.fire('Submitted!', 'Your query has been submitted.', 'success');
         
          }
        });
      }
    });
  });
  

 
  