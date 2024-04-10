let init = () => {
    document.getElementById("imageButton").addEventListener("click", klik_op_knop);
};

let klik_op_knop = () => {
    console.log("Ik heb geklikt");
    let input_box_waarde = document.getElementById("mijn_invul_box").value;
    console.log(input_box_waarde);

    if (input_box_waarde === "123") {
        // Wijzig de bron van de afbeelding met id "TheClue"
        document.getElementById("TheClue").src = "assets/Zoekglas.jpeg";
    } else {
        // Als de code niet overeenkomt, reset de bron van de afbeelding naar de standaard
        document.getElementById("TheClue").src = "assets/afdruk.png";
    }

};

document.addEventListener("DOMContentLoaded", () => {
    console.log("Webpagina geladen");
    init();
})