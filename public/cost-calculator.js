/**
 * Kalkulator kosztów eksploatacji klimatyzatora
 * Automatycznie pobiera dane z tabeli spec-list i oblicza koszty
 * 
 * Użycie: Dodaj ten skrypt na końcu strony (przed </body>)
 * Wymagania: 
 *   - Tabela z class="spec-list" zawierająca "Pobór mocy - chłodzenie" i "Pobór mocy - grzanie"
 *   - Div z id="cost-content" gdzie mają być wyświetlone wyniki
 */

(function() {
  // === KONFIGURACJA (zmień tutaj cenę prądu) ===
  const CONFIG = {
    pricePerKWh: 3.00,        // Cena za 1 kWh w złotych
    tariffName: "taryfa G11", // Nazwa taryfy
    avgHoursPerDay: 8         // Średnia liczba godzin pracy dziennie
  };

  // === FUNKCJA POBIERAJĄCA WARTOŚĆ Z TABELI ===
  function getValueFromTable(rowName) {
    const table = document.querySelector('.spec-list');
    if (!table) {
      console.error('Nie znaleziono tabeli spec-list');
      return null;
    }

    const rows = table.querySelectorAll('tr');
    for (const row of rows) {
      const th = row.querySelector('th');
      const td = row.querySelector('td.val');
      
      if (th && td && th.textContent.trim().includes(rowName)) {
        // Pobierz wartość i zamień przecinek na kropkę, usuń "kW"
        let value = td.textContent.trim();
        value = value.replace(',', '.').replace(/\s*kW.*/, '');
        return parseFloat(value);
      }
    }
    
    console.error('Nie znaleziono wiersza:', rowName);
    return null;
  }

  // === GŁÓWNA FUNKCJA OBLICZAJĄCA KOSZTY ===
  function calculateCosts() {
    const costContent = document.getElementById('cost-content');
    if (!costContent) {
      console.error('Nie znaleziono elementu cost-content');
      return;
    }

    // Pobierz wartości z tabeli
    const powerCooling = getValueFromTable('Pobór mocy - chłodzenie');
    const powerHeating = getValueFromTable('Pobór mocy - grzanie');

    if (powerCooling === null || powerHeating === null) {
      costContent.innerHTML = '<p style="color: #c00;">Błąd: Nie można pobrać danych z tabeli parametrów.</p>';
      return;
    }

    // Oblicz koszty
    const costPerHourCooling = (powerCooling * CONFIG.pricePerKWh).toFixed(2);
    const costPerHourHeating = (powerHeating * CONFIG.pricePerKWh).toFixed(2);
    const costPerDayCooling = (costPerHourCooling * CONFIG.avgHoursPerDay).toFixed(2);
    const costPerDayHeating = (costPerHourHeating * CONFIG.avgHoursPerDay).toFixed(2);
    const costPerMonthCooling = (costPerDayCooling * 30).toFixed(2);
    const costPerMonthHeating = (costPerDayHeating * 30).toFixed(2);

    // Wstaw wyniki do HTML
    costContent.innerHTML = `
      <p style="margin: 0 0 15px 0; color: #8b5e00; font-size: 14px;">
        Przy obecnej cenie prądu <strong>${CONFIG.pricePerKWh} zł/kWh</strong> (${CONFIG.tariffName}):
      </p>
      <div class="cost-row" style="display: flex; justify-content: space-between; align-items: center;">
        <div class="cost-label">❄️ Koszt chłodzenia (godzina)</div>
        <div class="cost-value" style="text-align: right; min-width: 110px;">${costPerHourCooling} zł/h</div>
      </div>
      <div class="cost-row" style="display: flex; justify-content: space-between; align-items: center;">
        <div class="cost-label">🌡️ Koszt grzania (godzina)</div>
        <div class="cost-value" style="text-align: right; min-width: 110px;">${costPerHourHeating} zł/h</div>
      </div>
      <div class="cost-row" style="display: flex; justify-content: space-between; align-items: center;">
        <div class="cost-label">📅 Koszt chłodzenia (dzień - ${CONFIG.avgHoursPerDay}h)</div>
        <div class="cost-value" style="text-align: right; min-width: 110px;">${costPerDayCooling} zł/dzień</div>
      </div>
      <div class="cost-row" style="display: flex; justify-content: space-between; align-items: center;">
        <div class="cost-label">📅 Koszt grzania (dzień - ${CONFIG.avgHoursPerDay}h)</div>
        <div class="cost-value" style="text-align: right; min-width: 110px;">${costPerDayHeating} zł/dzień</div>
      </div>
      <div class="cost-row" style="display: flex; justify-content: space-between; align-items: center;">
        <div class="cost-label">📊 Koszt chłodzenia (miesiąc)</div>
        <div class="cost-value" style="text-align: right; min-width: 110px;">${costPerMonthCooling} zł/mc</div>
      </div>
      <div class="cost-row" style="display: flex; justify-content: space-between; align-items: center;">
        <div class="cost-label">📊 Koszt grzania (miesiąc)</div>
        <div class="cost-value" style="text-align: right; min-width: 110px;">${costPerMonthHeating} zł/mc</div>
      </div>
      <p style="margin: 15px 0 0 0; color: #8b5e00; font-size: 12px; opacity: 0.8;">
        * Pobór mocy: chłodzenie ${powerCooling} kW, grzanie ${powerHeating} kW (dane z tabeli parametrów).<br>
        * Rzeczywiste koszty mogą się różnić w zależności od warunków użytkowania.
      </p>
    `;
  }

  // === URUCHOM PO ZAŁADOWANIU STRONY ===
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', calculateCosts);
  } else {
    calculateCosts();
  }
})();
