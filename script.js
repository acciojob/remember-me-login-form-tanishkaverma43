document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var remember = document.getElementById('checkbox').checked;
    
    if (remember) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        document.getElementById('existing').style.display = "block";
    } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        document.getElementById('existing').style.display = "none";
    }
    
    alert('Logged in as ' + username);
});