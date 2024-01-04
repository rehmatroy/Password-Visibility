

let body = document.body;
	body.style.margin ='0'

let PasswordContainer = document.getElementById('password-container');
	PasswordContainer.style.height ="100vh";
	PasswordContainer.style.backgroundColor ='gray';
	PasswordContainer.style.display ="flex";
	PasswordContainer.style.justifyContent ="center";
	PasswordContainer.style.alignItem ="center";



let pass = document.getElementById("pass");
let check = document.getElementById("check");

	check.onclick = togglePassword;

	function togglePassword(){
		if(check.checked){
			pass.type = "text";
		} 
		else{
			pass.type = "password";
		} 
	}