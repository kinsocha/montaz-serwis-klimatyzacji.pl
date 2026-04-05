/**
 * Generator stron produktowych Haier
 * Uruchom: node generate-haier.cjs
 */
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, 'public', 'haier');

// ============================================================
// DANE WSZYSTKICH MODELI HAIER
// ============================================================

const HAIER_SERIES = [
  // ─── JADE PLUS ───
  {
    series: "Jade Plus",
    slug: "jade-plus",
    tagline: "Klimatyzator i oczyszczacz powietrza",
    subtitle: "Czyste powietrze i doskonała wydajność",
    colors: ["Biały"],
    specUrl: "https://haier-ac.pl/produkt/klimatyzator-scienny-jade-plus/",
    features: [
      { icon: "🔬", title: "Filtr IFD", desc: "Zaawansowany filtr IFD o skuteczności porównywalnej z profesjonalnymi oczyszczaczami powietrza." },
      { icon: "🔇", title: "Ultra cicha praca", desc: "Zaledwie 15 dB(A) w trybie cichym – niemal bezgłośna praca." },
      { icon: "❄️", title: "Grzanie do −20°C", desc: "Efektywne ogrzewanie nawet przy bardzo niskiej temperaturze zewnętrznej." },
      { icon: "📶", title: "Wi-Fi w standardzie", desc: "Sterowanie przez aplikację hOn ze smartfona lub tabletu." },
      { icon: "🧹", title: "Self Clean", desc: "Automatyczne czyszczenie wymiennika eliminujące bakterie i pleśń." },
      { icon: "⚡", title: "Klasa A+++/A+++", desc: "Najwyższa klasa energetyczna w chłodzeniu i grzaniu." },
      { icon: "🌬️", title: "3D Airflow", desc: "Automatyczna regulacja żaluzji w pionie i poziomie." },
      { icon: "🏠", title: "I-FEEL", desc: "Czujnik w pilocie mierzy temperaturę wokół użytkownika." }
    ],
    variants: [
      {
        power: "2,6", powerUrl: "2-6kw", area: "do 25 m²", areaRange: "0–25",
        indexIndoor: "AS25S2SJ1FA-3", indexOutdoor: "1U25MECFRA-3",
        coolingCapacity: "2,6 kW", heatingCapacity: "3,2 kW",
        energyCooling: "A+++", energyHeating: "A+++",
        seer: "8,75", scop: "5,10",
        powerCooling: "0,57 kW", powerHeating: "0,66 kW",
        airflow: "550 m³/h",
        noiseIndoor: "15 – 36 dB(A)", noiseOutdoor: "48 dB(A)",
        coolingRange: "−10°C do 43°C", heatingRange: "−20°C do 24°C",
        dimIndoor: "923 × 320 × 215 mm", dimOutdoor: "800 × 553 × 275 mm",
        price: "6 499"
      },
      {
        power: "3,5", powerUrl: "3-5kw", area: "25 – 35 m²", areaRange: "25–35",
        indexIndoor: "AS35JBJHRA-W", indexOutdoor: "1U35JEJFRA",
        coolingCapacity: "3,5 kW", heatingCapacity: "4,2 kW",
        energyCooling: "A+++", energyHeating: "A+++",
        seer: "8,75", scop: "5,10",
        powerCooling: "0,79 kW", powerHeating: "0,89 kW",
        airflow: "600 m³/h",
        noiseIndoor: "16 – 37 dB(A)", noiseOutdoor: "49 dB(A)",
        coolingRange: "−10°C do 43°C", heatingRange: "−20°C do 24°C",
        dimIndoor: "923 × 320 × 215 mm", dimOutdoor: "800 × 553 × 275 mm",
        price: "6 999"
      },
      {
        power: "5,2", powerUrl: "5-2kw", area: "35 – 50 m²", areaRange: "35–50",
        indexIndoor: "AS50S2SJ1FA-3", indexOutdoor: "1U50JECFRA-3",
        coolingCapacity: "5,2 kW", heatingCapacity: "6,0 kW",
        energyCooling: "A++", energyHeating: "A++",
        seer: "7,50", scop: "4,60",
        powerCooling: "1,40 kW", powerHeating: "1,50 kW",
        airflow: "900 m³/h",
        noiseIndoor: "28 – 41 dB(A)", noiseOutdoor: "51 dB(A)",
        coolingRange: "−10°C do 43°C", heatingRange: "−20°C do 24°C",
        dimIndoor: "1050 × 350 × 235 mm", dimOutdoor: "820 × 614 × 338 mm",
        price: "8 499"
      }
    ]
  },

  // ─── EXPERT PLUS ───
  {
    series: "Expert Plus",
    slug: "expert-plus",
    tagline: "Sterylizacja UV-C PRO i ultra cicha praca",
    subtitle: "Najcichszy klimatyzator z zaawansowaną sterylizacją",
    colors: ["White Matt", "Black Matt"],
    specUrl: "https://haier-ac.pl/produkt/klimatyzator-scienny-expert-plus/",
    features: [
      { icon: "🔬", title: "UV-C PRO", desc: "Zaawansowana sterylizacja UV-C neutralizująca 99,99% wirusów i bakterii." },
      { icon: "🔇", title: "16 dB(A)", desc: "Najcichsza praca w ofercie Haier – idealny do sypialni i biura." },
      { icon: "🧹", title: "Self Clean", desc: "Automatyczne czyszczenie wymiennika ciepła zapobiegające rozwojowi pleśni." },
      { icon: "🌡️", title: "56°C Steri Clean", desc: "Dezynfekcja termiczna wymiennika w temperaturze 56°C." },
      { icon: "📶", title: "Wi-Fi + hOn", desc: "Sterowanie przez aplikację hOn – harmonogramy, monitoring zużycia." },
      { icon: "🌬️", title: "Coanda Plus", desc: "Nawiew wzdłuż sufitu – równomierne rozprowadzanie powietrza." },
      { icon: "❄️", title: "Grzanie do −20°C", desc: "Efektywne ogrzewanie nawet przy −20°C na zewnątrz." },
      { icon: "🧰", title: "Łatwy serwis", desc: "Konstrukcja umożliwiająca szybki demontaż i czyszczenie." }
    ],
    variants: [
      {
        power: "2,8", powerUrl: "2-8kw", area: "do 25 m²", areaRange: "0–25",
        indexIndoor: "AS25XCAHRA", indexOutdoor: "1U25S2SM1FA",
        coolingCapacity: "2,8 kW", heatingCapacity: "3,2 kW",
        energyCooling: "A+++", energyHeating: "A++",
        seer: "8,80", scop: "4,80",
        powerCooling: "0,65 kW", powerHeating: "0,76 kW",
        airflow: "730 m³/h",
        noiseIndoor: "16 – 39 dB(A)", noiseOutdoor: "48 dB(A)",
        coolingRange: "−20°C do 43°C", heatingRange: "−20°C do 24°C",
        dimIndoor: "895 × 313 × 236 mm", dimOutdoor: "800 × 553 × 275 mm",
        price: "6 299"
      },
      {
        power: "3,5", powerUrl: "3-5kw", area: "25 – 35 m²", areaRange: "25–35",
        indexIndoor: "AS35XCAHRA", indexOutdoor: "1U35S2SM1FA",
        coolingCapacity: "3,5 kW", heatingCapacity: "4,2 kW",
        energyCooling: "A+++", energyHeating: "A++",
        seer: "8,50", scop: "4,75",
        powerCooling: "0,88 kW", powerHeating: "1,04 kW",
        airflow: "800 m³/h",
        noiseIndoor: "17 – 40 dB(A)", noiseOutdoor: "49 dB(A)",
        coolingRange: "−20°C do 43°C", heatingRange: "−20°C do 24°C",
        dimIndoor: "895 × 313 × 236 mm", dimOutdoor: "800 × 553 × 275 mm",
        price: "6 799"
      },
      {
        power: "5,0", powerUrl: "5-0kw", area: "35 – 50 m²", areaRange: "35–50",
        indexIndoor: "AS50XCAHRA", indexOutdoor: "1U50S2SJ2FA",
        coolingCapacity: "5,0 kW", heatingCapacity: "6,0 kW",
        energyCooling: "A++", energyHeating: "A++",
        seer: "6,60", scop: "4,30",
        powerCooling: "1,47 kW", powerHeating: "1,51 kW",
        airflow: "880 m³/h",
        noiseIndoor: "29 – 45 dB(A)", noiseOutdoor: "50 dB(A)",
        coolingRange: "−20°C do 43°C", heatingRange: "−20°C do 24°C",
        dimIndoor: "895 × 313 × 236 mm", dimOutdoor: "820 × 643 × 305 mm",
        price: "8 299"
      }
    ]
  },

  // ─── ARCTIC EXPERT PLUS ───
  {
    series: "Arctic Expert Plus",
    slug: "arctic-expert-plus",
    tagline: "Specjalista od grzania do −30°C",
    subtitle: "Maksymalna wydajność grzewcza w ekstremalnych warunkach",
    colors: ["Biały"],
    specUrl: "https://haier-ac.pl/produkt/klimatyzator-scienny-arctic-expert-plus/",
    features: [
      { icon: "❄️", title: "Grzanie do −30°C", desc: "Ekstremalnie wydajne grzanie nawet przy −30°C na zewnątrz." },
      { icon: "🔬", title: "UV-C PRO", desc: "Sterylizacja UV-C eliminująca bakterie, wirusy i mikroorganizmy." },
      { icon: "⚡", title: "A+++/A+++", desc: "Najwyższa klasa energetyczna w chłodzeniu i grzaniu." },
      { icon: "🔇", title: "18 dB(A)", desc: "Bardzo cicha praca jednostki wewnętrznej." },
      { icon: "🧹", title: "Self Clean", desc: "Automatyczne czyszczenie wymiennika ciepła." },
      { icon: "📶", title: "Wi-Fi w standardzie", desc: "Sterowanie przez aplikację hOn." },
      { icon: "🌡️", title: "Grzałka tacy ociekowej", desc: "Zapobiega zamarzaniu kondensatu przy niskich temperaturach." },
      { icon: "🏠", title: "SCOP 5,1", desc: "Wyjątkowo wysoka efektywność grzewcza." }
    ],
    variants: [
      {
        power: "2,6", powerUrl: "2-6kw", area: "do 25 m²", areaRange: "0–25",
        indexIndoor: "AS25XCHHRA-NR", indexOutdoor: "1U25KEHFRA-NR",
        coolingCapacity: "2,6 kW", heatingCapacity: "3,2 kW",
        energyCooling: "A+++", energyHeating: "A+++",
        seer: "8,50", scop: "5,10",
        powerCooling: "0,58 kW", powerHeating: "0,76 kW",
        airflow: "750 m³/h",
        noiseIndoor: "18 – 42 dB(A)", noiseOutdoor: "49 dB(A)",
        coolingRange: "−20°C do 43°C", heatingRange: "−30°C do 24°C",
        dimIndoor: "895 × 313 × 236 mm", dimOutdoor: "820 × 643 × 305 mm",
        price: "7 499"
      },
      {
        power: "3,5", powerUrl: "3-5kw", area: "25 – 35 m²", areaRange: "25–35",
        indexIndoor: "AS35XCHHRA-NR", indexOutdoor: "1U35KEHFRA-NR",
        coolingCapacity: "3,5 kW", heatingCapacity: "4,2 kW",
        energyCooling: "A+++", energyHeating: "A+++",
        seer: "8,50", scop: "5,10",
        powerCooling: "0,82 kW", powerHeating: "1,00 kW",
        airflow: "810 m³/h",
        noiseIndoor: "18 – 43 dB(A)", noiseOutdoor: "50 dB(A)",
        coolingRange: "−20°C do 43°C", heatingRange: "−30°C do 24°C",
        dimIndoor: "895 × 313 × 236 mm", dimOutdoor: "820 × 643 × 305 mm",
        price: "7 999"
      }
    ]
  },

  // ─── FLEXIS PLUS ───
  {
    series: "Flexis Plus",
    slug: "flexis-plus",
    tagline: "Bestseller – design i wydajność",
    subtitle: "Elegancja, oszczędność i komfort w każdym wnętrzu",
    colors: ["White Matt", "Black Matt", "White Shine", "Silver Shine"],
    specUrl: "https://haier-ac.pl/produkt/klimatyzator-scienny-flexis-plus-white-matt/",
    features: [
      { icon: "🎨", title: "4 kolory", desc: "White Matt, Black Matt, White Shine i Silver Shine do wyboru." },
      { icon: "🔬", title: "UV-C PRO", desc: "Sterylizacja UV-C neutralizująca bakterie i wirusy w przepływającym powietrzu." },
      { icon: "🔇", title: "16 dB(A)", desc: "Bardzo cicha praca – komfort w każdym pomieszczeniu." },
      { icon: "👁️", title: "Eco Sensor", desc: "Czujnik obecności wykrywający ludzi do 8m i optymalizujący nawiew." },
      { icon: "📶", title: "Wi-Fi + hOn", desc: "Sterowanie przez aplikację hOn – harmonogramy i monitoring." },
      { icon: "🧹", title: "Self Clean", desc: "Automatyczne czyszczenie wymiennika ciepła." },
      { icon: "❄️", title: "Grzanie do −20°C", desc: "Efektywne ogrzewanie nawet przy −20°C na zewnątrz." },
      { icon: "🌬️", title: "3D Airflow", desc: "Automatyczna regulacja nawiewu w pionie i poziomie." }
    ],
    variants: [
      {
        power: "2,6", powerUrl: "2-6kw", area: "do 25 m²", areaRange: "0–25",
        indexIndoor: "AS25S2SF1FA-WH", indexOutdoor: "1U25S2SM1FA-2",
        coolingCapacity: "2,6 kW", heatingCapacity: "3,2 kW",
        energyCooling: "A+++", energyHeating: "A++",
        seer: "8,50", scop: "4,60",
        powerCooling: "0,65 kW", powerHeating: "0,80 kW",
        airflow: "600 m³/h",
        noiseIndoor: "16 – 38 dB(A)", noiseOutdoor: "47 dB(A)",
        coolingRange: "−20°C do 43°C", heatingRange: "−20°C do 24°C",
        dimIndoor: "856 × 300 × 197 mm", dimOutdoor: "800 × 553 × 275 mm",
        price: "5 499"
      },
      {
        power: "3,5", powerUrl: "3-5kw", area: "25 – 35 m²", areaRange: "25–35",
        indexIndoor: "AS35S2SF1FA-WH", indexOutdoor: "1U35S2SM1FA-2",
        coolingCapacity: "3,5 kW", heatingCapacity: "4,2 kW",
        energyCooling: "A+++", energyHeating: "A++",
        seer: "8,50", scop: "4,60",
        powerCooling: "0,88 kW", powerHeating: "1,10 kW",
        airflow: "650 m³/h",
        noiseIndoor: "17 – 39 dB(A)", noiseOutdoor: "48 dB(A)",
        coolingRange: "−20°C do 43°C", heatingRange: "−20°C do 24°C",
        dimIndoor: "856 × 300 × 197 mm", dimOutdoor: "860 × 553 × 275 mm",
        price: "5 999"
      },
      {
        power: "5,2", powerUrl: "5-2kw", area: "35 – 50 m²", areaRange: "35–50",
        indexIndoor: "AS50S2SF1FA-WH", indexOutdoor: "1U50S2SJ2FA-2",
        coolingCapacity: "5,2 kW", heatingCapacity: "6,0 kW",
        energyCooling: "A++", energyHeating: "A++",
        seer: "7,20", scop: "4,60",
        powerCooling: "1,44 kW", powerHeating: "1,50 kW",
        airflow: "900 m³/h",
        noiseIndoor: "28 – 45 dB(A)", noiseOutdoor: "50 dB(A)",
        coolingRange: "−20°C do 43°C", heatingRange: "−20°C do 24°C",
        dimIndoor: "999 × 323 × 225 mm", dimOutdoor: "905 × 643 × 305 mm",
        price: "7 499"
      },
      {
        power: "7,0", powerUrl: "7-0kw", area: "50 – 80 m²", areaRange: "50–80",
        indexIndoor: "AS71S2SF1FA-WH", indexOutdoor: "1U71S2SR2FA",
        coolingCapacity: "7,0 kW", heatingCapacity: "8,0 kW",
        energyCooling: "A++", energyHeating: "A+",
        seer: "7,10", scop: "4,00",
        powerCooling: "2,17 kW", powerHeating: "2,16 kW",
        airflow: "1100 m³/h",
        noiseIndoor: "33 – 47 dB(A)", noiseOutdoor: "57 dB(A)",
        coolingRange: "−20°C do 43°C", heatingRange: "−20°C do 24°C",
        dimIndoor: "1115 × 343 × 235 mm", dimOutdoor: "986 × 700 × 340 mm",
        price: "9 499"
      }
    ]
  },

  // ─── NORDIC FLEXIS PLUS ───
  {
    series: "Nordic Flexis Plus",
    slug: "nordic-flexis-plus",
    tagline: "Flexis z grzaniem do −25°C",
    subtitle: "Bestseller wzbogacony o grzałkę tacy ociekowej",
    colors: ["White Matt", "Black Matt", "White Shine", "Silver Shine"],
    specUrl: "https://haier-ac.pl/produkt/klimatyzator-scienny-nordic-flexis-plus-white-matt/",
    features: [
      { icon: "❄️", title: "Grzanie do −25°C", desc: "Grzałka tacy ociekowej zapewnia grzanie nawet przy −25°C." },
      { icon: "🎨", title: "4 kolory", desc: "White Matt, Black Matt, White Shine i Silver Shine." },
      { icon: "🔬", title: "UV-C PRO", desc: "Sterylizacja UV-C eliminująca bakterie i wirusy." },
      { icon: "🔇", title: "16 dB(A)", desc: "Bardzo cicha praca jednostki wewnętrznej." },
      { icon: "👁️", title: "Eco Sensor", desc: "Inteligentny czujnik obecności optymalizujący zużycie energii." },
      { icon: "📶", title: "Wi-Fi + hOn", desc: "Pełna kontrola przez aplikację mobilną." },
      { icon: "🧹", title: "Self Clean", desc: "Automatyczne czyszczenie wymiennika ciepła." },
      { icon: "🌬️", title: "3D Airflow", desc: "Równomierny nawiew w każdym kierunku." }
    ],
    variants: [
      {
        power: "2,6", powerUrl: "2-6kw", area: "do 25 m²", areaRange: "0–25",
        indexIndoor: "AS25S2SF1FA-WH", indexOutdoor: "1U25MEHFRA-1",
        coolingCapacity: "2,6 kW", heatingCapacity: "3,2 kW",
        energyCooling: "A+++", energyHeating: "A++",
        seer: "8,50", scop: "4,00",
        powerCooling: "0,65 kW", powerHeating: "0,80 kW",
        airflow: "600 m³/h",
        noiseIndoor: "16 – 38 dB(A)", noiseOutdoor: "47 dB(A)",
        coolingRange: "−20°C do 43°C", heatingRange: "−25°C do 24°C",
        dimIndoor: "856 × 300 × 197 mm", dimOutdoor: "860 × 553 × 275 mm",
        price: "5 999"
      },
      {
        power: "3,5", powerUrl: "3-5kw", area: "25 – 35 m²", areaRange: "25–35",
        indexIndoor: "AS35S2SF1FA-WH", indexOutdoor: "1U35MEHFRA-1",
        coolingCapacity: "3,5 kW", heatingCapacity: "4,2 kW",
        energyCooling: "A+++", energyHeating: "A++",
        seer: "8,50", scop: "4,60",
        powerCooling: "0,88 kW", powerHeating: "1,10 kW",
        airflow: "650 m³/h",
        noiseIndoor: "17 – 39 dB(A)", noiseOutdoor: "48 dB(A)",
        coolingRange: "−20°C do 43°C", heatingRange: "−25°C do 24°C",
        dimIndoor: "856 × 300 × 197 mm", dimOutdoor: "800 × 553 × 275 mm",
        price: "6 499"
      },
      {
        power: "5,2", powerUrl: "5-2kw", area: "35 – 50 m²", areaRange: "35–50",
        indexIndoor: "AS50S2SF1FA-WH", indexOutdoor: "1U50KEFFRA-1",
        coolingCapacity: "5,2 kW", heatingCapacity: "5,2 kW",
        energyCooling: "A++", energyHeating: "A++",
        seer: "7,20", scop: "4,60",
        powerCooling: "1,44 kW", powerHeating: "1,50 kW",
        airflow: "900 m³/h",
        noiseIndoor: "28 – 45 dB(A)", noiseOutdoor: "51 dB(A)",
        coolingRange: "−20°C do 43°C", heatingRange: "−25°C do 24°C",
        dimIndoor: "999 × 323 × 225 mm", dimOutdoor: "905 × 642 × 305 mm",
        price: "7 999"
      }
    ]
  },

  // ─── SERENE PLUS ───
  {
    series: "Serene Plus",
    slug: "serene-plus",
    tagline: "Nowość 2025 – elegancja i cisza",
    subtitle: "Nowoczesny design z najwyższą efektywnością",
    colors: ["White Matt", "Black Matt"],
    specUrl: "https://haier-ac.pl/produkt/klimatyzator-scienny-serene-plus-white-matt/",
    features: [
      { icon: "🎨", title: "2 kolory matt", desc: "Elegancki White Matt i Black Matt – matowe wykończenie." },
      { icon: "🔬", title: "UV-C Plus", desc: "Sterylizacja UV-C eliminująca wirusy, bakterie i pleśnie." },
      { icon: "🔇", title: "19 dB(A)", desc: "Bardzo cicha praca – komfort w sypialni i biurze." },
      { icon: "⚡", title: "SEER do 8,80", desc: "Wyjątkowa efektywność energetyczna – klasa A+++." },
      { icon: "📶", title: "Wi-Fi + hOn", desc: "Sterowanie przez aplikację mobilną z dowolnego miejsca." },
      { icon: "🧹", title: "Self Clean", desc: "Automatyczne czyszczenie wymiennika ciepła." },
      { icon: "❄️", title: "Grzanie do −20°C", desc: "Praca grzewcza nawet przy −20°C na zewnątrz." },
      { icon: "🌬️", title: "3D Airflow", desc: "Równomierny nawiew powietrza w każdym kierunku." }
    ],
    variants: [
      {
        power: "2,6", powerUrl: "2-6kw", area: "do 25 m²", areaRange: "0–25",
        indexIndoor: "AS25SBBHRA-MW", indexOutdoor: "1U25DEBFRA-SH",
        coolingCapacity: "2,6 kW", heatingCapacity: "3,0 kW",
        energyCooling: "A+++", energyHeating: "A++",
        seer: "8,80", scop: "3,70",
        powerCooling: "0,65 kW", powerHeating: "0,81 kW",
        airflow: "610 m³/h",
        noiseIndoor: "19 – 38 dB(A)", noiseOutdoor: "49 dB(A)",
        coolingRange: "−20°C do 50°C", heatingRange: "−20°C do 24°C",
        dimIndoor: "812 × 296 × 203 mm", dimOutdoor: "753 × 549 × 275 mm",
        price: "5 499"
      },
      {
        power: "3,5", powerUrl: "3-5kw", area: "25 – 35 m²", areaRange: "25–35",
        indexIndoor: "AS35SBBHRA-MW", indexOutdoor: "1U35DEBFRA-SH",
        coolingCapacity: "3,5 kW", heatingCapacity: "3,7 kW",
        energyCooling: "A+++", energyHeating: "A++",
        seer: "8,51", scop: "4,60",
        powerCooling: "0,88 kW", powerHeating: "1,05 kW",
        airflow: "630 m³/h",
        noiseIndoor: "20 – 39 dB(A)", noiseOutdoor: "51 dB(A)",
        coolingRange: "−20°C do 50°C", heatingRange: "−20°C do 24°C",
        dimIndoor: "812 × 296 × 203 mm", dimOutdoor: "753 × 549 × 275 mm",
        price: "5 999"
      },
      {
        power: "5,3", powerUrl: "5-3kw", area: "35 – 50 m²", areaRange: "35–50",
        indexIndoor: "AS50SDBHRA-MW", indexOutdoor: "1U50KEBFRA-SH",
        coolingCapacity: "5,3 kW", heatingCapacity: "5,9 kW",
        energyCooling: "A+++", energyHeating: "A++",
        seer: "8,51", scop: "4,60",
        powerCooling: "1,45 kW", powerHeating: "1,50 kW",
        airflow: "800 m³/h",
        noiseIndoor: "31 – 44 dB(A)", noiseOutdoor: "55 dB(A)",
        coolingRange: "−20°C do 50°C", heatingRange: "−20°C do 24°C",
        dimIndoor: "983 × 322 × 221 mm", dimOutdoor: "820 × 642 × 306 mm",
        price: "7 999"
      },
      {
        power: "7,1", powerUrl: "7-1kw", area: "50 – 80 m²", areaRange: "50–80",
        indexIndoor: "AS71SEPHRA-MW", indexOutdoor: "1U71WEPFRA-SH",
        coolingCapacity: "7,1 kW", heatingCapacity: "7,4 kW",
        energyCooling: "A+++", energyHeating: "A++",
        seer: "8,50", scop: "4,60",
        powerCooling: "1,97 kW", powerHeating: "1,95 kW",
        airflow: "1060 m³/h",
        noiseIndoor: "27 – 48 dB(A)", noiseOutdoor: "57 dB(A)",
        coolingRange: "−20°C do 50°C", heatingRange: "−20°C do 24°C",
        dimIndoor: "1119 × 349 × 246 mm", dimOutdoor: "890 × 705 × 340 mm",
        price: "9 999"
      }
    ]
  },

  // ─── PEARL PREMIUM PLUS ───
  {
    series: "Pearl Premium Plus",
    slug: "pearl-premium-plus",
    tagline: "Premium w przystępnej cenie",
    subtitle: "Zaawansowane technologie higieny i wysoka efektywność",
    colors: ["Biały"],
    specUrl: "https://haier-ac.pl/produkt/klimatyzator-scienny-pearl-premium-plus/",
    features: [
      { icon: "🔬", title: "UV-C PRO", desc: "Zaawansowana lampa UV-C neutralizująca 99,99% wirusów i bakterii." },
      { icon: "🌡️", title: "56°C Steri Clean", desc: "Dezynfekcja termiczna wymiennika w temp. 56°C." },
      { icon: "🧹", title: "Self Clean", desc: "Automatyczne czyszczenie wymiennika zapobiegające pleśni." },
      { icon: "🔇", title: "18 dB(A)", desc: "Bardzo cicha praca – idealny do sypialni." },
      { icon: "📶", title: "Wi-Fi + hOn", desc: "Sterowanie aplikacją – harmonogramy i monitoring zużycia." },
      { icon: "🌬️", title: "Coanda Plus", desc: "Nawiew wzdłuż sufitu zapewniający równomierną temperaturę." },
      { icon: "❄️", title: "Grzanie do −25°C", desc: "Efektywne grzanie nawet przy ekstremalnie niskich temperaturach." },
      { icon: "🏠", title: "I-FEEL", desc: "Czujnik temperatury w pilocie dopasowuje się do użytkownika." }
    ],
    variants: [
      {
        power: "2,7", powerUrl: "2-7kw", area: "do 25 m²", areaRange: "0–25",
        indexIndoor: "AS25PBPHRA-PRE", indexOutdoor: "1U25YEPFRA-H",
        coolingCapacity: "2,7 kW", heatingCapacity: "3,1 kW",
        energyCooling: "A+++", energyHeating: "A++",
        seer: "8,50", scop: "4,60",
        powerCooling: "0,71 kW", powerHeating: "0,83 kW",
        airflow: "610 m³/h",
        noiseIndoor: "18 – 37 dB(A)", noiseOutdoor: "49 dB(A)",
        coolingRange: "−20°C do 43°C", heatingRange: "−25°C do 24°C",
        dimIndoor: "805 × 292 × 200 mm", dimOutdoor: "700 × 544 × 245 mm",
        price: "5 299"
      },
      {
        power: "3,6", powerUrl: "3-6kw", area: "25 – 35 m²", areaRange: "25–35",
        indexIndoor: "AS35PBPHRA-PRE", indexOutdoor: "1U35MEPFRA-H",
        coolingCapacity: "3,6 kW", heatingCapacity: "3,9 kW",
        energyCooling: "A+++", energyHeating: "A++",
        seer: "8,50", scop: "4,60",
        powerCooling: "1,11 kW", powerHeating: "1,05 kW",
        airflow: "670 m³/h",
        noiseIndoor: "18 – 38 dB(A)", noiseOutdoor: "51 dB(A)",
        coolingRange: "−20°C do 43°C", heatingRange: "−25°C do 24°C",
        dimIndoor: "805 × 292 × 200 mm", dimOutdoor: "800 × 553 × 280 mm",
        price: "5 799"
      },
      {
        power: "5,3", powerUrl: "5-3kw", area: "35 – 50 m²", areaRange: "35–50",
        indexIndoor: "AS50PDPHRA-PRE", indexOutdoor: "1U50KEPFRA-H",
        coolingCapacity: "5,3 kW", heatingCapacity: "5,8 kW",
        energyCooling: "A+++", energyHeating: "A++",
        seer: "8,50", scop: "4,60",
        powerCooling: "1,51 kW", powerHeating: "1,45 kW",
        airflow: "930 m³/h",
        noiseIndoor: "31 – 44 dB(A)", noiseOutdoor: "55 dB(A)",
        coolingRange: "−20°C do 43°C", heatingRange: "−25°C do 24°C",
        dimIndoor: "975 × 318 × 220 mm", dimOutdoor: "820 × 642 × 306 mm",
        price: "7 799"
      },
      {
        power: "7,1", powerUrl: "7-1kw", area: "50 – 80 m²", areaRange: "50–80",
        indexIndoor: "AS71PEPHRA-PRE", indexOutdoor: "1U71WEPFRA-H",
        coolingCapacity: "7,1 kW", heatingCapacity: "7,4 kW",
        energyCooling: "A+++", energyHeating: "A++",
        seer: "8,50", scop: "4,60",
        powerCooling: "1,97 kW", powerHeating: "1,95 kW",
        airflow: "1180 m³/h",
        noiseIndoor: "27 – 48 dB(A)", noiseOutdoor: "57 dB(A)",
        coolingRange: "−20°C do 43°C", heatingRange: "−25°C do 24°C",
        dimIndoor: "1105 × 335 × 240 mm", dimOutdoor: "890 × 705 × 340 mm",
        price: "9 799"
      }
    ]
  },

  // ─── PEARL NEO PLUS ───
  {
    series: "Pearl Neo Plus",
    slug: "pearl-neo-plus",
    tagline: "Nowość 2026 – higiena i smart control",
    subtitle: "UV-C, Self Clean i Wi-Fi w nowoczesnym wydaniu",
    colors: ["Biały"],
    specUrl: "https://haier-ac.pl/produkt/klimatyzator-scienny-pearl-neo-plus/",
    features: [
      { icon: "🔬", title: "UV-C", desc: "Sterylizacja UV-C neutralizująca bakterie i wirusy." },
      { icon: "🌡️", title: "56°C Steri Clean", desc: "Dezynfekcja termiczna wymiennika w temp. 56°C." },
      { icon: "🧹", title: "Self Clean", desc: "Automatyczne czyszczenie wymiennika ciepła." },
      { icon: "🌬️", title: "Coanda Plus", desc: "Nawiew wzdłuż sufitu – równomierna temperatura." },
      { icon: "📶", title: "Wi-Fi + hOn", desc: "Sterowanie aplikacją mobilną z dowolnego miejsca." },
      { icon: "🔇", title: "18 dB(A)", desc: "Cicha praca jednostki wewnętrznej." },
      { icon: "⚡", title: "Turbo Cooling", desc: "Przyspieszony tryb chłodzenia – szybki komfort." },
      { icon: "🏠", title: "I-FEEL", desc: "Czujnik w pilocie mierzy temperaturę wokół użytkownika." }
    ],
    variants: [
      {
        power: "2,7", powerUrl: "2-7kw", area: "do 25 m²", areaRange: "0–25",
        indexIndoor: "AS25RBNHRA-PL", indexOutdoor: "1U25YESFRA-4",
        coolingCapacity: "2,7 kW", heatingCapacity: "2,9 kW",
        energyCooling: "A++", energyHeating: "A+",
        seer: "7,00", scop: "4,10",
        powerCooling: "0,84 kW", powerHeating: "0,78 kW",
        airflow: "610 m³/h",
        noiseIndoor: "18 – 37 dB(A)", noiseOutdoor: "49 dB(A)",
        coolingRange: "−20°C do 43°C", heatingRange: "−20°C do 24°C",
        dimIndoor: "805 × 292 × 200 mm", dimOutdoor: "700 × 544 × 245 mm",
        price: "4 499"
      },
      {
        power: "3,5", powerUrl: "3-5kw", area: "25 – 35 m²", areaRange: "25–35",
        indexIndoor: "AS35RBNHRA-PL", indexOutdoor: "1U35YESFRA-5",
        coolingCapacity: "3,5 kW", heatingCapacity: "3,8 kW",
        energyCooling: "A++", energyHeating: "A+",
        seer: "7,00", scop: "4,10",
        powerCooling: "1,10 kW", powerHeating: "1,00 kW",
        airflow: "650 m³/h",
        noiseIndoor: "19 – 38 dB(A)", noiseOutdoor: "50 dB(A)",
        coolingRange: "−20°C do 43°C", heatingRange: "−20°C do 24°C",
        dimIndoor: "805 × 292 × 200 mm", dimOutdoor: "700 × 544 × 245 mm",
        price: "4 999"
      },
      {
        power: "5,0", powerUrl: "5-0kw", area: "35 – 50 m²", areaRange: "35–50",
        indexIndoor: "AS50RCNHRA-PL", indexOutdoor: "1U50MERFRA-5",
        coolingCapacity: "5,0 kW", heatingCapacity: "5,2 kW",
        energyCooling: "A++", energyHeating: "A+",
        seer: "7,00", scop: "4,10",
        powerCooling: "1,55 kW", powerHeating: "1,40 kW",
        airflow: "900 m³/h",
        noiseIndoor: "28 – 44 dB(A)", noiseOutdoor: "54 dB(A)",
        coolingRange: "−20°C do 43°C", heatingRange: "−20°C do 24°C",
        dimIndoor: "875 × 304 × 212 mm", dimOutdoor: "800 × 553 × 275 mm",
        price: "6 499"
      },
      {
        power: "6,8", powerUrl: "6-8kw", area: "50 – 70 m²", areaRange: "50–70",
        indexIndoor: "AS68RDNHRA-PL", indexOutdoor: "1U68MRAFRA-5",
        coolingCapacity: "6,8 kW", heatingCapacity: "6,8 kW",
        energyCooling: "A++", energyHeating: "A+",
        seer: "7,00", scop: "4,10",
        powerCooling: "2,00 kW", powerHeating: "1,74 kW",
        airflow: "1100 m³/h",
        noiseIndoor: "29 – 47 dB(A)", noiseOutdoor: "57 dB(A)",
        coolingRange: "−20°C do 43°C", heatingRange: "−20°C do 24°C",
        dimIndoor: "975 × 318 × 222 mm", dimOutdoor: "800 × 553 × 275 mm",
        price: "8 499"
      }
    ]
  },

  // ─── PEARL PLUS ───
  {
    series: "Pearl Plus",
    slug: "pearl-plus",
    tagline: "Uniwersalny i niezawodny",
    subtitle: "Sprawdzony klimatyzator z UV-C i Wi-Fi",
    colors: ["Biały"],
    specUrl: "https://haier-ac.pl/produkt/klimatyzator-scienny-pearl-plus/",
    features: [
      { icon: "🔬", title: "UV-C Sterylizacja", desc: "Lampa UV-C eliminująca 99,99% wirusów, w tym SARS-CoV-2." },
      { icon: "🧹", title: "Self Clean", desc: "Automatyczne czyszczenie wymiennika ciepła." },
      { icon: "📶", title: "Wi-Fi + hOn", desc: "Sterowanie aplikacją mobilną w standardzie." },
      { icon: "🔇", title: "18 dB(A)", desc: "Cicha praca jednostki wewnętrznej." },
      { icon: "🌬️", title: "Coanda Plus", desc: "Nawiew wzdłuż sufitu – brak przeciągów." },
      { icon: "🌡️", title: "I-FEEL", desc: "Czujnik w pilocie dopasowuje temperaturę do Twojej pozycji." },
      { icon: "⚡", title: "Turbo Cooling", desc: "Szybkie chłodzenie – komfortowa temperatura w minuty." },
      { icon: "🏠", title: "+8°C", desc: "Tryb utrzymania minimalnej temperatury w budynkach sezonowych." }
    ],
    variants: [
      {
        power: "2,6", powerUrl: "2-6kw", area: "do 25 m²", areaRange: "0–25",
        indexIndoor: "AS25PBAHRA", indexOutdoor: "1U25YEGFRA",
        coolingCapacity: "2,6 kW", heatingCapacity: "2,8 kW",
        energyCooling: "A++", energyHeating: "A+",
        seer: "6,10", scop: "4,00",
        powerCooling: "0,80 kW", powerHeating: "0,75 kW",
        airflow: "550 m³/h",
        noiseIndoor: "18 – 37 dB(A)", noiseOutdoor: "49 dB(A)",
        coolingRange: "−10°C do 43°C", heatingRange: "−15°C do 24°C",
        dimIndoor: "805 × 290 × 200 mm", dimOutdoor: "700 × 544 × 245 mm",
        price: "3 999"
      },
      {
        power: "3,5", powerUrl: "3-5kw", area: "25 – 35 m²", areaRange: "25–35",
        indexIndoor: "AS35PBAHRA", indexOutdoor: "1U35YEGFRA",
        coolingCapacity: "3,5 kW", heatingCapacity: "3,5 kW",
        energyCooling: "A++", energyHeating: "A+",
        seer: "6,10", scop: "4,00",
        powerCooling: "1,21 kW", powerHeating: "0,94 kW",
        airflow: "600 m³/h",
        noiseIndoor: "19 – 37 dB(A)", noiseOutdoor: "50 dB(A)",
        coolingRange: "−10°C do 43°C", heatingRange: "−15°C do 24°C",
        dimIndoor: "805 × 290 × 200 mm", dimOutdoor: "700 × 544 × 245 mm",
        price: "4 499"
      },
      {
        power: "5,0", powerUrl: "5-0kw", area: "35 – 50 m²", areaRange: "35–50",
        indexIndoor: "AS50PDAHRA", indexOutdoor: "1U50MEGFRA",
        coolingCapacity: "5,0 kW", heatingCapacity: "5,2 kW",
        energyCooling: "A++", energyHeating: "A+",
        seer: "6,10", scop: "4,00",
        powerCooling: "1,55 kW", powerHeating: "1,40 kW",
        airflow: "900 m³/h",
        noiseIndoor: "28 – 44 dB(A)", noiseOutdoor: "53 dB(A)",
        coolingRange: "−10°C do 43°C", heatingRange: "−15°C do 24°C",
        dimIndoor: "975 × 320 × 220 mm", dimOutdoor: "800 × 553 × 275 mm",
        price: "5 999"
      },
      {
        power: "6,8", powerUrl: "6-8kw", area: "50 – 70 m²", areaRange: "50–70",
        indexIndoor: "AS68PDAHRA", indexOutdoor: "1U68WEGFRA",
        coolingCapacity: "6,8 kW", heatingCapacity: "6,8 kW",
        energyCooling: "A++", energyHeating: "A+",
        seer: "6,80", scop: "4,00",
        powerCooling: "2,11 kW", powerHeating: "1,83 kW",
        airflow: "1100 m³/h",
        noiseIndoor: "29 – 47 dB(A)", noiseOutdoor: "53 dB(A)",
        coolingRange: "−10°C do 43°C", heatingRange: "−15°C do 24°C",
        dimIndoor: "975 × 320 × 220 mm", dimOutdoor: "890 × 705 × 340 mm",
        price: "7 499"
      }
    ]
  },

  // ─── REVIVE PLUS ───
  {
    series: "Revive Plus",
    slug: "revive-plus",
    tagline: "Nowoczesność i czyste powietrze",
    subtitle: "Filtracja, Wi-Fi i cicha praca w atrakcyjnej cenie",
    colors: ["White Shine", "Black Shine"],
    specUrl: "https://haier-ac.pl/produkt/klimatyzator-scienny-revive-plus-white-shine/",
    features: [
      { icon: "🎨", title: "2 kolory", desc: "White Shine i Black Shine – połyskujące wykończenie." },
      { icon: "🧹", title: "Self Clean", desc: "Automatyczne czyszczenie wymiennika ciepła." },
      { icon: "📶", title: "Wi-Fi + hOn", desc: "Sterowanie przez aplikację mobilną w standardzie." },
      { icon: "🔇", title: "19 dB(A)", desc: "Cicha praca jednostki wewnętrznej." },
      { icon: "🌬️", title: "3D Airflow", desc: "Automatyczna regulacja nawiewu w pionie i poziomie." },
      { icon: "❄️", title: "Grzanie do −20°C", desc: "Efektywne ogrzewanie przy ujemnych temperaturach." },
      { icon: "🏠", title: "I-FEEL", desc: "Czujnik w pilocie mierzy temperaturę wokół użytkownika." },
      { icon: "⚡", title: "Inverter DC", desc: "Płynna modulacja mocy – oszczędność i komfort." }
    ],
    variants: [
      {
        power: "2,7", powerUrl: "2-7kw", area: "do 25 m²", areaRange: "0–25",
        indexIndoor: "AS25RBAHRA-PL", indexOutdoor: "1U25YESFRA-3",
        coolingCapacity: "2,7 kW", heatingCapacity: "2,9 kW",
        energyCooling: "A++", energyHeating: "A+",
        seer: "6,50", scop: "4,00",
        powerCooling: "0,84 kW", powerHeating: "0,78 kW",
        airflow: "640 m³/h",
        noiseIndoor: "19 – 38 dB(A)", noiseOutdoor: "49 dB(A)",
        coolingRange: "−20°C do 43°C", heatingRange: "−20°C do 24°C",
        dimIndoor: "805 × 292 × 200 mm", dimOutdoor: "700 × 544 × 245 mm",
        price: "4 299"
      },
      {
        power: "3,5", powerUrl: "3-5kw", area: "25 – 35 m²", areaRange: "25–35",
        indexIndoor: "AS35RBAHRA-PL", indexOutdoor: "1U35YESFRA-4",
        coolingCapacity: "3,5 kW", heatingCapacity: "3,9 kW",
        energyCooling: "A++", energyHeating: "A+",
        seer: "6,10", scop: "4,00",
        powerCooling: "1,19 kW", powerHeating: "1,42 kW",
        airflow: "650 m³/h",
        noiseIndoor: "20 – 38 dB(A)", noiseOutdoor: "50 dB(A)",
        coolingRange: "−20°C do 43°C", heatingRange: "−20°C do 24°C",
        dimIndoor: "805 × 292 × 200 mm", dimOutdoor: "700 × 544 × 245 mm",
        price: "4 799"
      },
      {
        power: "4,8", powerUrl: "4-8kw", area: "35 – 50 m²", areaRange: "35–50",
        indexIndoor: "AS50RCBHRA-PL", indexOutdoor: "1U50MERFRA-4",
        coolingCapacity: "4,8 kW", heatingCapacity: "4,8 kW",
        energyCooling: "A++", energyHeating: "A+",
        seer: "6,30", scop: "4,00",
        powerCooling: "1,70 kW", powerHeating: "1,33 kW",
        airflow: "770 m³/h",
        noiseIndoor: "28 – 44 dB(A)", noiseOutdoor: "54 dB(A)",
        coolingRange: "−20°C do 43°C", heatingRange: "−20°C do 24°C",
        dimIndoor: "875 × 304 × 212 mm", dimOutdoor: "800 × 553 × 275 mm",
        price: "6 299"
      },
      {
        power: "6,2", powerUrl: "6-2kw", area: "50 – 70 m²", areaRange: "50–70",
        indexIndoor: "AS68RDAHRA-PL", indexOutdoor: "1U68MRAFRA-4",
        coolingCapacity: "6,2 kW", heatingCapacity: "6,3 kW",
        energyCooling: "A++", energyHeating: "A+",
        seer: "6,70", scop: "4,00",
        powerCooling: "2,00 kW", powerHeating: "1,74 kW",
        airflow: "1100 m³/h",
        noiseIndoor: "29 – 47 dB(A)", noiseOutdoor: "57 dB(A)",
        coolingRange: "−20°C do 43°C", heatingRange: "−20°C do 24°C",
        dimIndoor: "975 × 318 × 222 mm", dimOutdoor: "800 × 553 × 275 mm",
        price: "7 999"
      }
    ]
  },

  // ─── TAYGA PLUS ───
  {
    series: "Tayga Plus",
    slug: "tayga-plus",
    tagline: "Solidna podstawa w dobrej cenie",
    subtitle: "Klasyczny design, niezawodność i Wi-Fi w standardzie",
    colors: ["Biały"],
    specUrl: "https://haier-ac.pl/produkt/klimatyzator-scienny-tayga-plus/",
    features: [
      { icon: "📶", title: "Wi-Fi + hOn", desc: "Sterowanie aplikacją mobilną – harmonogramy i monitoring." },
      { icon: "🧹", title: "Self Clean", desc: "Automatyczne czyszczenie wymiennika ciepła." },
      { icon: "🔇", title: "19 dB(A)", desc: "Cicha praca jednostki wewnętrznej." },
      { icon: "🌬️", title: "3D Airflow", desc: "Regulacja kierunku nawiewu w pionie i poziomie." },
      { icon: "❄️", title: "Grzanie do −15°C", desc: "Ogrzewanie przy ujemnych temperaturach zewnętrznych." },
      { icon: "⚡", title: "Inverter DC", desc: "Płynna modulacja mocy – niższe rachunki za prąd." },
      { icon: "🏠", title: "5 trybów pracy", desc: "Chłodzenie, grzanie, osuszanie, wentylacja i tryb auto." },
      { icon: "⏰", title: "Timer 24h", desc: "Programowanie włączenia i wyłączenia urządzenia." }
    ],
    variants: [
      {
        power: "2,6", powerUrl: "2-6kw", area: "do 25 m²", areaRange: "0–25",
        indexIndoor: "AS25THMHRA-C", indexOutdoor: "1U25YEFFRA-C",
        coolingCapacity: "2,6 kW", heatingCapacity: "2,8 kW",
        energyCooling: "A++", energyHeating: "A+",
        seer: "6,10", scop: "4,00",
        powerCooling: "0,80 kW", powerHeating: "0,75 kW",
        airflow: "500 m³/h",
        noiseIndoor: "19 – 37 dB(A)", noiseOutdoor: "49 dB(A)",
        coolingRange: "−10°C do 43°C", heatingRange: "−15°C do 24°C",
        dimIndoor: "820 × 280 × 195 mm", dimOutdoor: "700 × 544 × 245 mm",
        price: "3 799"
      },
      {
        power: "3,2", powerUrl: "3-2kw", area: "25 – 35 m²", areaRange: "25–35",
        indexIndoor: "AS35TAMHRA-C", indexOutdoor: "1U35YEFFRA-C",
        coolingCapacity: "3,2 kW", heatingCapacity: "3,4 kW",
        energyCooling: "A++", energyHeating: "A+",
        seer: "6,10", scop: "4,00",
        powerCooling: "1,06 kW", powerHeating: "1,00 kW",
        airflow: "550 m³/h",
        noiseIndoor: "20 – 38 dB(A)", noiseOutdoor: "50 dB(A)",
        coolingRange: "−10°C do 43°C", heatingRange: "−15°C do 24°C",
        dimIndoor: "820 × 280 × 195 mm", dimOutdoor: "700 × 544 × 245 mm",
        price: "4 299"
      },
      {
        power: "5,0", powerUrl: "5-0kw", area: "35 – 50 m²", areaRange: "35–50",
        indexIndoor: "AS50TDMHRA-C", indexOutdoor: "1U50MEMFRA-C",
        coolingCapacity: "5,0 kW", heatingCapacity: "5,2 kW",
        energyCooling: "A++", energyHeating: "A+",
        seer: "6,10", scop: "4,00",
        powerCooling: "1,55 kW", powerHeating: "1,40 kW",
        airflow: "900 m³/h",
        noiseIndoor: "28 – 44 dB(A)", noiseOutdoor: "53 dB(A)",
        coolingRange: "−10°C do 43°C", heatingRange: "−15°C do 24°C",
        dimIndoor: "1008 × 318 × 225 mm", dimOutdoor: "800 × 553 × 275 mm",
        price: "5 799"
      },
      {
        power: "6,8", powerUrl: "6-8kw", area: "50 – 70 m²", areaRange: "50–70",
        indexIndoor: "AS68TEMHRA-C", indexOutdoor: "1U68RENFRA-C",
        coolingCapacity: "6,8 kW", heatingCapacity: "6,8 kW",
        energyCooling: "A++", energyHeating: "A+",
        seer: "6,80", scop: "4,00",
        powerCooling: "2,11 kW", powerHeating: "1,83 kW",
        airflow: "1100 m³/h",
        noiseIndoor: "33 – 48 dB(A)", noiseOutdoor: "57 dB(A)",
        coolingRange: "−10°C do 43°C", heatingRange: "−15°C do 24°C",
        dimIndoor: "1008 × 318 × 225 mm", dimOutdoor: "890 × 705 × 340 mm",
        price: "7 299"
      }
    ]
  },

  // ─── QUARTZ PLUS ───
  {
    series: "Quartz Plus",
    slug: "quartz-plus",
    tagline: "Wydajność dla dużych pomieszczeń",
    subtitle: "Klimatyzator do serwerowni, biur i pomieszczeń technicznych",
    colors: ["White Shine"],
    specUrl: "https://haier-ac.pl/produkt/klimatyzator-scienny-quartz-plus/",
    features: [
      { icon: "🏢", title: "Do 110 m²", desc: "Wydajność 9,5 kW – idealna do dużych pomieszczeń i serwerowni." },
      { icon: "🔬", title: "UV-C Plus", desc: "Sterylizacja UV-C eliminująca bakterie i wirusy." },
      { icon: "📶", title: "Wi-Fi + hOn", desc: "Sterowanie przez aplikację hOn." },
      { icon: "🔇", title: "Quiet Mode", desc: "Funkcja Quiet redukuje hałas do 38 dB(A)." },
      { icon: "🌡️", title: "Grzałka tacy", desc: "Grzałka tacy ociekowej zapobiega zamarzaniu kondensatu." },
      { icon: "❄️", title: "Grzanie do −20°C", desc: "Efektywne grzanie w szerokim zakresie temperatur." },
      { icon: "⚡", title: "DC Inverter", desc: "Płynna modulacja mocy – stabilna temperatura i oszczędność." },
      { icon: "🔄", title: "Auto Restart", desc: "Automatyczny restart po przerwie w zasilaniu." }
    ],
    variants: [
      {
        power: "9,5", powerUrl: "9-5kw", area: "80 – 110 m²", areaRange: "80–110",
        indexIndoor: "AS105PFAHRA", indexOutdoor: "1U105XEAFRA-H",
        coolingCapacity: "9,5 kW", heatingCapacity: "10,8 kW",
        energyCooling: "A++", energyHeating: "A+",
        seer: "6,50", scop: "4,10",
        powerCooling: "2,94 kW", powerHeating: "2,91 kW",
        airflow: "1500 m³/h",
        noiseIndoor: "38 – 50 dB(A)", noiseOutdoor: "57 dB(A)",
        coolingRange: "−20°C do 50°C", heatingRange: "−20°C do 24°C",
        dimIndoor: "1310 × 285 × 370 mm", dimOutdoor: "1020 × 815 × 370 mm",
        price: "12 999"
      }
    ]
  }
];


