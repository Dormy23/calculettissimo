function appendValue(value) {
    const display = document.getElementById('display');
    if (display.value === '0') {
      display.value = value; // Sostituisce lo 0 iniziale
    } else {
      display.value += value; // Aggiunge il valore al display
    }
  }
  