
const skillsTab = document.getElementById("skills-tab");
const experienceTab = document.getElementById("experience-tab");
const educationTab = document.getElementById("education-tab");
const skillsDiv = document.querySelector(".skills");
const experienceDiv = document.querySelector(".experience");
const educationDiv = document.querySelector(".education");



// Add an event listener to the experience button
experienceTab.addEventListener("click", function() {
// Hide the skills & education div
skillsDiv.style.display = "none";
educationDiv.style.display = "none";
experienceDiv.style.display = "block";
});

// Add an event listener to the education button
educationTab.addEventListener("click", function() {
// Hide the skills & experience div
skillsDiv.style.display = "none";
experienceDiv.style.display = "none";
educationDiv.style.display = "block";
});

// Add an event listener to the skills button
skillsTab.addEventListener("click", function() {
// Hide the experience & education div
educationDiv.style.display = "none";
experienceDiv.style.display = "none";
skillsDiv.style.display = "block";
});


