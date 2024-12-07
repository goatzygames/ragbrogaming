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


