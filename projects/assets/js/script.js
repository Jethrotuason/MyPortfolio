// JavaScript for Burger Menu
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


function dlResume() {
    // File path of the resume
    const filePath = 'projects/assets/images/portfolio-pic/my-resume.jpg'; 

    const link = document.createElement('a');
    link.href = filePath;
    link.download = 'my-resume.jpg';

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
}

//animation
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a'); 
    const panels = document.querySelectorAll('.panel'); 

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); 
            const targetId = link.getAttribute('href').substring(1); 
            const targetPanel = document.getElementById(targetId);

            // Scroll to the target section
            targetPanel.scrollIntoView({ behavior: 'smooth' });

            // Reset fade-in animations
            resetFadeInAnimations(targetPanel);
        });
    });

    function resetFadeInAnimations(panel) {
       
        const fadeInElements = panel.querySelectorAll('.fade-in-above, .fade-in-left, .fade-in-right, .fade-in-below');
        fadeInElements.forEach(element => {
           
            element.classList.remove('fade-in-above', 'fade-in-left', 'fade-in-right', 'fade-in-below');
           
            void element.offsetWidth; 
            element.classList.add('fade-in-above', 'fade-in-left', 'fade-in-right', 'fade-in-below');
        });
    }
});
