const cytaty = [
    "Sukces to suma niewielkich wysiłków powtarzanych każdego dnia. – Robert Collier",
    "Nie rezygnuj z celu tylko dlatego, że osiągnięcie go wymaga czasu. Czas i tak upłynie. – Earl Nightingale",
    "Twoje ograniczenia są tylko w twojej głowie. – Anonim",
    "Nie bój się porażki. Bój się bycia w tym samym miejscu za rok. – Anonim",
    "Najlepszy czas na działanie był wczoraj. Drugim najlepszym czasem jest teraz. – Anonim",
    "Jeśli możesz o czymś marzyć, możesz to osiągnąć. – Walt Disney",
    "Nie czekaj na idealny moment. Po prostu weź i działaj. – Anonim",
    "Nigdy się nie poddawaj, wielkie rzeczy wymagają czasu. – Anonim",
    "Nie porównuj się do innych. Porównuj się do osoby, którą byłeś wczoraj. – Anonim",
    "Wygrywa ten, kto wstaje jeden raz więcej, niż upada. – Vince Lombardi"
];

function losowyCytat() {
    const indeks = Math.floor(Math.random() * cytaty.length);
    document.getElementById("cytat").innerText = cytaty[indeks];
}


window.onload = losowyCytat;
