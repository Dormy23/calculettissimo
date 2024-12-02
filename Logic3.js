function calculate() {
    const display = document.getElementById('display');
    try {
      display.value = eval(display.value); // Calcola l'espressione
    } catch {
      display.value = 'Errore'; // Mostra "Errore" in caso di input non valido
    }
  }
  