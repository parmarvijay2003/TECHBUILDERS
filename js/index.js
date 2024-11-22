// function myFunction(x) {
//     x.classList.toggle("change");
// }

// function main() {
//     var sideMenu = document.getElementById('side-nav');
//     var close = document.getElementById('close');
//     var menu = document.getElementById('hamburger-menu');
//     menu.addEventListener('click', function() {
//         sideMenu.className = 'open';
//         close.classList.remove('hide');
//     });
//     close.addEventListener('click', function() {
//         sideMenu.classList.remove('open');
//         close.className = 'hide';
//     });
// }
// addEventListener('load', main);
function myFunction(x) {
    x.classList.toggle("change");
}
// let click = document.getElementsByClassName('dropdown-menu');
// let change_color = document.getElementById('navbarDropdown');
// click.addEventListener('click', function(event) {
//     event.preventDefault();
//     change_color.style.color('grey');
// });// Get the link and the label elements by their IDs


// function main() {
//     var sideMenu = document.getElementById('navbarSupportedContent');
//     var close = document.getElementById('close');
//     var menu = document.getElementById('hamburger-menu');
//     menu.addEventListener('click', function() {
//         sideMenu.className = 'open';
//         close.classList.remove('hide');
//     });
//     close.addEventListener('click', function() {
//         sideMenu.classList.remove('open');
//         close.className = 'hide';
//     });
// }
// addEventListener('load', main);
// document.getElementById('h1').addEventListener('click', function(event) {
//     event.preventDefault(); // Prevent default link behavior
//     var label = document.getElementById('navbarDropdown');
//     label.classList.toggle('changedColor'); // Toggle the new color class
// });
// document.getElementById('h2').addEventListener('click', function(event) {
//     event.preventDefault(); // Prevent default link behavior
//     var label = document.getElementById('navbarDropdown');
//     label.classList.toggle('changedColor'); // Toggle the new color class
// });
// document.getElementById('h3').addEventListener('click', function(event) {
//     event.preventDefault(); // Prevent default link behavior
//     var label = document.getElementById('navbarDropdown');
//     label.classList.toggle('changedColor'); // Toggle the new color class
// });
// document.getElementById('h4').addEventListener('click', function(event) {
//     event.preventDefault(); // Prevent default link behavior
//     var label = document.getElementById('navbarDropdown');
//     label.classList.toggle('changedColor'); // Toggle the new color class
// });

// Select all ul elements and their respective titles
// const menus = document.querySelectorAll('.navbar-nav');

// menus.forEach((menu) => {
//     const title = document.querySelector(`#${menu.id}-same`);

//     // Select all li items inside the current ul
//     const menuItems = menu.querySelectorAll('same');

//     menuItems.forEach((item) => {
//         // Add focus class to li and change title color when focused
//         item.addEventListener('focus', function() {
//             item.classList.add('focused');
//             title.classList.add('focused-title'); // Change the title color
//         });

//         // Remove focus class from li and reset title color when blur event occurs
//         item.addEventListener('blur', function() {
//             item.classList.remove('focused');
//             title.classList.remove('focused-title'); // Reset the title color
//         });
//     });
// });


// side bar menu code
// focus code in navbar and drop down list :
// document.addEventListener('DOMContentLoaded', function() {
//     const servicesLink = document.querySelector('#navbarDropdown');
//     const dropdownItems = document.querySelectorAll('#navbardropdown');

//     // Show dropdown when Services is focused
//     servicesLink.addEventListener('focus', function() {
//         this.nextElementSibling.style.display = 'block';
//     });

//     // Hide dropdown when Services loses focus, unless focus moves to a dropdown item
//     servicesLink.addEventListener('blur', function() {
//         setTimeout(() => {
//             if (!document.activeElement.closest('.nav-item')) {
//                 this.nextElementSibling.style.display = 'none';
//             }
//         }, 100); // Delay to allow focus to move
//     });

