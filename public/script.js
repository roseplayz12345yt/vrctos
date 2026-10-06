// Log a message to the browser's console to confirm the script is running
console.log("Welcome to roseplayz12345yt.com!");

// Create a simple interaction function
function showGreeting() {
    alert("Thanks for visiting my site!");
}

// Attach the interaction to a button once the page loads
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("greetBtn");
    if (button) {
        button.addEventListener("click", showGreeting);
    }
});
