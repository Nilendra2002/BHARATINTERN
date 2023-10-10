function convert(type) {
    const fahrenheitInput = document.getElementById('fahrenheitInput');
    const celsiusInput = document.getElementById('celsiusInput');
  
    if (type === 'fahrenheit') {
      const fahrenheit = parseFloat(fahrenheitInput.value);
      const celsius = (fahrenheit - 32) * (5 / 9);
      celsiusInput.value = celsius.toFixed(2);
    } else if (type === 'celsius') {
      const celsius = parseFloat(celsiusInput.value);
      const fahrenheit = (celsius * 9/5) + 32;
      fahrenheitInput.value = fahrenheit.toFixed(2);
    }
  }
  