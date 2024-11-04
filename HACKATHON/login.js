




document.getElementById('mainPage').style.display = 'block';

        // Redirect to the login page after 5 seconds
        setTimeout(function() {
            document.getElementById('mainPage').style.display = 'none';
            document.getElementById('loginPage').style.display = 'block';
        }, 5000);

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    
});