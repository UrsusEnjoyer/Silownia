function obliczBMI() {
    const weight = document.getElementById("waga").value;
    const height = document.getElementById("wzrost").value;

    if (!weight || !height || weight <= 0 || height <= 0) {
        alert("Proszę wprowadzić poprawne wartości.");
        return;
    }

    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);

    let resultText = `Twoje BMI to: ${bmi.toFixed(2)}`;

    if (bmi < 18.5) {
        resultText += " (Niedowaga)";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        resultText += " (Waga prawidłowa)";
    } else if (bmi >= 25 && bmi <= 29.9) {
        resultText += " (Nadwaga)";
    } else {
        resultText += " (Otyłość)";
    }

    document.getElementById("wynik").textContent = resultText;
}
