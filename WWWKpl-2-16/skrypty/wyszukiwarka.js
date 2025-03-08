// Sprawdza, czy jesteśmy w głównym katalogu, czy w folderze "teksty"
const isInsideTekstyFolder = window.location.pathname.includes("/teksty/");

// Dynamiczne ustawienie prefiksu dla ścieżek
const pathPrefix = isInsideTekstyFolder ? "./" : "./teksty/";

const searchTerms = {
    "cytaty": pathPrefix + "cytaty.html",
    "dieta": pathPrefix + "dieta.html",
    "kalkulator kalorii": pathPrefix + "kalkulatorkalori.html",
    "kalkulator białka": pathPrefix + "kalkulatorbialka.html",
    "kalkulator bmi": pathPrefix + "kalkulatorbmi.html",
    "kalkulator wody": pathPrefix + "kalkulatorwody.html",
    "kalkulatory": pathPrefix + "kalkulatory.html",
    "motywacja": pathPrefix + "motywacjaadyscyplina.html",
    "dyscyplina": pathPrefix + "motywacjaadyscyplina.html",
    "sen": pathPrefix + "regeneracjaisen.html",
    "regeneracja": pathPrefix + "regeneracjaisen.html",
    "skorowidz": pathPrefix + "skorowidz.html",
    "trening klatki": pathPrefix + "treningklatki.html",
    "klatka piersiowa": pathPrefix + "treningklatki.html",
    "trening barków": pathPrefix + "treningbarkow.html",
    "barki": pathPrefix + "treningbarkow.html",
    "trening bicepsa": pathPrefix + "treningbicepsa.html",
    "biceps": pathPrefix + "treningbicepsa.html",
    "trening tricepsa": pathPrefix + "treningtricepsu.html",
    "triceps": pathPrefix + "treningtricepsu.html",
    "trening nóg": pathPrefix + "treningnogibrzucha.html",
    "nogi": pathPrefix + "treningnogibrzucha.html",
    "trening brzucha": pathPrefix + "treningnogibrzucha.html",
    "brzuch": pathPrefix + "treningnogibrzucha.html",
    "trening pleców": pathPrefix + "treningplecow.html",
    "plecy": pathPrefix + "treningplecow.html"
};




// Funkcja wyszukiwania
function searchSite() {
    const input = document.getElementById("search-input");
    const query = input.value.trim().toLowerCase();
    
    if (query === "") {
        input.classList.add("error");
        setTimeout(() => input.classList.remove("error"), 1000);
        return;
    }

    for (let key in searchTerms) {
        if (query.includes(key)) {
            window.location.href = searchTerms[key];
            return;
        }
    }
    
    alert("Nie znaleziono wyników. Spróbuj innych słów kluczowych.");
}

// Obsługa Entera
function handleKeyPress(event) {
    if (event.key === "Enter") {
        searchSite();
    }
}

// Funkcja podpowiedzi
function showSuggestions(event) {
    const input = event.target.value.toLowerCase();
    const suggestionsList = document.getElementById("suggestions-list");
    suggestionsList.innerHTML = ""; // Czyścimy poprzednie sugestie

    if (input.length === 0) {
        suggestionsList.style.display = "none";
        return;
    }

    const filteredTerms = Object.keys(searchTerms).filter(term => term.includes(input));

    if (filteredTerms.length > 0) {
        suggestionsList.style.display = "block";
        filteredTerms.forEach(term => {
            const listItem = document.createElement("li");
            listItem.textContent = term;
            listItem.onclick = function () {
                document.getElementById("search-input").value = term;
                suggestionsList.style.display = "none";
            };
            suggestionsList.appendChild(listItem);
        });
    } else {
        suggestionsList.style.display = "none";
    }
}

// Ukrywanie podpowiedzi po kliknięciu poza wyszukiwarką
document.addEventListener("click", function(event) {
    if (!event.target.closest(".search-container")) {
        document.getElementById("suggestions-list").style.display = "none";
    }
});
