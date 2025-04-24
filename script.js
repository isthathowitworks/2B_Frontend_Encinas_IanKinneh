function openModal() {
    document.getElementById('loginModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('loginModal').style.display = 'none';
}

function closeModal() {
    const modal = document.getElementById('loginModal');
    modal.classList.add('fade-out'); // Add fade-out class
    setTimeout(() => {
        modal.style.display = 'none';
        modal.classList.remove('fade-out'); // Remove fade-out class after animation
    }, 300); // Match the duration of the fade-out animation
}