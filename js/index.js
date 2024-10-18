// menu bar code




function myFunction(x) {
  x.classList.toggle("change");
}


var buttons = document.querySelectorAll(".nav-link");

// Loop through each button and add click event
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    // Remove 'active' class from all buttons
    buttons.forEach(function (btn) {
      btn.classList.remove("active");
    });

    // Add 'active' class to the clicked button
    this.classList.add("active");
  });
}); var bu2 = document.querySelectorAll('navbarDropdown');
bu2.forEach(function (button) {
  bu2.addEventListener("click", function () {
    // Remove 'active' class from all buttons
    bu2.forEach(function (btn) {
      btn.classList.remove("active");
    });

    // Add 'active' class to the clicked button
    this.classList.add("active");
  });
});


// card  profile:
// JavaScript for handling carousel controls
// const profilesCarousel = document.getElementById('profilesCarousel');
const profileCards = document.querySelectorAll('.profile-card');
const indicators = document.querySelectorAll('.carousel-indicators input');

let currentIndex = 0; // Tracks the current index
let visibleCards = getVisibleCards(); // Get the number of visible cards based on screen size

// Function to calculate visible cards based on screen size
function getVisibleCards() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) {
        return 1; // On small screens, show 1 card
    } else if (screenWidth <= 1024) {
        return 2; // On medium screens, show 2 cards
    } else {
        return 3; // On large screens, show 3 cards
    }
}

// Function to update visibleCards when the window is resized
window.addEventListener('resize', () => {
    visibleCards = getVisibleCards();
});

// Function to scroll to a specific profile
function scrollToProfile(index) {
    const cardWidth = profileCards[0].offsetWidth + 20; // Card width + margin
    profilesCarousel.scrollLeft = cardWidth * index; // Scroll based on the index
    currentIndex = index;
    updateIndicators(index); // Sync radio buttons
}

// Function to update the checked state of the radio buttons
function updateIndicators(index) {
    indicators.forEach((indicator, i) => {
        indicator.checked = (i === index);
    });
}

// Handle prev button click
document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex -= 1; // Move one step back
        scrollToProfile(currentIndex);
    }
});

// Handle next button click
document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentIndex < profileCards.length - visibleCards) {
        currentIndex += 1; // Move one step forward
        scrollToProfile(currentIndex);
    }
});

// Radio button click will scroll to the selected profile
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        scrollToProfile(index);
    });
});
