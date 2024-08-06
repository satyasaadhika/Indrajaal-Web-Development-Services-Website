document.querySelectorAll('[href="#"]').forEach(hash => {
    hash.addEventListener(e => {
        e.preventDefault();
    });
});

document.getElementById('scrollButton').addEventListener('click', function() {
    document.getElementById('targetSection').scrollIntoView({
        behavior: 'smooth'
    });
});
