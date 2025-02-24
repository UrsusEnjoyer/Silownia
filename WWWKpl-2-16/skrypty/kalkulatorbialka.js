function obliczBialko() {
    let masa = document.getElementById("masa").value;
    let cel = document.getElementById("cel").value;
    let aktywnosc = document.getElementById("aktywnosc").value;
    
    if (masa <= 0 || isNaN(masa)) {
        alert("Podaj prawidłową masę ciała!");
        return;
    }

    // Oblicz zapotrzebowanie na białko (masa ciała * cel * aktywność fizyczna)
    let zapotrzebowanie = masa * cel * aktywnosc;
    document.getElementById("wynik").innerHTML = 
        `Twoje dzienne zapotrzebowanie na białko wynosi: <strong>${zapotrzebowanie.toFixed(2)}g</strong>`;
}
