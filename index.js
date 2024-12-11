window.onload = SetTime();

document.getElementById("MenuButton").onclick = function () {
    console.log("Hey it works!")
    let LitTheMenu = document.getElementsByClassName("TheMenu")[0];  // Use class instead of id

    let LitTheMenuVis = getComputedStyle(LitTheMenu).visibility;  // Check computed visibility

    console.log(LitTheMenu)

    // Assuming canClickMenu is true for this example
    let canClickMenu = true;

    if (canClickMenu) {
        if (LitTheMenuVis === "visible") {
            LitTheMenu.style.visibility = "hidden"; 
        } else {
            LitTheMenu.style.visibility = "visible"; 
        }
    }
}

    // Create the audio object
    var buttonclick1 = new Audio("Sounds/buttonclick1.mp3");

    // Get all button elements on the page
    var buttons = document.querySelectorAll("button");

    // Loop through all buttons and add event listeners
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            // If the sound is already playing, reset it to start from the beginning
            if (!buttonclick1.paused) {
                buttonclick1.currentTime = 0; // Reset the sound to the start
            }
            buttonclick1.play();  // Play sound when any button is clicked
        });
    });

// Create the audio object for the elevator music
var ElevatorMusic = new Audio("Sounds/elevatormusic.mp3");

// Function to enable scrolling and play the music
function enableScrollAndPlayMusic() {
    // Enable scrolling
    document.body.style.overflow = "auto"; // Allow scrolling
    
    // Play the elevator music
    ElevatorMusic.loop = true; // Loop the music
    ElevatorMusic.play(); // Play the music
    canClickMenu = true;
}

let isMusicPlaying = false;

document.getElementById("MusicInput").addEventListener('click', function() {
    if (isMusicPlaying) {
        ElevatorMusic.pause();
        ElevatorMusic.currentTime = 0;
        isMusicPlaying = false;
    } else {
        ElevatorMusic.play()
        isMusicPlaying = true;
    }
});

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
    userId.name = userName.value || "default@gmail"; // If no name, set default to "Anonymouse"
    if (userId.name === "default@gmail") {
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
        to_name: "dev@goatzy-codes.xyz", // my email
        from_name: userId.name || "default@gmail", // name of the commenter
        message: userId.message, // the comment message
    };

    emailjs.send("service_h35zvc7", "template_q5opft8", templateParams)
        .then(function(response) {
            console.log("Email sent successfully:", response);
        }, function(error) {
            console.log("Email sending failed:", error);
        });
}

// Attach event listener to the publish button
publishBtn.addEventListener("click", addPost);

function SetTime() {
    let now = new Date()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    console.log(`Hmm, what is the bug here..?`)

    if (hours >= 6 && hours < 12) {
        let message = "🌞Good morning";
        document.getElementById("Welcome").textContent = `${message}! Tell me down below how you feel about my codes!`;
    } else if (hours >= 12 && hours < 18) {
        let message = "🕑Good afternoon";
        document.getElementById("Welcome").textContent = `${message}! Here are some of my small projects!`;
    } else {
        let message = "🌃Good evening";
        document.getElementById("Welcome").textContent = `${message}! Check out some codes I've made!`;
    }
}

function OpenAboutMe() {
    window.location.href = "aboutme.html"
}

function OpenRealCounter() {
    window.location.href = "counter.html"
}