document.querySelectorAll('[href="#"]').forEach(hash => {
    hash.addEventListener(e => {
        e.preventDefault();
    });
});

document.getElementById('scrollButton').addEventListener('click', function() {
    document.getElementById('target').scrollIntoView({
        behavior: 'smooth'
    });
});


// Feq toggleAnswer 

function toggleAnswer(element){
    const answer = element.nextElementSibling;
    const plusCutsine = element.querySelector('span');
    if (answer.style.display === "none" || answer.style.display === "") {
        answer.style.display = "block";
        plusCutsine.textContent = "x";
    } else {
        answer.style.display = "none";
        plusCutsine.textContent = "+";
    }
}