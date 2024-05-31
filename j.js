// j.js
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

document.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        document.getElementById('back-to-top').style.display = 'block';
    } else {
        document.getElementById('back-to-top').style.display = 'none';
    }
});

document.getElementById('back-to-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById('contact-form').addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Message sent successfully');
    // Add AJAX request to send the form data to the server
});
