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
      hero_proof: '4,5 su Google · oltre 450 recensioni',
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
      kitchen_quote_by: 'Francesco d’Argenzio, a La Cucina Italiana, 2020',
      kitchen_p2: 'In tavola, fermata dopo fermata: la pappa al pomodoro, i tonnarelli cacio e pepe, i carciofi alla romana quando è stagione. Il menù cambia con le stagioni.',
      stat1: 'su Google, oltre 450 recensioni',
      stat2: 'a cena tutte le sere; a pranzo da martedì a sabato',
      stat3: 'in via Lazzaretto, dal 2019',
      alt_vetrina: 'La vetrina di Tram Tram in via Lazzaretto 16, con l\'insegna «Tram Tram · Fermata con cucina», mentre davanti passa un tram giallo.',
      cap_vetrina: 'Via Lazzaretto 16: davanti alla vetrina passa il tram.',
      alt_ritratto: 'Francesco d’Argenzio, in camicia azzurra, in piedi davanti a un tavolo apparecchiato contro il muro scuro.',
      cap_ritratto: 'Francesco d’Argenzio, il padrone di casa — fotografia di Lucila Blumencweig',
      alt_tram_passa: 'La vetrina di Tram Tram in via Lazzaretto, mentre passa un tram giallo, mosso.',
      cap_tram_passa: 'La vetrina di via Lazzaretto, e il tram che passa',
      alt_tram_insegna: 'Un tram giallo, mosso, passa davanti all’insegna di Tram Tram.',
      cap_tram_insegna: 'Il tram giallo davanti all’insegna',
      menu_title: 'I classici della casa',
      m1: 'Tartare di fassona',
      m2: 'Tonnarelli cacio e pepe',
      m3: 'Carbonara',
      m4: 'Amatriciana',
      m5: 'Il polpo',
      m6: 'Baccalà fritto',
      m7: 'Saltimbocca alla romana',
      m8: 'Agnello',
      m9: 'Carciofi alla giudia e alla romana — quando è stagione',
      m10: 'Puntarelle, cicoria',
      m11: 'Crostata di ricotta e visciole',
      c_antipasto: 'antipasto',
      c_primo: 'primo',
      c_mare: 'dal mare',
      c_secondo: 'secondo',
      c_verdure: 'verdure',
      c_dolce: 'dolce',
      menu_note: 'Il menù è stagionale e cambia spesso: questi sono i piatti della casa e quelli che i nostri ospiti citano di più. Le novità le pubblichiamo su Instagram; per il menù del giorno, una telefonata.',
      wine_title: 'Vini & bolle',
      wine_pull: 'Una selezione di vini da piccoli produttori italiani, prosecchi e champagne.',
      wine_p1: 'E una scelta di cocktail di base e di birre, da gustare da noi accompagnati da un piatto di degustazione: per l’aperitivo, prima di cena o al posto della cena. Oppure da asporto, da gustare a casa vostra. Ci sono anche i vini al calice: chiedete a chi vi serve cosa c’è oggi.',
      alt_calici: 'Due calici di vino rosso alzati per un brindisi sopra un tavolo di legno.',
      table_title: 'In tavola',
      alt1: 'I tonnarelli cacio e pepe di Tram Tram, serviti nel piatto fondo',
      dish_caption: 'I tonnarelli cacio e pepe — fotografia di Liana Solis, dal servizio del ristorante.',
      alt_carciofo: 'Un carciofo alla romana col gambo, nel piatto bianco.',
      cap_carciofo: 'Il carciofo alla romana, quando è stagione',
      alt_vongole: 'Un piatto di spaghetti alle vongole.',
      cap_vongole: 'Spaghetti alle vongole',
      alt_tartare: 'La tartare con le scaglie di finocchio, l’aneto e le gocce di aceto balsamico, nel piatto bianco.',
      cap_tartare: 'La tartare, col finocchio',
      alt_pasta: 'La pasta fresca nella scodella bianca, sulla tovaglietta gialla.',
      cap_pasta: 'La pasta fresca',
      alt_cacio2: 'La cacio e pepe nel piatto fondo, sulla tovaglietta gialla, coi calici.',
      cap_cacio2: 'La cacio e pepe, nel piatto fondo — fotografia di Liana Solis',
      alt_tortino: 'Un tortino bianco col timo e la salsa, nel piatto bianco.',
      cap_tortino: 'Un tortino, col timo',
      alt_tortino_verde: 'Un tortino verde con la fonduta e il timo.',
      cap_tortino_verde: 'Il tortino verde, con la fonduta',
      alt_tartare2: 'La tartare col finocchio crudo e l’olio, vista dall’alto.',
      cap_tartare2: 'La tartare, vista dall’alto',
      alt_burrata: 'La burrata con le alici, tagliata a tavola.',
      cap_burrata: 'Burrata e alici',
      alt_formaggi: 'I formaggi sul tagliere con la confettura, accanto a un calice di rosso.',
      cap_formaggi: 'Formaggi e confettura, col rosso',
      alt_risotto: 'Un risotto col limone, con l’insalata, sul tavolo di marmo.',
      cap_risotto: 'Il risotto',
      alt_caffe: 'Il caffè con una fetta di dolce e lo zucchero, sul tavolino.',
      cap_caffe: 'Il caffè, con una fetta di dolce',
      alt_secondo: 'Un secondo di carne sul purè, col cavolo rosso e il fondo di cottura.',
      cap_secondo: 'Un secondo, col purè',
      alt_crema: 'Una crème brûlée in una cocotte bianca, portata in mano.',
      cap_crema: 'La crème brûlée',
      alt_tavolo: 'I tavoli di legno contro la parete blu, coi calici pronti.',
      cap_tavolo: 'La tavolata contro la parete blu',
      g_note: 'Foto di Liana Solis (le cacio e pepe, la tavolata) e di Tram Tram; quella degli spaghetti alle vongole viene dalla recensione di Désirée su Google.',
      room_title: 'La sala',
      room_pull: 'Un po’ bar, un po’ vineria, un po’ osteria, molto casa.',
      room_p1: 'Mobili antichi e pezzi vintage, libri, luci calde; alle pareti le opere di amici e vicini di quartiere, e ogni tanto una piccola mostra o una serata di musica. Fuori, sul marciapiede, pochi tavoli tra le piante e le lucine.',
      room_p2: 'In sala c’è anche una selezione di oggetti per rendere speciale la vostra tavola: molti pezzi unici, fatti a mano da artigiani italiani oppure vintage. Come gli orci di terracotta con l’olio extravergine di oliva estratto a freddo di Di Molfetta Frantoiani, decorati a mano in oro; le tovagliette sottopiatto lavorate a crochet in cotone, le borse porta torte cucite in cotone africano e indiano, i piatti di ceramica «fiori al vento» dipinti a mano. E vetri vintage e opere d’arte, come quelle della mostra «Trame» di Giulia Birindelli.',
      room_p3: 'Il locale è raccolto: la sera e nel fine settimana conviene prenotare, al telefono. Per una tavolata, chiamateci prima.',
      alt_fuori: 'Il marciapiede davanti a Tram Tram: le piante in vaso, una bicicletta rossa, un tavolino.',
      alt_sala: 'La sala: il bancone in ottone con gli sgabelli, le lanterne di carta, la specchiera di legno e i grandi disegni alle pareti.',
      cap_sala: 'La sala — fotografia di Lucila Blumencweig',
      alt_bancone: 'Il bancone e il fondo della sala, con le nicchie e le lanterne.',
      cap_bancone: 'Il bancone — fotografia di Lucila Blumencweig',
      alt_oliere: 'Francesco col vassoio degli orci dell’olio di Di Molfetta Frantoiani.',
      cap_oliere: 'Gli orci dell’olio di Di Molfetta Frantoiani',
      alt_oggetti: 'Gli oggetti per la tavola: orci dipinti, un disegno, tovagliette a crochet, piattini, borse in cotone stampato.',
      cap_oggetti: 'Gli oggetti per la tavola',
      alt_sala_bancone: 'La sala col bancone, i menù sul tavolo e un vaso di fiori.',
      cap_sala_bancone: 'La sala e il bancone — fotografia di Lucila Blumencweig',
      alt_tavoli: 'I tavoli apparecchiati coi calici, contro il muro grigio.',
      cap_tavoli: 'I tavoli apparecchiati — fotografia di Liana Solis',
      alt_tavolo_menu: 'Un tavolo di legno col menù e il calice, contro il muro grigio.',
      cap_tavolo_menu: 'Il menù sul tavolo',
      alt_cartellina: 'La cartellina del menù col tram e la scritta «Fermata con cucina».',
      cap_cartellina: 'La cartellina del menù',
      rev_title: 'Dicono di noi',
      press_quote: '«Prendere il tram a Milano e fermarsi per un attimo a Roma.»',
      press_by: 'La Cucina Italiana, 22 ottobre 2020',
      rev_rating: 'su Google, oltre 450 recensioni',
      rev_note: 'Una selezione dalle recensioni su Google. I tagli sono segnati con […]; per il resto sono come le hanno scritte, a parte qualche spazio di troppo.',
      hours_title: 'Orari e dove',
      hours_caption: 'Orari di apertura',
      tue_sat: 'Martedì — Sabato',
      sun_mon: 'Domenica e lunedì, a cena',
      dinner: 'e a cena',
      hours_note: 'A cena tutte le sere, a pranzo da martedì a sabato. Ad agosto chiudiamo per qualche settimana: lo annunciamo su Instagram. La sera e nel fine settimana meglio prenotare: si fa presto, al telefono.',
      metro: 'M3 Repubblica 6 minuti · Stazione Centrale 7 · M1 Porta Venezia 8, a piedi',
      tram: 'Tram 1: fermata Piazza Cincinnato, a due passi dalla vetrina',
      maps: 'Indicazioni',
      alt_facciata: 'La facciata di Tram Tram in via Lazzaretto 16: tre vetrine con l\'insegna e le piante sul marciapiede.',
      map_title: 'Mappa: Tram Tram, Via Lazzaretto 16, Milano',
      f_contacts: 'Contatti',
      f_where: 'Dove',
      f_what: 'Fermata con cucina',
      f_line: 'A cena tutte le sere, a pranzo da martedì a sabato.',
      piva: 'P.IVA e C.F.',
      aria_top: 'Tram Tram — torna su',
      doc_title: 'Tram Tram Milano · Fermata con cucina romana a Porta Venezia',
      doc_desc: 'Ristorante in Via Lazzaretto 16, Porta Venezia: cucina casalinga dall’anima romana, cacio e pepe, carbonara, polpo, vini al calice. Tel. 02 2809 8058.',
      voto_num: '4,5',
      stat2_num: '7/7',
      cap_calici: 'Un brindisi — fotografia di Lucila Blumencweig',
      g_src: 'Google',
      map_btn: 'Mostra la mappa',
      map_note: 'La mappa è di Google: aprendola qui, Google riceve il tuo indirizzo IP e può usare i suoi cookie.',
      f_privacy: 'Privacy e cookie',
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
      hero_motto: '“A few dishes. Simple. Good.”',
      hero_lead: 'The kitchen runs on the rails of homestyle Italian cooking with a strong Roman soul. Stop after stop, the journey leads to Proust’s madeleine, to the flavours of childhood.',
      hero_proof: '4.5 on Google · over 450 reviews',
      stop1: 'Stop 01',
      stop2: 'Stop 02',
      stop3: 'Stop 03',
      stop4: 'Stop 04',
      stop5: 'Stop 05',
      stop6: 'Stop 06',
      stop7: 'Stop 07',
      kitchen_title: 'The kitchen',
      kitchen_pull: 'A seasonal menu with a Roman soul: cacio e pepe, Roman-Jewish fried artichokes, puntarelle, cicoria, saltimbocca, lamb and the specialities of Lazio.',
      kitchen_p1: 'Your host is Francesco d’Argenzio, founding partner: a Roman with a past as a director, settled in Milan for years. His passion for food and music became real, and it is the essence of this place.',
      kitchen_quote: '“Cooking is almost like directing. You have to direct the ingredients and the flavours to make a dish come out right.”',
      kitchen_quote_by: 'Francesco d’Argenzio, to La Cucina Italiana, 2020 (translated)',
      kitchen_p2: 'On the table, stop after stop: pappa al pomodoro, tonnarelli cacio e pepe, Roman-style artichokes when they’re in season. The menu changes with the seasons.',
      stat1: 'on Google, over 450 reviews',
      stat2: 'dinner every night; lunch Tuesday to Saturday',
      stat3: 'on Via Lazzaretto, since 2019',
      alt_vetrina: 'Tram Tram’s window at Via Lazzaretto 16, with the sign “Tram Tram · Fermata con cucina”, as a yellow tram passes by.',
      cap_vetrina: 'Via Lazzaretto 16: the tram runs right past the window.',
      alt_ritratto: 'Francesco d’Argenzio, in a light blue shirt, standing behind a laid table against the dark wall.',
      cap_ritratto: 'Francesco d’Argenzio, your host — photograph by Lucila Blumencweig',
      alt_tram_passa: 'Tram Tram’s window on Via Lazzaretto as a yellow tram goes by, blurred.',
      cap_tram_passa: 'The window on Via Lazzaretto, and the passing tram',
      alt_tram_insegna: 'A yellow tram, blurred, passing in front of the Tram Tram sign.',
      cap_tram_insegna: 'The yellow tram in front of the sign',
      menu_title: 'The house classics',
      m1: 'Fassona beef tartare',
      m2: 'Tonnarelli cacio e pepe',
      m3: 'Carbonara',
      m4: 'Amatriciana',
      m5: 'Octopus',
      m6: 'Fried salt cod',
      m7: 'Saltimbocca alla romana',
      m8: 'Lamb',
      m9: 'Roman-Jewish fried and Roman-style artichokes — in season',
      m10: 'Puntarelle and cicoria (wild chicory)',
      m11: 'Ricotta and sour cherry tart',
      c_antipasto: 'starter',
      c_primo: 'pasta',
      c_mare: 'from the sea',
      c_secondo: 'main',
      c_verdure: 'greens',
      c_dolce: 'dessert',
      menu_note: 'The menu is seasonal and changes often: these are the house dishes and the ones our guests mention most. We post what’s new on Instagram; for today’s menu, just give us a call.',
      wine_title: 'Wine & bubbles',
      wine_pull: 'A selection of wines from small Italian producers, prosecco and champagne.',
      wine_p1: 'Plus a choice of classic cocktails and beers, to enjoy here with a tasting plate: for an aperitivo, before dinner or instead of it. Or to take away and enjoy at home. There are wines by the glass too: ask your server what’s open today.',
      alt_calici: 'Two glasses of red wine raised for a toast above a wooden table.',
      table_title: 'At the table',
      alt1: 'Tram Tram’s tonnarelli cacio e pepe, served in a deep plate',
      dish_caption: 'The tonnarelli cacio e pepe — photograph by Liana Solis, from the restaurant’s own shoot.',
      alt_carciofo: 'A Roman-style artichoke with its stem, on a white plate.',
      cap_carciofo: 'The Roman-style artichoke, in season',
      alt_vongole: 'A plate of spaghetti with clams.',
      cap_vongole: 'Spaghetti with clams',
      alt_tartare: 'The tartare with shaved fennel, dill and drops of balsamic vinegar, on a white plate.',
      cap_tartare: 'The tartare, with fennel',
      alt_pasta: 'Fresh pasta in a white bowl, on the yellow placemat.',
      cap_pasta: 'Fresh pasta',
      alt_cacio2: 'Cacio e pepe in a deep plate, on the yellow placemat, with glasses.',
      cap_cacio2: 'Cacio e pepe, in the deep plate — photograph by Liana Solis',
      alt_tortino: 'A white flan with thyme and sauce, on a white plate.',
      cap_tortino: 'A flan, with thyme',
      alt_tortino_verde: 'A green flan with cheese fondue and thyme.',
      cap_tortino_verde: 'The green flan, with fondue',
      alt_tartare2: 'The tartare with raw fennel and olive oil, seen from above.',
      cap_tartare2: 'The tartare, from above',
      alt_burrata: 'Burrata with anchovies, being cut at the table.',
      cap_burrata: 'Burrata and anchovies',
      alt_formaggi: 'Cheeses on a board with fruit preserve, next to a glass of red.',
      cap_formaggi: 'Cheese and preserve, with a red',
      alt_risotto: 'A risotto with lemon, with a salad, on the marble table.',
      cap_risotto: 'The risotto',
      alt_caffe: 'An espresso with a slice of cake and the sugar, on a small table.',
      cap_caffe: 'Coffee, with a slice of cake',
      alt_secondo: 'A meat main on mashed potato, with red cabbage and the cooking juices.',
      cap_secondo: 'A main, with mash',
      alt_crema: 'A crème brûlée in a white cocotte, carried by hand.',
      cap_crema: 'The crème brûlée',
      alt_tavolo: 'Wooden tables against the blue wall, glasses ready.',
      cap_tavolo: 'The long table against the blue wall',
      g_note: 'Photos by Liana Solis (both cacio e pepe, the long table) and by Tram Tram; the spaghetti with clams comes from Désirée’s Google review.',
      room_title: 'The room',
      room_pull: 'A bit of a bar, a bit of a wine bar, a bit of an osteria, very much a home.',
      room_p1: 'Antique furniture and vintage pieces, books, warm lights; on the walls, works by friends and neighbours, and now and then a small exhibition or a night of music. Outside on the pavement, a few tables among the plants and the string lights.',
      room_p2: 'In the dining room there is also a selection of things to make your table special: many one-off pieces, handmade by Italian artisans or vintage. Such as the terracotta jars of cold-pressed extra-virgin olive oil by Di Molfetta Frantoiani, hand-decorated in gold; cotton crochet placemats, cake bags sewn from African and Indian cotton, hand-painted «fiori al vento» ceramic plates. And vintage glassware and works of art, like those from Giulia Birindelli’s exhibition «Trame».',
      room_p3: 'It’s an intimate place: in the evening and at weekends it’s best to book by phone. For a big table, call us first.',
      alt_fuori: 'The pavement outside Tram Tram: potted plants, a red bicycle, a small table.',
      alt_sala: 'The room: the brass counter with its stools, paper lanterns, the wooden mirror and large drawings on the walls.',
      cap_sala: 'The room — photograph by Lucila Blumencweig',
      alt_bancone: 'The counter and the back of the room, with the niches and the lanterns.',
      cap_bancone: 'The bar — photograph by Lucila Blumencweig',
      alt_oliere: 'Francesco carrying a tray of Di Molfetta Frantoiani olive oil jars.',
      cap_oliere: 'The Di Molfetta Frantoiani olive oil jars',
      alt_oggetti: 'The tableware: painted jars, a drawing, crochet placemats, small plates, printed cotton bags.',
      cap_oggetti: 'Things for the table',
      alt_sala_bancone: 'The room with the bar, menus on the table and a vase of flowers.',
      cap_sala_bancone: 'The room and the bar — photograph by Lucila Blumencweig',
      alt_tavoli: 'Tables laid with glasses, against the grey wall.',
      cap_tavoli: 'The tables, laid — photograph by Liana Solis',
      alt_tavolo_menu: 'A wooden table with the menu and a glass, against the grey wall.',
      cap_tavolo_menu: 'The menu on the table',
      alt_cartellina: 'The menu clipboard with the tram and the words «Fermata con cucina».',
      cap_cartellina: 'The menu clipboard',
      rev_title: 'What people say',
      press_quote: '“Take the tram in Milan and stop for a moment in Rome.”',
      press_by: 'La Cucina Italiana, 22 October 2020 (translated)',
      rev_rating: 'on Google, over 450 reviews',
      rev_note: 'A selection of Google reviews, left in the original Italian. Cuts are marked […]; otherwise they are as written, bar a stray space or two.',
      hours_title: 'Hours & location',
      hours_caption: 'Opening hours',
      tue_sat: 'Tuesday — Saturday',
      sun_mon: 'Sunday and Monday, dinner',
      dinner: 'and for dinner',
      hours_note: 'Dinner every night, lunch Tuesday to Saturday. We close for a few weeks in August and announce it on Instagram. In the evening and at weekends it’s best to book — it takes a minute on the phone.',
      metro: 'M3 Repubblica 6 min · Centrale station 7 · M1 Porta Venezia 8, on foot',
      tram: 'Tram 1: Piazza Cincinnato stop, a few steps from the window',
      maps: 'Directions',
      alt_facciata: 'Tram Tram’s front at Via Lazzaretto 16: three windows with the sign and plants on the pavement.',
      map_title: 'Map: Tram Tram, Via Lazzaretto 16, Milan',
      f_contacts: 'Contact',
      f_where: 'Find us',
      f_what: 'A stop with a kitchen',
      f_line: 'Dinner every night, lunch Tuesday to Saturday.',
      piva: 'VAT and tax code',
      aria_top: 'Tram Tram — back to top',
      doc_title: 'Tram Tram Milan · Roman home cooking in Porta Venezia',
      doc_desc: 'Restaurant at Via Lazzaretto 16, Porta Venezia, Milan: Roman-style home cooking, cacio e pepe, carbonara, octopus, wines by the glass. Tel. +39 02 2809 8058.',
      voto_num: '4.5',
      stat2_num: '7 nights',
      cap_calici: 'A toast — photograph by Lucila Blumencweig',
      g_src: 'Google',
      map_btn: 'Show the map',
      map_note: 'The map is Google’s: if you open it here, Google receives your IP address and may use its cookies.',
      f_privacy: 'Privacy & cookies',
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
    /* titolo e descrizione della pagina nella lingua scelta */
    if (dict.doc_title) document.title = dict.doc_title;
    var desc = document.querySelector('meta[name="description"]');
    if (desc && dict.doc_desc) desc.setAttribute('content', dict.doc_desc);
    var mappa = document.querySelector('.cartina iframe');
    if (mappa && dict.map_title) mappa.setAttribute('title', dict.map_title);
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

  /* una volta per sessione (la testa mette intro-vista prima del primo disegno), più corta, e se main.js arriva tardi non parte */
  var intro = document.getElementById('intro');
  if (intro) {
    var introReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var introVista = document.documentElement.classList.contains('intro-vista');
    var tardi = window.performance && performance.now() > 1500;
    if (introReduced || introVista || tardi) {
      intro.remove();
    } else {
      try { sessionStorage.setItem('tramtram-intro', '1'); } catch (e) { /* ok */ }
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
        window.removeEventListener('wheel', finishIntro, true);
        window.removeEventListener('touchstart', finishIntro, true);
      };
      document.documentElement.classList.add('has-intro');
      document.body.classList.add('intro-lock');
      var openTimer = setTimeout(openIntro, 1000);
      var endTimer = setTimeout(finishIntro, 1700);
      window.addEventListener('pointerdown', finishIntro, true);
      window.addEventListener('keydown', finishIntro, true);
      window.addEventListener('wheel', finishIntro, { capture: true, passive: true });
      window.addEventListener('touchstart', finishIntro, { capture: true, passive: true });
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
    var chiudiNav = function (rimettiFocus) {
      if (!nav.classList.contains('is-open')) return;
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      if (rimettiFocus) toggle.focus();
    };
    nav.querySelectorAll('.nav-menu a').forEach(function (link) {
      link.addEventListener('click', function () { chiudiNav(false); });
    });
    /* si chiude anche con Esc, col clic fuori e quando il focus esce dal menu */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') chiudiNav(true);
    });
    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target)) chiudiNav(false);
    });
    nav.addEventListener('focusout', function (e) {
      if (e.relatedTarget && !nav.contains(e.relatedTarget)) chiudiNav(false);
    });
  }

  /* ---------- mappa al clic: prima del clic nessuna richiesta a Google ---------- */

  var cartina = document.querySelector('.cartina[data-mappa]');
  if (cartina) {
    var btnMappa = cartina.querySelector('.cartina-btn');
    if (btnMappa) {
      btnMappa.addEventListener('click', function (e) {
        e.preventDefault();
        var f = document.createElement('iframe');
        f.src = cartina.getAttribute('data-mappa');
        f.title = (translations[current] && translations[current].map_title) || 'Mappa';
        f.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
        f.setAttribute('allowfullscreen', '');
        cartina.innerHTML = '';
        cartina.appendChild(f);
        cartina.classList.add('is-aperta');
      });
    }
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
