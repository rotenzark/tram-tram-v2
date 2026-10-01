/* Tram Tram — i18n IT/EN, nav mobile, reveal */
(function () {
  'use strict';

  /* ---------- i18n ---------- */

  var translations = {
    it: {
      skip: 'Salta al contenuto',
      menu: 'Menu',
      nav_kitchen: 'La cucina',
      nav_menu: 'Il menù',
      nav_table: 'In tavola',
      nav_reviews: 'Dicono',
      nav_hours: 'Orari e dove',
      call_short: 'Chiama',
      call_cta: 'Chiama',
      see_menu: 'Guarda il menù',
      board: 'FERMATA CON CUCINA · VIA LAZZARETTO 16 · MILANO PORTA VENEZIA',
      board2: 'PROSSIMA FERMATA ⟶ IL MENÙ',
      board3: 'PROSSIMA FERMATA ⟶ VINI & BOLLE',
      board4: 'PROSSIMA FERMATA ⟶ IN TAVOLA',
      board5: 'PROSSIMA FERMATA ⟶ LA SALA',
      board6: 'PROSSIMA FERMATA ⟶ DICONO DI NOI',
      board7: 'CAPOLINEA ⟶ VIA LAZZARETTO 16',
      hero_sub: 'Fermata con cucina',
      hero_motto: '«Pochi piatti. Semplici. Buoni.»',
      hero_lead: 'La cucina segue il binario di una tradizione casalinga, italiana, con una forte anima romana. Fermata dopo fermata, il viaggio conduce alla madeleine di Proust, ai gusti che ricordano l’infanzia.',
      hero_proof: '4,5 su Google · 465 recensioni',
      stop1: 'Fermata 01',
      stop2: 'Fermata 02',
      stop3: 'Fermata 03',
      stop4: 'Fermata 04',
      stop5: 'Fermata 05',
      stop6: 'Fermata 06',
      stop7: 'Fermata 07',
      kitchen_title: 'La cucina',
      kitchen_pull: 'Un menù stagionale con un’anima romana: cacio e pepe, carciofi alla giudia, puntarelle, cicoria, saltimbocca, agnello e le specialità del Lazio.',
      kitchen_p1: 'Il padrone di casa è Francesco d’Argenzio, socio fondatore: romano, con un passato da regista, a Milano da anni. La sua passione per il cibo e la musica è diventata una realtà, ed è l’essenza di questo locale.',
      kitchen_quote: '«Cucinare è quasi come fare la regia. Devi dirigere gli ingredienti e i sapori per preparare un piatto ben riuscito.»',
      kitchen_quote_by: 'Francesco d’Argenzio, a La Cucina Italiana',
      kitchen_p2: 'In tavola, fermata dopo fermata: la pappa al pomodoro, i tonnarelli cacio e pepe, i carciofi quando è stagione. Il menù cambia con le stagioni.',
      stat1: 'su Google, in 465 recensioni',
      stat2: 'a cena tutte le sere; a pranzo da martedì a sabato',
      stat3: 'in via Lazzaretto, dal 2019',
      alt_vetrina: 'La vetrina di Tram Tram in via Lazzaretto 16, con l\'insegna «Tram Tram · Fermata con cucina», mentre davanti passa un tram giallo.',
      cap_vetrina: 'Via Lazzaretto 16: davanti alla vetrina passa il tram.',
      menu_title: 'I classici della casa',
      m1: 'Tartare di fassona',
      m2: 'Tonnarelli cacio e pepe',
      m3: 'Carbonara',
      m4: 'Amatriciana',
      m5: 'Il polpo',
      m6: 'Baccalà fritto',
      m7: 'Saltimbocca alla romana',
      m8: 'Agnello',
      m9: 'Carciofi alla giudia — quando è stagione',
      m10: 'Puntarelle, cicoria',
      m11: 'Crostata di ricotta e visciole',
      c_antipasto: 'antipasto',
      c_primo: 'primo',
      c_mare: 'dal mare',
      c_secondo: 'secondo',
      c_verdure: 'verdure',
      c_dolce: 'dolce',
      menu_note: 'Il menù è stagionale e cambia spesso: questi sono i piatti della casa e quelli che i nostri ospiti citano di più. Il menù di oggi è sul nostro Instagram, oppure con una telefonata.',
      wine_title: 'Vini & bolle',
      wine_pull: 'Una selezione di vini da piccoli produttori italiani, prosecchi e champagne.',
      wine_p1: 'E una scelta di cocktail di base e di birre, da gustare da noi accompagnati da un piatto di degustazione: per l’aperitivo, prima di cena o al posto della cena. Ci sono anche i vini al calice: chiedete a chi vi serve cosa c’è oggi.',
      alt_calici: 'Due calici di vino rosso alzati per un brindisi sopra un tavolo di legno.',
      table_title: 'In tavola',
      alt1: 'I tonnarelli cacio e pepe di Tram Tram, serviti nel piatto fondo',
      dish_caption: 'I tonnarelli cacio e pepe — fotografia di Liana Solis, dal servizio del ristorante.',
      alt_carciofo: 'Un carciofo alla romana col gambo, nel piatto bianco.',
      cap_carciofo: 'Il carciofo, quando è stagione',
      alt_vongole: 'Un piatto di spaghetti alle vongole.',
      cap_vongole: 'Spaghetti alle vongole',
      alt_tartare: 'Una tartare col tuorlo d\'uovo, nel piatto bianco.',
      cap_tartare: 'La tartare',
      alt_secondo: 'Un secondo di carne sul purè, col cavolo rosso e il fondo di cottura.',
      cap_secondo: 'Un secondo, col purè',
      alt_crema: 'Una crème brûlée in una cocotte bianca, portata in mano.',
      cap_crema: 'La crème brûlée',
      alt_tavolo: 'I tavoli di legno contro la parete blu, coi calici pronti.',
      cap_tavolo: 'I tavoli, pronti per la sera',
      g_note: 'Le foto sono nostre; quella delle vongole è di un’ospite, dalla sua recensione su Google.',
      room_title: 'La sala',
      room_pull: 'Un po’ bar, un po’ vineria, un po’ osteria, molto casa.',
      room_p1: 'Mobili antichi e pezzi vintage, libri, luci calde; alle pareti le opere di amici e vicini di quartiere, e ogni tanto una piccola mostra o una serata di musica. Fuori, sul marciapiede, pochi tavoli tra le piante e le lucine.',
      room_p2: 'In sala c’è anche una selezione di oggetti per la tavola: molti pezzi unici, fatti a mano da artigiani italiani oppure vintage, come gli orci di terracotta di Molfetta Frantoiani decorati a mano con oro, le tovagliette a crochet, i piatti di ceramica dipinti a mano.',
      room_p3: 'Il locale è raccolto: la sera e nel fine settimana conviene prenotare, al telefono. Per una tavolata, chiamateci prima.',
      alt_fuori: 'Il marciapiede davanti a Tram Tram: le piante in vaso, una bicicletta rossa, un tavolino.',
      alt_sala: 'La sala: il bancone in ottone con gli sgabelli, le lanterne di carta, la specchiera di legno e i grandi disegni alle pareti.',
      cap_sala: 'La sala — fotografia di Lucila Blumencweig',
      alt_bancone: 'Il bancone e il fondo della sala, con le nicchie e le lanterne.',
      cap_bancone: 'Il bancone',
      rev_title: 'Dicono di noi',
      press_quote: '«Prendere il tram a Milano e fermarsi per un attimo a Roma.»',
      press_by: 'La Cucina Italiana, 22 ottobre 2020',
      rev_rating: 'su Google, in 465 recensioni',
      g22: 'Google, 2022',
      g24: 'Google, 2024',
      g25: 'Google, 2025',
      g26: 'Google, 2026',
      rev_note: 'Dalle recensioni su Google, come sono state scritte.',
      hours_title: 'Orari e dove',
      hours_caption: 'Orari di apertura',
      tue_sat: 'Martedì — Sabato',
      sun_mon: 'Domenica e lunedì, a cena',
      dinner: 'e a cena',
      hours_note: 'A cena tutte le sere, a pranzo da martedì a sabato. In agosto chiudiamo per le vacanze: le date sono sul nostro Instagram. La sera e nel fine settimana meglio prenotare: si fa presto, al telefono.',
      metro: 'M3 Repubblica e M1 Porta Venezia, a pochi minuti a piedi',
      tram: 'In via Lazzaretto passa il tram: lo vedete dalla vetrina',
      maps: 'Indicazioni',
      alt_facciata: 'La facciata di Tram Tram in via Lazzaretto 16: tre vetrine con l\'insegna e le piante sul marciapiede.',
      map_title: 'Mappa: Tram Tram, Via Lazzaretto 16, Milano',
      f_contacts: 'Contatti',
      f_where: 'Dove',
      f_what: 'Fermata con cucina',
      f_line: 'A cena tutte le sere, a pranzo da martedì a sabato.',
      piva: 'P.IVA e C.F.',
      aria_top: 'Tram Tram — torna su',
      aria_nav: 'Navigazione principale'
    },
    en: {
      skip: 'Skip to content',
      menu: 'Menu',
      nav_kitchen: 'The kitchen',
      nav_menu: 'The menu',
      nav_table: 'At the table',
      nav_reviews: 'Reviews',
      nav_hours: 'Hours & location',
      call_short: 'Call',
      call_cta: 'Call',
      see_menu: 'See the menu',
      board: 'A STOP WITH A KITCHEN · VIA LAZZARETTO 16 · MILANO PORTA VENEZIA',
      board2: 'NEXT STOP ⟶ THE MENU',
      board3: 'NEXT STOP ⟶ WINE & BUBBLES',
      board4: 'NEXT STOP ⟶ AT THE TABLE',
      board5: 'NEXT STOP ⟶ THE ROOM',
      board6: 'NEXT STOP ⟶ WHAT PEOPLE SAY',
      board7: 'LAST STOP ⟶ VIA LAZZARETTO 16',
      hero_sub: 'A stop with a kitchen',
      hero_motto: '“Few dishes. Simple. Good.”',
      hero_lead: 'The kitchen runs on the rails of homestyle Italian cooking with a strong Roman soul. Stop after stop, the journey leads to Proust’s madeleine, to the flavours of childhood.',
      hero_proof: '4.5 on Google · 465 reviews',
      stop1: 'Stop 01',
      stop2: 'Stop 02',
      stop3: 'Stop 03',
      stop4: 'Stop 04',
      stop5: 'Stop 05',
      stop6: 'Stop 06',
      stop7: 'Stop 07',
      kitchen_title: 'The kitchen',
      kitchen_pull: 'A seasonal menu with a Roman soul: cacio e pepe, Jewish-style artichokes, puntarelle, chicory, saltimbocca, lamb and the specialities of Lazio.',
      kitchen_p1: 'Your host is Francesco d’Argenzio, founding partner: a Roman with a past as a director, settled in Milan for years. His passion for food and music became real, and it is the essence of this place.',
      kitchen_quote: '“Cooking is almost like directing. You have to direct the ingredients and the flavours to make a dish come out right.”',
      kitchen_quote_by: 'Francesco d’Argenzio, to La Cucina Italiana (translated)',
      kitchen_p2: 'On the table, stop after stop: pappa al pomodoro, tonnarelli cacio e pepe, artichokes when they’re in season. The menu changes with the seasons.',
      stat1: 'on Google, across 465 reviews',
      stat2: 'dinner every night; lunch Tuesday to Saturday',
      stat3: 'on Via Lazzaretto, since 2019',
      alt_vetrina: 'Tram Tram’s window at Via Lazzaretto 16, with the sign “Tram Tram · Fermata con cucina”, as a yellow tram passes by.',
      cap_vetrina: 'Via Lazzaretto 16: the tram runs right past the window.',
      menu_title: 'The house classics',
      m1: 'Fassona beef tartare',
      m2: 'Tonnarelli cacio e pepe',
      m3: 'Carbonara',
      m4: 'Amatriciana',
      m5: 'Octopus',
      m6: 'Fried salt cod',
      m7: 'Saltimbocca alla romana',
      m8: 'Lamb',
      m9: 'Jewish-style artichokes — in season',
      m10: 'Puntarelle, chicory',
      m11: 'Ricotta and sour cherry tart',
      c_antipasto: 'starter',
      c_primo: 'pasta',
      c_mare: 'from the sea',
      c_secondo: 'main',
      c_verdure: 'greens',
      c_dolce: 'dessert',
      menu_note: 'The menu is seasonal and changes often: these are the house dishes and the ones our guests mention most. Today’s menu is on our Instagram, or just give us a call.',
      wine_title: 'Wine & bubbles',
      wine_pull: 'A selection of wines from small Italian producers, prosecco and champagne.',
      wine_p1: 'Plus a choice of classic cocktails and beers, to enjoy here with a tasting plate: for an aperitivo, before dinner or instead of it. There are wines by the glass too: ask your server what’s open today.',
      alt_calici: 'Two glasses of red wine raised for a toast above a wooden table.',
      table_title: 'At the table',
      alt1: 'Tram Tram’s tonnarelli cacio e pepe, served in a deep plate',
      dish_caption: 'The tonnarelli cacio e pepe — photograph by Liana Solis, from the restaurant’s own shoot.',
      alt_carciofo: 'A Roman-style artichoke with its stem, on a white plate.',
      cap_carciofo: 'The artichoke, in season',
      alt_vongole: 'A plate of spaghetti with clams.',
      cap_vongole: 'Spaghetti with clams',
      alt_tartare: 'A tartare with an egg yolk, on a white plate.',
      cap_tartare: 'The tartare',
      alt_secondo: 'A meat main on mashed potato, with red cabbage and the cooking juices.',
      cap_secondo: 'A main, with mash',
      alt_crema: 'A crème brûlée in a white cocotte, carried by hand.',
      cap_crema: 'The crème brûlée',
      alt_tavolo: 'Wooden tables against the blue wall, glasses ready.',
      cap_tavolo: 'The tables, ready for the evening',
      g_note: 'The photos are ours; the clams are by a guest, from her Google review.',
      room_title: 'The room',
      room_pull: 'A bit of a bar, a bit of a wine bar, a bit of an osteria, very much a home.',
      room_p1: 'Antique furniture and vintage pieces, books, warm lights; on the walls, works by friends and neighbours, and now and then a small exhibition or a night of music. Outside on the pavement, a few tables among the plants and the string lights.',
      room_p2: 'In the room there is also a selection of tableware: many one-off pieces, handmade by Italian artisans or vintage, like the terracotta oil jars by Molfetta Frantoiani decorated by hand with gold, crochet placemats, hand-painted ceramic plates.',
      room_p3: 'It’s an intimate place: in the evening and at weekends it’s best to book by phone. For a big table, call us first.',
      alt_fuori: 'The pavement outside Tram Tram: potted plants, a red bicycle, a small table.',
      alt_sala: 'The room: the brass counter with its stools, paper lanterns, the wooden mirror and large drawings on the walls.',
      cap_sala: 'The room — photograph by Lucila Blumencweig',
      alt_bancone: 'The counter and the back of the room, with the niches and the lanterns.',
      cap_bancone: 'The counter',
      rev_title: 'What people say',
      press_quote: '“Take the tram in Milan and stop for a moment in Rome.”',
      press_by: 'La Cucina Italiana, 22 October 2020 (translated)',
      rev_rating: 'on Google, across 465 reviews',
      g22: 'Google, 2022',
      g24: 'Google, 2024',
      g25: 'Google, 2025',
      g26: 'Google, 2026',
      rev_note: 'From Google reviews, in the original Italian, as they were written.',
      hours_title: 'Hours & location',
      hours_caption: 'Opening hours',
      tue_sat: 'Tuesday — Saturday',
      sun_mon: 'Sunday and Monday, dinner',
      dinner: 'and for dinner',
      hours_note: 'Dinner every night, lunch Tuesday to Saturday. In August we close for the holidays: the dates are on our Instagram. In the evening and at weekends it’s best to book — it takes a minute on the phone.',
      metro: 'M3 Repubblica and M1 Porta Venezia, a few minutes’ walk',
      tram: 'The tram runs along Via Lazzaretto: you can watch it from the window',
      maps: 'Directions',
      alt_facciata: 'Tram Tram’s front at Via Lazzaretto 16: three windows with the sign and plants on the pavement.',
      map_title: 'Map: Tram Tram, Via Lazzaretto 16, Milan',
      f_contacts: 'Contact',
      f_where: 'Find us',
      f_what: 'A stop with a kitchen',
      f_line: 'Dinner every night, lunch Tuesday to Saturday.',
      piva: 'VAT and tax code',
      aria_top: 'Tram Tram — back to top',
      aria_nav: 'Main navigation'
    }
  };

  var current = 'it';
  try {
    var saved = localStorage.getItem('tramtram-lang');
    if (saved === 'en' || saved === 'it') current = saved;
  } catch (e) { /* storage non disponibile: si resta in IT */ }

  function applyLang(lang) {
    var dict = translations[lang];
    if (!dict) return;
    current = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-alt');
      if (dict[key] !== undefined) el.setAttribute('alt', dict[key]);
    });
    document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-title');
      if (dict[key] !== undefined) el.setAttribute('title', dict[key]);
    });
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });
    try { localStorage.setItem('tramtram-lang', lang); } catch (e) { /* ok */ }
  }

  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyLang(btn.getAttribute('data-lang'));
    });
  });

  if (current !== 'it') applyLang(current);

  /* ---------- intro "il capolinea" ---------- */

  var intro = document.getElementById('intro');
  if (intro) {
    var introReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (introReduced) {
      intro.remove();
    } else {
      var introDone = false;
      var openIntro = function () {
        intro.classList.add('intro--open');
        document.documentElement.classList.add('intro-done');
      };
      var finishIntro = function () {
        if (introDone) return;
        introDone = true;
        clearTimeout(openTimer);
        clearTimeout(endTimer);
        document.documentElement.classList.add('intro-done');
        document.body.classList.remove('intro-lock');
        intro.remove();
        window.removeEventListener('pointerdown', finishIntro, true);
        window.removeEventListener('keydown', finishIntro, true);
      };
      document.documentElement.classList.add('has-intro');
      document.body.classList.add('intro-lock');
      var openTimer = setTimeout(openIntro, 1650);
      var endTimer = setTimeout(finishIntro, 2500);
      window.addEventListener('pointerdown', finishIntro, true);
      window.addEventListener('keydown', finishIntro, true);
    }
  }

  /* ---------- copyright dinamico ---------- */

  var nowYear = new Date().getFullYear();
  document.querySelectorAll('[data-current-year]').forEach(function (el) {
    el.textContent = String(nowYear);
  });

  /* ---------- nav mobile ---------- */

  var nav = document.querySelector('.nav');
  var toggle = document.querySelector('.nav-toggle');
  if (nav && toggle) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('.nav-menu a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- reveal on scroll ---------- */

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced && 'IntersectionObserver' in window) {
    var targets = document.querySelectorAll('.section-head, .split-main, .split-side, .ledger, .dish, .g-foto, .stampa, .voto, .recensione, .cartina, .hours, .where');
    targets.forEach(function (t) { t.classList.add('reveal'); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    targets.forEach(function (t) { io.observe(t); });
  }
/* ---------- rete di sicurezza: se IntersectionObserver non parte, mostra tutto ---------- */
  if ('IntersectionObserver' in window) {
    var ioVivo = false;
    var sentinella = new IntersectionObserver(function () { ioVivo = true; sentinella.disconnect(); });
    sentinella.observe(document.body);
    setTimeout(function () {
      if (!ioVivo) {
        document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
      }
    }, 1500);
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
  }
})();
