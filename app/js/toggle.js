function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const closeBtn = document.getElementById('hamburger');
    
    // Toggle active class to show/hide menu
    navLinks.classList.toggle('active');
    
    // Change between hamburger and close button
    if (navLinks.classList.contains('active')) {
        hamburger.innerHTML = '<span style="color:white; font-size: 2rem;">&times;</span>'; // Replace hamburger with 'X' and set color to white
    } else {
        closeBtn.innerHTML = `
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        `; // Return to hamburger
    }
}