//     // Manage focus on dropdown items
//     dropdownItems.forEach(item => {
//         item.addEventListener('focus', function() {
//             servicesLink.classList.add('focused'); // Optional, if you want to style Services link too
//         });

//         item.addEventListener('blur', function() {
//             setTimeout(() => {
//                 if (!document.activeElement.closest('.dropdown')) {
//                     servicesLink.classList.remove('focused');
//                     servicesLink.nextElementSibling.style.display = 'none';
//                 }
//             }, 100); // Allow time for focus shift
//         });

//         // Click event for dropdown items
//         item.addEventListener('click', function(e) {
//             e.preventDefault(); // Prevent default action if needed
//             servicesLink.focus(); // Return focus to Services after clicking
//         });
//     });
// // }); 
// let nav = document.getElementById('#navbarDropdown');
// let dropdown = document.getElementsByClassName('.dropdown-item');
// dropdown.addEventListener('click',()=>{
//      let s= document.getElementById('#navbarDropdown'); s.style.color='red';
// });
//
var buttons = document.querySelectorAll(".nav-link");

// Loop through each button and add click event
buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    // Remove 'active' class from all buttons
    buttons.forEach(function(btn) {
      btn.classList.remove("active");
    });

    // Add 'active' class to the clicked button
    this.classList.add("active");
  });
}); var bu2= document.querySelectorAll('navbarDropdown');
bu2.forEach(function(button) {
    bu2.addEventListener("click", function() {
      // Remove 'active' class from all buttons
      bu2.forEach(function(btn) {
        btn.classList.remove("active");
      });
  
      // Add 'active' class to the clicked button
      this.classList.add("active");
    });
  });



  

  document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.profiles-carousel');
    const cards = document.querySelectorAll('.profile-card');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const indicators = document.querySelectorAll('input[name="carousel"]');
    
    let currentIndex = 1; // Start with second card (center position)
    let autoScrollInterval;

    // Function to update carousel
    function updateCarousel(index) {
        // Remove active class from all cards
        cards.forEach(card => card.classList.remove('active'));
    
        // Add active class to center card
        cards[index].classList.add('active');

        // Calculate scroll position to center the active card
        const cardWidth = cards[0].offsetWidth;
        const scrollPosition = (index - 1) * cardWidth;
        
        // Smooth scroll to position
        carousel.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });

        // Update indicators
        const indicatorIndex = index - 1;
        indicators.forEach((indicator, i) => {
            indicator.checked = (i === indicatorIndex);
        });

        currentIndex = index;
    }

    // Next button click handler
    nextBtn.addEventListener('click', () => {
        if (currentIndex < cards.length - 1) {
            updateCarousel(currentIndex + 1);
        } else {
            updateCarousel(1); // Loop back to start
        }
    });

    // Previous button click handler
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 1) {
            updateCarousel(currentIndex - 1);
        } else {
            updateCarousel(cards.length - 1); // Loop to end
        }
    });

    // Indicator click handler
    window.scrollToProfile = function(index) {
        updateCarousel(index + 1); // Add 1 to account for center positioning
    };

    // Auto scroll functionality
    // function startAutoScroll() {
    //     autoScrollInterval = setInterval(() => {
    //         if (currentIndex < cards.length - 1) {
    //             updateCarousel(currentIndex + 1);
    //         } else {
    //             updateCarousel(1);
    //         }
    //     }, 2000);
    // }

    function stopAutoScroll() {
        clearInterval(autoScrollInterval);
    }

    // Touch support
    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        stopAutoScroll();
    });

    carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].clientX;
        handleSwipe();
        // startAutoScroll();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const difference = touchStartX - touchEndX;

        if (Math.abs(difference) > swipeThreshold) {
            if (difference > 0) {
                nextBtn.click();
            } else {
                prevBtn.click();
            }
        }
    }

    // Start auto scroll
    // startAutoScroll();

    // Pause on hover
    // carousel.addEventListener('mouseenter', stopAutoScroll);
    // carousel.addEventListener('mouseleave', startAutoScroll);

    // Initial setup
    updateCarousel(1); // Start with center card active
});
  