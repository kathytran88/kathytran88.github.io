'use strict';

// navbar
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Navigation functionality
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function() {
    // Remove active class from all navigation links
    for (let j = 0; j < navigationLinks.length; j++) {
      navigationLinks[j].classList.remove("active");
    }
    
    // Add active class to clicked navigation link
    this.classList.add("active");

    // Remove active class from all pages
    for (let j = 0; j < pages.length; j++) {
      pages[j].classList.remove("active");
    }

    // Add active class to corresponding page
    const currentPage = pages[i];
    currentPage.classList.add("active");
  });
}

// Portfolio link functionality
const portfolioLink = document.getElementById('portfolioLink');
if (portfolioLink) {
  portfolioLink.addEventListener('click', function() {
    // Find specifically the Projects button in the navigation
    const projectsNavLink = Array.from(navigationLinks).find(link => 
      link.textContent.trim() === 'Projects'
    );
    if (projectsNavLink) {
      projectsNavLink.click();
    }
  });
}

// Mobile nav bar filter
document.addEventListener('DOMContentLoaded', () => {
  // Desktop and mobile filter elements
  const filterButtons = document.querySelectorAll('[data-filter-btn]');
  const filterSelect = document.querySelector('[data-select]');
  const filterList = document.querySelector('.dropdown-filter-list');
  const filterItems = document.querySelectorAll('.dropdown-filter-list .filter-item');
  const selectValue = document.querySelector('[data-select-value]');
  const projectItems = document.querySelectorAll('.project-item');

  // Function to filter projects
  const filterProjects = (category) => {
    projectItems.forEach(project => {
      const categories = project.dataset.category?.split(',').map(cat => cat.trim()) || [];
      
      if (category === 'All' || categories.includes(category)) {
        project.classList.add('active');
      } else {
        project.classList.remove('active');
      }
    });
  };

  // Desktop filter buttons
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      button.classList.add('active');
      // Filter projects
      const selectedCategory = button.textContent.trim();
      filterProjects(selectedCategory);
    });
  });

  // Mobile dropdown toggle
  filterSelect?.addEventListener('click', (e) => {
    e.stopPropagation();
    filterSelect.classList.toggle('active');
    filterList?.classList.toggle('active');
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!filterSelect?.contains(e.target)) {
      filterSelect?.classList.remove('active');
      filterList?.classList.remove('active');
    }
  });

  // Mobile filter items
  filterItems.forEach(item => {
    item.addEventListener('click', () => {
      // Update dropdown button text
      selectValue.textContent = item.textContent;
      // Close dropdown
      filterSelect.classList.remove('active');
      filterList.classList.remove('active');
      
      // Filter projects
      const selectedCategory = item.textContent.trim();
      filterProjects(selectedCategory);
      
      // Update desktop buttons to match selection
      filterButtons.forEach(btn => {
        if (btn.textContent.trim() === selectedCategory) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
    });
  });
});

/*
// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}
*/

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

/*
// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}
*/
// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// Filter feature

// Select all filter buttons
const filterButtons = document.querySelectorAll('[data-filter-btn]');

// Select all project items
const projectItems = document.querySelectorAll('[data-filter-item]');

// Add click event listeners to filter buttons
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove the 'active' class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));

    // Add the 'active' class to the clicked button
    button.classList.add('active');

    // Get the category from the button text
    const filterCategory = button.textContent.trim();

    // Filter project items
    projectItems.forEach(item => {
      const itemCategories = item.getAttribute('data-category').split(',').map(cat => cat.trim());

      if (filterCategory === 'All' || itemCategories.includes(filterCategory)) {
        item.classList.add('active'); // Show item
        item.style.display = 'block';
      } else {
        item.classList.remove('active'); // Hide item
        item.style.display = 'none';
      }
    });
  });
});




// Filter feature

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}


