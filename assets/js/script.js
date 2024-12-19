
// getting the values
var daysInput = document.getElementById("days")
// console.log(daysInput)
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

// faq
$( function() {
    $( "#accordion" ).accordion();
  } );
// alert on buy now btn and CREDIT CARD Validation

 $(document).ready(function (){

  $('.buyNowbtn').on('click', function() {
    Swal.fire({
      title: 'Enter Payment Details',
      html: `
          <form id="myform">
              <label for="field">Credit Card:</label><br/>
              <input type="text" id="field" name="field" maxlength="16" placeholder="1234 5678 9012 3456" required style="width: 100%; padding: 8px; margin-top: 4px;"><br/><br/>

              <label for="holdername">Holder's Name:</label><br/>
              <input type="text" id="holdername" name="holdername" placeholder="Name on Card" required style="width: 100%; padding: 8px; margin-top: 4px;"><br/><br/>

              <label for="expiry">Expiry Date:</label><br/>
              <input type="month" id="expiry" name="expiry" required style="width: 100%; padding: 8px; margin-top: 4px;"><br/><br/>

              <label for="cvv">CVV:</label><br/>
              <input type="number" id="cvv" name="cvv" maxlength="3" placeholder="123" required style="width: 100%; padding: 8px; margin-top: 4px;"><br/>
          </form>
      `,
      showCancelButton: true,
      confirmButtonText: 'Validate',
      focusConfirm: false,
      preConfirm: () => {
          //  values from the form inputs
          const creditCard = document.getElementById("field").value;
          const holderName = document.getElementById("holdername").value;
          const expiryDate = document.getElementById("expiry").value;
          const cvv = document.getElementById("cvv").value;

          if (!creditCard || !holderName || !expiryDate || !cvv) {
              Swal.showValidationMessage("Please fill in all fields.");
              return false;
          }

          return { creditCard, holderName, expiryDate, cvv };
      }
  }).then((result) => {
      if (result.isConfirmed) {
          console.log('Form data:', result.value);
        
          Swal.fire('Validated!', 'Your payment details have been validated.', 'success');
      }
  });
  })
 })



 $(document).ready(function () {

  // validation on the contact form
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
        required: "Enter your email address",
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
    
 
  