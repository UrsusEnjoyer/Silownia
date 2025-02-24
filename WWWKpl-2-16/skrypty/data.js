// Przykładowa funkcja, która ustawia datę
function updateDate() {
    const currentDate = new Date();
    const dateString = currentDate.toLocaleDateString('pl-PL', {
        
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    document.getElementById('current-date').textContent = dateString;
}

// Uruchomienie funkcji na stronie
updateDate();