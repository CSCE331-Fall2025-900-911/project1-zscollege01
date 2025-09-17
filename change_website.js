function toggleStyleSheet(){
    // Get the current style sheet
    var sheet = document.getElementById("stylesheet");
    var currentSheet = sheet.getAttribute("href");

    // Check which one is active, switch to the other one when button pressed
    if (currentSheet === "main_style.css"){
        // Switch to second style sheet if current is main
        sheet.setAttribute("href", "second_style.css");
        // Set variable to new style sheet for local storage
        currentSheet = "second_style.css";
    } else {
        // This would be the case if current is second style sheet, switch to main
        sheet.setAttribute("href", "main_style.css");
        // Set variable to new style sheet for local storage
        currentSheet = "main_style.css";
    }
    
    localStorage.setItem("styleSheet", currentSheet);
}

// Load the previously selected stylesheet from local storage on page load
window.onload = function() {
    var savedSheet = localStorage.getItem("styleSheet");
    if (savedSheet) {
        document.getElementById("stylesheet").setAttribute("href", savedSheet);
    }
}
