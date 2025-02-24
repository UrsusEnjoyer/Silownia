function obliczKalorie() {
    const waga = document.getElementById("waga").value;
    const wzrost = document.getElementById("wzrost").value;
    const wiek = document.getElementById("wiek").value;
    const plec = document.getElementById("plec").value;
    const aktywnosc = document.getElementById("aktywnosc").value;

    if (waga <= 0 || wzrost <= 0 || wiek <= 0) {
        alert("Proszę wprowadzić poprawne wartości.");
        return false;
    }

    let bmr;
    if (plec === "male") {
        bmr = 10 * waga + 6.25 * wzrost - 5 * wiek + 5; 
    } else {
        bmr = 10 * waga + 6.25 * wzrost - 5 * wiek - 161; 
    }

    const zapotrzebowanieKaloryczne = bmr * aktywnosc;

    document.getElementById("wynik").textContent = `Twoje dzienne zapotrzebowanie kaloryczne to: ${zapotrzebowanieKaloryczne.toFixed(2)} kcal`;
    return false;
}
