function loginCheck () {
	var users = [
	    {
	    "jay": "jay123"
	    }, 
	    {
	    "anna": "anna123"
	    },
	    {
	    "arjun": "arjun123"
	    }
	];
	var userName, passWord, i, result = 0;
	userName = document.getElementById("name-id").value;
	passWord = document.getElementById("pass-id").value;
	for (i = 0; i < users.length; i++) {
		if(users[i].hasOwnProperty(userName)) {
			if(users[i][userName] == passWord) {
				alert("Login successful!");
				result = 1;
				break;
			}
		}
	}
	if(result == 0) {
		alert("Invalid username or password!");
	}
}
