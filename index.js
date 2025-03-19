// JavaScript file with no logic

// Get the existing h1 element
const firstH1 = document.getElementById("h11");

// Create a new h1 element
const newElement = document.createElement("h1");
newElement.textContent = "Goodbye, World!";
newElement.className = "h11";

// Replace the existing h1 with the new h1
firstH1.parentNode.replaceChild(newElement, firstH1);