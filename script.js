function on() {
    const turnOn = document.getElementById("mobileoverlay");
    turnOn.style.display = "block";
    const overflow = document.querySelector("body");
    overflow.style.overflow = "hidden";
}

function off() {
    const turnOff = document.getElementById("mobileoverlay");
    turnOff.style.display = "none";
    const overflow = document.querySelector("body");
    overflow.style.overflow = "";
}