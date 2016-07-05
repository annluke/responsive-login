function loginCheck () {
	var users = [
	    {
	    "username":"jay",
	    "password":"jay123"
	    }, 
	    {
	    "username":"anna",
	    "password":"anna123"
	    },
	    {
	    "username":"arjun",
	    "password":"arjun123"
	    }
	];
	var userName = document.getElementById("name-id").value;
	var passWord = document.getElementById("pass-id").value;
	var i;
	var result;
	for (i = 0; i < users.length; i++) {
		if(userName == users[i].username && passWord == users[i].password) {
			result = 1;
			break;
		}
		else {
			result = 0;
		}
	}
	if(result == 1) {
		alert("Login successful!");
	}
	else {
		alert("Invalid username or password!");
	}
}