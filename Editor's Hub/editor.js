document.getElementById('joinButton').addEventListener('click', function() {
    const items = document.querySelectorAll('.items');
    items.forEach(item => {
        const duration = Math.random() * 5 + 3; // Random duration between 3 and 8 seconds
        const delay = Math.random() * 2; // Random delay up to 2 seconds
        item.style.animationDuration = `${duration}s`;
        item.style.animationDelay = `${delay}s`;
        item.classList.add('float');
    });
    document.body.classList.add('color');
});
