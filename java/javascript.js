var email = "";
var password  = "";
var username = "";
var balance = 0;

var logins = 0;

$("#loginBtn").click(function() {

    event.preventDefault();
    console.log("Login attempted.");

    if (logins<1) {
        email = $("#emailInput").val();
        password = $("#passInput").val();
        console.log(email); console.log(password);
        logins +=1; console.log(logins);
        // console.log("Login attempt: SUCCESS");
    } else {
        if ($("#emailInput").val()===email && $("#passInput").val()===password) {
            console.log("Login attempt: SUCCESS");
        } else {
            console.log("Login attempt: FAIL");
        }
    }
});

/*
    ~~

var activities = $("div.activity-alert").get().sort(function(){ 
    return Math.round(Math.random())-0.4; //random so we get the right +/- combo
  }).slice(0,4)
  $(activities).show();

*/
