function obliczWode() {
  
    let masa = document.getElementById("masa").value;
    let aktywnosc = document.getElementById("aktywnosc").value;

  
    if (masa <= 0 || isNaN(masa)) {
        document.getElementById("wynik").innerHTML = "Proszę podać poprawną masę ciała!";
        return;
    }

   
    let zapotrzebowanie = masa * aktywnosc; 
    let litry = (zapotrzebowanie / 1000).toFixed(2); 

    
    document.getElementById("wynik").innerHTML = `Twoje dzienne zapotrzebowanie na wodę wynosi <strong>${litry} L</strong>.`;
}