// ============================================================
// SZABLON STRONY PRODUKTOWEJ
// ============================================================
function generateProductPage(seriesData, variantIndex) {
  const v = seriesData.variants[variantIndex];
  const s = seriesData;

  const areaButtons = s.variants.map((variant, i) => {
    if (i === variantIndex) {
      return `        <span class="areaBtn active" aria-pressed="true">${variant.area}</span>`;
    }
    return `        <a href="haier-${s.slug}-${variant.powerUrl}.html" class="areaBtn">${variant.area}</a>`;
  }).join('\n');

  const colorImages = s.colors.map((color, i) => {
    const loading = i === 0 ? 'fetchpriority="high"' : 'loading="lazy"';
    return `        <div class="img-container">
          <div class="img-main">
            <img src="https://montaz-serwis-klimatyzacji.pl/klimatyzatory-scienne-haier/placeholder-haier-${s.slug}-indoor.webp"
                 alt="Klimatyzator ścienny Haier ${s.series} - jednostka wewnętrzna ${color}" width="300" height="300" ${loading}>
          </div>
          <div class="img-footer">
            <span style="font-weight: 700; color: #ffffff;">Jednostka wewn.</span>
            <span style="background: #ffffff; color: var(--accent); padding: 3px 12px; border-radius: 5px; font-size: 12px; font-weight: 800;">${color}</span>
          </div>
        </div>`;
  }).join('\n');

  const outdoorImage = `        <div class="img-container">
            <div class="img-main">
              <img src="https://montaz-serwis-klimatyzacji.pl/klimatyzatory-scienne-haier/placeholder-haier-${s.slug}-outdoor.webp"
                   alt="Agregat zewnętrzny Haier ${s.series}" width="340" height="340" loading="lazy">
            </div>
            <div class="img-footer img-footer-outdoor">
              <span style="font-weight: 700; color: #ffffff;">Jednostka zewnętrzna</span>
            </div>
        </div>`;

  const featuresHTML = s.features.map(f => `            <div class="feature-card">
              <div class="feat-ico" aria-hidden="true">${f.icon}</div>
              <div class="feat-txt">
                <strong>${f.title}</strong>
                <p>${f.desc}</p>
              </div>
            </div>`).join('\n');

  const dimParts = v.dimIndoor.split(' × ');
  const dimOutParts = v.dimOutdoor.split(' × ');

  return `<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Haier ${s.series} ${v.power} kW – ${s.tagline}</title>

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet" media="print" onload="this.media='all'" />
  <noscript>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet" />
  </noscript>

  <link rel="stylesheet" href="https://montaz-serwis-klimatyzacji.pl/style.css">
  <link rel="stylesheet" href="../navbar-style.css">
</head>
<body>

<div class="trapez-bg"></div>
<div class="trapez-bg-left"></div>
<div class="blue-bar"></div>
<div class="snow-container" id="snowContainer"></div>

<nav class="navbar" id="navbar">
  <div class="nav-container">
    <a href="../index.html" class="nav-logo" aria-label="Proklima - Strona główna">
      <span class="logo-snowflake">❄️</span>
      <span class="logo-text-new">
        <span class="logo-text-black">Pro</span><span class="logo-text-blue">klima</span>
      </span>
    </a>
    <ul class="nav-links">
      <li><a href="../index.html#klimatyzatory">Polecane</a></li>
      <li><a href="../realizacje.html">Realizacje</a></li>
      <li><a href="../blog.html">Blog</a></li>
      <li><a href="../index.html#kontakt">Kontakt</a></li>
      <li><a href="tel:+48888888888" class="nav-cta">888 888 888</a></li>
    </ul>
    <button class="hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<main id="main-content" class="container">
  <header class="header-section">
    <div class="brand">
      <span style="color: var(--accent); font-weight: 700; text-transform: uppercase; font-size: 12px; letter-spacing: 1px;">${s.tagline}</span>
      <h1>${s.series} ${v.power} kW</h1>
      <p style="color: var(--muted); font-family: 'IBM Plex Mono';">Indeks: ${v.indexIndoor}</p>
    </div>

    <section class="selection-box" aria-labelledby="selection-title">
      <h3 id="selection-title">Dobierz moc do pomieszczenia:</h3>
      <div class="areaButtons">
${areaButtons}
        <a href="klimatyzatory-haier.html" class="areaBtn areaBtn-full">Powrót - wszystkie Haier</a>
      </div>
    </section>
  </header>

  <div class="page-content">
      <aside class="sticky-sidebar" aria-label="Zdjęcia produktu">
${colorImages}
${outdoorImage}
      </aside>

      <article class="details-card">
        <header>
          <h2>${s.subtitle}</h2>
        </header>

        <section class="price-box" style="margin-top: 8px;" aria-label="Cena i gwarancja">
          <div>
            <span style="display: block; font-size: 13px; color: #2c7dfa; font-weight: 700;">Szacowany koszt z montażem (8% VAT)</span>
            <span class="price-value">${v.price} zł</span>
          </div>
        </section>

        <section class="tech-params-section" aria-labelledby="tech-params-title">
          <h3 id="tech-params-title" class="tech-sub-title">Parametry techniczne</h3>
          <table class="spec-list">
            <caption style="text-align: left !important;">Szczegółowa specyfikacja modelu ${s.series} ${v.power} kW (${v.indexIndoor})</caption>
            <thead>
              <tr style="display: none;">
                <th scope="col">Parametr</th>
                <th scope="col">Wartość</th>
              </tr>
            </thead>
            <tbody>
              <tr><th scope="row" style="font-weight: normal; text-align: left;">Klasa energetyczna (chłodzenie/grzanie)</th><td class="val">${v.energyCooling} / ${v.energyHeating}</td></tr>
              <tr><th scope="row" style="font-weight: normal; text-align: left;">Moc chłodnicza</th><td class="val">${v.coolingCapacity}</td></tr>
              <tr><th scope="row" style="font-weight: normal; text-align: left;">Moc grzewcza</th><td class="val">${v.heatingCapacity}</td></tr>
              <tr><th scope="row" style="font-weight: normal; text-align: left;">SEER / SCOP</th><td class="val">${v.seer} / ${v.scop}</td></tr>
              <tr><td colspan="2" style="font-size: 12px; color: var(--muted); padding: 8px 0; font-style: italic;">* Są to wartości deklarowane przez producenta, liczone w warunkach laboratoryjnych.</td></tr>
              <tr><th scope="row" style="font-weight: normal; text-align: left;">Chłodzenie (zakres pracy przy temp. zewn.)</th><td class="val">${v.coolingRange}</td></tr>
              <tr><th scope="row" style="font-weight: normal; text-align: left;">Grzanie (zakres pracy przy temp. zewn.)</th><td class="val">${v.heatingRange}</td></tr>
              <tr><th scope="row" style="font-weight: normal; text-align: left;">Pobór mocy - chłodzenie</th><td class="val">${v.powerCooling}</td></tr>
              <tr><th scope="row" style="font-weight: normal; text-align: left;">Pobór mocy - grzanie</th><td class="val">${v.powerHeating}</td></tr>
              <tr><td colspan="2" style="font-size: 12px; color: var(--muted); padding: 8px 0; font-style: italic;">* Są to wartości deklarowane przez producenta, liczone w warunkach laboratoryjnych.</td></tr>
              <tr><th scope="row" style="font-weight: normal; text-align: left;">Przepływ powietrza (j. wewn.)</th><td class="val">${v.airflow}</td></tr>
              <tr><th scope="row" style="font-weight: normal; text-align: left;">Poziom hałasu (j. wewn.)</th><td class="val">${v.noiseIndoor}</td></tr>
              <tr><th scope="row" style="font-weight: normal; text-align: left;">Poziom hałasu (j. zewn.)</th><td class="val">${v.noiseOutdoor}</td></tr>
            </tbody>
          </table>
        </section>

        <div class="mobile-only-photos">
${colorImages}
${outdoorImage}
        </div>

        <section class="features-section">
          <h2 class="features-title">Funkcje i zalety</h2>
          <div class="features-grid">
${featuresHTML}
          </div>
          <p style="text-align: center; margin-top: 24px; font-size: 14px;">
            <a href="${s.specUrl}" target="_blank" rel="noopener" style="color: var(--accent); text-decoration: none;">📄 Pełna specyfikacja producenta →</a>
          </p>
        </section>

        <section class="dimensions-box" aria-labelledby="dimensions-title">
          <h3 id="dimensions-title" class="tech-sub-title">Wymiary urządzeń</h3>

          <strong style="color: var(--muted); font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Jednostka wewn.</strong>
          <div style="margin-top: 10px;">
            <div class="dim-row">
              <span class="dim-label">📐 Szerokość</span>
              <span class="dim-value">${dimParts[0]} mm</span>
            </div>
            <div class="dim-row">
              <span class="dim-label">📏 Wysokość</span>
              <span class="dim-value">${dimParts[1]} mm</span>
            </div>
            <div class="dim-row">
              <span class="dim-label">↔️ Głębokość</span>
              <span class="dim-value">${dimParts[2]}</span>
            </div>
          </div>

          <strong style="color: var(--muted); font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-top: 25px;">Jednostka zewnętrzna</strong>
          <div style="margin-top: 10px;">
            <div class="dim-row">
              <span class="dim-label">📐 Szerokość</span>
              <span class="dim-value">${dimOutParts[0]} mm</span>
            </div>
            <div class="dim-row">
              <span class="dim-label">📏 Wysokość</span>
              <span class="dim-value">${dimOutParts[1]} mm</span>
            </div>
            <div class="dim-row">
              <span class="dim-label">↔️ Głębokość</span>
              <span class="dim-value">${dimOutParts[2]}</span>
            </div>
          </div>
        </section>

        <section class="cost-calculator" aria-labelledby="cost-title">
          <h2 class="features-title" id="cost-title">💡 Koszty eksploatacji</h2>
          <div class="cost-box" id="cost-content">
            <p style="color: #8b5e00;">Ładowanie danych o kosztach...</p>
          </div>
        </section>

      </article>
    </div>
</main>

  <footer style="text-align: center; padding: 40px 20px; color: var(--muted); font-size: 14px;">
    <p>&copy; 2024 Haier Partner. Wszelkie prawa zastrzeżone.</p>
  </footer>

  <script>
    window.addEventListener('load', function() {
      const snowContainer = document.getElementById('snowContainer');
      if (!snowContainer) return;
      let activeFlakes = [];
      let snowInterval = null;
      let isSnowing = false;
      function createSnowflake() {
        const flake = document.createElement('div');
        flake.classList.add('snowflake');
        flake.textContent = '❄';
        const size = Math.random() * 1.2 + 0.4;
        const startX = Math.random() * 100;
        const duration = Math.random() * 4 + 6;
        const delay = Math.random() * 0.5;
        flake.style.cssText = 'left:' + startX + '%;font-size:' + size + 'rem;animation-duration:' + duration + 's;animation-delay:' + delay + 's;opacity:' + (Math.random() * 0.6 + 0.4);
        snowContainer.appendChild(flake);
        activeFlakes.push(flake);
        setTimeout(function() {
          if (flake.parentNode) flake.parentNode.removeChild(flake);
          activeFlakes = activeFlakes.filter(function(f) { return f !== flake; });
        }, (duration + delay) * 1000);
      }
      function startSnow() { if (isSnowing) return; isSnowing = true; snowInterval = setInterval(createSnowflake, 100); }
      function stopSnow() { isSnowing = false; if (snowInterval) { clearInterval(snowInterval); snowInterval = null; } }
      function runSnowSchedule() {
        setTimeout(function() { startSnow(); setTimeout(function() { stopSnow();
          setTimeout(function() { startSnow(); setTimeout(function() { stopSnow();
            setTimeout(function() { startSnow(); setTimeout(function() { stopSnow();
              setInterval(function() { startSnow(); setTimeout(function() { stopSnow(); }, 20000); }, 180000);
            }, 100); }, 90000); }, 20000); }, 30000); }, 4000); }, 2500);
      }
      runSnowSchedule();
      document.addEventListener('visibilitychange', function() { if (document.hidden && isSnowing) stopSnow(); });
    });
  </script>

  <script src="cost-calculator.js"></script>

  <script>
    (function() {
      var navToggle = document.getElementById('navToggle');
      var navMenu = document.getElementById('navMenu');
      var navOverlay = document.getElementById('navOverlay');
      var navLinks = document.querySelectorAll('.nav-link, .btn-nav-cta');
      var resizeTimeout;
      setTimeout(function() { if(navMenu) navMenu.classList.add('menu-ready'); }, 100);
      function toggleMenu() {
        if(!navToggle || !navMenu) return;
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        if(navOverlay) navOverlay.classList.toggle('active');
        var isExpanded = navToggle.classList.contains('active');
        navToggle.setAttribute('aria-expanded', isExpanded);
        document.body.style.overflow = isExpanded ? 'hidden' : '';
      }
      function closeMenu() {
        if(!navToggle || !navMenu) return;
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        if(navOverlay) navOverlay.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
      if(navToggle) navToggle.addEventListener('click', toggleMenu);
      navLinks.forEach(function(link) { link.addEventListener('click', closeMenu); });
      document.addEventListener('keydown', function(e) { if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) closeMenu(); });
      window.addEventListener('resize', function() {
        if(navMenu) navMenu.classList.remove('menu-ready');
        if (window.innerWidth > 1100 && navMenu && navMenu.classList.contains('active')) closeMenu();
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() { if(navMenu) navMenu.classList.add('menu-ready'); }, 150);
      });
    })();
  </script>

<script src="../blue-bar-position.js"></script>
</body>
</html>`;
}


