/**
 * Generator stron produktowych Gree
 * Uruchom: node generate-gree.cjs
 */
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, 'public');

// ============================================================
// DANE WSZYSTKICH MODELI GREE
// ============================================================

const GREE_SERIES = [
  // ─── AMBER PRESTIGE ───
  {
    series: "Amber Prestige",
    slug: "amber-prestige",
    tagline: "Model Premium 2024",
    subtitle: "Najwyższa wydajność, bez kompromisów",
    colors: [],
    specUrl: "https://gree.pl/produkt/klimatyzator-amber-prestige/",
    features: [
      { icon: "⭐", title: "Najwyższa klasa A+++", desc: "SEER 8,5 i SCOP 5,1 – najwyższa efektywność energetyczna." },
      { icon: "🔇", title: "Cicha praca (22 dB(A))", desc: "Komfortowa cisza w każdym pomieszczeniu." },
      { icon: "❄️", title: "Grzanie w −30°C", desc: "Efektywne ogrzewanie nawet przy ekstremalnie niskiej temperaturze." },
      { icon: "🔥", title: "Chłodzenie w 52°C", desc: "Wydajne chłodzenie nawet w największe upały." },
      { icon: "🔬", title: "System filtrów", desc: "Zaawansowana filtracja powietrza dla zdrowego klimatu." },
      { icon: "📶", title: "Wi-Fi + Pilot IR", desc: "Zdalne sterowanie aplikacją Gree+ lub klasycznym pilotem w zestawie." },
      { icon: "🌬️", title: "7 biegów wentylatora", desc: "Precyzyjna regulacja siły nawiewu powietrza." },
      { icon: "⚡", title: "Jonizator Cold Plasma", desc: "Jonizacja powietrza eliminująca kurz i drobnoustroje." },
      { icon: "🏠", title: "Utrzymanie +8°C", desc: "Utrzymanie stałej temperatury dyżurnej w budynkach sezonowych." },
      { icon: "📊", title: "Mocny przepływ", desc: "Wysoka wydajność nawiewu powietrza w całym pomieszczeniu." }
    ],
    images: [
      { url: "https://udraznianierur.eu/klimatyzatory-scienne/gree-amber-prestige-gwh09yd-s6dba2a-indoor.webp", label: null, type: "indoor" }
    ],
    outdoorImage: "https://udraznianierur.eu/klimatyzatory-scienne/gree-amber-prestige-YD09NA2-outdoor.webp",
    energyBadge: true,
    variants: [
      {
        power: "2,7", powerUrl: "2-7kw", area: "do 24 m²", areaRange: "0–24",
        index: "GWH09YD-S6DBA2A",
        coolingCapacity: "2,70 kW", heatingCapacity: "3,50 kW",
        energyCooling: "A+++", energyHeating: "A+++",
        seer: "8,5", scop: "5,1", effCooling: "344%", effHeating: "201%",
        coolingRange: "−18°C do 52°C", heatingRange: "−30°C do 24°C",
        powerCooling: "0,55 kW", powerHeating: "0,75 kW",
        airflow: "450 – 800 m³/h",
        noiseIndoor: "18 – 43 dB(A)", noiseOutdoor: "53 dB(A)",
        dimIndoor: "996 × 301 × 225", dimOutdoor: "899 × 596 × 378",
        price: "5 499"
      },
      {
        power: "3,5", powerUrl: "3-5kw", area: "25 – 34 m²", areaRange: "25–34",
        index: "GWH12YD-S6DBA2A",
        coolingCapacity: "3,53 kW", heatingCapacity: "4,20 kW",
        energyCooling: "A+++", energyHeating: "A+++",
        seer: "8,5", scop: "5,1", effCooling: "344%", effHeating: "201%",
        coolingRange: "−18°C do 54°C", heatingRange: "−30°C do 24°C",
        powerCooling: "0,84 kW", powerHeating: "0,95 kW",
        airflow: "430 – 800 m³/h",
        noiseIndoor: "21 – 46 dB(A)", noiseOutdoor: "53 dB(A)",
        dimIndoor: "996 × 301 × 225", dimOutdoor: "899 × 596 × 378",
        price: "5 499"
      },
      {
        power: "5,3", powerUrl: "5-3kw", area: "35 – 49 m²", areaRange: "35–49",
        index: "GWH18YE-S6DBA2A",
        coolingCapacity: "5,30 kW", heatingCapacity: "5,57 kW",
        energyCooling: "A++", energyHeating: "A+",
        seer: "6,1", scop: "4,0", effCooling: "247%", effHeating: "157%",
        coolingRange: "−18°C do 52°C", heatingRange: "−30°C do 24°C",
        powerCooling: "1,32 kW", powerHeating: "1,32 kW",
        airflow: "600 – 1200 m³/h",
        noiseIndoor: "33 – 48 dB(A)", noiseOutdoor: "55 dB(A)",
        dimIndoor: "1101 × 327 × 249", dimOutdoor: "1003 × 790 × 427",
        price: "5 499"
      },
      {
        power: "7,0", powerUrl: "7-0kw", area: "50 – 80 m²", areaRange: "50–80",
        index: "GWH24YE-S6DBA2A",
        coolingCapacity: "7,03 kW", heatingCapacity: "7,03 kW",
        energyCooling: "A++", energyHeating: "A+",
        seer: "6,1", scop: "4,0", effCooling: "247%", effHeating: "157%",
        coolingRange: "−18°C do 52°C", heatingRange: "−30°C do 24°C",
        powerCooling: "1,85 kW", powerHeating: "1,75 kW",
        airflow: "750 – 1200 m³/h",
        noiseIndoor: "27 – 50 dB(A)", noiseOutdoor: "57 dB(A)",
        dimIndoor: "1101 × 327 × 249", dimOutdoor: "1003 × 790 × 427",
        price: "5 499"
      }
    ]
  },

  // ─── SOYAL ───
  {
    series: "Soyal",
    slug: "soyal",
    tagline: "Futurystyczny Design",
    subtitle: "Inteligentne wykrywanie ludzi i samooczyszczanie",
    colors: [],
    specUrl: "https://gree.pl/produkt/klimatyzator-soyal/",
    features: [
      { icon: "👁️", title: "Wykrywanie ludzi", desc: "Inteligentny czujnik wykrywający obecność osób w pomieszczeniu." },
      { icon: "🧹", title: "Samooczyszczanie", desc: "Automatyczne czyszczenie wymiennika ciepła." },
      { icon: "⭐", title: "Najwyższa klasa A+++", desc: "SEER 9,4 – wyjątkowa efektywność energetyczna." },
      { icon: "🔇", title: "Cicha praca 19 dB(A)", desc: "Niemal bezgłośna praca – idealna do sypialni." },
      { icon: "❄️", title: "Grzanie w −25°C", desc: "Efektywne ogrzewanie nawet przy ekstremalnie niskiej temperaturze." },
      { icon: "🔥", title: "Chłodzenie w 52°C", desc: "Wydajne chłodzenie nawet w największe upały." },
      { icon: "🌬️", title: "7 biegów wentylatora", desc: "Precyzyjna regulacja siły nawiewu powietrza." },
      { icon: "📶", title: "Wi-Fi + Pilot IR", desc: "Zdalne sterowanie aplikacją Gree+ lub klasycznym pilotem w zestawie." },
      { icon: "🎨", title: "Futurystyczny design", desc: "Nowoczesny wygląd dopasowany do każdego wnętrza." },
      { icon: "🔄", title: "Inteligentne odszranianie", desc: "Zaawansowany algorytm odszraniania zapewniający ciągłą pracę." }
    ],
    images: [
      { url: "https://montaz-serwis-klimatyzacji.pl/klimatyzatory-scienne-gree/klimatyzator-gree-soyal-GWH09AKC-K6DNA1A-indoor.webp", label: null, type: "indoor" }
    ],
    outdoorImage: "https://montaz-serwis-klimatyzacji.pl/klimatyzatory-scienne-gree/klimatyzator-gree-soyal-YC09NA4-outdoor.webp",
    energyBadge: true,
    variants: [
      {
        power: "2,7", powerUrl: "2-7kw", area: "do 24 m²", areaRange: "0–24",
        index: "GWH09AKC-K6DNA1A",
        coolingCapacity: "2,70 kW", heatingCapacity: "3,60 kW",
        energyCooling: "A+++", energyHeating: "A+++",
        seer: "9,4", scop: "5,1", effCooling: "380%", effHeating: "201%",
        coolingRange: "−15°C do 52°C", heatingRange: "−25°C do 24°C",
        powerCooling: "0,55 kW", powerHeating: "0,75 kW",
        airflow: "270 – 700 m³/h",
        noiseIndoor: "19 – 42 dB(A)", noiseOutdoor: "53 dB(A)",
        dimIndoor: "977 × 281 × 295", dimOutdoor: "899 × 596 × 378",
        price: "5 299"
      },
      {
        power: "3,5", powerUrl: "3-5kw", area: "25 – 34 m²", areaRange: "25–34",
        index: "GWH12AKC-K6DNA1A",
        coolingCapacity: "3,53 kW", heatingCapacity: "4,20 kW",
        energyCooling: "A+++", energyHeating: "A+++",
        seer: "9,0", scop: "5,1", effCooling: "364%", effHeating: "201%",
        coolingRange: "−15°C do 52°C", heatingRange: "−25°C do 24°C",
        powerCooling: "0,80 kW", powerHeating: "0,93 kW",
        airflow: "270 – 800 m³/h",
        noiseIndoor: "22 – 44 dB(A)", noiseOutdoor: "54 dB(A)",
        dimIndoor: "977 × 281 × 295", dimOutdoor: "899 × 596 × 378",
        price: "5 799"
      },
      {
        power: "5,3", powerUrl: "5-3kw", area: "35 – 49 m²", areaRange: "35–49",
        index: "GWH18AKC-K6DNA1A",
        coolingCapacity: "5,30 kW", heatingCapacity: "5,60 kW",
        energyCooling: "A++", energyHeating: "A+",
        seer: "7,0", scop: "4,3", effCooling: "283%", effHeating: "169%",
        coolingRange: "−15°C do 52°C", heatingRange: "−25°C do 24°C",
        powerCooling: "1,40 kW", powerHeating: "1,47 kW",
        airflow: "300 – 800 m³/h",
        noiseIndoor: "24 – 46 dB(A)", noiseOutdoor: "58 dB(A)",
        dimIndoor: "977 × 281 × 295", dimOutdoor: "965 × 700 × 396",
        price: "6 499"
      }
    ]
  },

  // ─── U-CROWN ───
  {
    series: "U-Crown",
    slug: "u-crown",
    tagline: "Elegancki Design",
    subtitle: "Wyjątkowy design i dwustopniowa sprężarka",
    colors: ["Srebrny", "Szampański"],
    specUrl: "https://gree.pl/produkt/klimatyzator-u-crown/",
    features: [
      { icon: "🎨", title: "Wyjątkowy design", desc: "Unikalna stylistyka dopasowana do nowoczesnych wnętrz." },
      { icon: "⚙️", title: "Dwustopniowa sprężarka", desc: "Dwustopniowa sprężarka zapewniająca wyższą efektywność." },
      { icon: "🌙", title: "3 tryby snu", desc: "Komfortowy sen dzięki trzem trybom nocnym." },
      { icon: "🔇", title: "Cicha praca 19 dB(A)", desc: "Niemal bezgłośna praca – idealna do sypialni." },
      { icon: "❄️", title: "Grzanie do −30°C", desc: "Efektywne ogrzewanie nawet przy ekstremalnie niskiej temperaturze." },
      { icon: "🔥", title: "Chłodzenie do 54°C", desc: "Wydajne chłodzenie nawet w największe upały." },
      { icon: "🌬️", title: "7 biegów wentylatora", desc: "Precyzyjna regulacja siły nawiewu powietrza." },
      { icon: "📶", title: "Wi-Fi + Pilot RF", desc: "Zdalne sterowanie aplikacją Gree+ i pilotem radiowym." },
      { icon: "🌡️", title: "Odczyt temperatury z pilota", desc: "Czujnik w pilocie mierzy temperaturę wokół użytkownika." },
      { icon: "🔄", title: "Inteligentne odszranianie", desc: "Zaawansowany algorytm odszraniania zapewniający ciągłą pracę." }
    ],
    images: [
      { url: "https://montaz-serwis-klimatyzacji.pl/klimatyzatory-scienne-gree/klimatyzator-scienny-gree-u-crown-GWH09UB-K6DNA4H-kolor-silver-indoor.webp", label: "Srebrny", type: "indoor" },
      { url: "https://montaz-serwis-klimatyzacji.pl/klimatyzatory-scienne-gree/klimatyzator-scienny-gree-u-crown-GWH09UB-K6DNA4A-kolor-szampanski-indoor.webp", label: "Szampański", type: "indoor" }
    ],
    outdoorImage: "https://montaz-serwis-klimatyzacji.pl/klimatyzatory-scienne-gree/klimatyzator-gree-u-crown-UC09NA4-outdoor.webp",
    energyBadge: false,
    variants: [
      {
        power: "2,7", powerUrl: "2-7kw", area: "do 24 m²", areaRange: "0–24",
        index: "GWH09UB-K6DNA4A",
        coolingCapacity: "2,70 kW", heatingCapacity: "3,20 kW",
        energyCooling: "A++", energyHeating: "A++",
        seer: "7,5", scop: "4,6", effCooling: "303%", effHeating: "181%",
        coolingRange: "−18°C do 54°C", heatingRange: "−30°C do 24°C",
        powerCooling: "0,60 kW", powerHeating: "0,78 kW",
        airflow: "220 – 550 m³/h",
        noiseIndoor: "19 – 41 dB(A)", noiseOutdoor: "52 dB(A)",
        dimIndoor: "860 × 305 × 170", dimOutdoor: "899 × 596 × 378",
        price: "5 499"
      },
      {
        power: "3,5", powerUrl: "3-5kw", area: "25 – 34 m²", areaRange: "25–34",
        index: "GWH12UB-K6DNA4A",
        coolingCapacity: "3,53 kW", heatingCapacity: "4,00 kW",
        energyCooling: "A++", energyHeating: "A++",
        seer: "7,2", scop: "4,6", effCooling: "291%", effHeating: "181%",
        coolingRange: "−18°C do 54°C", heatingRange: "−30°C do 24°C",
        powerCooling: "0,88 kW", powerHeating: "1,00 kW",
        airflow: "200 – 650 m³/h",
        noiseIndoor: "19 – 42 dB(A)", noiseOutdoor: "53 dB(A)",
        dimIndoor: "860 × 305 × 170", dimOutdoor: "899 × 596 × 378",
        price: "5 999"
      },
      {
        power: "5,3", powerUrl: "5-3kw", area: "35 – 49 m²", areaRange: "35–49",
        index: "GWH18UC-K6DNA4A",
        coolingCapacity: "5,30 kW", heatingCapacity: "5,30 kW",
        energyCooling: "A++", energyHeating: "A+",
        seer: "6,8", scop: "4,0", effCooling: "275%", effHeating: "157%",
        coolingRange: "−18°C do 54°C", heatingRange: "−30°C do 24°C",
        powerCooling: "1,45 kW", powerHeating: "1,43 kW",
        airflow: "340 – 850 m³/h",
        noiseIndoor: "21 – 46 dB(A)", noiseOutdoor: "57 dB(A)",
        dimIndoor: "960 × 320 × 205", dimOutdoor: "965 × 700 × 396",
        price: "7 299"
      }
    ]
  },

  // ─── AIRY ───
  {
    series: "Airy",
    slug: "airy",
    tagline: "Technologia G-AI Plus 2.0",
    subtitle: "Sztuczna inteligencja i hybrydowe odszranianie HDT",
    colors: ["Biały", "Szampański", "Grafitowy", "Szary"],
    specUrl: "https://gree.pl/produkt/klimatyzator-airy/",
    features: [
      { icon: "🔇", title: "Cicha praca", desc: "Komfortowa cisza w każdym pomieszczeniu." },
      { icon: "🧹", title: "Samooczyszczanie", desc: "Automatyczne czyszczenie wymiennika ciepła." },
      { icon: "🌡️", title: "Odczyt temperatury z pilota", desc: "Czujnik w pilocie mierzy temperaturę wokół użytkownika." },
      { icon: "🏠", title: "Utrzymanie +8°C", desc: "Utrzymanie stałej temperatury dyżurnej w budynkach sezonowych." },
      { icon: "🌬️", title: "7 biegów wentylatora", desc: "Precyzyjna regulacja siły nawiewu powietrza." },
      { icon: "☀️", title: "Oczyszczanie LED UV", desc: "Sterylizacja powietrza lampą LED UV." },
      { icon: "💧", title: "Osuszanie", desc: "Funkcja osuszania powietrza utrzymująca komfortową wilgotność." },
      { icon: "🌙", title: "Tryb pracy nocnej", desc: "Komfortowy sen dzięki trybowi nocnemu." },
      { icon: "🌿", title: "System filtrów", desc: "Zaawansowana filtracja powietrza dla zdrowego klimatu." },
      { icon: "⚡", title: "Jonizator Cold Plasma", desc: "Jonizacja powietrza eliminująca kurz i drobnoustroje." }
    ],
    images: [
      { url: "https://montaz-serwis-klimatyzacji.pl/klimatyzatory-scienne-gree/klimatyzator-scienny-gree-airy-GWH09AVCXB-K6DNA1B-kolor-bialy-indoor.webp", label: "Biały", type: "indoor" },
      { url: "https://montaz-serwis-klimatyzacji.pl/klimatyzatory-scienne-gree/klimatyzator-scienny-gree-airy-GWH09AVDXE-K6DNA1A-kolor-szampanski-indoor.webp", label: "Szampański", type: "indoor" },
      { url: "https://montaz-serwis-klimatyzacji.pl/klimatyzatory-scienne-gree/klimatyzator-scienny-gree-airy-GWH09AVEXF-K6DNA1A-kolor-grafitowy-indoor.webp", label: "Grafitowy", type: "indoor" },
      { url: "https://montaz-serwis-klimatyzacji.pl/klimatyzatory-scienne-gree/klimatyzator-scienny-gree-airy-GWH09AVEXF-K6DNA1A-kolor-szary-indoor.webp", label: "Szary", type: "indoor" }
    ],
    outdoorImage: "https://montaz-serwis-klimatyzacji.pl/klimatyzatory-scienne-gree/klimatyzator-gree-airy-AV09NA1-outdoor.webp",
    energyBadge: false,
    variants: [
      {
        power: "2,7", powerUrl: "2-7kw", area: "do 24 m²", areaRange: "0–24",
        index: "GWH09AVCXB-K6DNA1B",
        coolingCapacity: "2,70 kW", heatingCapacity: "3,00 kW",
        energyCooling: "A+++", energyHeating: "A++",
        seer: "8,5", scop: "4,6", effCooling: "344%", effHeating: "181%",
        coolingRange: "−15°C do 52°C", heatingRange: "−25°C do 24°C",
        powerCooling: "0,60 kW", powerHeating: "0,68 kW",
        airflow: "250 – 600 m³/h",
        noiseIndoor: "20 – 40 dB(A)", noiseOutdoor: "52 dB(A)",
        dimIndoor: "860 × 295 × 215", dimOutdoor: "720 × 540 × 275",
        price: "5 999"
      },
      {
        power: "3,5", powerUrl: "3-5kw", area: "25 – 34 m²", areaRange: "25–34",
        index: "GWH12AVCXD-K6DNA1A",
        coolingCapacity: "3,51 kW", heatingCapacity: "3,81 kW",
        energyCooling: "A+++", energyHeating: "A++",
        seer: "7,2", scop: "4,6", effCooling: "288%", effHeating: "184%",
        coolingRange: "−15°C do 52°C", heatingRange: "−25°C do 24°C",
        powerCooling: "0,88 kW", powerHeating: "0,95 kW",
        airflow: "280 – 680 m³/h",
        noiseIndoor: "22 – 42 dB(A)", noiseOutdoor: "54 dB(A)",
        dimIndoor: "860 × 295 × 215", dimOutdoor: "770 × 545 × 280",
        price: "6 499"
      },
      {
        power: "5,3", powerUrl: "5-3kw", area: "35 – 49 m²", areaRange: "35–49",
        index: "GWH18AVDXE-K6DNA1A",
        coolingCapacity: "5,30 kW", heatingCapacity: "5,60 kW",
        energyCooling: "A+++", energyHeating: "A++",
        seer: "7,3", scop: "4,6", effCooling: "292%", effHeating: "184%",
        coolingRange: "−15°C do 52°C", heatingRange: "−25°C do 24°C",
        powerCooling: "1,47 kW", powerHeating: "1,37 kW",
        airflow: "350 – 900 m³/h",
        noiseIndoor: "26 – 45 dB(A)", noiseOutdoor: "56 dB(A)",
        dimIndoor: "940 × 310 × 225", dimOutdoor: "845 × 700 × 320",
        price: "7 999"
      },
      {
        power: "7,1", powerUrl: "7-1kw", area: "50 – 80 m²", areaRange: "50–80",
        index: "GWH24AVEXF-K6DNA1A",
        coolingCapacity: "7,10 kW", heatingCapacity: "7,80 kW",
        energyCooling: "A+++", energyHeating: "A++",
        seer: "7,0", scop: "4,6", effCooling: "280%", effHeating: "184%",
        coolingRange: "−15°C do 52°C", heatingRange: "−25°C do 24°C",
        powerCooling: "1,87 kW", powerHeating: "1,90 kW",
        airflow: "450 – 1200 m³/h",
        noiseIndoor: "30 – 48 dB(A)", noiseOutdoor: "58 dB(A)",
        dimIndoor: "1050 × 340 × 250", dimOutdoor: "899 × 780 × 378",
        price: "9 499"
      }
    ]
  },

  // ─── CLIVIA ───
  {
    series: "Clivia",
    slug: "clivia",
    tagline: "Technologia G-AI",
    subtitle: "Inteligencja, zdrowie i oszczędność",
    colors: ["Biały", "Beżowy", "Granatowy", "Satynowa czerń", "Srebrny"],
    specUrl: "https://gree.pl/produkt/klimatyzator-scienny-clivia/",
    features: [
      { icon: "🤖", title: "Technologia G-AI", desc: "Sztuczna inteligencja optymalizująca pracę i oszczędność do 10% energii." },
      { icon: "🔬", title: "Lampa LED UVC", desc: "Sterylizacja powietrza eliminująca bakterie, wirusy i pleśń." },
      { icon: "⚡", title: "Jonizator", desc: "Jonizacja powietrza eliminująca kurz i zwalczająca drobnoustroje." },
      { icon: "💧", title: "Kontrola wilgotności", desc: "Utrzymanie komfortowego poziomu wilgotności w pomieszczeniu." },
      { icon: "🔇", title: "Cicha praca", desc: "Zaledwie 19 dB(A) w trybie cichym – idealna do sypialni." },
      { icon: "❄️", title: "Grzanie do −25°C", desc: "Efektywne ogrzewanie nawet przy ekstremalnie niskiej temperaturze." },
      { icon: "🎨", title: "5 kolorów", desc: "Biały, Srebrny, Granatowy, Beżowy i Satynowa Czerń do wyboru." },
      { icon: "🌬️", title: "7 biegów wentylatora", desc: "Precyzyjna regulacja siły nawiewu oraz 3 tryby snu." },
      { icon: "🏠", title: "Utrzymanie +8°C", desc: "Utrzymanie stałej temperatury dyżurnej w budynkach sezonowych." },
      { icon: "📶", title: "Wi-Fi + Pilot IR", desc: "Zdalne sterowanie aplikacją Gree+ lub klasycznym pilotem w zestawie." }
    ],
    images: [
      { url: "https://montaz-serwis-klimatyzacji.pl/klimatyzatory-scienne-gree/klimatyzator-gree-clivia-{INDEX}-bialy-indoor.webp", label: "Biały", type: "indoor", useIndex: true },
      { url: "https://montaz-serwis-klimatyzacji.pl/klimatyzatory-scienne-gree/klimatyzator-gree-clivia-{INDEX}-kolor-bezowy-indoor.webp", label: "Beżowy", type: "indoor", useIndex: true },
      { url: "https://montaz-serwis-klimatyzacji.pl/klimatyzatory-scienne-gree/klimatyzator-gree-clivia-{INDEX}-kolor-granatowy-indoor.webp", label: "Granatowy", type: "indoor", useIndex: true },
      { url: "https://montaz-serwis-klimatyzacji.pl/klimatyzatory-scienne-gree/klimatyzator-gree-clivia-{INDEX}-kolor-satynowa-czern-indoor.webp", label: "Satynowa czerń", type: "indoor", useIndex: true },
      { url: "https://montaz-serwis-klimatyzacji.pl/klimatyzatory-scienne-gree/klimatyzator-gree-clivia-{INDEX}-kolor-srebrny-indoor.webp", label: "Srebrny", type: "indoor", useIndex: true }
    ],
    outdoorImage: "https://montaz-serwis-klimatyzacji.pl/klimatyzatory-scienne-gree/klimatyzator-gree-clivia-outdoor.webp",
    energyBadge: false,
    variants: [
      {
        power: "2,7", powerUrl: "2-7kw", area: "do 27 m²", areaRange: "0–27",
        index: "GWH09AUCXB-K6DNA1AA",
        coolingCapacity: "2,70 kW", heatingCapacity: "3,00 kW",
        energyCooling: "A+++", energyHeating: "A++",
        seer: "8,5", scop: "4,6", effCooling: "343%", effHeating: "181%",
        coolingRange: "−15°C do 50°C", heatingRange: "−25°C do 30°C",
        powerCooling: "0,67 kW", powerHeating: "0,68 kW",
        airflow: "180 – 610 m³/h",
        noiseIndoor: "19 – 38 dB(A)", noiseOutdoor: "50 dB(A)",
        dimIndoor: "837 × 293 × 200", dimOutdoor: "732 × 555 × 330",
        price: "5 999"
      },
      {
        power: "3,5", powerUrl: "3-5kw", area: "28 – 35 m²", areaRange: "28–35",
        index: "GWH12AUCXB-K6DNA1A",
        coolingCapacity: "3,51 kW", heatingCapacity: "3,81 kW",
        energyCooling: "A++", energyHeating: "A+",
        seer: "7,2", scop: "4,1", effCooling: "290%", effHeating: "161%",
        coolingRange: "−15°C do 50°C", heatingRange: "−25°C do 30°C",
        powerCooling: "0,99 kW", powerHeating: "0,98 kW",
        airflow: "220 – 680 m³/h",
        noiseIndoor: "19 – 41 dB(A)", noiseOutdoor: "56 dB(A)",
        dimIndoor: "837 × 293 × 200", dimOutdoor: "732 × 555 × 330",
        price: "6 299"
      },
      {
        power: "5,3", powerUrl: "5-3kw", area: "36 – 53 m²", areaRange: "36–53",
        index: "GWH18AUDXD-K6DNA1A",
        coolingCapacity: "5,30 kW", heatingCapacity: "5,35 kW",
        energyCooling: "A++", energyHeating: "A+",
        seer: "7,0", scop: "4,2", effCooling: "282%", effHeating: "165%",
        coolingRange: "−15°C do 50°C", heatingRange: "−25°C do 30°C",
        powerCooling: "1,58 kW", powerHeating: "1,39 kW",
        airflow: "260 – 1000 m³/h",
        noiseIndoor: "23 – 45 dB(A)", noiseOutdoor: "56 dB(A)",
        dimIndoor: "993 × 311 × 222", dimOutdoor: "802 × 555 × 350",
        price: "7 499"
      },
      {
        power: "7,1", powerUrl: "7-1kw", area: "54 – 71 m²", areaRange: "54–71",
        index: "GWH24AUDXF-K6DNA1A",
        coolingCapacity: "7,10 kW", heatingCapacity: "7,30 kW",
        energyCooling: "A++", energyHeating: "A+",
        seer: "7,0", scop: "4,3", effCooling: "282%", effHeating: "169%",
        coolingRange: "−15°C do 50°C", heatingRange: "−25°C do 30°C",
        powerCooling: "2,03 kW", powerHeating: "1,87 kW",
        airflow: "280 – 1000 m³/h",
        noiseIndoor: "27 – 48 dB(A)", noiseOutdoor: "59 dB(A)",
        dimIndoor: "993 × 311 × 222", dimOutdoor: "958 × 660 × 402",
        price: "8 499"
      }
    ]
  },

  // ─── FAIRY ───
  {
    series: "Fairy",
    slug: "fairy",
    tagline: "Elegancki design",
    subtitle: "Elegancki wygląd i nowoczesne funkcje",
    colors: ["Biały", "Srebrny", "Czarny"],
    specUrl: "https://gree.pl/produkt/klimatyzator-fairy/",
    features: [
      { icon: "💡", title: "Oszczędzanie energii", desc: "Wysoka klasa energetyczna zapewniająca niskie koszty eksploatacji." },
      { icon: "🔇", title: "Cicha praca", desc: "Komfortowa cisza w każdym pomieszczeniu." },
      { icon: "❄️", title: "Grzanie w −25°C", desc: "Efektywne ogrzewanie nawet przy ekstremalnie niskiej temperaturze." },
      { icon: "🔥", title: "Chłodzenie w 50°C", desc: "Wydajne chłodzenie nawet w największe upały." },
      { icon: "⚡", title: "Jonizator powietrza", desc: "Jonizacja powietrza eliminująca kurz i drobnoustroje." },
      { icon: "🧹", title: "Samooczyszczanie", desc: "Automatyczne czyszczenie wymiennika ciepła." },
      { icon: "🌬️", title: "7 biegów wentylatora", desc: "Precyzyjna regulacja siły nawiewu powietrza." },
      { icon: "🔀", title: "Żaluzja pionowa i pozioma", desc: "Automatyczna regulacja kierunku nawiewu w pionie i poziomie." },
      { icon: "🏠", title: "Utrzymanie +8°C", desc: "Utrzymanie stałej temperatury dyżurnej w budynkach sezonowych." },
      { icon: "📶", title: "Wi-Fi w standardzie", desc: "Zdalne sterowanie aplikacją Gree+ ze smartfona." }
    ],
    images: [
      { url: "https://montaz-serwis-klimatyzacji.pl/klimatyzatory-scienne-gree/klimatyzator-gree-fairy-kolor-bialy-indoor.webp", label: "Biały", type: "indoor" },
      { url: "https://montaz-serwis-klimatyzacji.pl/klimatyzatory-scienne-gree/klimatyzator-gree-fairy-kolor-srebrny-indoor.webp", label: "Srebrny", type: "indoor" },
      { url: "https://montaz-serwis-klimatyzacji.pl/klimatyzatory-scienne-gree/klimatyzator-gree-fairy-kolor-czarny-dark-indoor.webp", label: "Czarny", type: "indoor" }
    ],
    outdoorImage: "https://montaz-serwis-klimatyzacji.pl/klimatyzatory-scienne-gree/klimatyzator-gree-fairy-outdoor.webp",
    energyBadge: false,
    variants: [
      {
        power: "2,7", powerUrl: "2-7kw", area: "do 27 m²", areaRange: "0–27",
        index: "GWH09ACC-K6DNA1F",
        coolingCapacity: "2,70 kW", heatingCapacity: "3,00 kW",
        energyCooling: "A++", energyHeating: "A+",
        seer: "7,5", scop: "4,2", effCooling: "300%", effHeating: "168%",
        coolingRange: "−15°C do 50°C", heatingRange: "−25°C do 30°C",
        powerCooling: "0,70 kW", powerHeating: "0,70 kW",
        airflow: "390 – 610 m³/h",
        noiseIndoor: "25 – 38 dB(A)", noiseOutdoor: "50 dB(A)",
        dimIndoor: "889 × 294 × 212", dimOutdoor: "732 × 555 × 330",
        price: "4 799"
      },
      {
        power: "3,5", powerUrl: "3-5kw", area: "28 – 35 m²", areaRange: "28–35",
        index: "GWH12ACC-K6DNA1F",
        coolingCapacity: "3,51 kW", heatingCapacity: "3,81 kW",
        energyCooling: "A++", energyHeating: "A+",
        seer: "7,1", scop: "4,1", effCooling: "284%", effHeating: "164%",
        coolingRange: "−15°C do 50°C", heatingRange: "−25°C do 30°C",
        powerCooling: "0,96 kW", powerHeating: "0,95 kW",
        airflow: "360 – 700 m³/h",
        noiseIndoor: "25 – 42 dB(A)", noiseOutdoor: "52 dB(A)",
        dimIndoor: "889 × 294 × 212", dimOutdoor: "732 × 555 × 330",
        price: "5 199"
      },
      {
        power: "5,3", powerUrl: "5-3kw", area: "36 – 53 m²", areaRange: "36–53",
        index: "GWH18ACDXF-K6DNA1A",
        coolingCapacity: "5,30 kW", heatingCapacity: "5,60 kW",
        energyCooling: "A++", energyHeating: "A+",
        seer: "7,6", scop: "4,3", effCooling: "304%", effHeating: "172%",
        coolingRange: "−15°C do 50°C", heatingRange: "−25°C do 30°C",
        powerCooling: "1,41 kW", powerHeating: "1,33 kW",
        airflow: "460 – 850 m³/h",
        noiseIndoor: "31 – 43 dB(A)", noiseOutdoor: "57 dB(A)",
        dimIndoor: "1013 × 307 × 221", dimOutdoor: "958 × 660 × 402",
        price: "6 499"
      }
    ]
  },

  // ─── G-TECH ───
  {
    series: "G-Tech",
    slug: "g-tech",
    tagline: "Rewolucja w serwisowaniu",
    subtitle: "Innowacyjna konstrukcja i łatwy serwis",
    colors: [],
    specUrl: "https://gree.pl/produkt/klimatyzator-g-tech/",
    features: [
      { icon: "⚡", title: "Jonizator", desc: "Jonizacja powietrza eliminująca kurz i drobnoustroje." },
      { icon: "🔇", title: "Cicha praca (20 dB(A))", desc: "Komfortowa cisza w każdym pomieszczeniu." },
      { icon: "❄️", title: "Grzanie od −22°C", desc: "Efektywne ogrzewanie nawet przy niskiej temperaturze zewnętrznej." },
      { icon: "🔥", title: "Chłodzenie do 43°C", desc: "Wydajne chłodzenie nawet w upalne dni." },
      { icon: "🔀", title: "Żaluzja 3D", desc: "Automatyczna regulacja kierunku nawiewu w trzech wymiarach." },
      { icon: "📶", title: "Wi-Fi + Pilot IR", desc: "Zdalne sterowanie aplikacją Gree+ lub klasycznym pilotem w zestawie." },
      { icon: "🧹", title: "Samoczyszczanie", desc: "Automatyczne czyszczenie wymiennika ciepła." },
      { icon: "🌙", title: "3 tryby snu", desc: "Komfortowy sen dzięki trzem trybom nocnym." },
      { icon: "🏠", title: "Utrzymanie +8°C", desc: "Utrzymanie stałej temperatury dyżurnej w budynkach sezonowych." },
      { icon: "🔬", title: "System filtrów", desc: "Zaawansowana filtracja powietrza dla zdrowego klimatu." }
    ],
    images: [
      { url: "https://montaz-serwis-klimatyzacji.pl/klimatyzatory-scienne-gree/klimatyzator-gree-g-tech-GWH09YD-S6DBA2A-kolor-rozowe-zloto-indoor.webp", label: "Różowe złoto", type: "indoor" },
      { url: "https://montaz-serwis-klimatyzacji.pl/klimatyzatory-scienne-gree/klimatyzator-gree-g-tech-GWH09YD-S6DBA2A-kolor-srebrny-indoor.webp", label: "Srebrny", type: "indoor" }
    ],
    outdoorImage: "https://montaz-serwis-klimatyzacji.pl/klimatyzatory-scienne-gree/klimatyzator-gree-g-tech-outdoor.webp",
    energyBadge: false,
    variants: [
      {
        power: "2,7", powerUrl: "2-7kw", area: "do 27 m²", areaRange: "0–27",
        index: "GWH09AEC-K6DNA1A",
        coolingCapacity: "2,70 kW", heatingCapacity: "3,20 kW",
        energyCooling: "A+++", energyHeating: "A++",
        seer: "8,5", scop: "4,6", effCooling: "344%", effHeating: "181%",
        coolingRange: "−15°C do 43°C", heatingRange: "−22°C do 24°C",
        powerCooling: "0,60 kW", powerHeating: "0,72 kW",
        airflow: "150 – 735 m³/h",
        noiseIndoor: "20 – 43 dB(A)", noiseOutdoor: "52 dB(A)",
        dimIndoor: "945 × 293 × 225", dimOutdoor: "848 × 596 × 320",
        price: "5 299"
      },
      {
        power: "3,5", powerUrl: "3-5kw", area: "28 – 35 m²", areaRange: "28–35",
        index: "GWH12AEC-K6DNA1A",
        coolingCapacity: "3,50 kW", heatingCapacity: "3,81 kW",
        energyCooling: "A+++", energyHeating: "A++",
        seer: "8,5", scop: "4,6", effCooling: "344%", effHeating: "181%",
        coolingRange: "−15°C do 43°C", heatingRange: "−22°C do 24°C",
        powerCooling: "0,88 kW", powerHeating: "0,95 kW",
        airflow: "150 – 750 m³/h",
        noiseIndoor: "20 – 43 dB(A)", noiseOutdoor: "54 dB(A)",
        dimIndoor: "945 × 293 × 225", dimOutdoor: "848 × 596 × 320",
        price: "5 799"
      }
    ]
  },

  // ─── KONSOLA ───
  {
    series: "Konsola",
    slug: "konsola",
    tagline: "Konsola Free Match",
    subtitle: "Efektywne ogrzewanie i chłodzenie",
    colors: [],
    specUrl: "https://gree.pl/produkt/klimatyzator-konsola/",
    features: [
      { icon: "🌬️", title: "7 biegów wentylatora", desc: "Precyzyjna regulacja siły nawiewu powietrza." },
      { icon: "💡", title: "Oszczędzanie energii", desc: "Wysoka klasa energetyczna zapewniająca niskie koszty eksploatacji." },
      { icon: "🔥", title: "Gorący start", desc: "Natychmiastowe grzanie bez nieprzyjemnego zimnego nawiewu." },
      { icon: "🔇", title: "Cicha praca", desc: "Komfortowa cisza w każdym pomieszczeniu." },
      { icon: "🌙", title: "3 tryby snu", desc: "Komfortowy sen dzięki trzem trybom nocnym." },
      { icon: "🏠", title: "Utrzymanie +8°C", desc: "Utrzymanie stałej temperatury dyżurnej w budynkach sezonowych." },
      { icon: "💧", title: "Osuszanie", desc: "Funkcja osuszania powietrza utrzymująca komfortową wilgotność." },
      { icon: "🌡️", title: "Odczyt temperatury z pilota", desc: "Czujnik w pilocie mierzy temperaturę wokół użytkownika." },
      { icon: "🔄", title: "Autoosuszanie", desc: "Osuszanie wymiennika po pracy ogranicza rozwój drobnoustrojów." },
      { icon: "⚡", title: "Jonizator plazmowy", desc: "Jonizacja powietrza eliminująca kurz i drobnoustroje." }
    ],
    images: [
      { url: "https://montaz-serwis-klimatyzacji.pl/klimatyzatory-scienne-gree/klimatyzator-gree-konsola-kolor-bialy-indoor.webp", label: null, type: "indoor" }
    ],
    outdoorImage: "https://montaz-serwis-klimatyzacji.pl/klimatyzatory-scienne-gree/klimatyzator-gree-g-tech-outdoor.webp",
    energyBadge: false,
    variants: [
      {
        power: "2,7", powerUrl: "2-7kw", area: "do 27 m²", areaRange: "0–27",
        index: "GEH09AA-K6DNA1E/I",
        coolingCapacity: "2,70 kW", heatingCapacity: "2,80 kW",
        energyCooling: "A++", energyHeating: "A+",
        seer: "7,2", scop: "4,0", effCooling: "291%", effHeating: "160%",
        coolingRange: "−15°C do 43°C", heatingRange: "−22°C do 24°C",
        powerCooling: "0,72 kW", powerHeating: "0,73 kW",
        airflow: "250 – 500 m³/h",
        noiseIndoor: "23 – 40 dB(A)", noiseOutdoor: "49 dB(A)",
        dimIndoor: "700 × 600 × 215", dimOutdoor: "848 × 540 × 320",
        price: "5 499"
      },
      {
        power: "3,5", powerUrl: "3-5kw", area: "28 – 35 m²", areaRange: "28–35",
        index: "GEH12AA-K6DNA1E/I",
        coolingCapacity: "3,50 kW", heatingCapacity: "3,80 kW",
        energyCooling: "A++", energyHeating: "A+",
        seer: "7,0", scop: "4,1", effCooling: "283%", effHeating: "164%",
        coolingRange: "−15°C do 43°C", heatingRange: "−22°C do 24°C",
        powerCooling: "1,00 kW", powerHeating: "0,96 kW",
        airflow: "280 – 600 m³/h",
        noiseIndoor: "25 – 42 dB(A)", noiseOutdoor: "52 dB(A)",
        dimIndoor: "700 × 600 × 215", dimOutdoor: "848 × 540 × 320",
        price: "5 999"
      },
      {
        power: "5,2", powerUrl: "5-2kw", area: "36 – 52 m²", areaRange: "36–52",
        index: "GEH18AA-K6DNA1E/I",
        coolingCapacity: "5,20 kW", heatingCapacity: "5,30 kW",
        energyCooling: "A++", energyHeating: "A+",
        seer: "6,6", scop: "4,1", effCooling: "267%", effHeating: "164%",
        coolingRange: "−15°C do 43°C", heatingRange: "−22°C do 24°C",
        powerCooling: "1,55 kW", powerHeating: "1,50 kW",
        airflow: "320 – 700 m³/h",
        noiseIndoor: "31 – 47 dB(A)", noiseOutdoor: "57 dB(A)",
        dimIndoor: "700 × 600 × 215", dimOutdoor: "899 × 700 × 378",
        price: "6 999"
      }
    ]
  },

  // ─── LOMO LUXURY PLUS ───
  {
    series: "Lomo Luxury Plus",
    slug: "lomo-luxury-plus",
    tagline: "Komfort z każdej strony",
    subtitle: "Same plusy dla Ciebie!",
    colors: [],
    specUrl: "https://gree.pl/produkt/klimatyzator-lomo-luxury-plus/",
    features: [
      { icon: "🔬", title: "System filtrów", desc: "Zaawansowana filtracja powietrza dla zdrowego klimatu." },
      { icon: "🔇", title: "Cicha praca", desc: "Komfortowa cisza w każdym pomieszczeniu." },
      { icon: "⚡", title: "Jonizator", desc: "Jonizacja powietrza eliminująca kurz i drobnoustroje." },
      { icon: "🔥", title: "Chłodzenie do 50°C", desc: "Wydajne chłodzenie nawet w największe upały." },
      { icon: "🔀", title: "Pionowa i pozioma żaluzja", desc: "Automatyczna regulacja kierunku nawiewu w pionie i poziomie." },
      { icon: "🔄", title: "Autoosuszanie", desc: "Osuszanie wymiennika po pracy ogranicza rozwój drobnoustrojów." },
      { icon: "🌬️", title: "7 biegów wentylatora", desc: "Precyzyjna regulacja siły nawiewu powietrza." },
      { icon: "🌙", title: "3 tryby snu", desc: "Komfortowy sen dzięki trzem trybom nocnym." },
      { icon: "🏠", title: "Utrzymanie +8°C", desc: "Utrzymanie stałej temperatury dyżurnej w budynkach sezonowych." },
      { icon: "💧", title: "Osuszanie", desc: "Funkcja osuszania powietrza utrzymująca komfortową wilgotność." }
    ],
    images: [
      { url: "https://montaz-serwis-klimatyzacji.pl/klimatyzatory-scienne-gree/klimatyzator-scienny-gree-lomo-luxury-plus-gwh12qc-k6dnb2f-indoor.webp", label: null, type: "indoor" }
    ],
    outdoorImage: "https://montaz-serwis-klimatyzacji.pl/klimatyzatory-scienne-gree/klimatyzator-gree-lomo-luxury-plus-outdoor.webp",
    energyBadge: true,
    variants: [
      {
        power: "2,7", powerUrl: "2-7kw", area: "do 27 m²", areaRange: "0–27",
        index: "GWH09QC-K6DNB2F",
        coolingCapacity: "2,70 kW", heatingCapacity: "3,00 kW",
        energyCooling: "A++", energyHeating: "A+",
        seer: "6,2", scop: "4,0", effCooling: "250%", effHeating: "157%",
        coolingRange: "−15°C do 50°C", heatingRange: "−22°C do 24°C",
        powerCooling: "0,70 kW", powerHeating: "0,70 kW",
        airflow: "390 – 610 m³/h",
        noiseIndoor: "25 – 38 dB(A)", noiseOutdoor: "52 dB(A)",
        dimIndoor: "845 × 289 × 209", dimOutdoor: "732 × 555 × 330",
        price: "4 299"
      },
      {
        power: "3,5", powerUrl: "3-5kw", area: "28 – 35 m²", areaRange: "28–35",
        index: "GWH12QC-K6DNB2F",
        coolingCapacity: "3,51 kW", heatingCapacity: "3,81 kW",
        energyCooling: "A++", energyHeating: "A+",
        seer: "6,2", scop: "4,0", effCooling: "250%", effHeating: "157%",
        coolingRange: "−15°C do 50°C", heatingRange: "−22°C do 24°C",
        powerCooling: "0,96 kW", powerHeating: "0,95 kW",
        airflow: "360 – 700 m³/h",
        noiseIndoor: "25 – 42 dB(A)", noiseOutdoor: "54 dB(A)",
        dimIndoor: "845 × 289 × 209", dimOutdoor: "732 × 555 × 330",
        price: "4 699"
      },
      {
        power: "5,2", powerUrl: "5-2kw", area: "36 – 52 m²", areaRange: "36–52",
        index: "GWH18QD-K6DNB2I",
        coolingCapacity: "5,20 kW", heatingCapacity: "5,60 kW",
        energyCooling: "A++", energyHeating: "A+",
        seer: "6,2", scop: "4,0", effCooling: "250%", effHeating: "157%",
        coolingRange: "−15°C do 50°C", heatingRange: "−22°C do 24°C",
        powerCooling: "1,58 kW", powerHeating: "1,44 kW",
        airflow: "460 – 850 m³/h",
        noiseIndoor: "30 – 44 dB(A)", noiseOutdoor: "56 dB(A)",
        dimIndoor: "970 × 300 × 224", dimOutdoor: "802 × 555 × 350",
        price: "5 999"
      },
      {
        power: "7,1", powerUrl: "7-1kw", area: "53 – 71 m²", areaRange: "53–71",
        index: "GWH24QE-K6DNB2I",
        coolingCapacity: "7,10 kW", heatingCapacity: "7,80 kW",
        energyCooling: "A++", energyHeating: "A+",
        seer: "6,2", scop: "4,0", effCooling: "250%", effHeating: "157%",
        coolingRange: "−15°C do 50°C", heatingRange: "−22°C do 24°C",
        powerCooling: "2,03 kW", powerHeating: "2,00 kW",
        airflow: "800 – 1250 m³/h",
        noiseIndoor: "33 – 48 dB(A)", noiseOutdoor: "58 dB(A)",
        dimIndoor: "1078 × 325 × 246", dimOutdoor: "958 × 660 × 402",
        price: "7 499"
      }
    ]
  },

  // ─── PULAR ───
  {
    series: "Pular",
    slug: "pular",
    tagline: "Bestseller 2024",
    subtitle: "Najczęściej wybierany klimatyzator",
    colors: ["Biały"],
    specUrl: "https://gree.pl/produkt/klimatyzator-pular/",
    features: [
      { icon: "🔇", title: "Cicha praca", desc: "Komfortowa cisza w każdym pomieszczeniu." },
      { icon: "🧹", title: "Samooczyszczanie", desc: "Automatyczne czyszczenie wymiennika ciepła." },
      { icon: "⚡", title: "Jonizator", desc: "Jonizacja powietrza eliminująca kurz i drobnoustroje." },
      { icon: "💡", title: "Mniej prądu", desc: "Wysoka klasa energetyczna zapewniająca niskie koszty eksploatacji." },
      { icon: "🌙", title: "3 tryby snu", desc: "Komfortowy sen dzięki trzem trybom nocnym." },
      { icon: "🔬", title: "Filtry", desc: "System filtrów dla zdrowego klimatu w pomieszczeniu." },
      { icon: "💧", title: "Osuszanie", desc: "Funkcja osuszania powietrza utrzymująca komfortową wilgotność." },
      { icon: "🏠", title: "Utrzymanie +8°C", desc: "Utrzymanie stałej temperatury dyżurnej w budynkach sezonowych." },
      { icon: "🌡️", title: "Odczyt temp. z pilota", desc: "Czujnik w pilocie mierzy temperaturę wokół użytkownika." },
      { icon: "🔥", title: "Gorący start", desc: "Natychmiastowe grzanie bez nieprzyjemnego zimnego nawiewu." }
    ],
    images: [
      { url: "https://montaz-serwis-klimatyzacji.pl/klimatyzatory-scienne-gree/klimatyzator-gree-pular-GWH09AGAXB-K6DNA1B-indoor.webp", label: null, type: "indoor" }
    ],
    outdoorImage: "https://montaz-serwis-klimatyzacji.pl/klimatyzatory-scienne-gree/klimatyzator-gree-pular-jednostka-zewn%C4%99trzna-outdoor.webp",
    energyBadge: true,
    variants: [
      {
        power: "2,5", powerUrl: "2-5kw", area: "do 25 m²", areaRange: "0–25",
        index: "GWH09AGAXB-K6DNA1B",
        coolingCapacity: "2,50 kW", heatingCapacity: "2,80 kW",
        energyCooling: "A++", energyHeating: "A+",
        seer: "6,50", scop: "4,00", effCooling: "263%", effHeating: "157%",
        coolingRange: "−15°C do 43°C", heatingRange: "−15°C do 24°C",
        powerCooling: "0,68 kW", powerHeating: "0,73 kW",
        airflow: "250 – 500 m³/h",
        noiseIndoor: "21 – 38 dB(A)", noiseOutdoor: "51 dB(A)",
        dimIndoor: "704 × 260 × 185", dimOutdoor: "732 × 550 × 330",
        price: "4 299"
      },
      {
        power: "3,2", powerUrl: "3-2kw", area: "26 – 32 m²", areaRange: "26–32",
        index: "GWH12AGBXB-K6DNA1A",
        coolingCapacity: "3,20 kW", heatingCapacity: "3,40 kW",
        energyCooling: "A++", energyHeating: "A+",
        seer: "6,10", scop: "4,00", effCooling: "247%", effHeating: "157%",
        coolingRange: "−15°C do 43°C", heatingRange: "−15°C do 24°C",
        powerCooling: "0,99 kW", powerHeating: "0,92 kW",
        airflow: "280 – 590 m³/h",
        noiseIndoor: "24 – 41 dB(A)", noiseOutdoor: "51 dB(A)",
        dimIndoor: "779 × 260 × 185", dimOutdoor: "732 × 550 × 330",
        price: "4 799"
      },
      {
        power: "4,6", powerUrl: "4-6kw", area: "33 – 46 m²", areaRange: "33–46",
        index: "GWH18AGD-K6DNA1D",
        coolingCapacity: "4,60 kW", heatingCapacity: "5,20 kW",
        energyCooling: "A++", energyHeating: "A+",
        seer: "6,40", scop: "4,00", effCooling: "259%", effHeating: "157%",
        coolingRange: "−15°C do 43°C", heatingRange: "−15°C do 24°C",
        powerCooling: "1,36 kW", powerHeating: "1,34 kW",
        airflow: "610 – 910 m³/h",
        noiseIndoor: "29 – 43 dB(A)", noiseOutdoor: "55 dB(A)",
        dimIndoor: "982 × 311 × 221", dimOutdoor: "732 × 550 × 330",
        price: "5 499"
      },
      {
        power: "6,2", powerUrl: "6-2kw", area: "47 – 62 m²", areaRange: "47–62",
        index: "GWH24AGD-K6DNA1C",
        coolingCapacity: "6,20 kW", heatingCapacity: "6,50 kW",
        energyCooling: "A++", energyHeating: "A+",
        seer: "6,80", scop: "4,00", effCooling: "275%", effHeating: "157%",
        coolingRange: "−15°C do 43°C", heatingRange: "−15°C do 24°C",
        powerCooling: "1,79 kW", powerHeating: "1,65 kW",
        airflow: "500 – 950 m³/h",
        noiseIndoor: "30 – 46 dB(A)", noiseOutdoor: "57 dB(A)",
        dimIndoor: "982 × 311 × 221", dimOutdoor: "873 × 555 × 376",
        price: "6 499"
      }
    ]
  },

  // ─── AMBER STANDARD ───
  {
    series: "Amber Standard",
    slug: "amber-standard",
    tagline: "Luksus w standardzie",
    subtitle: "Elegancja i imponujące parametry techniczne",
    colors: ["Biały", "Srebrny", "Czarno-srebrny", "Czarny"],
    specUrl: "https://gree.pl/produkt/klimatyzator-amber-standard/",
    features: [
      { icon: "🔇", title: "Cicha praca", desc: "Komfortowa cisza w każdym pomieszczeniu." },
      { icon: "🧹", title: "Samooczyszczanie", desc: "Automatyczne czyszczenie wymiennika ciepła." },
      { icon: "🌡️", title: "Odczyt temperatury z pilota", desc: "Czujnik w pilocie mierzy temperaturę wokół użytkownika." },
      { icon: "🏠", title: "Utrzymanie +8°C", desc: "Utrzymanie stałej temperatury dyżurnej w budynkach sezonowych." },
      { icon: "🌬️", title: "7 biegów wentylatora", desc: "Precyzyjna regulacja siły nawiewu powietrza." },
      { icon: "💡", title: "Oszczędzanie energii", desc: "Wysoka klasa energetyczna zapewniająca niskie koszty eksploatacji." },
      { icon: "💧", title: "Osuszanie", desc: "Funkcja osuszania powietrza utrzymująca komfortową wilgotność." },
      { icon: "🌙", title: "3 tryby snu", desc: "Komfortowy sen dzięki trzem trybom nocnym." },
      { icon: "🔀", title: "Żaluzja pionowa i pozioma", desc: "Automatyczna regulacja kierunku nawiewu w pionie i poziomie." },
      { icon: "⚡", title: "Jonizator powietrza", desc: "Jonizacja powietrza eliminująca kurz i drobnoustroje." }
    ],
    images: [
      { url: "https://montaz-serwis-klimatyzacji.pl/klimatyzatory-scienne-gree/klimatyzator-gree-amber-standard-kolor-bialy-indoor.webp", label: "Biały", type: "indoor" },
      { url: "https://montaz-serwis-klimatyzacji.pl/klimatyzatory-scienne-gree/klimatyzator-gree-amber-standard-kolor-srebrny-indoor.webp", label: "Srebrny", type: "indoor" },
      { url: "https://montaz-serwis-klimatyzacji.pl/klimatyzatory-scienne-gree/klimatyzator-gree-amber-standard-kolor-czarny-indoor.webp", label: "Czarno-srebrny", type: "indoor" },
      { url: "https://montaz-serwis-klimatyzacji.pl/klimatyzatory-scienne-gree/klimatyzator-gree-amber-standard-kolor-caly-czarny-indoor.webp", label: "Czarny", type: "indoor" }
    ],
    outdoorImage: "https://montaz-serwis-klimatyzacji.pl/klimatyzatory-scienne-gree/klimatyzator-gree-amber-standard-outdoor.webp",
    energyBadge: false,
    variants: [
      {
        power: "2,7", powerUrl: "2-7kw", area: "do 27 m²", areaRange: "0–27",
        index: "GWH09YC-K6DNA1A",
        coolingCapacity: "2,70 kW", heatingCapacity: "2,93 kW",
        energyCooling: "A+++", energyHeating: "A++",
        seer: "8,5", scop: "4,6", effCooling: "340%", effHeating: "184%",
        coolingRange: "−15°C do 43°C", heatingRange: "−22°C do 24°C",
        powerCooling: "0,59 kW", powerHeating: "0,65 kW",
        airflow: "390 – 660 m³/h",
        noiseIndoor: "24 – 41 dB(A)", noiseOutdoor: "52 dB(A)",
        dimIndoor: "865 × 290 × 210", dimOutdoor: "848 × 596 × 320",
        price: "4 799"
      },
      {
        power: "3,5", powerUrl: "3-5kw", area: "28 – 35 m²", areaRange: "28–35",
        index: "GWH12YC-K6DNA1A",
        coolingCapacity: "3,50 kW", heatingCapacity: "3,81 kW",
        energyCooling: "A+++", energyHeating: "A+",
        seer: "8,5", scop: "4,4", effCooling: "340%", effHeating: "176%",
        coolingRange: "−15°C do 43°C", heatingRange: "−22°C do 24°C",
        powerCooling: "0,95 kW", powerHeating: "0,98 kW",
        airflow: "390 – 680 m³/h",
        noiseIndoor: "25 – 43 dB(A)", noiseOutdoor: "53 dB(A)",
        dimIndoor: "865 × 290 × 210", dimOutdoor: "848 × 596 × 320",
        price: "5 199"
      },
      {
        power: "5,3", powerUrl: "5-3kw", area: "36 – 53 m²", areaRange: "36–53",
        index: "GWH18YD-K6DNA1A",
        coolingCapacity: "5,30 kW", heatingCapacity: "5,57 kW",
        energyCooling: "A++", energyHeating: "A+",
        seer: "7,6", scop: "4,1", effCooling: "304%", effHeating: "164%",
        coolingRange: "−15°C do 43°C", heatingRange: "−22°C do 24°C",
        powerCooling: "1,55 kW", powerHeating: "1,43 kW",
        airflow: "306 – 850 m³/h",
        noiseIndoor: "34 – 49 dB(A)", noiseOutdoor: "57 dB(A)",
        dimIndoor: "996 × 301 × 225", dimOutdoor: "965 × 700 × 396",
        price: "6 499"
      }
    ]
  },

  // ─── COSMO PEARL ───
  {
    series: "Cosmo Pearl",
    slug: "cosmo-pearl",
    tagline: "Perłowa elegancja",
    subtitle: "Perłowy design i technologia Colasma",
    colors: ["Perłowy"],
    specUrl: "https://gree.pl/produkt/klimatyzator-scienny-cosmo-pearl/",
    features: [
      { icon: "🔇", title: "Tryb ultra cichy", desc: "Głośność od 18 dB(A). Idealna cisza w sypialni." },
      { icon: "⚡", title: "Jonizator", desc: "Innowacyjna jonizacja powietrza. Hamuje bakterie i usuwa zapachy." },
      { icon: "💡", title: "Oszczędzanie energii (A+++)", desc: "Klasa energetyczna A+++ dla chłodzenia. Niskie koszty eksploatacji." },
      { icon: "💧", title: "Autoosuszanie", desc: "Osuszanie wymiennika po pracy. Ogranicza rozwój drobnoustrojów." },
      { icon: "🌿", title: "Filtry opcjonalne", desc: "Możliwość zastosowania dodatkowych filtrów dla lepszej jakości powietrza." },
      { icon: "🔋", title: "Ograniczenie poboru mocy", desc: "Możliwość ograniczenia maksymalnego poboru mocy." },
      { icon: "💤", title: "Tryb nocny", desc: "Komfortowy sen dzięki trybowi nocnemu." },
      { icon: "✅", title: "Certyfikat Eurovent", desc: "Potwierdzona wydajność certyfikatem Eurovent." },
      { icon: "🏠", title: "Utrzymanie +8°C", desc: "Utrzymanie stałej temperatury dyżurnej w budynkach sezonowych." },
      { icon: "✨", title: "Wykończenie perłowe", desc: "Eleganckie perłowe wykończenie dopasowane do każdego wnętrza." }
    ],
    images: [
      { url: "https://montaz-serwis-klimatyzacji.pl/klimatyzatory-scienne-gree/klimatyzator-gree-cosmo-kolor-pearl-indoor.webp", label: "Perłowy", type: "indoor" }
    ],
    outdoorImage: "https://montaz-serwis-klimatyzacji.pl/klimatyzatory-scienne-gree/klimatyzator-gree-cosmo-kolor-pearl-outdoor.webp",
    energyBadge: false,
    noSeerScop: true,
    variants: [
      {
        power: "2,7", powerUrl: "2-7kw", area: "do 24 m²", areaRange: "0–24",
        index: "GWH09AWCXB-K6DNA4G",
        coolingCapacity: "2,70 kW", heatingCapacity: "3,00 kW",
        energyCooling: "A+++", energyHeating: "A++",
        coolingRange: "−15°C do 50°C", heatingRange: "−25°C do 30°C",
        powerCooling: "0,67 kW", powerHeating: "0,67 kW",
        airflow: "180 – 610 m³/h",
        noiseIndoor: "18 – 39 dB(A)", noiseOutdoor: "—",
        dimIndoor: "867 × 276 × 206", dimOutdoor: "732 × 555 × 330",
        price: "5 999"
      },
      {
        power: "3,5", powerUrl: "3-5kw", area: "25 – 34 m²", areaRange: "25–34",
        index: "GWH12AWCXD-K6DNA4D",
        coolingCapacity: "3,50 kW", heatingCapacity: "3,80 kW",
        energyCooling: "A+++", energyHeating: "A++",
        coolingRange: "−15°C do 50°C", heatingRange: "−25°C do 30°C",
        powerCooling: "0,91 kW", powerHeating: "0,95 kW",
        airflow: "180 – 650 m³/h",
        noiseIndoor: "18 – 43 dB(A)", noiseOutdoor: "—",
        dimIndoor: "867 × 276 × 206", dimOutdoor: "802 × 555 × 350",
        price: "6 499"
      },
      {
        power: "5,1", powerUrl: "5-1kw", area: "35 – 49 m²", areaRange: "35–49",
        index: "GWH18AWDXE-K6DNA4A",
        coolingCapacity: "5,10 kW", heatingCapacity: "5,60 kW",
        energyCooling: "A+++", energyHeating: "A++",
        coolingRange: "−15°C do 50°C", heatingRange: "−25°C do 30°C",
        powerCooling: "1,47 kW", powerHeating: "1,37 kW",
        airflow: "480 – 1000 m³/h",
        noiseIndoor: "26 – 47 dB(A)", noiseOutdoor: "—",
        dimIndoor: "978 × 333 × 248", dimOutdoor: "873 × 555 × 376",
        price: "7 999"
      },
      {
        power: "7,1", powerUrl: "7-1kw", area: "50 – 80 m²", areaRange: "50–80",
        index: "GWH24AWEXF-K6DNA4A",
        coolingCapacity: "7,10 kW", heatingCapacity: "7,80 kW",
        energyCooling: "A+++", energyHeating: "A++",
        coolingRange: "−15°C do 50°C", heatingRange: "−25°C do 30°C",
        powerCooling: "1,87 kW", powerHeating: "1,90 kW",
        airflow: "600 – 1250 m³/h",
        noiseIndoor: "27 – 48 dB(A)", noiseOutdoor: "—",
        dimIndoor: "1116 × 333 × 248", dimOutdoor: "958 × 660 × 402",
        price: "9 499"
      }
    ]
  },

  // ─── PULAR PRO ───
  {
    series: "Pular Pro",
    slug: "pular-pro",
    tagline: "Inspirowany klasyką",
    subtitle: "Otwarty na nowoczesność – grzanie do −25°C",
    colors: ["Biały", "Czarny"],
    specUrl: "https://gree.pl/produkt/klimatyzator-pular-pro/",
    features: [
      { icon: "🔇", title: "Cicha praca", desc: "Komfortowa cisza w każdym pomieszczeniu." },
      { icon: "🧹", title: "Samooczyszczanie", desc: "Automatyczne czyszczenie wymiennika ciepła." },
      { icon: "🌡️", title: "Odczyt temperatury z pilota", desc: "Czujnik w pilocie mierzy temperaturę wokół użytkownika." },
      { icon: "🏠", title: "Utrzymanie +8°C", desc: "Utrzymanie stałej temperatury dyżurnej w budynkach sezonowych." },
      { icon: "🌬️", title: "7 biegów wentylatora", desc: "Precyzyjna regulacja siły nawiewu powietrza." },
      { icon: "🔀", title: "Żaluzja pionowa i pozioma", desc: "Automatyczna regulacja kierunku nawiewu w pionie i poziomie." },
      { icon: "💧", title: "Osuszanie", desc: "Funkcja osuszania powietrza utrzymująca komfortową wilgotność." },
      { icon: "🌙", title: "3 tryby snu", desc: "Komfortowy sen dzięki trzem trybom nocnym." },
      { icon: "🔥", title: "Gorący start", desc: "Natychmiastowe grzanie bez nieprzyjemnego zimnego nawiewu." },
      { icon: "⚡", title: "Jonizator powietrza", desc: "Jonizacja powietrza eliminująca kurz i drobnoustroje." }
    ],
    images: [
      { url: "https://montaz-serwis-klimatyzacji.pl/klimatyzatory-scienne-gree/klimatyzator-gree-pular-pro-kolor-bialy-indoor.webp", label: "Biały", type: "indoor" },
      { url: "https://montaz-serwis-klimatyzacji.pl/klimatyzatory-scienne-gree/klimatyzator-gree-pular-pro-kolor-dark-indoor.webp", label: "Czarny", type: "indoor" }
    ],
    outdoorImage: "https://montaz-serwis-klimatyzacji.pl/klimatyzatory-scienne-gree/klimatyzator-gree-pular-pro-outdoor.webp",
    energyBadge: false,
    variants: [
      {
        power: "2,7", powerUrl: "2-7kw", area: "do 27 m²", areaRange: "0–27",
        index: "GWH09AGC-K6DNA1F",
        coolingCapacity: "2,70 kW", heatingCapacity: "3,00 kW",
        energyCooling: "A++", energyHeating: "A+",
        seer: "7,5", scop: "4,2", effCooling: "300%", effHeating: "168%",
        coolingRange: "−15°C do 50°C", heatingRange: "−25°C do 30°C",
        powerCooling: "0,70 kW", powerHeating: "0,70 kW",
        airflow: "390 – 610 m³/h",
        noiseIndoor: "25 – 38 dB(A)", noiseOutdoor: "50 dB(A)",
        dimIndoor: "825 × 293 × 196", dimOutdoor: "732 × 555 × 330",
        price: "4 999"
      },
      {
        power: "3,5", powerUrl: "3-5kw", area: "28 – 35 m²", areaRange: "28–35",
        index: "GWH12AGC-K6DNA1F",
        coolingCapacity: "3,51 kW", heatingCapacity: "3,81 kW",
        energyCooling: "A++", energyHeating: "A+",
        seer: "7,1", scop: "4,1", effCooling: "284%", effHeating: "164%",
        coolingRange: "−15°C do 50°C", heatingRange: "−25°C do 30°C",
        powerCooling: "0,96 kW", powerHeating: "0,95 kW",
        airflow: "390 – 680 m³/h",
        noiseIndoor: "24 – 41 dB(A)", noiseOutdoor: "52 dB(A)",
        dimIndoor: "825 × 293 × 196", dimOutdoor: "732 × 555 × 330",
        price: "5 499"
      },
      {
        power: "5,3", powerUrl: "5-3kw", area: "36 – 53 m²", areaRange: "36–53",
        index: "GWH18AGD-K6DNA1E",
        coolingCapacity: "5,30 kW", heatingCapacity: "5,60 kW",
        energyCooling: "A++", energyHeating: "A+",
        seer: "7,3", scop: "4,2", effCooling: "292%", effHeating: "168%",
        coolingRange: "−15°C do 50°C", heatingRange: "−25°C do 30°C",
        powerCooling: "1,50 kW", powerHeating: "1,39 kW",
        airflow: "450 – 1000 m³/h",
        noiseIndoor: "26 – 45 dB(A)", noiseOutdoor: "56 dB(A)",
        dimIndoor: "982 × 311 × 221", dimOutdoor: "802 × 555 × 350",
        price: "6 499"
      },
      {
        power: "7,1", powerUrl: "7-1kw", area: "54 – 71 m²", areaRange: "54–71",
        index: "GWH24AGE-K6DNA1A",
        coolingCapacity: "7,10 kW", heatingCapacity: "7,80 kW",
        energyCooling: "A++", energyHeating: "A+",
        seer: "7,0", scop: "4,2", effCooling: "280%", effHeating: "168%",
        coolingRange: "−15°C do 50°C", heatingRange: "−25°C do 30°C",
        powerCooling: "2,03 kW", powerHeating: "2,00 kW",
        airflow: "800 – 1250 m³/h",
        noiseIndoor: "33 – 48 dB(A)", noiseOutdoor: "59 dB(A)",
        dimIndoor: "1075 × 333 × 246", dimOutdoor: "958 × 660 × 402",
        price: "7 999"
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

  // Area buttons
  const areaButtons = s.variants.map((variant, i) => {
    if (i === variantIndex) {
      return `        <span class="areaBtn active" aria-pressed="true">${variant.area}</span>`;
    }
    return `        <a href="gree-${s.slug}-${variant.powerUrl}.html" class="areaBtn">${variant.area}</a>`;
  }).join('\n');

  // Resolve image URLs (handle {INDEX} placeholder for Clivia)
  function resolveImageUrl(imgObj, variant) {
    if (imgObj.useIndex) {
      return imgObj.url.replace('{INDEX}', variant.index);
    }
    return imgObj.url;
  }

  // Indoor images (sidebar)
  const indoorImages = s.images.filter(img => img.type === 'indoor');
  const colorImages = indoorImages.map((img, i) => {
    const loading = i === 0 ? 'fetchpriority="high"' : 'loading="lazy"';
    const imgUrl = resolveImageUrl(img, v);
    const colorLabelLower = img.label ? img.label.toLowerCase() : '';
    const altText = img.label
      ? `Klimatyzator ścienny Gree ${s.series} - jednostka wewnętrzna ${colorLabelLower}`
      : `Klimatyzator ścienny Gree ${s.series} - jednostka wewnętrzna`;

    // Footer label: if no color label, show energy badge if energyBadge flag set
    let footerBadge = '';
    if (img.label) {
      footerBadge = `\n            <span style="background: #ffffff; color: var(--accent); padding: 3px 12px; border-radius: 5px; font-size: 12px; font-weight: 800;">${img.label}</span>`;
    } else if (s.energyBadge) {
      footerBadge = `\n            <span style="background: #ffffff; color: var(--accent); padding: 3px 12px; border-radius: 5px; font-size: 12px; font-weight: 800;" aria-label="Klasa energetyczna ${v.energyCooling}">${v.energyCooling}</span>`;
    }

    return `        <div class="img-container">
          <div class="img-main">
            <img src="${imgUrl}"
                 alt="${altText}" width="300" height="300" ${loading}>
          </div>
          <div class="img-footer">
            <span style="font-weight: 700; color: #ffffff;">Jednostka wewn.</span>${footerBadge}
          </div>
        </div>`;
  }).join('\n');

  const outdoorImage = `        <div class="img-container">
            <div class="img-main">
              <img src="${s.outdoorImage}"
                   alt="Agregat zewnętrzny Gree ${s.series}" width="340" height="340" loading="lazy">
            </div>
            <div class="img-footer img-footer-outdoor">
              <span style="font-weight: 700; color: #ffffff;">Jednostka zewnętrzna</span>
            </div>
        </div>`;

  // Mobile images
  const mobileColorImages = indoorImages.map((img, i) => {
    const imgUrl = resolveImageUrl(img, v);
    const colorLabelLower = img.label ? img.label.toLowerCase() : '';
    const altText = img.label
      ? `Klimatyzator ścienny Gree ${s.series} - jednostka wewnętrzna ${colorLabelLower}`
      : `Klimatyzator ścienny Gree ${s.series} - jednostka wewnętrzna`;

    let footerBadge = '';
    if (img.label) {
      footerBadge = `\n              <span style="background: #ffffff; color: var(--accent); padding: 3px 12px; border-radius: 5px; font-size: 12px; font-weight: 800;">${img.label}</span>`;
    } else if (s.energyBadge) {
      footerBadge = `\n              <span style="background: #ffffff; color: var(--accent); padding: 3px 12px; border-radius: 5px; font-size: 12px; font-weight: 800;">${v.energyCooling}</span>`;
    }

    return `          <div class="img-container">
            <div class="img-main">
              <img src="${imgUrl}"
                   alt="${altText}" width="300" height="300" loading="lazy">
            </div>
            <div class="img-footer">
              <span style="font-weight: 700; color: #ffffff;">Jednostka wewn.</span>${footerBadge}
            </div>
          </div>`;
  }).join('\n');

  const mobileOutdoorImage = `          <div class="img-container">
              <div class="img-main">
                <img src="${s.outdoorImage}"
                     alt="Agregat zewnętrzny Gree ${s.series}" width="340" height="340" loading="lazy">
              </div>
              <div class="img-footer">
                <span style="font-weight: 700; color: #ffffff;">Jednostka zewnętrzna</span>
              </div>
          </div>`;

  // Features HTML
  const featuresHTML = s.features.map(f => `            <div class="feature-card">
              <div class="feat-ico" aria-hidden="true">${f.icon}</div>
              <div class="feat-txt">
                <strong>${f.title}</strong>
                <p>${f.desc}</p>
              </div>
            </div>`).join('\n');

  // Dimensions
  const dimParts = v.dimIndoor.split(' × ');
  const dimOutParts = v.dimOutdoor.split(' × ');

  // Spec table rows - differs by series type
  let specRows = '';
  specRows += `              <tr><th scope="row" style="font-weight: normal; text-align: left;">Klasa energetyczna (chłodzenie/grzanie)</th><td class="val">${v.energyCooling} / ${v.energyHeating}</td></tr>\n`;
  specRows += `              <tr><th scope="row" style="font-weight: normal; text-align: left;">Moc chłodnicza</th><td class="val">${v.coolingCapacity}</td></tr>\n`;
  specRows += `              <tr><th scope="row" style="font-weight: normal; text-align: left;">Moc grzewcza</th><td class="val">${v.heatingCapacity}</td></tr>\n`;

  if (s.noSeerScop) {
    // Cosmo Pearl: no SEER/SCOP, has "Zakres mocy" rows instead
    specRows += `              <tr><th scope="row" style="font-weight: normal; text-align: left;">Zakres mocy chłodniczej</th><td class="val">0,70 – ${(parseFloat(v.coolingCapacity) + 1.0).toFixed(2).replace('.', ',')} kW</td></tr>\n`;
    specRows += `              <tr><th scope="row" style="font-weight: normal; text-align: left;">Zakres mocy grzewczej</th><td class="val">0,70 – ${(parseFloat(v.heatingCapacity) + 1.0).toFixed(2).replace('.', ',')} kW</td></tr>\n`;
  } else {
    specRows += `              <tr><th scope="row" style="font-weight: normal; text-align: left;">SEER / SCOP</th><td class="val">${v.seer} / ${v.scop}</td></tr>\n`;
    specRows += `              <tr><th scope="row" style="font-weight: normal; text-align: left;">Sezonowa efektywność chłodzenia / grzania</th><td class="val">${v.effCooling} / ${v.effHeating}</td></tr>\n`;
  }

  specRows += `              <tr><td colspan="2" style="font-size: 12px; color: var(--muted); padding: 8px 0; font-style: italic;">* Są to wartości deklarowane przez producenta, liczone w warunkach laboratoryjnych.</td></tr>\n`;
  specRows += `              <tr><th scope="row" style="font-weight: normal; text-align: left;">Chłodzenie (zakres pracy przy temp. zewn.)</th><td class="val">${v.coolingRange}</td></tr>\n`;
  specRows += `              <tr><th scope="row" style="font-weight: normal; text-align: left;">Grzanie (zakres pracy przy temp. zewn.)</th><td class="val">${v.heatingRange}</td></tr>\n`;
  specRows += `              <tr><th scope="row" style="font-weight: normal; text-align: left;">Pobór mocy - chłodzenie</th><td class="val">${v.powerCooling}</td></tr>\n`;
  specRows += `              <tr><th scope="row" style="font-weight: normal; text-align: left;">Pobór mocy - grzanie</th><td class="val">${v.powerHeating}</td></tr>\n`;
  specRows += `              <tr><td colspan="2" style="font-size: 12px; color: var(--muted); padding: 8px 0; font-style: italic;">* Są to wartości deklarowane przez producenta, liczone w warunkach laboratoryjnych.</td></tr>\n`;
  specRows += `              <tr><th scope="row" style="font-weight: normal; text-align: left;">Przepływ powietrza (j. wewn.)</th><td class="val">${v.airflow}</td></tr>\n`;
  specRows += `              <tr><th scope="row" style="font-weight: normal; text-align: left;">Poziom hałasu (j. wewn.)</th><td class="val">${v.noiseIndoor}</td></tr>\n`;
  specRows += `              <tr><th scope="row" style="font-weight: normal; text-align: left;">Poziom hałasu (j. zewn.)</th><td class="val">${v.noiseOutdoor}</td></tr>`;

  return `<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Gree ${s.series} ${v.power} kW – ${s.tagline}</title>

  <!-- Optymalizacja połączeń sieciowych -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

  <!-- Optymalizacja ładowania czcionek: display=swap oraz asynchroniczne ładowanie -->
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet" media="print" onload="this.media='all'" />
  <noscript>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet" />
  </noscript>

  <link rel="stylesheet" href="https://montaz-serwis-klimatyzacji.pl/style.css">
  <link rel="stylesheet" href="navbar-style.css">
</head>
<body>

<!-- NIEBIESKI TRAPEZ W TLE (nie wpływa na layout) -->
<div class="trapez-bg"></div>

<!-- NIEBIESKI TRAPEZ LEWY -->
<div class="trapez-bg-left"></div>

<!-- NIEBIESKA BELKA (na wysokości kosztów eksploatacji) -->
<div class="blue-bar"></div>

<!-- KONTENER NA ŚNIEG -->
<div class="snow-container" id="snowContainer"></div>


<nav class="navbar" id="navbar">
  <div class="nav-container">
    <a href="index.html" class="nav-logo" aria-label="Proklima - Strona główna">
      <span class="logo-snowflake">❄️</span>
      <span class="logo-text-new">
        <span class="logo-text-black">Pro</span><span class="logo-text-blue">klima</span>
      </span>
    </a>
    <ul class="nav-links">
      <li><a href="index.html#klimatyzatory">Polecane</a></li>
      <li><a href="realizacje.html">Realizacje</a></li>
      <li><a href="blog.html">Blog</a></li>
      <li><a href="index.html#kontakt">Kontakt</a></li>
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
      <p style="color: var(--muted); font-family: 'IBM Plex Mono';">Indeks: ${v.index}</p>
    </div>

    <section class="selection-box" aria-labelledby="selection-title">
      <h3 id="selection-title">Dobierz moc do pomieszczenia:</h3>
      <div class="areaButtons">
${areaButtons}
        <a href="klimatyzatory-gree.html" class="areaBtn areaBtn-full">Powrót - wszystkie Gree</a>
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
          <!-- <div style="text-align: right;">
            <span style="color: #2c7dfa; font-size: 12px; font-weight: 700;">GWARANCJA: 5 lat</span>
          </div> -->
        </section>

        <section class="tech-params-section" aria-labelledby="tech-params-title">
          <h3 id="tech-params-title" class="tech-sub-title">Parametry techniczne</h3>
          <table class="spec-list">
            <caption style="text-align: left !important;">Szczegółowa specyfikacja modelu ${s.series} ${v.power} kW (${v.index})</caption>
            <thead>
              <tr style="display: none;">
                <th scope="col">Parametr</th>
                <th scope="col">Wartość</th>
              </tr>
            </thead>
            <tbody>
${specRows}
            </tbody>
          </table>
        </section>

        <!-- MOBILNE ZDJĘCIA (widoczne tylko na mobile) -->
        <div class="mobile-only-photos">
${mobileColorImages}
${mobileOutdoorImage}
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

        <!-- WYMIARY URZĄDZEŃ -->
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
              <span class="dim-value">${dimParts[2]} mm</span>
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
              <span class="dim-value">${dimOutParts[2]} mm</span>
            </div>
          </div>
        </section>

        <!-- SEKCJA KOSZTÓW EKSPLOATACJI (na samym końcu) -->
        <section class="cost-calculator" aria-labelledby="cost-title">
          <h2 class="features-title" id="cost-title">💡 Koszty eksploatacji</h2>
          <div class="cost-box" id="cost-content">
            <!-- Zawartość wypełniana przez JavaScript -->
            <p style="color: #8b5e00;">Ładowanie danych o kosztach...</p>
          </div>
        </section>

      </article>
    </div>
</main>

  <footer style="text-align: center; padding: 40px 20px; color: var(--muted); font-size: 14px;">
    <p>&copy; 2024 Gree Partner. Wszelkie prawa zastrzeżone.</p>
  </footer>

  <!-- SKRYPT ŚNIEGU - Zoptymalizowany, nie blokuje ładowania strony -->
  <script>
    // Wykonaj po pełnym załadowaniu strony (nie blokuje renderowania)
    window.addEventListener('load', function() {
      const snowContainer = document.getElementById('snowContainer');
      if (!snowContainer) return;

      // Tablica aktywnych płatków (do śledzenia)
      let activeFlakes = [];
      let snowInterval = null;
      let isSnowing = false;

      // Funkcja tworząca pojedynczy płatek
      function createSnowflake() {
        const flake = document.createElement('div');
        flake.classList.add('snowflake');
        flake.textContent = '❄';

        // Losowe właściwości
        const size = Math.random() * 1.2 + 0.4; // 0.4 - 1.6rem
        const startX = Math.random() * 100; // 0-100% szerokości
        const duration = Math.random() * 4 + 6; // 6-10 sekund
        const delay = Math.random() * 0.5; // 0-0.5s opóźnienia

        flake.style.cssText = \`
          left: \${startX}%;
          font-size: \${size}rem;
          animation-duration: \${duration}s;
          animation-delay: \${delay}s;
          opacity: \${Math.random() * 0.6 + 0.4};
        \`;

        snowContainer.appendChild(flake);
        activeFlakes.push(flake);

        // Usuń płatek po zakończeniu animacji
        setTimeout(() => {
          if (flake.parentNode) {
            flake.parentNode.removeChild(flake);
          }
          activeFlakes = activeFlakes.filter(f => f !== flake);
        }, (duration + delay) * 1000);
      }

      // Funkcja startująca śnieg
      function startSnow() {
        if (isSnowing) return;

        isSnowing = true;

        // Twórz płatki co 100ms
        snowInterval = setInterval(createSnowflake, 100);
      }

      // Funkcja zatrzymująca śnieg (płatki spadają do końca strony)
      function stopSnow() {
        isSnowing = false;

        if (snowInterval) {
          clearInterval(snowInterval);
          snowInterval = null;
        }
      }

      // Funkcja czyszcząca wszystkie płatki
      function clearAllFlakes() {
        activeFlakes.forEach(flake => {
          if (flake.parentNode) {
            flake.parentNode.removeChild(flake);
          }
        });
        activeFlakes = [];
      }

      function runSnowSchedule() {
        setTimeout(() => {
          startSnow();
          setTimeout(() => {
            stopSnow();
            setTimeout(() => {
              startSnow();
              setTimeout(() => {
                stopSnow();
                setTimeout(() => {
                  startSnow();
                  setTimeout(() => {
                    stopSnow();
                    startRecurringSnow();
                  }, 0.10 * 1000);
                }, 90 * 1000);
              }, 20 * 1000);
            }, 30 * 1000);
          }, 4.0 * 1000);
        }, 2.5 * 1000);
      }

      function startRecurringSnow() {
        setInterval(() => {
          startSnow();
          setTimeout(() => {
            stopSnow();
          }, 20 * 1000);
        }, 180 * 1000);
      }

      runSnowSchedule();

      document.addEventListener('visibilitychange', function() {
        if (document.hidden && isSnowing) {
          stopSnow();
        }
      });
    }
  </script>

  <script src="cost-calculator.js"></script>

  <script>
    (function() {
      const navToggle = document.getElementById('navToggle');
      const navMenu = document.getElementById('navMenu');
      const navOverlay = document.getElementById('navOverlay');
      const navLinks = document.querySelectorAll('.nav-link, .btn-nav-cta');
      let resizeTimeout;

      setTimeout(function() {
        navMenu.classList.add('menu-ready');
      }, 100);

      function toggleMenu() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        navOverlay.classList.toggle('active');
        const isExpanded = navToggle.classList.contains('active');
        navToggle.setAttribute('aria-expanded', isExpanded);
        document.body.style.overflow = isExpanded ? 'hidden' : '';
      }

      function closeMenu() {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        navOverlay.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }

      navToggle.addEventListener('click', toggleMenu);
      navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
      });

      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
          closeMenu();
        }
      });

      window.addEventListener('resize', function() {
        navMenu.classList.remove('menu-ready');
        if (window.innerWidth > 1100 && navMenu.classList.contains('active')) {
          closeMenu();
        }
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
          navMenu.classList.add('menu-ready');
        }, 150);
      });
    })();
  </script>

<script src="blue-bar-position.js"></script>
</body>
</html>`;
}


// ============================================================
// SZABLON STRONY KATALOGOWEJ
// ============================================================
function generateCatalogPage() {
  const productsJS = GREE_SERIES.map(s => {
    const areas = s.variants.map(v => `"${v.areaRange.split('–')[1] || v.areaRange.split('–')[0]}"`).join(', ');
    const coolingStr = s.variants.map(v => v.coolingCapacity.replace(' kW', '')).join(' / ') + ' kW';
    const heatingStr = s.variants.map(v => v.heatingCapacity.replace(' kW', '')).join(' / ') + ' kW';
    const colorsStr = s.colors.length > 0 ? s.colors.map(c => `"${c}"`).join(', ') : '"Biały"';

    // Short feature tags for catalog cards
    const featShort = [];
    if (s.features.some(f => f.title.includes('Wi-Fi'))) featShort.push('"Wi-Fi"');
    if (s.features.some(f => f.title.includes('Grzanie') || f.title.includes('Gorący'))) featShort.push('"Grzanie"');
    if (s.features.some(f => f.title.includes('Cicha') || f.title.includes('cichy'))) featShort.push('"Cichy"');
    if (s.features.some(f => f.title.includes('Jonizator'))) featShort.push('"Jonizacja"');
    if (s.features.some(f => f.title.includes('Design') || f.title.includes('design') || f.title.includes('kolory') || f.title.includes('kolorów'))) featShort.push('"Design"');
    if (s.features.some(f => f.title.includes('Osuszanie'))) featShort.push('"Osuszanie"');
    if (s.features.some(f => f.title.includes('Samooczyszczanie') || f.title.includes('Samoczyszczanie'))) featShort.push('"Samoczyszczenie"');
    // Limit to 4 features
    const featShortLimited = featShort.slice(0, 4);
    if (featShortLimited.length === 0) featShortLimited.push('"Wi-Fi"', '"Grzanie"', '"Cichy"', '"Osuszanie"');

    // Determine series categories
    const seriesCat = [];
    if (s.variants.some(v => parseFloat(v.power.replace(',', '.')) >= 5)) seriesCat.push('"Dom"');
    seriesCat.push('"Mieszkanie"');

    // First indoor image URL for catalog card
    const firstImg = s.images[0];
    let imgUrl = firstImg.url;
    if (firstImg.useIndex) {
      imgUrl = firstImg.url.replace('{INDEX}', s.variants[0].index);
    }

    return `    {
      id: "${s.slug}",
      name: "${s.series}",
      series: [${seriesCat.join(', ')}],
      areas: [${areas}],
      cooling: "${coolingStr}",
      heating: "${heatingStr}",
      energyCooling: "${s.variants[0].energyCooling}",
      energyHeating: "${s.variants[0].energyHeating}",
      colors: [${colorsStr}],
      features: [[${featShortLimited.join(', ')}]],
      img: "${imgUrl}",
      detailsPage: "gree-${s.slug}-${s.variants[0].powerUrl}.html"
    }`;
  }).join(',\n');

  return `<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Klimatyzatory Gree – Katalog Modeli 2024</title>

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet" media="print" onload="this.media='all'" />
  <noscript>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet" />
  </noscript>

  <link rel="stylesheet" href="navbar-style.css">

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
    body {
      margin: 0;
      padding-top: 72px;
      background: var(--bg);
      color: var(--text);
      font-family: var(--sans);
      line-height: 1.6;
      overflow-x: hidden;
    }

    /* === HERO SECTION === */
    .hero {
      position: relative;
      background: linear-gradient(135deg, #2c7dfa 0%, #1e5fc9 50%, #1a4f9e 100%);
      padding: 80px 20px;
      overflow: hidden;
      min-height: 380px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .clouds { position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; overflow: hidden; }
    .cloud { position: absolute; background: rgba(255, 255, 255, 0.15); border-radius: 50%; filter: blur(30px); }
    .cloud-1 { width: 400px; height: 150px; top: 10%; left: -5%; animation: float 25s ease-in-out infinite; }
    .cloud-2 { width: 300px; height: 120px; top: 60%; right: -3%; animation: float 20s ease-in-out infinite reverse; }
    .cloud-3 { width: 250px; height: 100px; top: 30%; left: 50%; animation: float 30s ease-in-out infinite; }
    .cloud-4 { width: 350px; height: 130px; bottom: 10%; left: 20%; animation: float 22s ease-in-out infinite reverse; }

    @keyframes float {
      0%, 100% { transform: translateX(0) translateY(0); }
      50% { transform: translateX(30px) translateY(-20px); }
    }

    .snowflakes-hero { position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; overflow: hidden; }
    .snowflake-hero { position: absolute; color: rgba(255, 255, 255, 0.6); font-size: 20px; animation: fall-hero linear infinite; text-shadow: 0 0 10px rgba(255,255,255,0.5); }

    @keyframes fall-hero {
      0% { transform: translateY(-20px) rotate(0deg); opacity: 0; }
      10% { opacity: 1; }
      90% { opacity: 1; }
      100% { transform: translateY(400px) rotate(360deg); opacity: 0; }
    }

    .hero-content { position: relative; z-index: 2; text-align: center; color: #fff; }
    .hero h1 { font-family: var(--serif); font-size: 52px; font-weight: 800; margin: 0 0 15px 0; text-shadow: 0 4px 20px rgba(0,0,0,0.2); }
    .hero p { font-size: 18px; opacity: 0.95; max-width: 650px; margin: 0 auto; background: rgba(255, 255, 255, 0.2); backdrop-filter: blur(10px); padding: 15px 30px; border-radius: 8px; display: inline-block; }

    /* === FILTRY === */
    .filters-section { max-width: 1280px; margin: 0 auto; padding: 30px 20px 10px; }
    .selection-box { background: #fff; padding: 25px 30px; border-radius: 5px; border: 1px solid var(--border); box-shadow: 0 4px 20px rgba(0,0,0,0.08); text-align: center; max-width: 1100px; margin: 0 auto; }
    .selection-box h3 { margin: 0 0 20px 0; font-size: 18px; font-weight: 700; color: var(--primary); }
    .area-buttons { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
    .area-btn { padding: 12px 24px; border: 2px solid var(--border); border-radius: 5px; background: #fff; font-size: 14px; font-weight: 600; color: var(--accent); cursor: pointer; transition: all 0.2s ease; white-space: nowrap; box-shadow: 0 2px 8px rgba(0,0,0,0.06); text-decoration: none; display: inline-block; }
    .area-btn:hover { border-color: var(--accent); background: rgba(44, 125, 250, 0.05); box-shadow: 0 4px 12px rgba(44, 125, 250, 0.15); }
    .area-btn.active { background: var(--accent); border-color: var(--accent); color: #fff; box-shadow: 0 4px 12px rgba(44, 125, 250, 0.3); cursor: default; }

    /* === GRID PRODUKTÓW === */
    .products-section { max-width: 1280px; margin: 0 auto; padding: 30px 20px 60px; }
    .products-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; max-width: 1100px; margin: 0 auto; }
    .products-grid .product-card:last-child:nth-child(3n+1) { grid-column: 2; }

    /* === KARTA PRODUKTU === */
    .product-card { background: var(--card); border-radius: 5px; overflow: hidden; box-shadow: var(--shadow); transition: all 0.4s ease; border: 1px solid var(--border); }
    .product-card:hover { transform: translateY(-10px); box-shadow: var(--shadow); }
    .card-image { position: relative; max-height: 156%; background: #ffffff; display: flex; align-items: center; justify-content: center; overflow: hidden; }
    .card-image img { max-width: 85%; max-height: 85%; object-fit: contain; transition: transform 0.4s ease; }
    .product-card:hover .card-image img { transform: scale(1.05); }
    .energy-badge { position: absolute; top: 15px; right: 15px; background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); color: #fff; padding: 4px 12px; border-radius: 5px; font-size: 13px; font-weight: 800; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3); }
    .energy-badge.a-plus-plus { background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3); }
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

    /* === FOOTER === */
    footer { background: var(--primary); color: #fff; text-align: center; padding: 40px 20px; }
    footer p { margin: 0; opacity: 0.8; font-size: 14px; }

    /* === RESPONSYWNOŚĆ === */
    @media (max-width: 992px) {
      .products-grid { grid-template-columns: repeat(2, 1fr); gap: 25px; }
      .products-grid .product-card:last-child:nth-child(3n+1) { grid-column: auto; }
      .hero h1 { font-size: 40px; }
      .hero { padding: 60px 20px; min-height: 300px; }
    }

    @media (max-width: 640px) {
      .products-grid { grid-template-columns: 1fr; gap: 20px; }
      .hero h1 { font-size: 32px; }
      .hero p { font-size: 16px; }
      .hero { padding: 50px 20px; min-height: 280px; }
      .card-body { padding: 20px; }
      .area-buttons { gap: 8px; }
      .area-btn { padding: 10px 16px; font-size: 13px; }
    }

    @media (max-width: 400px) {
      .hero h1 { font-size: 26px; }
    }
  </style>
</head>
<body>

<!-- Overlay mobilne menu -->
<div class="nav-overlay" id="navOverlay"></div>

<!-- NAVBAR -->
<nav class="navbar" id="navbar">
  <div class="nav-container">
    <a href="index.html" class="nav-logo" aria-label="Proklima - Strona główna">
      <span class="logo-snowflake">❄️</span>
      <span class="logo-text-new">
        <span class="logo-text-black">Pro</span><span class="logo-text-blue">klima</span>
      </span>
    </a>
    <ul class="nav-links" id="navMenu">
      <li><a href="index.html#klimatyzatory">Polecane</a></li>
      <li><a href="realizacje.html">Realizacje</a></li>
      <li><a href="blog.html">Blog</a></li>
      <li><a href="index.html#kontakt">Kontakt</a></li>
      <li><a href="tel:+48888888888" class="nav-cta">888 888 888</a></li>
    </ul>
    <button class="hamburger" id="navToggle" aria-label="Menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<!-- HERO SECTION -->
<section class="hero">
  <!-- Chmury -->
  <div class="clouds">
    <div class="cloud cloud-1"></div>
    <div class="cloud cloud-2"></div>
    <div class="cloud cloud-3"></div>
    <div class="cloud cloud-4"></div>
  </div>

  <!-- Śnieżynki -->
  <div class="snowflakes-hero" id="snowflakesHero"></div>

  <div class="hero-content">
    <h1>Klimatyzatory Gree</h1>
    <p>Profesjonalne rozwiązania klimatyzacyjne dla Twojego domu, mieszkania i biura. Wybierz spośród ${GREE_SERIES.length} modeli.</p>
  </div>
</section>

<!-- WYBÓR POWIERZCHNI -->
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

<!-- PRODUKTY -->
<section class="products-section">
  <div class="products-grid" id="productsGrid">
    <!-- Produkty generowane przez JS -->
  </div>
</section>

<!-- FOOTER -->
<footer>
  <p>&copy; <span id="year"></span> Dobry Klimat. Wszelkie prawa zastrzeżone.</p>
</footer>

<script>
  // Rok w stopce
  document.getElementById('year').textContent = new Date().getFullYear();

  // Dane produktów
  const PRODUCTS = [
${productsJS}
  ];

  // Generowanie karty produktu
  function createProductCard(product) {
    const seriesText = product.series.join(' / ');
    const energyBadgeClass = product.energyCooling === 'A+++' ? 'a-plus-plus' : '';
    const colorsHTML = product.colors.map(c => \`<span class="color-tag">\${c}</span>\`).join('');

    let featuresHTML = '';
    if (product.features && product.features.length > 0) {
      if (product.features.length > 1) {
        featuresHTML = product.features.map(row =>
          \`<div class="card-features-row">\${row.map(f => \`<div class="feature-item">\${f}</div>\`).join('')}</div>\`
        ).join('');
      } else {
        featuresHTML = \`<div class="card-features">\${product.features[0].map(f => \`<div class="feature-item">\${f}</div>\`).join('')}</div>\`;
      }
    }

    return \`
      <article class="product-card" data-series="\${product.series.join(',')}">
        <div class="card-image">
          <img src="\${product.img}" alt="\${product.name}" loading="lazy" />
          <div class="energy-badge \${energyBadgeClass}">\${product.energyCooling}</div>
        </div>
        <div class="card-body">
          <h3 class="card-title">\${product.name}</h3>

          \${featuresHTML}

          <div class="card-specs">
            <div class="spec-row">
              <span class="spec-label">Wydajność chłodzenia:</span>
              <span class="spec-value">\${product.cooling}</span>
            </div>
            <div class="spec-row">
              <span class="spec-label">Wydajność grzania:</span>
              <span class="spec-value">\${product.heating}</span>
            </div>
            <div class="spec-row">
              <span class="spec-label">Klasa energet. chłodzenia:</span>
              <span class="spec-value"><span class="energy-pill">\${product.energyCooling}</span></span>
            </div>
            <div class="spec-row">
              <span class="spec-label">Klasa energet. grzania:</span>
              <span class="spec-value"><span class="energy-pill energy-pill-heating">\${product.energyHeating}</span></span>
            </div>
          </div>

          <div class="card-colors">
            <div class="colors-label">Dostępne kolory:</div>
            <div class="color-tags">\${colorsHTML}</div>
          </div>

          <div class="card-footer">
            <div class="card-price">
              Od:
              <span>Zapytaj</span>
            </div>
            <a href="\${product.detailsPage}" class="btn-details">
              Szczegóły
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </article>
    \`;
  }

  // Renderowanie produktów
  function renderProducts(area) {
    const grid = document.getElementById('productsGrid');
    const filtered = area === 'all' || !area
      ? PRODUCTS
      : PRODUCTS.filter(p => p.areas.includes(area));

    grid.innerHTML = filtered.map(createProductCard).join('');
  }

  // Inicjalizacja - wyświetl wszystkie produkty
  renderProducts();

  // Śnieżynki w hero
  function createHeroSnowflakes() {
    const container = document.getElementById('snowflakesHero');
    const snowflakes = ['❄', '❅', '❆', '✧', '•'];

    for (let i = 0; i < 25; i++) {
      const flake = document.createElement('div');
      flake.className = 'snowflake-hero';
      flake.textContent = snowflakes[Math.floor(Math.random() * snowflakes.length)];
      flake.style.left = Math.random() * 100 + '%';
      flake.style.fontSize = (Math.random() * 15 + 10) + 'px';
      flake.style.animationDuration = (Math.random() * 5 + 5) + 's';
      flake.style.animationDelay = (Math.random() * 10) + 's';
      flake.style.opacity = Math.random() * 0.5 + 0.3;
      container.appendChild(flake);
    }
  }
  createHeroSnowflakes();

  // Hamburger menu
  (function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navOverlay = document.getElementById('navOverlay');
    const navLinks = document.querySelectorAll('.nav-links a, .nav-cta');
    let resizeTimeout;

    setTimeout(function() {
      navMenu.classList.add('menu-ready');
    }, 100);

    function toggleMenu() {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
      navOverlay.classList.toggle('active');
      const isExpanded = navToggle.classList.contains('active');
      navToggle.setAttribute('aria-expanded', isExpanded);
      document.body.style.overflow = isExpanded ? 'hidden' : '';
    }

    function closeMenu() {
      navToggle.classList.remove('active');
      navMenu.classList.remove('active');
      navOverlay.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    navToggle.addEventListener('click', toggleMenu);
    navOverlay.addEventListener('click', closeMenu);
    navLinks.forEach(link => link.addEventListener('click', closeMenu));

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && navMenu.classList.contains('active')) closeMenu();
    });

    window.addEventListener('resize', function() {
      navMenu.classList.remove('menu-ready');
      if (window.innerWidth > 1100 && navMenu.classList.contains('active')) closeMenu();
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(function() {
        navMenu.classList.add('menu-ready');
      }, 150);
    });
  })();
</script>

</body>
</html>`;
}


// ============================================================
// GENEROWANIE PLIKÓW
// ============================================================
let totalFiles = 0;

GREE_SERIES.forEach(series => {
  series.variants.forEach((variant, i) => {
    const filename = `gree-${series.slug}-${variant.powerUrl}.html`;
    const filepath = path.join(OUTPUT_DIR, filename);
    const html = generateProductPage(series, i);
    fs.writeFileSync(filepath, html, 'utf-8');
    totalFiles++;
    console.log(`✅ ${filename}`);
  });
});

const catalogFilename = 'klimatyzatory-gree.html';
const catalogPath = path.join(OUTPUT_DIR, catalogFilename);
fs.writeFileSync(catalogPath, generateCatalogPage(), 'utf-8');
totalFiles++;
console.log(`✅ ${catalogFilename}`);

console.log(`\n🎉 Wygenerowano ${totalFiles} plików w katalogu ${OUTPUT_DIR}`);
