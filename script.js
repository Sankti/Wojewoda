clearElement = (elementID) => {
    document.getElementById(elementID).innerHTML = "";
}

buttonSection = document.getElementById("button-section");

makePlayButton = () => {
    let playButton = document.createElement("div");
        playButton.classList.add("button-round");
        playButton.innerHTML = "Przejdź dalej";
        document.getElementById("button-section").appendChild(playButton);
    
    pushButton = () => {
        console.log("Wduszono przycisk.");
    }
    playButton.addEventListener("click", pushButton);
}

makePlayButton();

// Right Sidebar
contentH = document.getElementById("content-h");
contentP1 = document.getElementById("content-p1");
contentP2 = document.getElementById("content-p2");

let display = "default";

switchDisplay = () => {
    switch (display) {
        case "opolski":
            contentH.innerHTML = "Powiat Opolski";
            contentP1.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum numquam aut deserunt eius perferendis autem nihil, maxime quia hic recusandae fugit neque eos error possimus quis nemo accusamus voluptatem provident?";
            contentP2.innerHTML = "Opis Powiatu.";
            break
        case "namyslowski":
            contentH.innerHTML = "Powiat Namysłowski";
            contentP1.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum numquam aut deserunt eius perferendis autem nihil, maxime quia hic recusandae fugit neque eos error possimus quis nemo accusamus voluptatem provident?";
            contentP2.innerHTML = "Opis Powiatu.";
            break
        case "kluczborski":
            contentH.innerHTML = "Powiat Kluczborski";
            contentP1.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum numquam aut deserunt eius perferendis autem nihil, maxime quia hic recusandae fugit neque eos error possimus quis nemo accusamus voluptatem provident?";
            contentP2.innerHTML = "Opis Powiatu.";
            break
        default:
            contentH.innerHTML = "No selection!";
            contentP1.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum numquam aut deserunt eius perferendis autem nihil, maxime quia hic recusandae fugit neque eos error possimus quis nemo accusamus voluptatem provident?";
            contentP2.innerHTML = "Opis Powiatu.";
            break
    }
}

countySelect = (county) => {
    display = county;
    switchDisplay();
}

// Callback functions for all counties
selectOpolski = () => {
    countySelect("opolski");
}
selectNamyslowski = () => {
    countySelect("namyslowski");
}
selectKluczborski = () => {
    countySelect("kluczborski");
}

function stopLink(event) {
    event.preventDefault();
}

const opolski = document.querySelector("#opolski");
const namyslowski = document.querySelector("#namyslowski");
const kluczborski = document.querySelector("#kluczborski");

// Preventing default events
opolski.addEventListener('click', stopLink);
namyslowski.addEventListener('click', stopLink);
kluczborski.addEventListener('click', stopLink);

// Setting new events
opolski.addEventListener("click", selectOpolski);
namyslowski.addEventListener("click", selectNamyslowski);
kluczborski.addEventListener("click", selectKluczborski);