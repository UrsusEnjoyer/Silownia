function obliczBialko() {
    let masa = document.getElementById("masa").value;
    let cel = document.getElementById("cel").value;
    let aktywnosc = document.getElementById("aktywnosc").value;
    
    if (masa <= 0 || isNaN(masa)) {
        alert("Podaj prawidłową masę ciała!");
        return;
    }
// ale mi sie nie chce w tym javasciprite siedziec naprawde, ten jezyk to takie gówno tutaj nic nie działa tak jak chce, juz rozpierdala mnie ten jezyk naprawde
    // Oblicz zapotrzebowanie na białko (masa ciała * cel * aktywność fizyczna)
    let zapotrzebowanie = masa * cel * aktywnosc;
    document.getElementById("wynik").innerHTML = 
        `Twoje dzienne zapotrzebowanie na białko wynosi: <strong>${zapotrzebowanie.toFixed(2)}g</strong>`;
}
