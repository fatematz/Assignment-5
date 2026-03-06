document.getElementById('login-btn').addEventListener("click", function() {
    let numberInput = document.getElementById('mobile')
    let contactNumber = numberInput.value
     
    let inputDigit=document.getElementById("digit");
    let digitNumber=inputDigit.value;

    
    if(contactNumber=="admin"&&digitNumber=="admin123") {
        alert("Login successfully")
        window.location.assign('issue-Tracker.html')

    }
    else {
        alert("Your Information Is Incorrect")
        return;
    }
})