// ============================================================
// SZABLON STRONY KATALOGOWEJ
// ============================================================
function generateCatalogPage() {
  const productsJS = HAIER_SERIES.map(s => {
    const areas = s.variants.map(v => `"${v.areaRange.split('–')[1] || v.areaRange.split('–')[0]}"`).join(', ');
    const coolingStr = s.variants.map(v => v.coolingCapacity).join(' / ');
    const heatingStr = s.variants.map(v => v.heatingCapacity).join(' / ');
    const colorsStr = s.colors.map(c => `"${c}"`).join(', ');
    const featShort = [];
    if (s.features.some(f => f.title.includes('Wi-Fi'))) featShort.push('"Wi-Fi"');
    if (s.features.some(f => f.title.includes('UV-C'))) featShort.push('"UV-C"');
    if (s.features.some(f => f.title.includes('Self Clean'))) featShort.push('"Self Clean"');
    if (s.features.some(f => f.title.includes('dB'))) featShort.push('"Cichy"');
    else featShort.push('"Grzanie"');

    return `    {
      id: "${s.slug}",
      name: "${s.series}",
      series: ["Dom"],
      areas: [${areas}],
      cooling: "${coolingStr}",
      heating: "${heatingStr}",
      energyCooling: "${s.variants[0].energyCooling}",
      energyHeating: "${s.variants[0].energyHeating}",
      colors: [${colorsStr}],
      features: [[${featShort.join(', ')}]],
      img: "https://montaz-serwis-klimatyzacji.pl/klimatyzatory-scienne-haier/placeholder-haier-${s.slug}-indoor.webp",
      detailsPage: "haier-${s.slug}-${s.variants[0].powerUrl}.html"
    }`;
  }).join(',\n');

  return `<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Klimatyzatory Haier – Katalog Modeli 2025</title>

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet" media="print" onload="this.media='all'" />
  <noscript>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet" />
  </noscript>

  <link rel="stylesheet" href="../navbar-style.css">

  <style>
    :root {
      --primary: #1a3a52;
      --accent: #2c7dfa;
      --accent-dark: #1e5fc9;
      --accent-light: #eff6ff;
      --bg: #f8fafc;
      --card: #ffffff;
      --text: #2d3748;
      --muted: #718096;
      --border: #e2e8f0;
      --shadow: 0 12px 40px rgba(0,0,0,0.12);
      --shadow-hover: 0 20px 50px rgba(44, 125, 250, 0.25);
      --serif: "Playfair Display", serif;
      --sans: "Inter", sans-serif;
    }
    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body { margin: 0; padding-top: 72px; background: var(--bg); color: var(--text); font-family: var(--sans); line-height: 1.6; overflow-x: hidden; }
    .hero { position: relative; background: linear-gradient(135deg, #2c7dfa 0%, #1e5fc9 50%, #1a4f9e 100%); padding: 80px 20px; overflow: hidden; min-height: 380px; display: flex; align-items: center; justify-content: center; }
    .clouds { position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; overflow: hidden; }
    .cloud { position: absolute; background: rgba(255,255,255,0.15); border-radius: 50%; filter: blur(30px); }
    .cloud-1 { width: 400px; height: 150px; top: 10%; left: -5%; animation: float 25s ease-in-out infinite; }
    .cloud-2 { width: 300px; height: 120px; top: 60%; right: -3%; animation: float 20s ease-in-out infinite reverse; }
    .cloud-3 { width: 250px; height: 100px; top: 30%; left: 50%; animation: float 30s ease-in-out infinite; }
    .cloud-4 { width: 350px; height: 130px; bottom: 10%; left: 20%; animation: float 22s ease-in-out infinite reverse; }
    @keyframes float { 0%, 100% { transform: translateX(0) translateY(0); } 50% { transform: translateX(30px) translateY(-20px); } }
    .snowflakes-hero { position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; overflow: hidden; }
    .snowflake-hero { position: absolute; color: rgba(255,255,255,0.6); font-size: 20px; animation: fall-hero linear infinite; text-shadow: 0 0 10px rgba(255,255,255,0.5); }
    @keyframes fall-hero { 0% { transform: translateY(-20px) rotate(0deg); opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { transform: translateY(400px) rotate(360deg); opacity: 0; } }
    .hero-content { position: relative; z-index: 2; text-align: center; color: #fff; }
    .hero-badge { display: inline-block; background: rgba(255,255,255,0.2); backdrop-filter: blur(10px); padding: 8px 20px; border-radius: 5px; font-size: 13px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.3); }
    .hero h1 { font-family: var(--serif); font-size: 52px; font-weight: 800; margin: 0 0 15px 0; text-shadow: 0 4px 20px rgba(0,0,0,0.2); }
    .hero p { font-size: 18px; opacity: 0.95; max-width: 650px; margin: 0 auto; background: rgba(255,255,255,0.2); backdrop-filter: blur(10px); padding: 15px 30px; border-radius: 8px; display: inline-block; }
    .filters-section { max-width: 1280px; margin: 0 auto; padding: 30px 20px 10px; }
    .selection-box { background: #fff; padding: 25px 30px; border-radius: 5px; border: 1px solid var(--border); box-shadow: 0 4px 20px rgba(0,0,0,0.08); text-align: center; max-width: 1100px; margin: 0 auto; }
    .selection-box h3 { margin: 0 0 20px 0; font-size: 18px; font-weight: 700; color: var(--primary); }
    .area-buttons { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
    .area-btn { padding: 12px 24px; border: 2px solid var(--border); border-radius: 5px; background: #fff; font-size: 14px; font-weight: 600; color: var(--accent); cursor: pointer; transition: all 0.2s ease; white-space: nowrap; box-shadow: 0 2px 8px rgba(0,0,0,0.06); text-decoration: none; display: inline-block; }
    .area-btn:hover { border-color: var(--accent); background: rgba(44,125,250,0.05); box-shadow: 0 4px 12px rgba(44,125,250,0.15); }
    .area-btn.active { background: var(--accent); border-color: var(--accent); color: #fff; box-shadow: 0 4px 12px rgba(44,125,250,0.3); cursor: default; }
    .products-section { max-width: 1280px; margin: 0 auto; padding: 30px 20px 60px; }
    .products-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; max-width: 1100px; margin: 0 auto; }
    .products-grid .product-card:last-child:nth-child(3n+1) { grid-column: 2; }
    .product-card { background: var(--card); border-radius: 5px; overflow: hidden; box-shadow: var(--shadow); transition: all 0.4s ease; border: 1px solid var(--border); }
    .product-card:hover { transform: translateY(-10px); }
    .card-image { position: relative; max-height: 156%; background: #ffffff; display: flex; align-items: center; justify-content: center; overflow: hidden; }
    .card-image img { max-width: 85%; max-height: 85%; object-fit: contain; transition: transform 0.4s ease; }
    .product-card:hover .card-image img { transform: scale(1.05); }
    .energy-badge { position: absolute; top: 15px; right: 15px; background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); color: #fff; padding: 4px 12px; border-radius: 5px; font-size: 13px; font-weight: 800; box-shadow: 0 4px 12px rgba(59,130,246,0.3); }
    .card-body { padding: 0 20px 18px 20px; }
    .card-title { font-family: var(--serif); font-size: 20px; font-weight: 800; color: var(--primary); margin: 0 0 10px 0; }
    .card-features { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 8px; justify-content: center; }
    .card-features-row { display: flex; flex-wrap: nowrap; gap: 8px; margin-bottom: 9px; justify-content: center; }
    .feature-item { display: flex; align-items: center; gap: 5px; font-size: 11px; color: var(--primary); font-weight: 600; background: #f8fafc; padding: 5px 10px; border-radius: 6px; border: 1px solid var(--border); box-shadow: 0 2px 4px rgba(0,0,0,0.06); }
    .card-specs { border-top: 1px solid var(--border); padding-top: 12px; margin-bottom: 12px; }
    .spec-row { display: flex; justify-content: space-between; align-items: center; padding: 4px 0; font-size: 13px; }
    .spec-label { color: var(--muted); }
    .spec-value { font-weight: 700; color: var(--primary); }
    .energy-pill { display: inline-flex; align-items: center; justify-content: center; padding: 4px 12px; border-radius: 50px; font-size: 12px; font-weight: 700; white-space: nowrap; background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); border: 1.5px solid #0ea5e9; color: #0369a1; }
    .energy-pill-heating { background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border: 1.5px solid #f59e0b; color: #92400e; }
    .card-colors { margin-bottom: 14px; }
    .colors-label { font-size: 11px; font-weight: 700; color: var(--muted); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px; }
    .color-tags { display: flex; flex-wrap: wrap; gap: 6px; }
    .color-tag { font-size: 11px; padding: 4px 10px; background: #f1f5f9; border: 1px solid var(--border); border-radius: 5px; color: var(--primary); font-weight: 500; }
    .card-footer { display: flex; justify-content: space-between; align-items: center; padding-top: 12px; border-top: 1px solid var(--border); }
    .card-price { font-size: 12px; color: var(--muted); }
    .card-price span { display: block; font-size: 22px; font-weight: 800; color: var(--accent); }
    .btn-details { display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; background: var(--primary); color: #fff; text-decoration: none; font-weight: 700; font-size: 13px; border-radius: 5px; transition: all 0.3s ease; }
    .btn-details:hover { background: var(--accent); transform: translateX(3px); }
    .btn-details svg { width: 16px; height: 16px; transition: transform 0.3s ease; }
    .btn-details:hover svg { transform: translateX(3px); }
    footer { background: var(--primary); color: #fff; text-align: center; padding: 40px 20px; }
    footer p { margin: 0; opacity: 0.8; font-size: 14px; }
    @media (max-width: 992px) { .products-grid { grid-template-columns: repeat(2, 1fr); gap: 25px; } .products-grid .product-card:last-child:nth-child(3n+1) { grid-column: auto; } .hero h1 { font-size: 40px; } .hero { padding: 60px 20px; min-height: 300px; } }
    @media (max-width: 640px) { .products-grid { grid-template-columns: 1fr; gap: 20px; } .hero h1 { font-size: 32px; } .hero p { font-size: 16px; } .hero { padding: 50px 20px; min-height: 280px; } .card-body { padding: 20px; } .area-buttons { gap: 8px; } .area-btn { padding: 10px 16px; font-size: 13px; } }
    @media (max-width: 400px) { .hero h1 { font-size: 26px; } .hero-badge { font-size: 11px; padding: 6px 14px; } }
  </style>
</head>
<body>

<div class="nav-overlay" id="navOverlay"></div>

<nav class="navbar" id="navbar">
  <div class="nav-container">
    <a href="../index.html" class="nav-logo" aria-label="Proklima - Strona główna">
      <span class="logo-snowflake">❄️</span>
      <span class="logo-text-new">
        <span class="logo-text-black">Pro</span><span class="logo-text-blue">klima</span>
      </span>
    </a>
    <ul class="nav-links" id="navMenu">
      <li><a href="../index.html#klimatyzatory">Polecane</a></li>
      <li><a href="../realizacje.html">Realizacje</a></li>
      <li><a href="../blog.html">Blog</a></li>
      <li><a href="../index.html#kontakt">Kontakt</a></li>
      <li><a href="tel:+48888888888" class="nav-cta">888 888 888</a></li>
    </ul>
    <button class="hamburger" id="navToggle" aria-label="Menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<section class="hero">
  <div class="clouds">
    <div class="cloud cloud-1"></div>
    <div class="cloud cloud-2"></div>
    <div class="cloud cloud-3"></div>
    <div class="cloud cloud-4"></div>
  </div>
  <div class="snowflakes-hero" id="snowflakesHero"></div>
  <div class="hero-content">
    <div class="hero-badge">Autoryzowany partner</div>
    <h1>Klimatyzatory Haier</h1>
    <p>Profesjonalne rozwiązania klimatyzacyjne dla Twojego domu, mieszkania i biura. Wybierz spośród ${HAIER_SERIES.length} modeli.</p>
  </div>
</section>

<section class="filters-section">
  <div class="selection-box">
    <h3>Dobierz moc do pomieszczenia:</h3>
    <div class="area-buttons" id="areaButtons">
      <span class="area-btn active">Wszystkie</span>
      <a href="klimatyzatory-do-25m2.html" class="area-btn">do 25 m²</a>
      <a href="klimatyzatory-26-35m2.html" class="area-btn">26 – 35 m²</a>
      <a href="klimatyzatory-36-50m2.html" class="area-btn">36 – 50 m²</a>
      <a href="klimatyzatory-51-80m2.html" class="area-btn">51 – 80 m²</a>
    </div>
  </div>
</section>

<section class="products-section">
  <div class="products-grid" id="productsGrid"></div>
</section>

<footer>
  <p>&copy; <span id="year"></span> Haier Partner. Wszelkie prawa zastrzeżone.</p>
</footer>

<script>
  document.getElementById('year').textContent = new Date().getFullYear();

  var PRODUCTS = [
${productsJS}
  ];

  function createProductCard(product) {
    var energyBadgeClass = product.energyCooling === 'A+++' ? 'a-plus-plus' : '';
    var colorsHTML = product.colors.map(function(c) { return '<span class="color-tag">' + c + '</span>'; }).join('');
    var featuresHTML = '<div class="card-features">' + product.features[0].map(function(f) { return '<div class="feature-item">' + f + '</div>'; }).join('') + '</div>';
    return '<article class="product-card"><div class="card-image"><img src="' + product.img + '" alt="' + product.name + '" loading="lazy" /><div class="energy-badge ' + energyBadgeClass + '">' + product.energyCooling + '</div></div><div class="card-body"><h3 class="card-title">' + product.name + '</h3>' + featuresHTML + '<div class="card-specs"><div class="spec-row"><span class="spec-label">Wydajność chłodzenia:</span><span class="spec-value">' + product.cooling + '</span></div><div class="spec-row"><span class="spec-label">Wydajność grzania:</span><span class="spec-value">' + product.heating + '</span></div><div class="spec-row"><span class="spec-label">Klasa energet. chłodzenia:</span><span class="spec-value"><span class="energy-pill">' + product.energyCooling + '</span></span></div><div class="spec-row"><span class="spec-label">Klasa energet. grzania:</span><span class="spec-value"><span class="energy-pill energy-pill-heating">' + product.energyHeating + '</span></span></div></div><div class="card-colors"><div class="colors-label">Dostępne kolory:</div><div class="color-tags">' + colorsHTML + '</div></div><div class="card-footer"><div class="card-price">Od:<span>Zapytaj</span></div><a href="' + product.detailsPage + '" class="btn-details">Szczegóły<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a></div></div></article>';
  }

  function renderProducts() {
    var grid = document.getElementById('productsGrid');
    grid.innerHTML = PRODUCTS.map(createProductCard).join('');
  }
  renderProducts();

  (function() {
    var container = document.getElementById('snowflakesHero');
    var flakes = ['❄', '❅', '❆', '✧', '•'];
    for (var i = 0; i < 25; i++) {
      var el = document.createElement('div');
      el.className = 'snowflake-hero';
      el.textContent = flakes[Math.floor(Math.random() * flakes.length)];
      el.style.left = Math.random() * 100 + '%';
      el.style.fontSize = (Math.random() * 15 + 10) + 'px';
      el.style.animationDuration = (Math.random() * 5 + 5) + 's';
      el.style.animationDelay = (Math.random() * 10) + 's';
      el.style.opacity = Math.random() * 0.5 + 0.3;
      container.appendChild(el);
    }
  })();

  (function() {
    var navToggle = document.getElementById('navToggle');
    var navMenu = document.getElementById('navMenu');
    var navOverlay = document.getElementById('navOverlay');
    var navLinks = document.querySelectorAll('.nav-links a, .nav-cta');
    var resizeTimeout;
    setTimeout(function() { navMenu.classList.add('menu-ready'); }, 100);
    function toggleMenu() { navToggle.classList.toggle('active'); navMenu.classList.toggle('active'); navOverlay.classList.toggle('active'); var isExpanded = navToggle.classList.contains('active'); navToggle.setAttribute('aria-expanded', isExpanded); document.body.style.overflow = isExpanded ? 'hidden' : ''; }
    function closeMenu() { navToggle.classList.remove('active'); navMenu.classList.remove('active'); navOverlay.classList.remove('active'); navToggle.setAttribute('aria-expanded', 'false'); document.body.style.overflow = ''; }
    navToggle.addEventListener('click', toggleMenu);
    navOverlay.addEventListener('click', closeMenu);
    navLinks.forEach(function(link) { link.addEventListener('click', closeMenu); });
    document.addEventListener('keydown', function(e) { if (e.key === 'Escape' && navMenu.classList.contains('active')) closeMenu(); });
    window.addEventListener('resize', function() { navMenu.classList.remove('menu-ready'); if (window.innerWidth > 1100 && navMenu.classList.contains('active')) closeMenu(); clearTimeout(resizeTimeout); resizeTimeout = setTimeout(function() { navMenu.classList.add('menu-ready'); }, 150); });
  })();
</script>

</body>
</html>`;
}


// ============================================================
// GENEROWANIE PLIKÓW
// ============================================================
let totalFiles = 0;

HAIER_SERIES.forEach(series => {
  series.variants.forEach((variant, i) => {
    const filename = `haier-${series.slug}-${variant.powerUrl}.html`;
    const filepath = path.join(OUTPUT_DIR, filename);
    const html = generateProductPage(series, i);
    fs.writeFileSync(filepath, html, 'utf-8');
    totalFiles++;
    console.log(`✅ ${filename}`);
  });
});

const catalogFilename = 'klimatyzatory-haier.html';
const catalogPath = path.join(OUTPUT_DIR, catalogFilename);
fs.writeFileSync(catalogPath, generateCatalogPage(), 'utf-8');
totalFiles++;
console.log(`✅ ${catalogFilename}`);

console.log(`\n🎉 Wygenerowano ${totalFiles} plików w katalogu ${OUTPUT_DIR}`);
