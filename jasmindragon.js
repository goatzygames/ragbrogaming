function scrollToJasminDragon() {
    document.getElementById("JasminDraggonScroll").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


function ResetLocalStorage() {
    localStorage.clear();
    location.reload();
}