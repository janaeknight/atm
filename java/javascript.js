$("#loginBtn").click(function() {
    event.preventDefault();

    var email = document.getElementById("emailInput").value;
    var password  = document.getElementById("passInput").value;
    
    if (email.length>3 && password.length>3) {
        $("#loginScreen").hide();
        $("#mainScreen").show();
    } else {
        console.log(email);
    }

    console.log(email);
    console.log(password);
});

/*
    ~~

var activities = $("div.activity-alert").get().sort(function(){ 
    return Math.round(Math.random())-0.4; //random so we get the right +/- combo
  }).slice(0,4)
  $(activities).show();

*/

function withdrawal() {
    var withdrawAmount = document.getElementById("withdrawInput").value;

    let balance = document.getElementById("balance").innerText;
    balance = (balance - withdrawAmount).toFixed(2);

    document.getElementById("balance").innerHTML = balance;
}

function deposit() {
    var depositAmount = document.getElementById("depositInput").value;

    let balance = document.getElementById("balance").innerText;     
    balance = (parseFloat(balance)+parseFloat(depositAmount)).toFixed(2)
    
    document.getElementById("balance").innerHTML = balance;
}
