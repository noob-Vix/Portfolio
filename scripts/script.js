  // Theme Toggle Functionality
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  
  // Check for saved theme preference
  if (localStorage.getItem('darkMode') === 'true') {
      body.classList.add('dark-mode');
      themeToggle.checked = true;
  }

  themeToggle.addEventListener('change', () => {
      body.classList.toggle('dark-mode');
      const isDarkMode = body.classList.contains('dark-mode');
      localStorage.setItem('darkMode', isDarkMode);
  });

      // Scroll Animation
      const observerOptions = {
          threshold: 0.1
      };

      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.style.opacity = '1';
                  entry.target.style.transform = 'translateY(0)';
              }
          });
      }, observerOptions);

      document.querySelectorAll('.skill-card, .project-card').forEach(el => {
          el.style.opacity = '0';
          el.style.transform = 'translateY(20px)';
          observer.observe(el);
      });

  // Navigation functionality
  document.querySelectorAll('.nav-button').forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        document.querySelectorAll('.nav-button').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Scroll to section
        const sectionId = button.dataset.section;
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
        
        // Close mobile menu if open
        if (window.innerWidth <= 768) {
            document.querySelector('.nav-buttons').classList.remove('show');
        }
    });
});

// Mobile menu toggle
document.querySelector('.mobile-menu-button').addEventListener('click', () => {
    document.querySelector('.nav-buttons').classList.toggle('show');
});

// Highlight active section on scroll
const sections = document.querySelectorAll('section');
const navButtons = document.querySelectorAll('.nav-button');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navButtons.forEach(button => {
        button.classList.remove('active');
        if (button.dataset.section === current) {
            button.classList.add('active');
        }
    });
});