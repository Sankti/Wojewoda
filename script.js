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
        console.log("Wduszono przycisk.")
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
            contentH.innerHTML = "Opole";
            contentP1.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum numquam aut deserunt eius perferendis autem nihil, maxime quia hic recusandae fugit neque eos error possimus quis nemo accusamus voluptatem provident?";
            contentP2.innerHTML = "Opis Powiatu.";
        case "namyslowski":
            contentH.innerHTML = "Powiat Namysłowski";
            contentP1.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum numquam aut deserunt eius perferendis autem nihil, maxime quia hic recusandae fugit neque eos error possimus quis nemo accusamus voluptatem provident?";
            contentP2.innerHTML = "Opis Powiatu.";
        default:
            contentH.innerHTML = "No selection!";
            contentP1.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum numquam aut deserunt eius perferendis autem nihil, maxime quia hic recusandae fugit neque eos error possimus quis nemo accusamus voluptatem provident?";
            contentP2.innerHTML = "Opis Powiatu.";
    }
}

select = (selection) => {
    display = selection;
    switchDisplay();
}

opolski = document.querySelector("#opolski");
namyslowski = document.querySelector("#namyslowski");

opolski.addEventListener("hover", select("opolski"));
namyslowski.addEventListener("hover", select("namyslowski"));