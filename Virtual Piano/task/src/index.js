document.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "a":
            let audioA = new Audio("assets/A.mp3")
            audioA.play();
            break;
        case "s":
            let audioS = new Audio("assets/S.mp3")
            audioS.play();
            break;
        case "d":
            let audioD = new Audio("assets/D.mp3")
            audioD.play();
            break;
        case "f":
            let audioF = new Audio("assets/F.mp3")
            audioF.play();
            break;
        case "g":
            let audioG = new Audio("assets/G.mp3")
            audioG.play();
            break;
        case "h":
            let audioH = new Audio("assets/H.mp3")
            audioH.play();
            break;
        case "j":
            let audioJ = new Audio("assets/J.mp3")
            audioJ.play();
            break;
        case "w":
            let audioW = new Audio("assets/W.mp3")
            audioW.play();
            break;
        case "e":
            let audioE = new Audio("assets/E.mp3")
            audioE.play();
            break;
        case "t":
            let audioT = new Audio("assets/T.mp3")
            audioT.play();
            break;
        case "y":
            let audioY = new Audio("assets/Y.mp3")
            audioY.play();
            break;
        case "u":
            let audioU = new Audio("assets/U.mp3")
            audioU.play();
            break;
        default:
            console.log("wrong key")
    }
})