/**
 * Genuine Auto Partners (GAP) - Main JavaScript
 * Handles interactive functionality for the homepage
 */

document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Header scroll effect
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // FAQ Accordion functionality
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function(item) {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', function() {
        // Close other open items
        faqItems.forEach(function(otherItem) {
          if (otherItem !== item && otherItem.classList.contains('active')) {
            otherItem.classList.remove('active');
          }
        });
        // Toggle current item
        item.classList.toggle('active');
      });
    }
  });

  // Mobile menu toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMain = document.querySelector('.nav-main');
  if (mobileToggle && navMain) {
    mobileToggle.addEventListener('click', function() {
      navMain.classList.toggle('active');
      mobileToggle.classList.toggle('active');
    });
  }

  // Smooth scroll for anchor links (fallback for browsers without CSS smooth scroll)
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        
        // Close mobile menu if open
        if (navMain && navMain.classList.contains('active')) {
          navMain.classList.remove('active');
          mobileToggle.classList.remove('active');
        }
        
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Intersection Observer for scroll animations (optional enhancement)
  if ('IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    // Observe sections for animation triggers
    document.querySelectorAll('.section').forEach(function(section) {
      observer.observe(section);
    });
  }

  // Form validation visual feedback
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    // Add visual feedback on input
    const requiredFields = contactForm.querySelectorAll('[required]');
    requiredFields.forEach(function(field) {
      field.addEventListener('blur', function() {
        if (!field.value.trim()) {
          field.style.borderColor = '#ff0200';
        } else {
          field.style.borderColor = '';
        }
      });
      field.addEventListener('input', function() {
        if (field.value.trim()) {
          field.style.borderColor = '';
        }
      });
    });
  }
});
