// Sample workshops data
let workshops = [
    { title: "Leadership Skills", date: "2024-10-01" },
    { title: "Digital Marketing Basics", date: "2024-10-05" }
];

// Function to display workshops
function displayWorkshops() {
    const workshopList = document.getElementById('workshop-list');
    workshopList.innerHTML = ''; // Clear existing content

    workshops.forEach((workshop, index) => {
        const workshopItem = document.createElement('div');
        workshopItem.innerHTML = `<strong>${workshop.title}</strong> - ${workshop.date} <button onclick="removeWorkshop(${index})">Remove</button>`;
        workshopList.appendChild(workshopItem);
    });
}

// Function to add a workshop
document.getElementById('add-workshop-btn').addEventListener('click', function() {
    const title = prompt("Enter workshop title:");
    const date = prompt("Enter workshop date (YYYY-MM-DD):");

    if (title && date) {
        workshops.push({ title, date });
        displayWorkshops();
    }
});

// Function to remove a workshop
function removeWorkshop(index) {
    workshops.splice(index, 1);
    displayWorkshops();
}

// Modal functionality
const modal = document.getElementById("signup-modal");
const connectMentorBtn = document.getElementById('connect-mentor-btn');
const closeModalBtn = document.getElementById("close-modal");
const signupForm = document.getElementById("signup-form");

connectMentorBtn.addEventListener('click', function() {
    modal.style.display = "block";
});

closeModalBtn.addEventListener('click', function() {
    modal.style.display = "none";
});

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// Handle form submission
signupForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const interests = document.getElementById('interests').value;

    alert(`Thank you, ${name}! You have signed up for mentorship. We'll contact you at ${email}.`);
    modal.style.display = "none"; // Close the modal
    signupForm.reset(); // Reset the form
});

// Initial display of workshops
displayWorkshops();
