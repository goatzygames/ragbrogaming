function CopyCalcCode() {
     const code = `<!DOCTYPE html>
<html>
<head>
<title>Goatzy Calculator</title>
<link rel="stylesheet" href="style.css">

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>Goatzy's Calc</title>
<link rel="icon" type="image/x-icon" href="images/blueglossygoat.png">
<link rel="stylesheet" href="style.css"> 

<meta property="og:title" content="Goatzy's Calc">

<meta property="og:description" content="Here lives another project of Goatzy, a literal calculator...">

<meta property="og:url" content="https://goatzy-codes.xyz">

<meta property="og:image" content="https://i.ibb.co/YBjLSt7/blueglossygoat.png">

<meta property="og:type" content="website">

<!-- Optional: Specify the site name -->
<meta property="og:site_name" content="Goatzy's Calculator">
</head>
<body>

    <div class="TopHeader">
        <h2 style="left: 5vh" id="MenuButton" onclick="DebugMenu()">☰</h2>
        <br>
        <span id="GoatzyCodesText">Goatzy Codes</span>
    
        <a href="index.html" id="OpenHome"><span>Home</span></a>
    </div>
    
    
    <div class="TheMenu">
        <h2>The Menu</h2>
        <hr id="CheckMenu">
        <div style="box-shadow: 1vh 1vh 2vh; border-radius: 2vh;">
            <label for="MusicInput">Music On/Off</label>
            <input id="MusicInput" type="checkbox">
        </div>
        <hr>
    
    </div>

    <style>
        .TheMenu {
    box-shadow: 2vh 2vh 3vh;
    background-color: white;
    padding: 2.5vh;
    border-radius: 2vh;
    left: 3vh;
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    margin: auto;
    margin-right: 60%;
    position: fixed;
    margin-top: 10%;
    z-index: 1000;
    align-items: center;
    text-align: center;
    padding: 10px;
    width: 30vh;
    visibility: hidden;
    transition: visibility 0.3s ease-in-out;
}
    </style>

<br><br><br><br><br><br><br>

<div id="calculator">
    <h1 id="CalculatorText">Calculator</h1>
    <input style="height: 50%;" id="display" readonly>
    <div id="keys">
        <button onclick="appendToDisplay('+')" style="font-size: large;">+</button>
        <button onclick="appendToDisplay('7')" style="font-size: large;">7</button>
        <button onclick="appendToDisplay('8')" style="font-size: large;">8</button>
        <button onclick="appendToDisplay('9')" style="font-size: large;">9</button>
        <button onclick="appendToDisplay('-')" style="font-size: large;">-</button>
        <button onclick="appendToDisplay('4')" style="font-size: large;">4</button>
        <button onclick="appendToDisplay('5')" style="font-size: large;">5</button>
        <button onclick="appendToDisplay('6')" style="font-size: large;">6</button>
        <button onclick="appendToDisplay('*')" style="font-size: large;">*</button>
        <button onclick="appendToDisplay('1')" style="font-size: large;">1</button>
        <button onclick="appendToDisplay('2')" style="font-size: large;">2</button>
        <button onclick="appendToDisplay('3')" style="font-size: large;">3</button>
        <button onclick="appendToDisplay('/')" style="font-size: large;">/</button>
        <button onclick="appendToDisplay('0')" style="font-size: large;">0</button>
        <button onclick="appendToDisplay('.')" style="font-size: large;">.</button>
        <button onclick="calculate()" style="font-size: large;">=</button>
        <button onclick="clearDisplay()" style="font-size: large;">C</button>
        <button onclick="copyToClipboard()" style="font-size: large;">Copy</button>
    </div>
</div>

<div class="CopyCode">
    <h1>Copy the code</h1>
    <h3 id="DisplayCode">Copies the entire code to your clipboard.</h3>
    <button style="margin-left: 50vh;" onclick="CopyCalcCode()" id="copyButton">Copy code</button>
</div>

<style>
@font-face {
    font-family: "Oswald";
    src: url('fonts/Oswald-VariableFont_wght.ttf') format('truetype');
    font-weight: 100 700;
    font-style: normal;
}

body {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    background: linear-gradient(rgb(0, 55, 255), rgb(231, 255, 226), rgb(0, 55, 255));
    min-height: 100vh;
    font-family: "Oswald";
}

.TopHeader {
    background-color: white;
    width: 100%;
    border: 2px solid gray;
    font-size: large;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 10px;
    height: 10vh;
    position: fixed;
    padding-left: 7vh;
}

#MenuButton:hover {
    color: rgb(0, 11, 171);
    cursor: pointer;
}

#GoatzyCodesText {
    font-size: xx-large;
    padding-left: 5vh;
}

#OpenHome {
    font-size: x-large;
    padding-left: 10vh;
    cursor: pointer;
}

#calculator {
    padding: 20px;
    font-size: 3rem;
    font-weight: bold;
    box-shadow: 5px 5px 15px;
    background: white;
    border-radius: 15px;
    max-width: 500px;
}

#keys {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
}

#CalculatorText {
    font-size: xxx-large;
    text-align: center;
}

#display {
    width: 90%;
    padding: 2vh;
    font-size: 2rem;
    border: 5px solid rgba(136, 211, 255, 0.668);
    background: rgb(240, 240, 240);
    font-family: Oswald;
}

.CopyCode {
    box-shadow: 2vh 2vh 3vh;
    margin: 10vh;
    background-color: white;
    border-radius: 2vh;
    padding: 5vh;
}
</style>

<script>

    // Counter buttons
    let numbercount = 0;
    
    document.getElementById("DecreaseButton").onclick = function () {
        numbercount--;
        document.getElementById("SetNumber").textContent = numbercount;
    };
    
    document.getElementById("ResetButton").onclick = function () {
        numbercount = 0;
        document.getElementById("SetNumber").textContent = numbercount;
    };
    
    document.getElementById("IncreaseButton").onclick = function () {
        numbercount++;
        document.getElementById("SetNumber").textContent = numbercount;
    };
    
    let maxNumber = 100;
    let minNumber = -100;
    
    document.getElementById("RandomButton").onclick = function () {
        let RandomNum = Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
        numbercount = RandomNum;
        document.getElementById("SetNumber").textContent = RandomNum;
    };
    
    // Calculator functions
    function appendToDisplay(value) {
        document.getElementById('display').value += value;
    }
    
    function clearDisplay() {
        document.getElementById('display').value = '';
    }
    
    function calculate() {
        try {
            const result = eval(document.getElementById('display').value);
            document.getElementById('display').value = result;
        } catch {
            document.getElementById('display').value = 'Error';
        }
    }
    
    function copyToClipboard() {
        const displayValue = document.getElementById('display').value;
        navigator.clipboard.writeText(displayValue).then(() => {
            alert('Copied to clipboard: ' + displayValue);
        });
    }
    
    </script>

    <script src="calculator.js"></script>

</body>
</html>`;

navigator.clipboard.writeText(code)
  alert("Code copied to clipboard!")

}

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


// Create the audio object for the elevator music
var ElevatorMusic = new Audio("/Sounds/elevatormusic.mp3");

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