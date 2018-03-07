/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("navTop");
    if (x.className === "nav-top") {
        x.className += " responsive";
    } else {
        x.className = "nav-top";
    }
}

/* Script For Hamburger Menu */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
