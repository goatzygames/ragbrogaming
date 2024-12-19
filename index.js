
function DownButtonScroll() {
    document.getElementById("ProjectsTarget").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

function AboutMeScroll() {
    document.getElementById("ScrollAboutMe").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

let hasClickedDownloadFlappy = false;

function FlappyBirdDownloading() {
    if (!hasClickedDownloadFlappy) {
        document.getElementById("DownloaderText").innerHTML = "Downloading...";
        hasClickedDownloadFlappy = true;
    } else {
        alert("Already downloading!");
    }
}

function downloadAndReloadOrRedirect() {
    const driveLink = "https://drive.google.com/uc?id=1oYhIZdWDP2lWxcFIddTpVOO8vmbPLHyZ&export=download";

    const a = document.createElement("a");
    a.href = driveLink;
    a.download = "";
    document.body.appendChild(a);


    a.click();

    document.body.removeChild(a);

    setTimeout(() => {

        window.location.reload();

    }, 2000);
}

"use strict";

// Object to hold user data for the comment
const userId = {
    name: null,
    identity: null,
    image: null,
    message: null,
    date: null
};

// Select DOM elements
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
userComment.addEventListener("input", () => {
    if (!userComment.value.trim()) {
        publishBtn.setAttribute("disabled", "disabled");
        publishBtn.classList.remove("abled");
    } else {
        publishBtn.removeAttribute("disabled");
        publishBtn.classList.add("abled");
    }
});

// Function to handle the posting of a comment
function addPost() {
    console.log("The button works");

    // Ensure there's a message to post
    if (!userComment.value.trim()) return;
    if(!userName.value) {return;}

    // Set the user name from the input
    userId.name = userName.value.trim() || "Anonymouse"; // If no name, set default to "Anonymouse"
    if (userId.name === "Anonymouse") {
        userId.identity = false;
        userId.image = "anonymousecommenter.png";
    } else {
        userId.identity = true;
        userId.image = "commenterpng.png";
    }

    userId.message = userComment.value.trim();
    userId.date = new Date().toLocaleString();

    // Create the HTML for the new comment
    const published = `
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

    // Reset the input fields
    userComment.value = "";

    // Update the comment count
    updateCommentCount();

    // Send the comment via EmailJS
    sendEmail(userId);

    console.log("Email is sent.");
}

// Function to update the comment count
function updateCommentCount() {
    const commentsNum = document.querySelectorAll(".parents").length;
    document.getElementById("Comment").textContent = commentsNum;
}

// Function to send email using EmailJS
function sendEmail(userId) {
    const templateParams = {
        to_name: "dev@goatzy-codes.xyz", // Your email
        from_name: userId.name || "Anonymouse", // Name of the commenter
        message: userId.message, // The comment message
    };

    emailjs.send("service_h35zvc7", "template_q5opft8", templateParams)
        .then(function(response) {
            console.log("Email sent successfully:", response);
        }, function(error) {
            console.log("Email sending failed:", error);
        });
}

publishBtn.addEventListener("click", function(){
        if (!userName.value || userName.value.trim() == "default@gmail.com") {
            alert("Please enter your actual email so I can contact you when I see the request.");
            console.log("Invalid email entered");
            return;
        } else {
            console.log("Email validation passed");
            addPost();
        }
});
