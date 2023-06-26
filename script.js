function setTime() {
    let h1 = document.querySelector("h1");
    let date = new Date();

    h1.textContent = date.toLocaleTimeString();
}

setInterval(setTime, 1000);