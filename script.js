document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const fullName = document.getElementById('fullName').value;
    const address = document.getElementById('address').value;
    localStorage.setItem('fullName', fullName);
    localStorage.setItem('address', address);
    window.location.href = 'gifts.html';
});