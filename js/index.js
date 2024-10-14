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
const scrollAmount = 270; // Adjust scroll amount based on profile width
const profilesWrapper = document.getElementById('profilesWrapper');

document.getElementById('nextBtn').addEventListener('click', function() {
    profilesWrapper.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

document.getElementById('prevBtn').addEventListener('click', function() {
    profilesWrapper.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

function scrollToProfile(index) {
    const profile = document.getElementById(`profile-${index}`);
    const profilePosition = profile.getBoundingClientRect().left;
    const wrapperPosition = profilesWrapper.getBoundingClientRect().left;
    const scrollTo = profilePosition - wrapperPosition + profilesWrapper.scrollLeft; // Calculate scroll position
    profilesWrapper.scrollTo({ left: scrollTo, behavior: 'smooth' });
}
