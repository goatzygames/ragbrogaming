function scrollToJasminDragon() {
    document.getElementById("JasminDraggonScroll").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

"use strict";

const userId = {
    name: null,
    identity: null,
    image: null,
    message: null,
    date: null
};

const userComment = document.querySelector(".usercomment");
const publishBtn = document.querySelector("#publish");
const comments = document.querySelector(".comments");
const userName = document.querySelector(".user");

// Check if there are saved comments in localStorage and display them
window.onload = function() {
    const savedComments = localStorage.getItem("comments");
    if (savedComments) {
        comments.innerHTML = savedComments; // Load comments from localStorage
        updateCommentCount();
    }
};

// Enable or disable the publish button based on user input
userComment.addEventListener("input", e => {
    if (!userComment.value) {
        publishBtn.setAttribute("disabled", "disabled");
        publishBtn.classList.remove("abled");
    } else {
        publishBtn.removeAttribute("disabled");
        publishBtn.classList.add("abled");
    }
});

// Function to add a comment
function addPost() {
    console.log("The button works");

    if (!userComment.value) return;

    // Set the user name from the input
    userId.name = userName.value || "default@gmail.com"; // If no name, set default to "Anonymouse"
    if (userId.name === "default@gmail.com") {
        userId.identity = false;
        userId.image = "anonymousecommenter.png";
    } else {
        userId.identity = true;
        userId.image = "commenterpng.png";
    }

    userId.message = userComment.value;
    userId.date = new Date().toLocaleString();

    // Create the HTML for the new comment
    let published = `
        <div class="parents">
            <img src="${userId.image}" alt="User Image">
            <div>
                <h1>${userId.name}</h1>
                <p>${userId.message}</p>
                <div class="engagements">
                    <img src="like.png" alt="Like">
                    <img src="share.png" alt="Share">
                </div>
                <span class="date">${userId.date}</span>
            </div>
        </div>
    `;

    // Append the comment to the page
    comments.innerHTML += published;

    // Save the updated comments to localStorage
    localStorage.setItem("comments", comments.innerHTML);

    // Reset the input field
    userComment.value = "";
    
    // Update the comment count
    updateCommentCount();

    // Send the comment via EmailJS
    sendEmail(userId);
}

// Function to update the comment count
function updateCommentCount() {
    let commentsNum = document.querySelectorAll(".parents").length;
    document.getElementById("Comment").textContent = commentsNum;
}

// Function to send email using EmailJS
function sendEmail(userId) {
    const templateParams = {
        to_name: "ragsediting@gmail.com", // my email
        from_name: userId.name || "default@gmail.com", // name of the commenter
        message: userId.message, // the comment message
    };

    emailjs.send("service_bvytz0i", "template_2ymajro", templateParams)
        .then(function(response) {
            console.log("Email sent successfully:", response);
        }, function(error) {
            console.log("Email sending failed:", error);
        });
}

// Attach event listener to the publish button
publishBtn.addEventListener("click", addPost);

function ResetLocalStorage() {
    localStorage.clear();
    location.reload();
}