var btn = document.getElementById('btn')
let toggleButtons = document.querySelectorAll(".toggle-btn")
function leftClick(element) {
	btn.style.left = '0'
    toggleButtons.forEach((button)=>{
        button.classList.remove("active")
    })
    element.classList.add("active")
}

function rightClick(element) {
	btn.style.left = '50px'
    toggleButtons.forEach((button)=>{
        button.classList.remove("active")
    })
    element.classList.add("active")
}

const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 3000, // Delay between slides in milliseconds (3 seconds)
        disableOnInteraction: false, // Allow autoplay to continue after user interactions
    },
         // Responsive breakpoints
    breakpoints: {
    640: {
    slidesPerView: 1, // 1 card on small screens
    },
    768: {
    slidesPerView: 3, // 2 cards on medium screens
    },
    1024: {
    slidesPerView: 5, // 3 cards on large screens
    },
    },
    // If we need pagination
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
    
    // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    
    // And if we need scrollbar
    scrollbar: {
    el: '.swiper-scrollbar',
    },
    });
const swiper2 = new Swiper('.course-swiper', {
    loop: true,
    autoplay: {
        delay: 3000, // Delay between slides in milliseconds (3 seconds)
        disableOnInteraction: false, // Allow autoplay to continue after user interactions
    },
         // Responsive breakpoints
    breakpoints: {
    640: {
    slidesPerView: 1, // 1 card on small screens
    },
    768: {
    slidesPerView: 2, // 2 cards on medium screens
    },
    1024: {
    slidesPerView: 4, // 3 cards on large screens
    },
    },
    // If we need pagination
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
    
    // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    
    // And if we need scrollbar
    scrollbar: {
    el: '.swiper-scrollbar',
    },
    });
const swiper3 = new Swiper('.text-swiper', {
    loop: true,
    autoplay: {
        delay: 3000, // Delay between slides in milliseconds (3 seconds)
        disableOnInteraction: false, // Allow autoplay to continue after user interactions
    },
    // If we need pagination
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
    
    // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    
    // And if we need scrollbar
    scrollbar: {
    el: '.swiper-scrollbar',
    },
    });

    document.querySelectorAll('.course-toggle').forEach(item => {
        item.addEventListener('click', function() {
          // Toggle the visibility of the associated drop-div
          const dropDiv = this.nextElementSibling;
          dropDiv.classList.toggle('d-none');
          
          // Toggle the angle icon (up/down)
          const icon = this.querySelector('.drop-icon');
          if (dropDiv.classList.contains('d-none')) {
            icon.classList.remove('fa-angle-up');
            icon.classList.add('fa-angle-down');
          } else {
            icon.classList.remove('fa-angle-down');
            icon.classList.add('fa-angle-up');
          }
        });
      });

      document.addEventListener("DOMContentLoaded", function () {
        const goToPaymentButton = document.querySelector("#goToPayment");
        const completePaymentButton = document.querySelector("#completePayment");
        const backArrow = document.querySelector("#backArrow");
        const stepIndicators = document.querySelectorAll(".step-indicator");
        const stepForms = document.querySelectorAll(".step-form");

        backArrow.style.display = "none"; // Initially hide the back arrow

        // Go to Payment Step (Step 2)
        goToPaymentButton.addEventListener("click", function () {
            stepIndicators[0].classList.remove("active");
            stepIndicators[0].classList.add("completed");
            stepIndicators[1].classList.add("active");

            stepForms[0].classList.add("d-none");
            stepForms[1].classList.remove("d-none");

            backArrow.style.display = "block"; // Show back arrow in Step 2
        });

        // Complete Payment and Go to Confirmation Step (Step 3)
        completePaymentButton.addEventListener("click", function () {
            stepIndicators[1].classList.remove("active");
            stepIndicators[1].classList.add("completed");
            stepIndicators[2].classList.add("active");

            stepForms[1].classList.add("d-none");
            stepForms[2].classList.remove("d-none");

            backArrow.style.display = "block"; // Show back arrow in Step 3
        });
    });

    // Function to handle going back in the steps
    function goBack() {
        const backArrow = document.querySelector("#backArrow");
        const stepIndicators = document.querySelectorAll(".step-indicator");
        const stepForms = document.querySelectorAll(".step-form");

        const currentStepIndex = Array.from(stepIndicators).findIndex(indicator => indicator.classList.contains('active'));

        if (currentStepIndex === 1) {
            // Going back to Step 1
            stepIndicators[1].classList.remove("active");
            stepIndicators[1].classList.add("completed");
            stepIndicators[0].classList.add("active");

            stepForms[1].classList.add("d-none");
            stepForms[0].classList.remove("d-none");

            backArrow.style.display = "none"; // Hide back arrow in Step 1
        } else if (currentStepIndex === 2) {
            // Going back to Step 2
            stepIndicators[2].classList.remove("active");
            stepIndicators[1].classList.add("active");

            stepForms[2].classList.add("d-none");
            stepForms[1].classList.remove("d-none");

            backArrow.style.display = "block"; // Keep back arrow visible
        }
    }