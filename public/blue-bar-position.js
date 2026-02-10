/**
 * Automatyczne pozycjonowanie blue-bar
 * Ustawia pozycję niebieskiego tła na podstawie sekcji .cost-calculator
 */
(function() {
  function positionBlueBar() {
    const blueBar = document.querySelector('.blue-bar');
    const costCalc = document.querySelector('.cost-calculator');
    
    if (!blueBar || !costCalc) return;
    
    // Pobierz pozycję sekcji kosztów
    const rect = costCalc.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Ustaw pozycję blue-bar (30px nad sekcją)
    const topPosition = rect.top + scrollTop - 30;
    blueBar.style.top = topPosition + 'px';
    
    // Ustaw wysokość (wysokość sekcji + 60px marginesu)
    blueBar.style.height = (rect.height + 60) + 'px';
  }
  
  // Uruchom po załadowaniu strony
  window.addEventListener('load', positionBlueBar);
  
  // Uruchom po zmianie rozmiaru okna
  window.addEventListener('resize', positionBlueBar);
})();
