// ── Active nav on scroll ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar a');
const header   = document.getElementById('header');

window.addEventListener('scroll', () => {
    // Sticky header glass effect
    header.classList.toggle('scrolled', window.scrollY > 50);

    // Highlight active nav link
    let current = '';
    sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    navLinks.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === '#' + current) a.classList.add('active');
    });
});

// ── Scroll reveal ──
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
        }
    });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

// ── Contact form ──
function sendMessage() {
    const name    = document.getElementById('name').value.trim();
    const email   = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill in at least your name, email, and message.');
        return;
    }

    // Compose mailto link
    const mailto = `mailto:samridh@example.com?subject=${encodeURIComponent(subject || 'Portfolio Contact')}&body=${encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + message)}`;
    window.location.href = mailto;
    document.getElementById('formSuccess').style.display = 'block';
}