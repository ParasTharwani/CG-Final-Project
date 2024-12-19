// loader
window.addEventListener('load', function () {
  document.querySelector('.pre-loader').className += ' hidden';
});

jQuery.validator.setDefaults({
  debug: true,
  success: "valid"
});

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


// SLICK SLIDER

$(document).ready(function () {
  $('.reviews-carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
});

