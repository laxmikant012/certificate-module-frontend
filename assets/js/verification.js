function verify() {
	var token = sessionStorage.getItem("token");
	if (token === null){
		window.location.replace("login.html");
	}
}
function logout() {
      sessionStorage.clear();
      window.location.href='login.html'
    }