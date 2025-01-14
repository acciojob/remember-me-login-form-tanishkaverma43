document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var remember = document.getElementById('checkbox').checked;
    
    if (remember) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        var btn = document.createElement("BUTTON");
        btn.innerHTML = "Login as existing user";
        btn.id = "existing";
        document.getElementById("buttons").appendChild(btn);
    } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
    }
    
    alert('Logged in as ' + username);
});