/* Jeremiah Howell */

//Checks the input for validity
//Checks the input for the correct answer
function checkQ1() {
	//Q1 Solution: Difference + Sum
	var userEntered = document.getElementById("user").value;
	if(isNaN(userEntered) == true) {
  	document.getElementById("userError").innerHTML="Numbers Only";
    document.getElementById("userGroup").classList.add("has-error");
    document.getElementById("userGroup").classList.remove("has-success");
  } else if(userEntered != 110190) {
    	document.getElementById("userError").innerHTML="Nope.. Keep trying.";
    	document.getElementById("userGroup").classList.add("has-error");
    	document.getElementById("userGroup").classList.remove("has-success");
    } else {
      	document.getElementById("userError").innerHTML="Correct!";
      	document.getElementById("userGroup").classList.add("has-success");
      	document.getElementById("userGroup").classList.remove("has-error");
      }
	//Saves entry into a cookie for use in the resultPage
  setCookie("question1", userEntered);
}

//Checks the input for validity
//Checks the input for the correct answer
function checkQ2() {
	//Q2 Solution: First # + Difference + Second # + 13
	var userEntered = document.getElementById("user").value;
	//Checks the input of the question to make sure it is a valid entry
  if(isNaN(userEntered) == true) {
  	document.getElementById("userError").innerHTML="Numbers Only";
    document.getElementById("userGroup").classList.add("has-error");
    document.getElementById("userGroup").classList.remove("has-success");
  } else if(userEntered != 30201013) {
    	document.getElementById("userError").innerHTML="Nope.. Keep trying.";
      document.getElementById("userGroup").classList.add("has-error");
      document.getElementById("userGroup").classList.remove("has-success");
    } else {
      	document.getElementById("userError").innerHTML="Correct!";
        document.getElementById("userGroup").classList.add("has-success");
        document.getElementById("userGroup").classList.remove("has-error");
      }
	//Saves entry into a cookie for use in the resultPage
	setCookie("question2", userEntered);
}

//Checks the input for validity
//Checks the input for the correct answer
function checkQ3() {
	//Q3 Solution: Dividend + Sum + Difference
	var userEntered = document.getElementById("user").value;
  if(isNaN(userEntered) == true) {
		document.getElementById("userError").innerHTML="Numbers Only";
    document.getElementById("userGroup").classList.add("has-error");
    document.getElementById("userGroup").classList.remove("has-success");
  } else if(userEntered != 34020) {
    	document.getElementById("userError").innerHTML="Nope.. Keep trying.";
      document.getElementById("userGroup").classList.add("has-error");
      document.getElementById("userGroup").classList.remove("has-success");
    } else {
      	document.getElementById("userError").innerHTML="Correct!";
        document.getElementById("userGroup").classList.add("has-success");
        document.getElementById("userGroup").classList.remove("has-error");
      }
	//Saves entry into a cookie for use in the resultPage
	setCookie("question3", userEntered);
}

//Retrieves the cookies previously saved
//Checks the results entered against the correct answers
//if they are correct score is incremented by 1
//The output of the entered questions is shown and whether 
//it was correct or not
function evaluateScores() {
	var score = 0;
	var result1 = getCookie("question1");
  var result2 = getCookie("question2");
  var result3 = getCookie("question3");

  if(result1 == 110190) {
    document.getElementById("output1").innerHTML= "Your answer for #1: " + result1 + " is correct!";
    score++;
  } else {
      document.getElementById("output1").innerHTML= "Your answer for #1: " + result1 + "  is incorrect..";
    }
	
  if(result2 == 30201013) {
    document.getElementById("output2").innerHTML= "Your answer for #2: " + result2 + " is correct!";
    score++;
  } else {
      document.getElementById("output2").innerHTML= "Your answer for #2: " + result2 + "  is incorrect..";
    }
	
  if(result3 == 34020) {
    document.getElementById("output3").innerHTML= "Your answer for #3: " + result3 + " is correct!";
    score++;
  } else {
      document.getElementById("output3").innerHTML= "Your answer for #3: " + result3 + "  is incorrect..";
    }

  if(score == 1) {
    document.getElementById("outputScore").innerHTML= "Percentage = 33%";
  } else if(score == 2) {
      document.getElementById("outputScore").innerHTML= "Percentage = 67%";
    } else if(score == 3) {
        document.getElementById("outputScore").innerHTML= "Percentage = 100%";
      } else {
          document.getElementById("outputScore").innerHTML= "Percentage = 0%";
        }
}

//W3 Schools
function setCookie(cname, cvalue) {
	document.cookie = cname + "=" + cvalue + ";" + ";path=/";
}

//W3 Schools
function getCookie(cname) {
	var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
    	return c.substring(name.length, c.length);
    }
  }
  return "";
}

//
/// Navigation
//
function question2() {
  location.assign("question2.html");
}
function question3() {
  location.assign("question3.html");
}
function results() {
  location.assign("resultPage.html");
}
function restart() {
  location.assign("index.html");
	//sets cookies to null when the test is restarted
	//purely for the result page if a field is left blank
	//it provides null instead of the previous test entry
  setCookie("question1", null);
  setCookie("question2", null);
  setCookie("question3", null);
}
//
/// 
//