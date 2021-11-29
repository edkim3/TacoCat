// Get the string from user
// controller function

function getValue() {
    
    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value;

    let returnObj = checkForPalindrome(userString);

    displayString(returnObj);
}

// Reverse the string
// Check to see if string is a palindrome
// If string is palindrome push new array to user
// If string is not a palindrome tell user that the string is not a palindrome
// logic function

function checkForPalindrome(userString) {

    userString = userString.toLowerCase();
    let regex = /[^a-z0-9]/gi;
    userString = userString.replace(regex,"");

    let revString = [];
    let returnObj = {};

    for (let i = userString.length - 1; i >= 0; i--) {
        revString += userString[i];
    }

    if (revString == userString) {
        returnObj.msg = "Well done! You entered a palindrome!"
    } else {
        returnObj.msg = "Sorry! You did not enter a palindrome!"
    }

    returnObj.reversed = revString;

    return returnObj;
}

// Display the reversed string to user
function displayString(returnObj) {
    
    document.getElementById("alertHeader").innerHTML = returnObj.msg;
    document.getElementById("msg").innerHTML = `Your phrase reversed is: ${returnObj.reversed}`;
    document.getElementById("alert").classList.remove("invisible");
}