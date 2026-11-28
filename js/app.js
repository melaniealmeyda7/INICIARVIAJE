/**
 * POLYGLOT MAP - Portal Oficial de Bootcamps Gratuitos
 * Temática: Viajero Políglota / Terminal de Vuelos
 * Evento Future Ready - Bootcamp de Idiomas
 */

// Catálogo de Cursos con Temarios Completos para todas las fechas
const COURSES_DATA = [
  {
    id: 'bootcamp-ingles-cero',
    type: 'BOOTCAMP',
    badgeText: 'BOOTCAMP · INGLÉS',
    badgeColor: 'bg-blue-100 text-blue-700 border-blue-200',
    dateBadge: 'DEL 20 NOV AL 18 DIC',
    statusBadge: '🟢 ACCESO LIBRE · SALA ZOOM',
    statusBadgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300 font-extrabold',
    isLocked: false,
    isClosed: false,
    title: 'Inglés desde cero',
    country: 'Estados Unidos / Global',
    flag: 'usa',
    language: 'Inglés',
    scheduleDays: 'Miércoles y viernes',
    scheduleTime: '7:00 a 8:00 p. m.',
    dateFrom: 'DEL',
    dateMain: '20 NOV',
    dateTo: 'AL 18 DIC',
    flightCode: 'PM-ENG01',
    gate: 'Puerta V-01 (Auditorio Virtual Zoom)',
    classLink: 'https://us06web.zoom.us/j/87200978668?pwd=vEFQ3bQ2wzxWP2vtVY6kyasE7xVlxi.1',
    streamLink: 'https://www.facebook.com/PolyglotMap8/',
    youtubeLink: 'https://www.youtube.com/@polyglot_map',
    registrationLink: 'https://forms.gle/8ANqwWUxt8tfi6RC6?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAcGRvZgJzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAafE60rN24MB4wGMEHubz6r5r_UrKPuaQhTrbIlcMs1hSweeR208EGV_SzzOsQ_aem_-2YkylOyhS6WLHyH8GU31w',
    seatClass: 'Clase Ejecutiva Lingüística',
    freeBadge: '100% GRATUITO',
    spotsTotal: 50,
    spotsLeft: 7,
    description: 'Aprende los fundamentos del idioma inglés con metodología inmersiva natural de viaje: presentaciones, aeropuerto, hospedaje y conversaciones cotidianas.',
    instructor: 'Coach Bilingüe Polyglot Map',
    perks: ['Clases en vivo', 'Material de estudio en PDF (Visor oficial)', 'Acceso a comunidad viajera', 'Certificado con examen final'],
    syllabus: [
      {
        session: 'Sesión 1',
        unit: 'Class 1 of 9 · Greetings & Introductions',
        date: 'Viernes 20 Nov',
        time: '7:00 - 8:00 p. m.',
        title: 'Hello! (Greetings & Introductions)',
        pdfUrl: 'materials/ingles-cero-clase-01.pdf',
        pdfName: 'PolyglotMap-Ingles-Cero-Clase-01.pdf',
        desc: 'Today you say hello, say your name and ask how people are. The H sound phonetics and greetings.',
        materials: {
          tag: "ENGLISH FROM SCRATCH · CLASS 1 OF 9",
          title: "Hello! (Greetings & Introductions)",
          subtitle: "Today you say hello, say your name and ask how people are.",
          goals: [
            "Say hello and goodbye: Greet people in English.",
            "Say your name: My name is… / I'm…",
            "Ask how people are: How are you? — I'm fine, thanks."
          ],
          goldenRule: "Golden rule: speak more, worry less!",
          vocabulary: [
            "Hello (je-LOU)", "Hi (jai)", "Good morning (gud MOR-ning)", "Good afternoon (gud af-ter-NUN)", "Good evening (gud IV-ning)", "Good night (gud NAIT)",
            "Nice to meet you (nais tu MIT iu)", "How are you? (jau ar iu)", "I'm fine, thanks (aim fain, thanks)", "My name is… (mai neim is)", "Goodbye (gud-BAI)", "See you later (si iu LEI-ter)"
          ],
          keyLanguage: [
            "Hello! My name is ___.",
            "I am ___. / I'm ___.",
            "How are you? — I'm fine, thanks. And you?",
            "Nice to meet you!",
            "Remember: I am = I'm | My name is = My name's | Questions go up ↗, answers go down ↘"
          ],
          pronunciation: "The H sound: hello, hi, how. English H is soft air (like fogging a mirror). Spanish J is strong in the throat. I'm -> aim, hi -> jai, my -> mai. Tip: Put your hand near your mouth, feel the air!",
          tongueTwisters: [
            "Chant (H is air!): Hello, Hi, How are you? Happy, happy, how-do-you-do!"
          ],
          dialogue: {
            title: "Nice to meet you (Read in turns, then swap roles!)",
            lines: [
              { speaker: "Tom", text: "Hello! My name is Tom." },
              { speaker: "Ana", text: "Hi Tom! I'm Ana." },
              { speaker: "Tom", text: "Nice to meet you, Ana." },
              { speaker: "Ana", text: "Nice to meet you, too." },
              { speaker: "Tom", text: "How are you?" },
              { speaker: "Ana", text: "I'm fine, thanks. And you?" },
              { speaker: "Tom", text: "I'm fine, too. Goodbye!" }
            ]
          },
          readingPassage: {
            title: "Tom's first day (Read aloud)",
            content: "Hello! My name is Tom. / I'm from Peru. / Today is my first day at school. / I'm happy! / My teacher says, 'Hi, Tom! How are you?' / I say, 'I'm fine, thanks!' / Goodbye for now!"
          },
          breakoutActivity: {
            title: "Live Speaking: Mic Round & Sentence Builder",
            tasks: [
              "1. Say hello to the teacher: Hello! / Good morning!",
              "2. Say your name: My name is ___ / I'm ___.",
              "3. Ask a classmate: How are you?",
              "4. Say goodbye in a fun way: See you later! / Goodbye!"
            ]
          },
          homework: "Exit ticket: Send a voice note: 'Hello! My name is ___.'"
        }
      },
      {
        session: 'Sesión 2',
        unit: 'Class 2 of 9 · The Alphabet & Numbers 0–20',
        date: 'Miércoles 25 Nov',
        time: '7:00 - 8:00 p. m.',
        title: 'ABC and Numbers (Alphabet & 0–20)',
        pdfUrl: 'materials/ingles-cero-clase-02.pdf',
        pdfName: 'PolyglotMap-Ingles-Cero-Clase-02.pdf',
        desc: 'Today you spell your name and say phone numbers. Vowel names and TH pronunciation.',
        materials: {
          tag: "ENGLISH FROM SCRATCH · CLASS 2 OF 9",
          title: "ABC and Numbers (The Alphabet & Numbers 0–20)",
          subtitle: "Today you spell your name and say phone numbers.",
          goals: [
            "Say the alphabet: A to Z, one letter at a time.",
            "Spell your name: How do you spell it?",
            "Count 0 to 20: Say numbers and phone numbers."
          ],
          goldenRule: "Golden rule: say it slowly, then say it fast!",
          vocabulary: [
            "Alphabet (AL-fa-bet)", "Letter (LE-ter)", "Spell (spel)", "Number (NAM-ber)", "Phone number (foun NAM-ber)", "How do you spell it?",
            "Zero (SI-rou)", "One (uan)", "Two (tu)", "Three (zri)", "Five (faiv)", "Ten (ten)"
          ],
          keyLanguage: [
            "How do you spell your name? — M-I-A.",
            "What's your phone number? — It's five-five-five, one-two-three.",
            "My lucky number is thirteen.",
            "Remember: -teen stress the END (thir-TEEN) vs -ty stress the START (THIR-ty). 18 eighteen, 19 nineteen, 20 twenty."
          ],
          pronunciation: "TH and the vowels: three, thirteen, thanks (tongue between teeth, blow air). Vowel letter names: A=ei, E=i, I=ai, O=ou, U=iu. -teen vs -ty stress.",
          tongueTwisters: [
            "Chant (TH time!): Three thin things, thanks a lot! Thirteen thumbs up, thirty friends!"
          ],
          dialogue: {
            title: "How do you spell it? (Read in turns, then swap roles!)",
            lines: [
              { speaker: "Ben", text: "Hi! What's your name?" },
              { speaker: "Mia", text: "My name is Mia." },
              { speaker: "Ben", text: "How do you spell Mia?" },
              { speaker: "Mia", text: "M-I-A." },
              { speaker: "Ben", text: "What's your phone number?" },
              { speaker: "Mia", text: "It's five-five-five, one-two-three." },
              { speaker: "Ben", text: "Thanks, Mia! Bye!" }
            ]
          },
          readingPassage: {
            title: "Mia's numbers (Read aloud)",
            content: "Thanks for calling! My name is Mia. / M-I-A. / My phone number is / five, three, two, one, zero. / I have three phones and twenty friends. / My lucky number is thirteen!"
          },
          breakoutActivity: {
            title: "Live Speaking: Mic Round & Spelling Game",
            tasks: [
              "1. Say the alphabet from A to J.",
              "2. Spell your name out loud in English.",
              "3. Say your phone number slowly digit by digit.",
              "4. Count from 11 to 20 with good pronunciation."
            ]
          },
          homework: "Exit ticket: Send a voice note: spell your name + count to 20!"
        }
      },
      {
        session: 'Sesión 3',
        unit: 'Class 3 of 9 · Countries & Nationalities',
        date: 'Viernes 27 Nov',
        time: '7:00 - 8:00 p. m.',
        title: 'Where are you from? (Countries & Nationalities)',
        pdfUrl: 'materials/ingles-cero-clase-03.pdf',
        pdfName: 'PolyglotMap-Ingles-Cero-Clase-03.pdf',
        desc: 'Today you say where you are from and your nationality. B and V sounds distinction.',
        materials: {
          tag: "ENGLISH FROM SCRATCH · CLASS 3 OF 9",
          title: "Where are you from? (Countries & Nationalities)",
          subtitle: "Today you say where you are from and your nationality.",
          goals: [
            "Name countries: Peru, Mexico, Spain, Colombia, The USA, Brazil…",
            "Say your nationality: I'm Peruvian / Mexican / Spanish…",
            "Ask where people are from: Where are you from?"
          ],
          goldenRule: "Golden rule: countries and nationalities start with a CAPITAL letter!",
          vocabulary: [
            "Peru (pe-RU)", "Mexico (MEK-si-kou)", "Colombia (ko-LOM-bia)", "Spain (spein)", "The USA (iu-es-EI)", "Brazil (bra-SIL)",
            "Peruvian (pe-RU-vian)", "Mexican (MEK-si-kan)", "Colombian (ko-LOM-bian)", "Spanish (SPA-nish)", "American (a-ME-ri-kan)", "Brazilian (bra-SI-lian)"
          ],
          keyLanguage: [
            "Where are you from? — I'm from Peru. / I'm Peruvian.",
            "Are you Mexican? — Yes, I am. / No, I'm not.",
            "He's from Spain. She's from Brazil.",
            "Remember: from + country | I'm + nationality | Capital letters: Peru, Peruvian"
          ],
          pronunciation: "B and V distinction: B (lips together: Brazil, Bogotá, be) vs V (top teeth touch bottom lip, bite and buzz: very, visit, Venezuela). Berry/very, boat/vote, ban/van.",
          tongueTwisters: [
            "Twister (B and V): Very big Brazilian vans. Victor visits Bolivia by bus."
          ],
          dialogue: {
            title: "Meeting a new friend (Read in turns, then swap roles!)",
            lines: [
              { speaker: "Lucas", text: "Hi! I'm Lucas. Where are you from?" },
              { speaker: "Sofia", text: "I'm Sofia. I'm from Spain." },
              { speaker: "Lucas", text: "Are you Spanish?" },
              { speaker: "Sofia", text: "Yes, I am. Are you American?" },
              { speaker: "Lucas", text: "No, I'm not. I'm Brazilian." },
              { speaker: "Sofia", text: "Oh, very nice! Welcome!" },
              { speaker: "Lucas", text: "Thanks, Sofia!" }
            ]
          },
          readingPassage: {
            title: "Welcome to Lima (Read aloud)",
            content: "My name is Carlos. / I'm from Colombia. / I'm Colombian. / My friend Bruno is from Brazil. / He is Brazilian. / We are very happy. / We visit Peru today! / Where are you from?"
          },
          breakoutActivity: {
            title: "Live Speaking: Mic Round & Passport Check",
            tasks: [
              "1. Ask the teacher: Where are you from?",
              "2. Say: I'm from ___.",
              "3. Ask a classmate: Are you ___?",
              "4. Say your nationality with correct stress."
            ]
          },
          homework: "Exit ticket: Send a voice note: 'I'm from ___. I'm ___.'"
        }
      },
      {
        session: 'Sesión 4',
        unit: 'Class 4 of 9 · Family Members',
        date: 'Miércoles 02 Dic',
        time: '7:00 - 8:00 p. m.',
        title: 'My Family (Close & Extended Family)',
        pdfUrl: 'materials/ingles-cero-clase-04.pdf',
        pdfName: 'PolyglotMap-Ingles-Cero-Clase-04.pdf',
        desc: 'Today you talk about your family: who they are and how many. The voiced TH sound.',
        materials: {
          tag: "ENGLISH FROM SCRATCH · CLASS 4 OF 9",
          title: "My Family (Family Members)",
          subtitle: "Today you talk about your family: who they are and how many.",
          goals: [
            "Name family members: mother, father, sister, brother, grandparents…",
            "Introduce people: This is my mother. Her name is Rosa.",
            "Say how many: I have two brothers and one sister."
          ],
          goldenRule: "Golden rule: one family, many new words!",
          vocabulary: [
            "Mother (MA-der)", "Father (FA-der)", "Sister (SIS-ter)", "Brother (BRA-der)", "Grandmother (GRAN-ma-der)", "Grandfather (GRAN-fa-der)",
            "Family (FA-mi-li)", "Parents (PE-rents)", "Baby (BEI-bi)", "Aunt (ant)", "Uncle (AN-kol)", "Cousin (KA-sin)"
          ],
          keyLanguage: [
            "This is my mother. / This is my father.",
            "He is my brother. / She is my sister.",
            "I have two brothers and one sister.",
            "My mother's name is Rosa.",
            "Remember: He = a man · She = a woman · 's shows possession: my mother's name"
          ],
          pronunciation: "The voiced TH: mother, father, brother, this, that, they. Tongue between teeth + voice (feel the buzz in your throat). TH != D: other != odor, they != day. Put your tongue out!",
          tongueTwisters: [
            "Twister (voiced TH): My mother and my father love my brother, this and that."
          ],
          dialogue: {
            title: "Meet my family (Read in turns, then swap roles!)",
            lines: [
              { speaker: "Ana", text: "Look! This is my family." },
              { speaker: "Leo", text: "Who is she?" },
              { speaker: "Ana", text: "She is my mother. Her name is Rosa." },
              { speaker: "Leo", text: "And who is he?" },
              { speaker: "Ana", text: "He is my brother. His name is Pablo." },
              { speaker: "Leo", text: "Do you have sisters?" },
              { speaker: "Ana", text: "Yes, I have one sister." }
            ]
          },
          readingPassage: {
            title: "My big family (Read aloud)",
            content: "I have a big family. / My mother is Rosa. / My father is Luis. / I have two brothers. / My sister is Eva. / My grandmother is Carmen. / This is my family. / We love each other!"
          },
          breakoutActivity: {
            title: "Live Speaking: Mic Round & Family Tree",
            tasks: [
              "1. Say who is in your family: 'This is my…'",
              "2. Say: My mother's name is ___.",
              "3. Ask a classmate: Do you have brothers or sisters?",
              "4. Say how many brothers or sisters you have."
            ]
          },
          homework: "Exit ticket: Send a voice note: 'This is my family. I have ___.'"
        }
      },
      {
        session: 'Sesión 5',
        unit: 'Class 5 of 9 · Colors & Everyday Things',
        date: 'Viernes 04 Dic',
        time: '7:00 - 8:00 p. m.',
        title: 'Colors and Things (Objects & Colors)',
        pdfUrl: 'materials/ingles-cero-clase-05.pdf',
        pdfName: 'PolyglotMap-Ingles-Cero-Clase-05.pdf',
        desc: 'Today you name colors and objects around you. Articles a/an and S + consonant phonetics.',
        materials: {
          tag: "ENGLISH FROM SCRATCH · CLASS 5 OF 9",
          title: "Colors and Things (Colors & Everyday Things)",
          subtitle: "Today you name colors and objects around you.",
          goals: [
            "Say colors: red, blue, green, yellow, black, white…",
            "Name things: a book, a pen, a bag, a phone, a key, a chair…",
            "Ask What is it? What color is it? — It's a blue pen."
          ],
          goldenRule: "Golden rule: a before consonants, an before vowels!",
          vocabulary: [
            "Red (red)", "Blue (blu)", "Green (grin)", "Yellow (IE-lou)", "Black (blak)", "White (uait)",
            "Book (buk)", "Pen (pen)", "Phone (foun)", "Bag (bag)", "Key (ki)", "Chair (cher)"
          ],
          keyLanguage: [
            "What is this? — It's a pen.",
            "What color is it? — It's blue.",
            "It's an orange bag. (an + vowel sound)",
            "They are red keys.",
            "Remember: a + consonant (a book) | an + vowel (an apple) | It's = It is | They are = plural"
          ],
          pronunciation: "S + consonant (sk- school, skirt, sky | st- student, stop, star | sp- Spanish, spell, speak). Tip: Do not add an E! Start with S: s-kool, not 'eschool'!",
          tongueTwisters: [
            "Twister (S + consonant): Six students speak Spanish at school. Stop, spell, speak!"
          ],
          dialogue: {
            title: "What color is it? (Read in turns, then swap roles!)",
            lines: [
              { speaker: "Eva", text: "What's this?" },
              { speaker: "Max", text: "It's a bag." },
              { speaker: "Eva", text: "What color is it?" },
              { speaker: "Max", text: "It's red. And this is my pen." },
              { speaker: "Eva", text: "Is it black?" },
              { speaker: "Max", text: "No, it's blue. It's a blue pen." },
              { speaker: "Eva", text: "I like your bag!" }
            ]
          },
          readingPassage: {
            title: "My room (Read aloud)",
            content: "This is my room. / It's small but nice. / I have a blue school bag / and a red book. / My phone is black. / My student card is yellow. / I like my things!"
          },
          breakoutActivity: {
            title: "Live Speaking: Mic Round & Show & Tell",
            tasks: [
              "1. Show an object to your camera: 'It's a ___.'",
              "2. Say the color of your shirt: 'My shirt is ___.'",
              "3. Ask a classmate: What color is your pen / phone?",
              "4. Describe your room in 3 simple sentences."
            ]
          },
          homework: "Exit ticket: Send a voice note: 'This is my ___. It's ___.'"
        }
      },
      {
        session: 'Sesión 6',
        unit: 'Class 6 of 9 · Days, Months & Time',
        date: 'Miércoles 09 Dic',
        time: '7:00 - 8:00 p. m.',
        title: 'Days, Months and Time (Calendar & Clocks)',
        pdfUrl: 'materials/ingles-cero-clase-06.pdf',
        pdfName: 'PolyglotMap-Ingles-Cero-Clase-06.pdf',
        desc: 'Today you say the day, the month and the time. Prepositions on/in/at and silent letters.',
        materials: {
          tag: "ENGLISH FROM SCRATCH · CLASS 6 OF 9",
          title: "Days, Months and Time",
          subtitle: "Today you say the day, the month and the time.",
          goals: [
            "Say days and months: Monday, July, December…",
            "Tell the time: It's three o'clock. / It's half past seven.",
            "Say your birthday: My birthday is in May."
          ],
          goldenRule: "Golden rule: days and months start with a CAPITAL letter!",
          vocabulary: [
            "Monday (MAN-dei)", "Tuesday (TIUS-dei)", "Wednesday (UENZ-dei)", "Thursday (ZERS-dei)", "Friday (FRAI-dei)", "Weekend (UI-kend)",
            "January (YAN-iu-e-ri)", "July (yu-LAI)", "December (di-SEM-ber)", "What time is it?", "o'clock (o-KLOK)", "half past (jaf past)"
          ],
          keyLanguage: [
            "What day is it? — It's Monday.",
            "What time is it? — It's three o'clock. / It's half past seven (7:30).",
            "My birthday is in May.",
            "Remember: on + day (on Monday) | in + month (in May) | at + time (at five o'clock)"
          ],
          pronunciation: "Tricky days: Wednesday (silent D: UENZ-dei, not Wed-nes-day!), Thursday (TH + ER: ZERS-dei), Tuesday (TIUS-dei), Friday (FRAI-dei).",
          tongueTwisters: [
            "Chant (the week): Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday: hooray!"
          ],
          dialogue: {
            title: "What time is it? (Read in turns, then swap roles!)",
            lines: [
              { speaker: "Dan", text: "Hi! What day is it today?" },
              { speaker: "Zoe", text: "It's Friday!" },
              { speaker: "Dan", text: "What time is it?" },
              { speaker: "Zoe", text: "It's half past six." },
              { speaker: "Dan", text: "When is your birthday?" },
              { speaker: "Zoe", text: "It's in July. And yours?" },
              { speaker: "Dan", text: "In December. See you on Monday!" }
            ]
          },
          readingPassage: {
            title: "A busy week (Read aloud)",
            content: "On Monday I study English. / On Thursday I work. / On Friday I meet friends / at half past seven. / I love the weekend! / On Sunday I rest. / My birthday is in July!"
          },
          breakoutActivity: {
            title: "Live Speaking: Mic Round & Schedule Check",
            tasks: [
              "1. Say today's day and month: 'Today is ___.'",
              "2. Tell the time on your clock: 'It's ___ o'clock.'",
              "3. Ask a classmate: When is your birthday?",
              "4. Say your favorite day of the week and why."
            ]
          },
          homework: "Exit ticket: Send a voice note: 'My birthday is in ___.'"
        }
      },
      {
        session: 'Sesión 7',
        unit: 'Class 7 of 9 · Daily Routine',
        date: 'Viernes 11 Dic',
        time: '7:00 - 8:00 p. m.',
        title: 'My Day (Daily Actions & Times)',
        pdfUrl: 'materials/ingles-cero-clase-07.pdf',
        pdfName: 'PolyglotMap-Ingles-Cero-Clase-07.pdf',
        desc: 'Today you talk about what you do every day. Third person -S rule and daily verbs.',
        materials: {
          tag: "ENGLISH FROM SCRATCH · CLASS 7 OF 9",
          title: "My Day (Daily Routine)",
          subtitle: "Today you talk about what you do every day.",
          goals: [
            "Say daily actions: wake up, eat breakfast, study, go to work…",
            "Say the time of actions: I wake up at six. I eat at seven.",
            "Talk about others: She goes to work at eight. He studies at night."
          ],
          goldenRule: "Golden rule: he / she / it + S!",
          vocabulary: [
            "Wake up (ueik ap)", "Get up (get ap)", "Take a shower (teik a SHAU-er)", "Eat breakfast (it BREK-fast)", "Go to work (gou tu uerk)", "Study (STA-di)",
            "Have lunch (jav lanch)", "Come home (kam joum)", "Have dinner (jav DI-ner)", "Watch TV (uach ti-VI)", "Use my phone (ius mai foun)", "Go to bed (gou tu bed)"
          ],
          keyLanguage: [
            "I wake up at six. / I eat breakfast at seven.",
            "She goes to work at eight. / He studies at night.",
            "Remember: I / you / we / they: wake up | he / she / it: wakes up | go → goes · study → studies | at + time: at six"
          ],
          pronunciation: "The -S ending: /s/ (after soft sound: works, eats, walks), /z/ (after voiced sound: goes, plays, studies), /iz/ (adds extra syllable: watches, washes, relaxes). Feel the buzz!",
          tongueTwisters: [
            "Chant (add the S): She wakes, she eats, she goes, she studies, she watches TV, she sleeps!"
          ],
          dialogue: {
            title: "My daily routine (Read in turns, then swap roles!)",
            lines: [
              { speaker: "Kim", text: "What time do you wake up?" },
              { speaker: "Leo", text: "I wake up at six. And you?" },
              { speaker: "Kim", text: "I wake up at seven." },
              { speaker: "Leo", text: "What do you do after work?" },
              { speaker: "Kim", text: "I study English." },
              { speaker: "Leo", text: "Great! I watch TV." },
              { speaker: "Kim", text: "Good night, Leo!" }
            ]
          },
          readingPassage: {
            title: "Rosa's day (Read aloud)",
            content: "Rosa wakes up at six. / She gets up at seven. / She eats breakfast at eight. / She goes to work by bus. / At night she studies English. / She watches TV. / She goes to bed at ten."
          },
          breakoutActivity: {
            title: "Live Speaking: Mic Round & Routine Interview",
            tasks: [
              "1. Say what time you wake up: 'I wake up at ___.'",
              "2. Say what you do at night: 'At night I ___.'",
              "3. Ask a classmate: What time do you go to bed?",
              "4. Tell what your friend does: 'He / She goes to…'"
            ]
          },
          homework: "Exit ticket: Send a voice note: 'In the morning, I ___.'"
        }
      },
      {
        session: 'Sesión 8',
        unit: 'Class 8 of 9 · Food & Drinks',
        date: 'Miércoles 16 Dic',
        time: '7:00 - 8:00 p. m.',
        title: 'Food and Drinks (Likes & Ordering Polite)',
        pdfUrl: 'materials/ingles-cero-clase-08.pdf',
        pdfName: 'PolyglotMap-Ingles-Cero-Clase-08.pdf',
        desc: 'Today you say what you like and order food. EE vs I phonetics and café dialogues.',
        materials: {
          tag: "ENGLISH FROM SCRATCH · CLASS 8 OF 9",
          title: "Food and Drinks",
          subtitle: "Today you say what you like and order food.",
          goals: [
            "Name food and drinks: apple, bread, rice, chicken, coffee, pizza…",
            "Say what you like: I like pizza. / I don't like fish.",
            "Order politely: I'd like a coffee, please."
          ],
          goldenRule: "Golden rule: say please and thank you!",
          vocabulary: [
            "Apple (A-pol)", "Bread (bred)", "Rice (rais)", "Chicken (CHI-ken)", "Egg (eg)", "Cheese (chis)",
            "Water (UO-ter)", "Coffee (KO-fi)", "Tea (ti)", "Juice (yus)", "Milk (milk)", "Pizza (PIT-sa)"
          ],
          keyLanguage: [
            "I like pizza. / I don't like fish.",
            "Do you like coffee? — Yes, I do. / Do you like milk? — No, I don't.",
            "I'd like a tea, please.",
            "Remember: like = enjoy · don't = do not · I'd like = I would like · Always say 'please'!"
          ],
          pronunciation: "EE vs I: EE (long sound, smile wide: cheese, tea, eat) vs I (short sound, quick: chicken, fish, milk). Sheep / ship · seat / sit · eat / it.",
          tongueTwisters: [
            "Twister (EE and I): Cheese, please! Tea for me. Chicken, fish and milk for three."
          ],
          dialogue: {
            title: "At the café (Read in turns, then swap roles!)",
            lines: [
              { speaker: "Waiter", text: "Hello! What would you like?" },
              { speaker: "Mia", text: "I'd like a coffee, please." },
              { speaker: "Waiter", text: "Anything to eat?" },
              { speaker: "Mia", text: "Yes, a cheese sandwich, please." },
              { speaker: "Waiter", text: "Do you like milk in your coffee?" },
              { speaker: "Mia", text: "Yes, I do. Thank you!" },
              { speaker: "Waiter", text: "You're welcome!" }
            ]
          },
          readingPassage: {
            title: "Lunch time (Read aloud)",
            content: "I'm hungry! / I'd like chicken and rice, please. / My friend likes cheese pizza. / She drinks tea. / We don't like fish. / We love juice! / Thank you! / Goodbye!"
          },
          breakoutActivity: {
            title: "Live Speaking: Mic Round & Café Roleplay",
            tasks: [
              "1. Say what you eat for breakfast: 'I eat…'",
              "2. Order a drink: 'I'd like ___, please.'",
              "3. Ask a classmate: Do you like pizza?",
              "4. Say one food you don't like: 'I don't like…'"
            ]
          },
          homework: "Exit ticket: Send a voice note: 'I like ___ and I don't like ___.'"
        }
      },
      {
        session: 'Sesión 9',
        unit: 'Class 9 of 9 · Review & Final Presentation',
        date: 'Viernes 18 Dic',
        time: '7:00 - 8:00 p. m.',
        title: 'All About Me (Review & Final Presentation)',
        pdfUrl: 'materials/ingles-cero-clase-10.pdf',
        pdfName: 'PolyglotMap-Ingles-Cero-Clase-10.pdf',
        desc: 'Today you put everything together and present yourself: name, country, age, likes, favorites and pronunciation lab.',
        materials: {
          tag: "ENGLISH FROM SCRATCH · CLASS 9 OF 9 · REVIEW & FINAL PRESENTATION",
          title: "All About Me (Review & Final Presentation)",
          subtitle: "Today you put everything together and present yourself.",
          goals: [
            "Review the course: Greetings, family, food, places.",
            "Present yourself: Name, country, age, likes.",
            "Celebrate your progress: You can speak English!"
          ],
          goldenRule: "Golden rule: you already know more than you think!",
          vocabulary: [
            "My name is… (mai neim is)", "I'm from… (aim from)", "I'm … years old (aim … yirs ould)", "I live in… (ai liv in)", "I'm a student (aim a STIU-dent)", "I like… (ai laik)",
            "Favorite color (FEI-vo-rit KA-ler)", "Favorite food (FEI-vo-rit fud)", "Favorite day (FEI-vo-rit dei)", "Favorite place (FEI-vo-rit pleis)", "Hobby (JO-bi)", "Music (MIU-sik)"
          ],
          keyLanguage: [
            "Hello! My name is ___.",
            "I'm from ___. I'm ___ years old.",
            "I live in ___. I like ___.",
            "My favorite color is ___. Thank you!",
            "Remember: Speak slowly and clearly · Stress key words · Smile and make pauses · Look at the camera!"
          ],
          pronunciation: "Pronunciation Lab: Slow (Hel-lo! My name is… Thank you! Slow and clear is better than fast) · Stress (I LIVE in LI-ma. I LIKE MU-sic) · Pause (Hello! / I'm Ana. / I'm from Peru. Pause where you see /). Tip: Smile! Your voice sounds friendlier.",
          tongueTwisters: [
            "Chant (slow and clear): Hello, I'm Ana. I like music. Thank you, thank you, thank you!"
          ],
          dialogue: {
            title: "Getting to know you (Read in turns, then swap roles!)",
            lines: [
              { speaker: "Sam", text: "Hi! What's your name?" },
              { speaker: "Ana", text: "I'm Ana. Nice to meet you!" },
              { speaker: "Sam", text: "Where are you from, Ana?" },
              { speaker: "Ana", text: "I'm from Peru. I'm Peruvian." },
              { speaker: "Sam", text: "What do you like?" },
              { speaker: "Ana", text: "I like music and pizza." },
              { speaker: "Sam", text: "Me too! Great to meet you!" }
            ]
          },
          readingPassage: {
            title: "All about Ana & My new friend",
            content: "Hello! / My name is Ana. / I'm from Peru. / I'm twenty years old. / I live in Lima. / I like music / and I love pizza! / Thank you!"
          },
          breakoutActivity: {
            title: "Live Speaking: Mic Round & Final Presentation",
            tasks: [
              "1. Say your name and country: Hello! My name is ___. I'm from ___.",
              "2. Say your age and where you live: I'm ___ years old and I live in ___.",
              "3. Say two things you like: I like ___ and my favorite is ___.",
              "4. Give your 20-second final presentation to the group!"
            ]
          },
          homework: "Exit ticket: Send a voice note: your full 30-second final presentation!"
        }
      }
    ]
  },
  {
    id: 'club-ingles-a2',
    type: 'CLUB',
    badgeText: 'CLUB DE INGLÉS CONVERSACIONAL',
    badgeColor: 'bg-sky-100 text-sky-800 border-sky-200',
    dateBadge: 'DEL 9 NOV AL 14 DIC',
    statusBadge: '🔒 BLOQUEADO TEMPORALMENTE',
    statusBadgeColor: 'bg-rose-100 text-rose-800 border-rose-300 font-extrabold',
    isLocked: true,
    isClosed: false,
    title: 'Nivel A2',
    country: 'Internacional',
    flag: 'usa',
    language: 'Inglés',
    scheduleDays: 'Todos los lunes',
    scheduleTime: '10:00 a 11:00 a. m.',
    dateFrom: 'DEL',
    dateMain: '9 NOV',
    dateTo: 'AL 14 DIC',
    flightCode: 'PM-ENG-A2',
    gate: 'Puerta V-04 (Auditorio Virtual)',
    classLink: '',
    streamLink: 'https://www.facebook.com/PolyglotMap8/',
    youtubeLink: 'https://www.youtube.com/@polyglot_map',
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSe6Dg2_HyfgnjEXD0Y51eK8UM0koZxayF5WfQ7q2nNBGZ1y2Q/viewform',
    seatClass: 'Club de Oradores',
    freeBadge: '100% GRATUITO',
    spotsTotal: 30,
    spotsLeft: 4,
    description: 'Práctica intensiva 100% hablada para estudiantes con nivel básico-intermedio (A2). Dinámicas de debate, roleplay de viajes y networking global.',
    instructor: 'Facilitador Nativo & Políglota',
    perks: ['Grupos reducidos de práctica', 'Corrección de pronunciación en tiempo real', 'Temas semanales de cultura y viajes', 'Millas de fluidez'],
    recordingFolderLink: 'https://drive.google.com/file/d/18OG0Sd3kQ9txIXLkjfR-_cwxOBG2uowF/view?usp=sharing',
    syllabus: [
      {
        session: 'Sesión 1',
        unit: 'Unit 1 of 6',
        date: 'Lunes 09 Nov',
        time: '10:00 - 11:00 a. m.',
        title: 'Amazing Daily Routines',
        pdfUrl: 'materials/ingles-conversacional-unidad-01.pdf',
        pdfName: 'PolyglotMap-Ingles-Conversacional-Unit-01.pdf',
        desc: 'Today you talk about your habits and discover your classmates’ routines. Adverbs of frequency (always, usually, sometimes, rarely, never) and -s endings.',
        recordingUrl: 'https://drive.google.com/file/d/18OG0Sd3kQ9txIXLkjfR-_cwxOBG2uowF/view?usp=sharing',
        recordingDate: '09 Noviembre 2026',
        materials: {
          tag: "ENGLISH A2 · UNIT 1 OF 6 · LET'S TALK!",
          title: "Amazing Daily Routines",
          subtitle: "Today you talk about your habits and discover your classmates' routines.",
          goals: [
            "Talk about your day: Describe what you do every day.",
            "Say how often: Use always, usually, sometimes, rarely and never.",
            "Ask and answer: Find out about your classmates' habits."
          ],
          goldenRule: "Golden rule: today the student talks more than the teacher.",
          vocabulary: ["wake up", "get dressed", "commute", "skip breakfast", "take a nap", "go to bed", "always", "usually", "sometimes", "rarely", "never", "schedule"],
          keyLanguage: [
            "I usually wake up at ___.",
            "She never skips breakfast.",
            "Do you take a nap in the afternoon? Yes, I do. / No, I don't.",
            "Frequency order: always > usually > sometimes > rarely > never"
          ],
          reading: {
            title: "Famous Routines",
            content: "Many successful people have interesting routines. Tim Cook, the CEO of Apple, wakes up at 3:45 a.m. He reads emails and goes to the gym early. The writer Haruki Murakami wakes up at 4 a.m. He writes for five hours and then he runs 10 kilometers. Benjamin Franklin always asked himself one question every morning: 'What good will I do today?'"
          },
          dialogue: {
            title: "Morning or night? (Read 3 times: slow, normal, fast!)",
            lines: [
              { speaker: "Mia", text: "Hi Sam! Are you a morning person?" },
              { speaker: "Sam", text: "Not really. I usually wake up at nine." },
              { speaker: "Mia", text: "Nine? I always get up at six." },
              { speaker: "Sam", text: "Wow! What do you do so early?" },
              { speaker: "Mia", text: "I go for a run and then I make breakfast." },
              { speaker: "Sam", text: "I never skip breakfast, but I rarely cook." },
              { speaker: "Mia", text: "Come to my house tomorrow!" }
            ]
          },
          readingPassage: {
            title: "A Day in the Life of Lucía",
            content: "Lucía wakes up at six thirty. / She takes a shower / and gets dressed. / She usually eats breakfast at home, / but sometimes she skips it. / She commutes to work by bus. / In the evening, she rarely cooks. / She goes to bed at eleven."
          },
          pronunciation: "Sound focus: -s endings (/s/ wakes, works, eats | /z/ runs, goes, reads | /ɪz/ watches, washes, relaxes). Tip: the -s sound depends on the sound before it.",
          tongueTwisters: [
            "1. Six sleepy sisters sometimes sleep in on Sundays.",
            "2. She usually wakes up, washes her face and watches the sunrise."
          ],
          breakoutActivity: {
            title: "Find Someone Who… (Breakout Rooms · 15 min)",
            tasks: [
              "Find someone who wakes up before 6 a.m.",
              "Find someone who never drinks coffee",
              "Find someone who always checks the phone in bed",
              "Find someone who usually eats dinner after 9 p.m.",
              "Find someone who takes a nap every day"
            ]
          },
          homework: "Exit ticket: Record a 30-second audio about your daily routine."
        }
      },
      {
        session: 'Sesión 2',
        unit: 'Unit 2 of 6',
        date: 'Lunes 16 Nov',
        time: '10:00 - 11:00 a. m.',
        title: 'Food Around the World',
        pdfUrl: 'materials/ingles-conversacional-unidad-02.pdf',
        pdfName: 'PolyglotMap-Ingles-Conversacional-Unit-02.pdf',
        desc: 'Today you order, share your tastes and talk about food from your country. Asking for the bill and quantifiers.',
        materials: {
          tag: "ENGLISH A2 · UNIT 2 OF 6 · LET'S TALK!",
          title: "Food Around the World",
          subtitle: "Today you order, share your tastes and talk about food from your country.",
          goals: [
            "Order food: Ask for a dish, a drink and the bill at a restaurant.",
            "Share your tastes: Say what you love, like and can't stand.",
            "Count and measure: Use some, any, much and many correctly."
          ],
          goldenRule: "Golden rule: today the student talks more than the teacher.",
          vocabulary: ["spicy", "sweet", "sour", "delicious", "fresh", "a bowl of", "a slice of", "a glass of", "menu", "bill", "tip", "dish"],
          keyLanguage: [
            "I'd like a bowl of soup, please.",
            "Is it spicy?",
            "How much is it? / How many people?",
            "I love / I like / I can't stand ___.",
            "some → I'd like some soup | any → Is there any rice? | much → uncountable | many → countable"
          ],
          reading: {
            title: "Food Fun Facts",
            content: "1. In Japan, eating while walking can seem impolite. 2. Peru has more than 4,000 varieties of potatoes. 3. In Italy, people don't drink cappuccino after lunch. 4. Honey never goes bad; archaeologists found edible honey in ancient Egyptian tombs."
          },
          dialogue: {
            title: "At a restaurant / At the café",
            lines: [
              { speaker: "Waiter", text: "Good evening! Are you ready to order?" },
              { speaker: "Customer", text: "Yes, please. What's today's special?" },
              { speaker: "Waiter", text: "Grilled chicken with rice and salad." },
              { speaker: "Customer", text: "Sounds good. Is it spicy?" },
              { speaker: "Waiter", text: "No, it isn't. But the sauce is a little sweet." },
              { speaker: "Customer", text: "Perfect. I'd like that, and a glass of water, please." }
            ]
          },
          readingPassage: {
            title: "Lunch in Lima",
            content: "Every Sunday, my family eats lunch together. / My mother makes a big bowl of soup / and a spicy chicken dish with rice. / My brother loves fresh salad, / but I can't stand sour lemons! / For dessert we have a slice of sweet cake. / It's simple, but it's delicious."
          },
          pronunciation: "Sound focus: sh, ch, j (/ʃ/ fresh, dish, fish | /tʃ/ chicken, cheese, lunch | /dʒ/ juice, orange, vegetables). Tip: /ʃ/ is soft like 'shh'; /tʃ/ starts with a tiny 't'.",
          tongueTwisters: [
            "1. Chefs choose fresh cheese and sweet cherries.",
            "2. Fresh fish and fried chicken for a cheap lunch."
          ],
          breakoutActivity: {
            title: "Restaurant Role-Play (Breakout Rooms · 15 min)",
            tasks: [
              "Choose: Share a menu on screen (or invent one!) and pick roles.",
              "Order: Order a starter, a main dish, a drink and dessert.",
              "Pay: Ask for the bill, then swap roles."
            ]
          },
          homework: "Exit ticket: Record a 30-second audio about your favorite dish."
        }
      },
      {
        session: 'Sesión 3',
        unit: 'Unit 3 of 6',
        date: 'Lunes 23 Nov',
        time: '10:00 - 11:00 a. m.',
        title: 'Travel Adventures & Living Abroad',
        desc: 'Today you share travel anecdotes, describe past journeys using Simple Past and navigate airports in English.',
        materials: {
          tag: "ENGLISH A2 · UNIT 3 OF 6 · LET'S TALK!",
          title: "Travel Adventures & Living Abroad",
          subtitle: "Today you share travel experiences, ask for flight directions and describe past trips.",
          goals: [
            "Describe past trips using regular and irregular past verbs.",
            "Ask questions at the airport, train station and hotel.",
            "Talk about culture shock and adapting to foreign cities."
          ],
          goldenRule: "Golden rule: today the student talks more than the teacher.",
          vocabulary: ["flight", "boarding pass", "luggage", "delayed", "gate", "customs", "explore", "souvenir", "sightseeing", "abroad", "lost", "currency"],
          keyLanguage: [
            "Where did you travel last summer?",
            "I flew to ___ and stayed for two weeks.",
            "Excuse me, which gate does the flight depart from?",
            "The best part of my trip was visiting ___."
          ],
          dialogue: {
            title: "At the Airport Terminal",
            lines: [
              { speaker: "Passenger", text: "Excuse me, where can I check in for Flight PM-202?" },
              { speaker: "Attendant", text: "At counter 14, just past the baggage drop." },
              { speaker: "Passenger", text: "Is the flight on schedule?" },
              { speaker: "Attendant", text: "Yes, boarding starts in twenty minutes. Have a wonderful trip!" }
            ]
          },
          pronunciation: "Sound focus: -ed endings in past verbs (/t/ booked, /d/ travelled, /ɪd/ visited, started).",
          tongueTwisters: [
            "Pack pink passports promptly prior to passing planes."
          ],
          homework: "Exit ticket: Record a 30-second audio about your most memorable journey."
        }
      },
      {
        session: 'Sesión 4',
        unit: 'Unit 4 of 6',
        date: 'Lunes 30 Nov',
        time: '10:00 - 11:00 a. m.',
        title: 'Technology and Me',
        pdfUrl: 'materials/ingles-conversacional-unidad-04.pdf',
        pdfName: 'PolyglotMap-Ingles-Conversacional-Unit-04.pdf',
        desc: 'Today you compare, give opinions and debate how technology changes our lives. Comparatives and superlatives.',
        materials: {
          tag: "ENGLISH A2 · UNIT 4 OF 6 · LET'S TALK!",
          title: "Technology and Me",
          subtitle: "Today you compare, give opinions and debate how technology changes our lives.",
          goals: [
            "Talk about tech: Describe the apps and devices you use.",
            "Compare: Use newer than, more useful than and the most…",
            "Give opinions: Say what you think, and agree or disagree."
          ],
          goldenRule: "Golden rule: today the student talks more than the teacher.",
          vocabulary: ["app", "download", "update", "battery", "screen", "password", "online", "offline", "social media", "smartphone", "useful", "addicted"],
          keyLanguage: [
            "My phone is newer than yours.",
            "This is the most useful app I have.",
            "In my opinion, ___ / I think ___ / I agree / I disagree.",
            "Short words: newer than, the newest | Long words: more useful than, the most useful"
          ],
          reading: {
            title: "Tech in numbers",
            content: "1992: The first text message ever sent said 'Merry Christmas'. 90+: Most people check their phones more than 90 times a day. Moon: Today's smartphones are more powerful than the computers that took astronauts to the moon."
          },
          dialogue: {
            title: "My new phone (Read 3 times: slow, normal, fast!)",
            lines: [
              { speaker: "Dan", text: "Is that your new phone, Eva?" },
              { speaker: "Eva", text: "Yes! It's newer and faster than my old one." },
              { speaker: "Dan", text: "What's the most useful app on it?" },
              { speaker: "Eva", text: "In my opinion, the translator app is the most useful." },
              { speaker: "Dan", text: "I disagree. I think maps are more useful." },
              { speaker: "Eva", text: "Maybe! But my battery is better than yours." },
              { speaker: "Dan", text: "That's true. Mine is almost dead!" }
            ]
          },
          readingPassage: {
            title: "Life Without Wi-Fi",
            content: "Yesterday, my internet stopped working. / At first, I felt nervous. / I couldn't check social media / or download my favorite songs. / So I read a book and called my friend. / We talked for an hour! / Maybe I'm a little addicted, / but offline life is relaxing."
          },
          pronunciation: "Sound focus: word stress (1st syllable: SMARTphone, PASSword, BATtery, USEful vs 2nd syllable: upDATE, onLINE, offLINE, downLOAD). Tip: stressed syllables are longer and louder.",
          tongueTwisters: [
            "1. Fast phones find free apps first.",
            "2. My smartphone screen shows seven new messages."
          ],
          breakoutActivity: {
            title: "Phone Detective (Breakout Pairs · 15 min)",
            tasks: [
              "1. Ask your partner 5 questions about apps and digital habits.",
              "2. Note: Write down the answers.",
              "3. Report: Tell the group your conclusion (e.g. Ana uses her phone more than...)."
            ]
          },
          homework: "Exit ticket: Record a 30-second audio about how you use your phone."
        }
      },
      {
        session: 'Sesión 5',
        unit: 'Unit 5 of 6',
        date: 'Lunes 07 Dic',
        time: '10:00 - 11:00 a. m.',
        title: 'Work and Dream Jobs',
        pdfUrl: 'materials/ingles-conversacional-unidad-05.pdf',
        pdfName: 'PolyglotMap-Ingles-Conversacional-Unit-05.pdf',
        desc: 'Today you talk about jobs, skills and your plans for the future. Can/can’t pronunciation and job interview roleplay.',
        materials: {
          tag: "ENGLISH A2 · UNIT 5 OF 6 · LET'S TALK!",
          title: "Work and Dream Jobs",
          subtitle: "Today you talk about jobs, skills and your plans for the future.",
          goals: [
            "Talk about jobs: Say what you do and what you're good at.",
            "Do an interview: Answer common job-interview questions.",
            "Plan your future: Say what you want and what you're going to do."
          ],
          goldenRule: "Golden rule: today the student talks more than the teacher.",
          vocabulary: ["job", "boss", "colleague", "meeting", "salary", "skill", "experience", "apply", "interview", "part-time", "full-time", "remote"],
          keyLanguage: [
            "I work as a ___. / I'm a ___.",
            "I can speak English and Spanish.",
            "I'm good at ___ / I'm not good at ___.",
            "In the future, I'm going to ___.",
            "can + verb: I can speak English | want to + verb: I want to learn | going to + verb: I'm going to apply"
          ],
          reading: {
            title: "Work Fun Facts",
            content: "1. Some people say the job 'Chief Happiness Officer' really exists. 2. Many companies now offer remote or hybrid international work."
          },
          dialogue: {
            title: "A job interview & A quick interview",
            lines: [
              { speaker: "Interviewer", text: "Tell me about yourself." },
              { speaker: "Candidate", text: "I'm Carlos. I'm 28 and I live in Lima. I work in customer service." },
              { speaker: "Interviewer", text: "What are you good at?" },
              { speaker: "Candidate", text: "I'm good at talking to people, and I can use Excel and speak a little English." },
              { speaker: "Interviewer", text: "Why do you want this job?" },
              { speaker: "Candidate", text: "Because I want to learn and grow in a big company." },
              { speaker: "Interviewer", text: "Great. When can you start?" },
              { speaker: "Candidate", text: "I can start next Monday." }
            ]
          },
          readingPassage: {
            title: "My Dream Job",
            content: "My dream job is to be a travel guide. / I'm good at talking to people, / and I can speak three languages. / In the future, / I'm going to study tourism. / I want to work with visitors from all over the world. / I can't wait to start!"
          },
          pronunciation: "Sound focus: can and can't. can /kən/ (short and weak) vs can't /kænt/ (long and strong). Short answers: 'Can you start Monday? Yes, I can! / No, I can't.'",
          tongueTwisters: [
            "1. Can Carlos catch a cool career? Candidates can!",
            "2. Good bosses give great goals to good colleagues."
          ],
          breakoutActivity: {
            title: "Job Interview Speed Round (Breakout Rooms · 15 min)",
            tasks: [
              "1. Join: Go to a breakout room with a partner. 2-minute rounds.",
              "2. Ask: Name, experience, skills, why this job?",
              "3. Hire: Choose the best candidate and explain why."
            ]
          },
          homework: "Exit ticket: Record a 30-second audio about your dream job."
        }
      },
      {
        session: 'Sesión 6',
        unit: 'Unit 6 of 6',
        date: 'Lunes 14 Dic',
        time: '10:00 - 11:00 a. m.',
        title: 'Culture, Celebrations and Dreams',
        pdfUrl: 'materials/ingles-conversacional-unidad-06.pdf',
        pdfName: 'PolyglotMap-Ingles-Conversacional-Unit-06.pdf',
        desc: 'Today you share traditions, invite your classmates and review the whole course. Final presentations and closing.',
        materials: {
          tag: "ENGLISH A2 · UNIT 6 OF 6 · LET'S TALK!",
          title: "Culture, Celebrations and Dreams",
          subtitle: "Today you share traditions, invite your classmates and review the whole course.",
          goals: [
            "Share traditions: Talk about festivals and special food.",
            "Invite and reply: Ask 'Would you like to come?' and answer.",
            "Review the course: Use everything you learned in one presentation."
          ],
          goldenRule: "Golden rule: today the student talks more than the teacher.",
          vocabulary: ["festival", "tradition", "costume", "parade", "fireworks", "gift", "celebrate", "invite", "special", "family", "dance", "wish"],
          keyLanguage: [
            "We celebrate ___ in (month).",
            "People wear / eat / dance ___.",
            "Would you like to come? Yes, I'd love to! / Sorry, I can't.",
            "Preposition rule: in + month: in June, in December."
          ],
          reading: {
            title: "Celebrations Around the World",
            content: "In Peru, people celebrate Inti Raymi in June to honor the sun. In Mexico, families remember loved ones on the Day of the Dead with flowers, music and food. In Spain, people throw tomatoes at La Tomatina! In India, Diwali is the Festival of Lights. People clean their houses, light small lamps and share sweets. Different countries celebrate in different ways, but every celebration has one thing in common: people come together."
          },
          dialogue: {
            title: "Come to my party! (Read 3 times: slow, normal, fast!)",
            lines: [
              { speaker: "Lila", text: "Hi Tom! I'm having a party on Saturday." },
              { speaker: "Tom", text: "Oh nice! What are you celebrating?" },
              { speaker: "Lila", text: "My birthday! Would you like to come?" },
              { speaker: "Tom", text: "Yes, I'd love to! What time?" },
              { speaker: "Lila", text: "At seven. We're going to eat, dance and play music." },
              { speaker: "Tom", text: "Great! Can I bring something?" },
              { speaker: "Lila", text: "Just bring your smile!" }
            ]
          },
          readingPassage: {
            title: "Christmas With My Family",
            content: "Every December, my family celebrates Christmas together. / We cook a special dinner / and we wear new clothes. / At midnight, we watch the fireworks / and hug everyone. / Then the children open their gifts, / and the adults dance until morning. / It's my favorite celebration!"
          },
          pronunciation: "Stress and intonation: 1st syllable (FESTival, COStume, CELebrate, FIREworks) vs 2nd syllable (paRADE, inVITE, traDItion). Intonation: invitations go up ↗, answers go down ↘.",
          tongueTwisters: [
            "1. Fireworks flash, families feast, festivals fill the streets.",
            "2. Dancers dress in dazzling costumes for the daily parade."
          ],
          breakoutActivity: {
            title: "My Perfect Party (Final Activity · 15 min)",
            tasks: [
              "1. Plan: Plan your ideal party: where, when, who.",
              "2. Present: Present it in 2 minutes: food, music and activities.",
              "3. Vote: The group asks two questions and votes in the chat."
            ]
          },
          homework: "Exit ticket: Record a 30-second audio about your favorite celebration."
        }
      }
    ]
  },
  {
    id: 'bootcamp-portugues-cero',
    type: 'BOOTCAMP',
    badgeText: 'BOOTCAMP · PORTUGUÉS',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    dateBadge: 'DEL 17 NOV AL 17 DIC',
    statusBadge: '🟢 ACCESO LIBRE · SALA ZOOM',
    statusBadgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300 font-extrabold',
    isClosed: false,
    isLocked: false,
    title: 'Portugués (Desde cero)',
    country: 'Brasil',
    flag: 'brazil',
    language: 'Portugués',
    scheduleDays: 'Martes y jueves',
    scheduleTime: '7:00 a 8:00 p. m.',
    dateFrom: 'DEL',
    dateMain: '17 NOV',
    dateTo: 'AL 17 DIC',
    flightCode: 'PM-BRA01',
    gate: 'Puerta V-08 (Auditorio Virtual A)',
    classLink: 'https://us06web.zoom.us/j/82024030728?pwd=lhORcAC0JVNwqR8ibQzjtZgBMTg0eb.1',
    streamLink: 'https://www.facebook.com/PolyglotMap8/',
    youtubeLink: 'https://www.youtube.com/@polyglot_map',
    registrationLink: 'https://forms.gle/wsipVZ9EkpzA9uXu6',
    seatClass: 'Inmersión Samba Principiante',
    freeBadge: '100% GRATUITO',
    spotsTotal: 40,
    spotsLeft: 6,
    description: 'Fonética, pronunciación carioca y paulista, vocabulario elemental y supervivencia en Brasil para principiantes sin conocimientos previos.',
    instructor: 'Profesor Nativo de São Paulo',
    perks: ['Fonética brasileña guiada', 'Guía de expresiones cotidianas', 'Canciones y cultura carioca', 'Pasaporte con sello de Brasil'],
    syllabus: [
      {
        session: 'Sesión 1',
        date: 'Martes 17 Nov',
        time: '7:00 - 8:00 p. m.',
        title: 'Aula 1: Alfabeto, Fonética e Saudações',
        desc: 'Hoje você conhece os sons do português e cumprimenta em português.',
        pdfUrl: 'materials/portugues-cero-aula-01.pdf',
        pdfName: 'PolyglotMap-Portugues-do-Zero-Aula01.pdf',
        materials: {
          tag: 'AULA 1 DE 10 · PORTUGUÊS DO ZERO',
          title: 'Aula 1: Alfabeto, Fonética e Saudações',
          subtitle: 'Hoje você conhece os sons do português e cumprimenta em português.',
          goldenRule: 'Regla de oro: ¡Práctica constante y conversación activa en cada sesión!'
        }
      },
      {
        session: 'Sesión 2',
        date: 'Jueves 19 Nov',
        time: '7:00 - 8:00 p. m.',
        title: 'Aula 2: Apresentações: Ser, Estar, Nacionalidades e Profissões',
        desc: 'Hoje você diz quem é, de onde é e o que faz.',
        pdfUrl: 'materials/portugues-cero-aula-02.pdf',
        pdfName: 'PolyglotMap-Portugues-do-Zero-Aula02.pdf',
        materials: {
          tag: 'AULA 2 DE 10 · PORTUGUÊS DO ZERO',
          title: 'Aula 2: Apresentações: Ser, Estar, Nacionalidades e Profissões',
          subtitle: 'Hoje você diz quem é, de onde é e o que faz.',
          goldenRule: 'Regla de oro: ¡Práctica constante y conversación activa en cada sesión!'
        }
      },
      {
        session: 'Sesión 3',
        date: 'Martes 24 Nov',
        time: '7:00 - 8:00 p. m.',
        title: 'Aula 3: Informações Pessoais e Família: Ter, Possessivos e Descrições',
        desc: 'Hoje você fala da sua família: quem são e quantos são.',
        pdfUrl: 'materials/portugues-cero-aula-03.pdf',
        pdfName: 'PolyglotMap-Portugues-do-Zero-Aula03.pdf',
        materials: {
          tag: 'AULA 3 DE 10 · PORTUGUÊS DO ZERO',
          title: 'Aula 3: Informações Pessoais e Família: Ter, Possessivos e Descrições',
          subtitle: 'Hoje você fala da sua família: quem são e quantos são.',
          goldenRule: 'Regla de oro: ¡Práctica constante y conversación activa en cada sesión!'
        }
      },
      {
        session: 'Sesión 4',
        date: 'Jueves 26 Nov',
        time: '7:00 - 8:00 p. m.',
        title: 'Aula 4: Rotinas e Atividades: Presente do Indicativo e Frequência',
        desc: 'Hoje você fala do que faz todos os dias.',
        pdfUrl: 'materials/portugues-cero-aula-04.pdf',
        pdfName: 'PolyglotMap-Portugues-do-Zero-Aula04.pdf',
        materials: {
          tag: 'AULA 4 DE 10 · PORTUGUÊS DO ZERO',
          title: 'Aula 4: Rotinas e Atividades: Presente do Indicativo e Frequência',
          subtitle: 'Hoje você fala do que faz todos os dias.',
          goldenRule: 'Regla de oro: ¡Práctica constante y conversación activa en cada sesión!'
        }
      },
      {
        session: 'Sesión 5',
        date: 'Martes 01 Dic',
        time: '7:00 - 8:00 p. m.',
        title: 'Aula 5: Números, Datas e Horários',
        desc: 'Hoje você conta, diz as datas e as horas.',
        pdfUrl: 'materials/portugues-cero-aula-05.pdf',
        pdfName: 'PolyglotMap-Portugues-do-Zero-Aula05.pdf',
        materials: {
          tag: 'AULA 5 DE 10 · PORTUGUÊS DO ZERO',
          title: 'Aula 5: Números, Datas e Horários',
          subtitle: 'Hoje você conta, diz as datas e as horas.',
          goldenRule: 'Regla de oro: ¡Práctica constante y conversación activa en cada sesión!'
        }
      },
      {
        session: 'Sesión 6',
        date: 'Jueves 03 Dic',
        time: '7:00 - 8:00 p. m.',
        title: 'Aula 6: Alimentação e Preferências: Artigos, Gênero, Gostar e Preferir',
        desc: 'Hoje você diz o que gosta e pede comida.',
        pdfUrl: 'materials/portugues-cero-aula-06.pdf',
        pdfName: 'PolyglotMap-Portugues-do-Zero-Aula06.pdf',
        materials: {
          tag: 'AULA 6 DE 10 · PORTUGUÊS DO ZERO',
          title: 'Aula 6: Alimentação e Preferências: Artigos, Gênero, Gostar e Preferir',
          subtitle: 'Hoje você diz o que gosta e pede comida.',
          goldenRule: 'Regla de oro: ¡Práctica constante y conversación activa en cada sesión!'
        }
      },
      {
        session: 'Sesión 7',
        date: 'Martes 08 Dic',
        time: '7:00 - 8:00 p. m.',
        title: 'Aula 7: Minha Cidade: Lugares, Transportes, Preposições e Direções',
        desc: 'Hoje você nomeia lugares e dá direções simples.',
        pdfUrl: 'materials/portugues-cero-aula-07.pdf',
        pdfName: 'PolyglotMap-Portugues-do-Zero-Aula07.pdf',
        materials: {
          tag: 'AULA 7 DE 10 · PORTUGUÊS DO ZERO',
          title: 'Aula 7: Minha Cidade: Lugares, Transportes, Preposições e Direções',
          subtitle: 'Hoje você nomeia lugares e dá direções simples.',
          goldenRule: 'Regla de oro: ¡Práctica constante y conversación activa en cada sesión!'
        }
      },
      {
        session: 'Sesión 8',
        date: 'Jueves 10 Dic',
        time: '7:00 - 8:00 p. m.',
        title: 'Aula 8: Compras: Roupas, Cores, Preços e Expressões',
        desc: 'Hoje você fala de roupas, cores e preços.',
        pdfUrl: 'materials/portugues-cero-aula-08.pdf',
        pdfName: 'PolyglotMap-Portugues-do-Zero-Aula08.pdf',
        materials: {
          tag: 'AULA 8 DE 10 · PORTUGUÊS DO ZERO',
          title: 'Aula 8: Compras: Roupas, Cores, Preços e Expressões',
          subtitle: 'Hoje você fala de roupas, cores e preços.',
          goldenRule: 'Regla de oro: ¡Práctica constante y conversación activa en cada sesión!'
        }
      },
      {
        session: 'Sesión 9',
        date: 'Martes 15 Dic',
        time: '7:00 - 8:00 p. m.',
        title: 'Aula 9: Tempo Livre: Passatempos, Esportes, Gostos e Ir + Infinitivo',
        desc: 'Hoje você fala dos seus passatempos e dos seus planos.',
        pdfUrl: 'materials/portugues-cero-aula-09.pdf',
        pdfName: 'PolyglotMap-Portugues-do-Zero-Aula09.pdf',
        materials: {
          tag: 'AULA 9 DE 10 · PORTUGUÊS DO ZERO',
          title: 'Aula 9: Tempo Livre: Passatempos, Esportes, Gostos e Ir + Infinitivo',
          subtitle: 'Hoje você fala dos seus passatempos e dos seus planos.',
          goldenRule: 'Regla de oro: ¡Práctica constante y conversación activa en cada sesión!'
        }
      },
      {
        session: 'Sesión 10',
        date: 'Jueves 17 Dic',
        time: '7:00 - 8:00 p. m.',
        title: 'Aula 10: Descrição de Pessoas, Objetos e Lugares',
        desc: 'Hoje você descreve pessoas, coisas e lugares.',
        pdfUrl: 'materials/portugues-cero-aula-10.pdf',
        pdfName: 'PolyglotMap-Portugues-do-Zero-Aula10.pdf',
        materials: {
          tag: 'AULA 10 DE 10 · PORTUGUÊS DO ZERO',
          title: 'Aula 10: Descrição de Pessoas, Objetos e Lugares',
          subtitle: 'Hoje você descreve pessoas, cosas e lugares.',
          goldenRule: 'Regla de oro: ¡Práctica constante y conversación activa en cada sesión!'
        }
      }
    ]
  },
  {
    id: 'bootcamp-portugues-basico2',
    type: 'BOOTCAMP',
    badgeText: 'BOOTCAMP · PORTUGUÉS',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    dateBadge: 'DEL 17 NOV AL 17 DIC',
    statusBadge: '🟢 ACCESO LIBRE · SALA MEET',
    statusBadgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300 font-extrabold',
    isClosed: false,
    isLocked: false,
    title: 'Portugués (Básico 2)',
    country: 'Brasil',
    flag: 'brazil',
    language: 'Portugués',
    scheduleDays: 'Martes y jueves',
    scheduleTime: '7:00 a 8:30 p. m.',
    dateFrom: 'DEL',
    dateMain: '17 NOV',
    dateTo: 'AL 17 DIC',
    flightCode: 'PM-BRA02',
    gate: 'Puerta V-09 (Auditorio Virtual B)',
    classLink: 'https://meet.google.com/wcy-padp-ufi?authuser=0',
    streamLink: 'https://www.facebook.com/PolyglotMap8/',
    youtubeLink: 'https://www.youtube.com/@polyglot_map',
    registrationLink: 'https://forms.gle/wsipVZ9EkpzA9uXu6',
    seatClass: 'Fluidez y Estructura Básico 2',
    freeBadge: '100% GRATUITO',
    spotsTotal: 35,
    spotsLeft: 5,
    description: 'Para estudiantes con nociones previas. Construcción de oraciones compuestas, tiempos verbales del pasado, interacción fluida y cultura brasileña profunda.',
    instructor: 'Especialista en Lingüística Portuguesa',
    perks: ['Conversación y gramática aplicada', 'Casos prácticos de viaje y negocios', 'Módulo de 1.5 hrs intensivas', 'Sello Oficial de Inmigración Básico 2'],
    syllabus: [
      {
            "session": "Sesión 1",
            "date": "Martes 17 Nov",
            "time": "7:00 - 8:30 p. m.",
            "title": "Aula 1: No mercado - Comprar e perguntar preços",
            "desc": "No mercado: Comprar e perguntar preços, alimentos, bebidas, quantidades com 'de' e medidas.",
            "pdfUrl": "materials/portugues-basico2-aula-01.pdf",
            "pdfName": "PolyglotMap-Portugues-Basico2-Aula01.pdf",
            "recordingUrl": "https://youtu.be/8tyRhIeMhIA",
            "materials": {
                  "tag": "PORTUGUÊS BÁSICO 2 · AULA 1 DE 10",
                  "title": "Aula 1: No mercado - Comprar e perguntar preços",
                  "subtitle": "No mercado: Comprar e perguntar preços. Semana 5 · S1 · 2 horas de aula (Roteiro 120 min).",
                  "goals": [
                        "Identificar e pedir alimentos e bebidas em português (frutas, verduras, arroz, feijão, pão, leite).",
                        "Usar quantidades e unidades de medida com 'de': um quilo de, uma garrafa de, meia dúzia de, duas caixas de.",
                        "Perguntar e responder preços no mercado com naturalidade: 'Quanto custa o quilo?', 'Quanto é tudo?' e 'Está muito caro!'."
                  ],
                  "goldenRule": "Regra de ouro: Para perguntar preços use: 'Quanto custa o quilo de...?' ou 'Quanto é tudo?' | Para quantidades use sempre 'de': um quilo DE arroz, uma garrafa DE água, meia dúzia DE ovos.",
                  "vocabulary": [
                        "Frutas (FROO-tas) — frutas",
                        "Verduras (ver-DOO-ras) — verduras",
                        "Arroz (a-HROZ) — arroz",
                        "Feijão (fay-ZHOWN) — frijoles",
                        "Pão (POWN) — pan",
                        "Leite (LAY-tchee) — leche",
                        "Um quilo (un KEE-loo) — un kilo",
                        "Meia dúzia (MAY-a DOO-zya) — media docena",
                        "Uma garrafa (OO-ma ga-RHA-fa) — una botella",
                        "Duas caixas (DOO-as KAY-shas) — dos cajas",
                        "Quanto custa? (KWAN-too KOOS-ta) — ¿cuánto cuesta?",
                        "Quanto é tudo? (KWAN-too E TOO-doo) — ¿cuánto es todo?"
                  ],
                  "keyLanguage": [
                        "Aquecimento: Quiero un jugo de naranja. -> 'Quero um suco de laranja.'",
                        "Aquecimento: Quisiera ver la carta. -> 'Gostaria de ver o cardápio.'",
                        "Aquecimento: ¿Cuánto cuesta el plato del día? -> 'Quanto custa o prato do dia?'",
                        "Perguntar preços 1: 'Quanto custa o quilo?' (¿Cuánto cuesta el kilo?) -> 'Custa quatro reais o quilo.'",
                        "Perguntar preços 2: 'Quanto é tudo?' (¿Cuánto es todo?) -> 'Pronto. São dez reais no total.'",
                        "Pedir quantidades: 'Quero dois quilos de banana.' (Quiero dos kilos de plátano.)",
                        "Expressar valor: 'Está muito caro!' (¡Está muy caro!)",
                        "Gramática (Quantidades com 'de'): um quilo de arroz | uma garrafa de água | meia dúzia de ovos | duas caixas de leite",
                        "Exemplos de uso: 'Quero uma garrafa de água.' | 'Preciso de dois quilos de arroz.' | 'Ele quer meia dúzia de ovos.'"
                  ],
                  "pronunciation": "O som nasal do ~ em 'feijão' e 'pão' (/ãw̃/). O som de 'leite' com 'te' palatalizado (/tʃi/ como tche). O R forte vibrante em 'arroz' (/h/ aspirado). A expressão 'meia dúzia' com Z suave (/z/).",
                  "tongueTwisters": [
                        "Quiz Relâmpago (Fixação): 1. Frutas = frutas | 2. Frijoles = feijão | 3. Un kilo = um quilo | 4. Verduras = verduras",
                        "Ordene a frase: custa · Quanto · quilo · o -> 'Quanto custa o quilo?' | dois · Quero · banana · de · quilos -> 'Quero dois quilos de banana.'",
                        "Prática guiada das lacunas: 1. [Quanto] custa o quilo? | 2. Quero dois [quilos] de arroz. | 3. [Quanto] é tudo? | 4. Uma [garrafa] de água."
                  ],
                  "dialogue": {
                        "title": "No mercado: Comprando banana e água (Slides 10 e 11)",
                        "lines": [
                              {
                                    "speaker": "Cliente",
                                    "text": "Bom dia! Quanto custa a banana?"
                              },
                              {
                                    "speaker": "Vendedor",
                                    "text": "Custa quatro reais o quilo."
                              },
                              {
                                    "speaker": "Cliente",
                                    "text": "Quero dois quilos de banana e uma garrafa de água, por favor."
                              },
                              {
                                    "speaker": "Vendedor",
                                    "text": "Com certeza! Aqui estão as bananas e a água gelada."
                              },
                              {
                                    "speaker": "Cliente",
                                    "text": "Muito obrigado. Quanto é tudo?"
                              },
                              {
                                    "speaker": "Vendedor",
                                    "text": "Pronto. São dez reais no total!"
                              }
                        ]
                  },
                  "readingPassage": {
                        "title": "Treino Oral dos Diálogos Oficiais (Slides 10, 11 e 12)",
                        "content": "Diálogo 1: — Quanto custa o quilo de banana? — Custa cinco reais. — Quero dois quilos, por favor. — Quanto é tudo? São dez reais.\n\nDiálogo 2: — Bom dia! Quanto custa a banana? — Custa quatro reais o quilo. — Quero um quilo e uma garrafa de água. — Pronto. São dez reais no total.\n\nDiálogo para completar (Treino Oral): 'Bom dia! Quanto custa a [___]?' / 'Custa quatro reais o [___].' / 'Quero um quilo e uma garrafa de [___].' / 'Pronto. São dez reais no [___].'"
                  },
                  "breakoutActivity": {
                        "title": "Sala em grupo (15 minutos): No mercado",
                        "tasks": [
                              "1. Dinâmica da sala: Um aluno é o vendedor e os outros compram e perguntam o preço.",
                              "2. O comprador pergunta: 'Bom dia! Quanto custa o quilo de banana / o arroz / as verduras?'",
                              "3. O vendedor responde o valor: 'Custa quatro reais o quilo / cinco reais o pacote.'",
                              "4. O comprador pede com quantidades: 'Quero dois quilos de arroz e uma garrafa de água.'",
                              "5. Finalize o diálogo: 'Quanto é tudo?' -> 'Pronto. São dez reais no total.'"
                        ]
                  },
                  "homework": "Revisão e prática em casa (Slide 15): 1. Leia os diálogos em voz alta 3 vezes. 2. Revise o vocabulário da aula (alimentos e medidas com 'de'). 3. Refaça a prática sem olhar. 4. Na próxima aula: S2 · Comprando roupas!"
            }
      },
      {
            "session": "Sesión 2",
            "date": "Jueves 19 Nov",
            "time": "7:00 - 8:30 p. m.",
            "title": "Aula 2: Minhas Experiências Passadas: Ontem, Fim de Semana e Férias",
            "desc": "O que eu fiz: Hoje você conta o que fez ontem e nas férias no pretérito perfeito.",
            "pdfUrl": "materials/portugues-basico2-aula-02.pdf",
            "pdfName": "PolyglotMap-Portugues-Basico2-Aula02.pdf",
            "recordingUrl": "https://youtu.be/fzMKjemezIw",
            "materials": {
                  "tag": "PORTUGUÊS BÁSICO 2 · AULA 2 DE 10",
                  "title": "Minhas Experiências Passadas: Ontem, Fim de Semana e Férias",
                  "subtitle": "O que eu fiz: Hoje você conta o que fez ontem e nas férias.",
                  "goals": [
                        "Contar eventos no passado recente: ontem, anteontem, na semana passada.",
                        "Conjugar verbos regulares no pretérito perfeito: trabalhei, comeu, saímos.",
                        "Falar das suas férias e viagens passadas com detalhes e emoção."
                  ],
                  "goldenRule": "Regra de ouro: Pretérito perfeito conta ação pontual que já terminou: Eu viajei, você comprou, nós fomos!",
                  "vocabulary": [
                        "Ontem (ON-ten) — ayer",
                        "Anteontem (an-tchi-ON-ten) — anteayer",
                        "Semana passada (se-MA-na pa-SA-da) — la semana pasada",
                        "Fim de semana (fin dji se-MA-na) — fin de semana",
                        "Trabalhei (tra-ba-LHEI) — trabajé",
                        "Estudei (es-tu-DEI) — estudié",
                        "Comi (ko-MEE) — comí",
                        "Bebi (be-BEE) — bebí",
                        "Saí (sa-EE) — salí",
                        "Fui (FOO-ee) — fui",
                        "Estive (es-TCHEE-vi) — estuve",
                        "Fiz (FEES) — hice"
                  ],
                  "keyLanguage": [
                        "Ontem eu trabalhei até tarde e não fui à academia.",
                        "No fim de semana passado nós viajamos para o litoral.",
                        "O que você fez no último sábado?",
                        "Eu comi uma feijoada deliciosa com meus amigos.",
                        "Lembre: Verbos em -AR: eu falei, você falou, nós falamos, eles falaram.",
                        "Verbos em -ER/-IR: eu comi/vivi, você comeu/viveu, nós comemos/vivemos, eles comeram/viveram."
                  ],
                  "pronunciation": "Ditongos finais: -ei (falei, trabalhei) com som de 'ei' fechado; terminação -ou (falou, comprou) fecha como 'ow'; terminação -aram (eles falaram) soa como nasal /ãw̃/.",
                  "tongueTwisters": [
                        "Trava-língua: Quem a paca cara compra, paca cara pagará!",
                        "Desafio de passado: Ontem comprei, paguei, comi e guardei o que sobrou!"
                  ],
                  "dialogue": {
                        "title": "E o fim de semana? (Leia em duplas)",
                        "lines": [
                              {
                                    "speaker": "Ana",
                                    "text": "Oi Pedro! Como foi o seu fim de semana?"
                              },
                              {
                                    "speaker": "Pedro",
                                    "text": "Oi Ana! Foi ótimo! No sábado fui à praia com minha família e nadei muito."
                              },
                              {
                                    "speaker": "Ana",
                                    "text": "Que delícia! E no domingo, você descansou?"
                              },
                              {
                                    "speaker": "Pedro",
                                    "text": "De manhã sim, mas à tarde almocei na casa da minha avó e fiz um bolo de cenoura."
                              },
                              {
                                    "speaker": "Ana",
                                    "text": "E sobrou bolo para mim?"
                              },
                              {
                                    "speaker": "Pedro",
                                    "text": "Infelizmente não, nós comemos tudo!"
                              }
                        ]
                  },
                  "readingPassage": {
                        "title": "As férias inesquecíveis do Rafael na Bahia (Leitura em voz alta)",
                        "content": "Em janeiro do ano passado, Rafael viajou para Salvador com dois grandes amigos. Eles ficaram hospedados em um hotel perto do Pelourinho. No primeiro dia, caminharam pelo centro histórico, visitaram a Igreja de São Francisco e tiraram muitas fotos. No segundo dia, foram à praia de Itapuã e comeram acarajé quentinho preparado pelas baianas tradicionais. À noite, ouviram um show de samba ao vivo e dançaram bastante. Rafael disse que foi a viagem mais divertida da sua vida porque conheceu pessoas maravilhosas e experimentou novos sabores."
                  },
                  "breakoutActivity": {
                        "title": "Rodada do Microfone: O que você fez ontem?",
                        "tasks": [
                              "1. Conte 3 ações que você realizou ontem usando verbos no passado: 'Ontem eu...'",
                              "2. Diga para onde você viajou nas suas últimas férias: 'Nas minhas últimas férias, eu viajei para...'",
                              "3. Pergunte a um colega: 'Você estudou português ontem?'",
                              "4. Reaja à resposta do seu parceiro: 'Nossa, que legal!' ou 'Que pena!'"
                        ]
                  },
                  "homework": "Ticket de saída: Envie um áudio contando 3 coisas que você fez no último fim de semana usando o pretérito perfeito."
            }
      },
      {
            "session": "Sesión 3",
            "date": "Martes 24 Nov",
            "time": "7:00 - 8:30 p. m.",
            "title": "Aula 3: Minha Infância e Lembranças: Hábitos e Experiências do Passado",
            "desc": "Minha infância: Hoje você conta como era sua infância no pretérito imperfeito.",
            "pdfUrl": "materials/portugues-basico2-aula-03.pdf",
            "pdfName": "PolyglotMap-Portugues-Basico2-Aula03.pdf",
            "recordingUrl": "https://www.youtube.com/watch?v=rL0jCXj7BcM",
            "materials": {
                  "tag": "PORTUGUÊS BÁSICO 2 · AULA 3 DE 10",
                  "title": "Minha Infância e Lembranças: Hábitos e Experiências do Passado",
                  "subtitle": "Minha infância: Hoje você conta como era sua infância.",
                  "goals": [
                        "Descrever hábitos e rotinas da infância: Eu brincava, eu morava, nós tínhamos.",
                        "Contrastar o passado habitual (imperfeito) com o presente: Antes eu... agora eu...",
                        "Expressar nostalgia e memórias afetivas em português com vocabulário expressivo."
                  ],
                  "goldenRule": "Regra de ouro: Pretérito imperfeito expressa rotina no passado: Quando eu era criança, eu brincava na rua todos os dias!",
                  "vocabulary": [
                        "Criança (kree-AN-sa) — niño/niña",
                        "Infância (in-FAN-see-a) — infancia",
                        "Brincar (breen-KAR) — jugar",
                        "Brinquedo (breen-KE-du) — juguete",
                        "Bicicleta (bee-see-KLE-ta) — bicicleta",
                        "Desenho animado (de-ZE-nyu a-nee-MA-du) — dibujos animados",
                        "Rua (ROO-a) — calle",
                        "Escola primária (es-KO-la pree-MA-ree-a) — escuela primaria",
                        "Costumava (kos-tu-MA-va) — solía / acostumbraba",
                        "Era (E-ra) — era",
                        "Tinha (TCHEE-nya) — tenía",
                        "Lembrança (lem-BRAN-sa) — recuerdo"
                  ],
                  "keyLanguage": [
                        "Quando eu era criança, eu morava no interior e andava de bicicleta.",
                        "Nós tínhamos um cachorro chamado Rex e brincávamos no quintal.",
                        "Antigamente eu assistia a muitos desenhos na televisão.",
                        "Você costumava brincar na rua com seus vizinhos?",
                        "Lembre: Verbos em -AR: eu cantava, você cantava, nós cantávamos, eles cantavam.",
                        "Verbos em -ER/-IR: eu comia/abria, você comia/abria, nós comíamos/abríamos, eles comiam/abriam."
                  ],
                  "pronunciation": "Acento na primeira pessoa do plural do imperfeito (-ávamos, -íamos): nós brincávamos, nós comíamos. O som do NH (desenho, tinha) soa idêntico ao Ñ espanhol. O Ç tem som puro de S (criança, lembrança).",
                  "tongueTwisters": [
                        "Trava-língua: Sabia que a mãe do sabiá sabia assobiar?",
                        "Memória rápida: Quando eu era pequeno, pensava, sonhava, brincava e pulava sem parar!"
                  ],
                  "dialogue": {
                        "title": "Quando eu era criança (Leia em duplas)",
                        "lines": [
                              {
                                    "speaker": "Leo",
                                    "text": "Eva, você cresceu aqui na capital ou no interior?"
                              },
                              {
                                    "speaker": "Eva",
                                    "text": "Eu cresci em Minas Gerais, numa cidadezinha bem calma. Minha infância foi linda!"
                              },
                              {
                                    "speaker": "Leo",
                                    "text": "Do que você mais gostava de brincar quando era pequena?"
                              },
                              {
                                    "speaker": "Eva",
                                    "text": "Eu brincava de esconde-esconde e subia em árvores com meus primos todos os dias."
                              },
                              {
                                    "speaker": "Leo",
                                    "text": "E você gostava da escola?"
                              },
                              {
                                    "speaker": "Eva",
                                    "text": "Adorava! Eu tinha uma professora maravilhosa chamada Dona Lúcia, que contava histórias fantásticas."
                              }
                        ]
                  },
                  "readingPassage": {
                        "title": "As tardes de domingo na casa dos avós (Leitura em voz alta)",
                        "content": "Lucas guarda com muito carinho as lembranças dos domingos na infância. Todos os domingos, a família inteira se reunia na casa dos avós maternos. A avó preparava um almoço delicioso que perfumava toda a rua. Depois de comer, os adultos conversavam na varanda enquanto as crianças corriam pelo pomar. Não havia celulares nem tablets; Lucas e seus irmãos criavam brinquedos de madeira e jogavam bola de gude na terra batida. Era uma época simples, cheia de risadas, afetos e liberdade."
                  },
                  "breakoutActivity": {
                        "title": "Rodada do Microfone: Lembranças da sua infância",
                        "tasks": [
                              "1. Complete a frase: 'Quando eu era criança, eu sempre...'",
                              "2. Diga um brinquedo ou jogo favorito da sua infância: 'Meu brinquedo favorito era...'",
                              "3. Faça um contraste passado vs presente: 'Antes eu..., mas hoje eu...'",
                              "4. Pergunte a um colega: 'Você assistia a desenhos animados quando era pequeno?'"
                        ]
                  },
                  "homework": "Ticket de saída: Grave um áudio curto de 30 segundos: 'Quando eu tinha 8 anos, eu costumava...'"
            }
      },
      {
            "session": "Sesión 4",
            "date": "Jueves 26 Nov",
            "time": "7:00 - 8:30 p. m.",
            "title": "Aula 4: Meus Planos e Projetos: Desejos e Intenções para o Futuro",
            "desc": "Meus planos: Hoje você fala dos seus planos e dos seus sonhos com IR + Infinitivo.",
            "pdfUrl": "materials/portugues-basico2-aula-04.pdf",
            "pdfName": "PolyglotMap-Portugues-Basico2-Aula04.pdf",
            "recordingUrl": "https://www.youtube.com/watch?v=iem_lU53YMg",
            "materials": {
                  "tag": "PORTUGUÊS BÁSICO 2 · AULA 4 DE 10",
                  "title": "Meus Planos e Projetos: Desejos e Intenções para o Futuro",
                  "subtitle": "Meus planos: Hoje você fala dos seus planos e dos seus sonhos.",
                  "goals": [
                        "Expressar planos para o futuro usando IR + Infinitivo: Eu vou viajar, nós vamos comprar.",
                        "Falar de metas profissionais, desejos e intenções: Pretendo, tenho vontade de, sonho com.",
                        "Fazer perguntas sobre projetos futuros com marcadores temporais: amanhã, ano que vem, no futuro."
                  ],
                  "goldenRule": "Regra de ouro: No dia a dia, o brasileiro usa quase sempre 'IR + verbo' para falar do futuro: Amanhã eu vou estudar!",
                  "vocabulary": [
                        "Amanhã (a-ma-NYAN) — mañana",
                        "Depois de amanhã (de-POYS dji a-ma-NYAN) — pasado mañana",
                        "Semana que vem (se-MA-na ki VAYN) — la semana que viene",
                        "Ano que vem (A-nu ki VAYN) — el próximo año",
                        "Meta (ME-ta) — meta / objetivo",
                        "Sonho (SO-nyu) — sueño",
                        "Pretender (pre-ten-DER) — tener la intención de",
                        "Ter vontade de (TER von-TA-dji dji) — tener ganas de",
                        "Mudar de emprego (mu-DAR dji em-PRE-gu) — cambiar de trabajo",
                        "Comprar uma casa (kom-PRAR OO-ma KA-za) — comprar una casa",
                        "Guardar dinheiro (gwar-DAR djee-NYAY-ru) — ahorrar dinero",
                        "Aprender (a-pren-DER) — aprender"
                  ],
                  "keyLanguage": [
                        "No próximo ano eu vou fazer um curso de especialização.",
                        "Eu pretendo comprar um apartamento novo até dezembro.",
                        "Nós temos muita vontade de conhecer o Rio de Janeiro.",
                        "O que você vai fazer quando terminar o bootcamp de português?",
                        "Lembre: Estrutura do futuro imediato: Sujeito + IR (vou, vai, vamos, vão) + Verbo no Infinitivo.",
                        "Diferença: 'Quero' expressa desejo imediato; 'Pretendo' expressa planejamento concreto."
                  ],
                  "pronunciation": "Sons nasais em -ã e -em: amanhã (/ã/), vem / ano que vem (/ẽj̃/). O som do R final de infinitivos (comprar, guardar, fazer) em muitas regiões do Brasil é suave ou quase mudo na fala rápida natural.",
                  "tongueTwisters": [
                        "Trava-língua: Teto sujo, chão sujo. Chão sujo, teto sujo!",
                        "Ritmo de projetos: Amanhã vou, pretendo, quero e vou conseguir tudo o que planejei!"
                  ],
                  "dialogue": {
                        "title": "Quais são os seus planos? (Leia em duplas)",
                        "lines": [
                              {
                                    "speaker": "Kim",
                                    "text": "Sam, você já pensou no que vai fazer nas férias de julho?"
                              },
                              {
                                    "speaker": "Sam",
                                    "text": "Já sim! Eu vou viajar para Florianópolis com meus amigos. Vamos alugar uma casa perto da praia."
                              },
                              {
                                    "speaker": "Kim",
                                    "text": "Que máximo! E quais são os seus planos profissionais para este ano?"
                              },
                              {
                                    "speaker": "Sam",
                                    "text": "Pretendo mudar de área. Estou estudando tecnologia e quero trabalhar remotamente para o exterior."
                              },
                              {
                                    "speaker": "Kim",
                                    "text": "E você vai continuar estudando idiomas?"
                              },
                              {
                                    "speaker": "Sam",
                                    "text": "Com certeza! Vou terminar o português e depois vou começar italiano."
                              }
                        ]
                  },
                  "readingPassage": {
                        "title": "O plano de carreira e vida da Camila (Leitura em voz alta)",
                        "content": "Camila tem 28 anos e organizou um plano de vida detalhado para os próximos cinco anos. No curto prazo, ela vai concluir seu mestrado em administração e guardar 20% do salário todos os meses. No médio prazo, ela pretende morar seis meses em Portugal para fazer um estágio internacional e aprimorar sua rede de contatos. O grande sonho dela é abrir a sua própria consultoria sustentável e liderar projetos de impacto socioambiental. Ela sabe que exige dedicação, mas diz com firmeza: 'Eu vou trabalhar duro todos os dias porque acredito nos meus sonhos!'"
                  },
                  "breakoutActivity": {
                        "title": "Rodada do Microfone: Seus projetos futuros",
                        "tasks": [
                              "1. Compartilhe um plano para o próximo mês: 'No mês que vem eu vou...'",
                              "2. Revele um grande sonho pessoal ou profissional: 'Eu pretendo... e meu sonho é...'",
                              "3. Faça uma pergunta a um colega: 'O que você vai fazer no próximo fim de semana?'",
                              "4. Dê um conselho motivador ao seu parceiro: 'Tenho certeza de que você vai conseguir!'"
                        ]
                  },
                  "homework": "Ticket de saída: Envie um áudio contando 3 planos com a estrutura 'Eu vou + infinitivo' para a próxima semana."
            }
      },
      {
            "session": "Sesión 5",
            "date": "Martes 01 Dic",
            "time": "7:00 - 8:30 p. m.",
            "title": "Aula 5: Viagens e Turismo: Transportes, Hotéis, Reservas e Lugares",
            "desc": "Viagens e turismo: Hoje você viaja, se hospeda e pede informações turísticas.",
            "pdfUrl": "materials/portugues-basico2-aula-05.pdf",
            "pdfName": "PolyglotMap-Portugues-Basico2-Aula05.pdf",
            "materials": {
                  "tag": "PORTUGUÊS BÁSICO 2 · AULA 5 DE 10",
                  "title": "Viagens e Turismo: Transportes, Hotéis, Reservas e Lugares",
                  "subtitle": "Viagens e turismo: Hoje você viaja, se hospeda e pede informações turísticas.",
                  "goals": [
                        "Fazer reservas de hotel e comprar passagens: quarto com vista, check-in, check-out.",
                        "Pedir informações de localização e transportes: Onde fica? Como chego a...?",
                        "Descrever experiências em pontos turísticos e expressar preferências de viagem."
                  ],
                  "goldenRule": "Regra de ouro: Para pedir informações com cortesia: 'Por favor, você poderia me informar onde fica...?'",
                  "vocabulary": [
                        "Avião (a-vee-OWN) — avión",
                        "Ônibus (OH-nee-bus) — autobús",
                        "Trem (TRAYN) — tren",
                        "Passagem (pa-SA-zhayn) — boleto / pasaje",
                        "Bagagem / Mala (ba-GA-zhayn / MA-la) — equipaje / maleta",
                        "Reserva (re-ZER-va) — reserva",
                        "Quarto de hotel (KWAR-tu dji o-TEL) — habitación de hotel",
                        "Pousada (po-ZA-da) — posada / hostal típico",
                        "Ponto turístico (PON-tu tu-REES-tchee-ku) — punto turístico",
                        "Onde fica...? (ON-dji FEE-ka) — ¿dónde queda...?",
                        "Virar à direita/esquerda (vee-RAR a djee-RAY-ta/es-KER-da) — girar",
                        "Embarque (em-BAR-ki) — embarque"
                  ],
                  "keyLanguage": [
                        "Gostaria de fazer o check-in, tenho uma reserva em nome de Silva.",
                        "O café da manhã está incluído na diária?",
                        "Com licença, como eu faço para chegar ao Museu de Arte?",
                        "Você deve seguir em frente por dois quarteirões e virar à direita.",
                        "Lembre: 'Onde fica...?' pergunta pela localização exata; 'Onde tem...?' pergunta pela existência.",
                        "Diária = o valor por dia do hotel. Pousada = hospedagem aconchegante e típica do Brasil."
                  ],
                  "pronunciation": "Terminação nasal -ão (avião, cartão): o ar sai pelo nariz e pela boca simultaneamente. Dica: aperte levemente o nariz para sentir a vibração. LH (bagagem, melhor): língua no céu da boca.",
                  "tongueTwisters": [
                        "Trava-língua: Bagre branco, branco bagre. Três pratos de trigo para três tigres tristes!",
                        "Rápido no aeroporto: Pego a passagem, despacho a bagagem e vou direto para o portão de embarque!"
                  ],
                  "dialogue": {
                        "title": "No Hotel (Check-in em duplas)",
                        "lines": [
                              {
                                    "speaker": "Recepcionista",
                                    "text": "Boa tarde! Bem-vinda à Pousada do Sol. Como posso ajudar?"
                              },
                              {
                                    "speaker": "Mia",
                                    "text": "Boa tarde! Eu tenho uma reserva para quatro noites em nome de Mia Santos."
                              },
                              {
                                    "speaker": "Recepcionista",
                                    "text": "Só um instante... Achei! Quarto duplo com vista para o mar, correto?"
                              },
                              {
                                    "speaker": "Mia",
                                    "text": "Isso mesmo! O café da manhã está incluído?"
                              },
                              {
                                    "speaker": "Recepcionista",
                                    "text": "Sim, é servido das 7h às 10h no restaurante do térreo. Aqui está a sua chave-cartão, quarto 204."
                              },
                              {
                                    "speaker": "Mia",
                                    "text": "Perfeito, muito obrigada! A que horas é o check-out no domingo?"
                              },
                              {
                                    "speaker": "Recepcionista",
                                    "text": "O check-out é até o meio-dia. Tenha uma excelente estadia!"
                              }
                        ]
                  },
                  "readingPassage": {
                        "title": "A aventura de Diego descobrindo Foz do Iguaçu (Leitura em voz alta)",
                        "content": "Diego sempre quis conhecer as Cataratas do Iguaçu, uma das sete maravilhas da natureza. Ao desembarcar no aeroporto, pegou um táxi credenciado direto para o hotel. No dia seguinte, acordou às 7h, tomou um reforçado café da manhã brasileiro com suco de maracujá e pão de queijo, e pegou o ônibus do Parque Nacional. A vista das quedas d'água foi de tirar o fôlego. Ele fez o passeio de barco que chega bem perto das cataratas e ficou completamente molhado. 'A energia desse lugar é indescritível!', escreveu ele em seu diário de viagem."
                  },
                  "breakoutActivity": {
                        "title": "Rodada do Microfone: Simulação de Viagem",
                        "tasks": [
                              "1. Faça uma reserva em um hotel: 'Gostaria de reservar um quarto para... dias em nome de...'",
                              "2. Peça uma direção na rua: 'Com licença, onde fica a praia / o metrô mais próximo?'",
                              "3. Indique um caminho a um colega: 'Siga em frente e vire à...'",
                              "4. Diga qual é a viagem dos seus sonhos pelo Brasil: 'Eu gostaria de conhecer...'"
                        ]
                  },
                  "homework": "Ticket de saída: Envie um áudio pedindo uma informação turística e fazendo o check-in em um hotel fictício no Brasil."
            }
      },
      {
            "session": "Sesión 6",
            "date": "Jueves 03 Dic",
            "time": "7:00 - 8:30 p. m.",
            "title": "Aula 6: No Restaurante: Pedir Comida, Consultar Preços e Expressar Preferências",
            "desc": "No restaurante: Hoje você pede refeições, bebidas e fecha a conta com elegância.",
            "pdfUrl": "materials/portugues-basico2-aula-06.pdf",
            "pdfName": "PolyglotMap-Portugues-Basico2-Aula06.pdf",
            "materials": {
                  "tag": "PORTUGUÊS BÁSICO 2 · AULA 6 DE 10",
                  "title": "No Restaurante: Pedir Comida, Consultar Preços e Expressar Preferências",
                  "subtitle": "No restaurante: Hoje você pede refeições, bebidas e fecha a conta com elegância.",
                  "goals": [
                        "Pedir pratos e bebidas com fluidez e naturalidade: Eu gostaria de..., para mim pode ser...",
                        "Consultar ingredientes, preços e fazer pedidos especiais (sem glúten, sem cebola).",
                        "Pedir a conta e entender as formas de pagamento: débito, crédito ou Pix."
                  ],
                  "goldenRule": "Regra de ouro: Para pedir comida no Brasil com simpatia: 'Por favor, para mim pode ser um prato executivo com suco de laranja!'",
                  "vocabulary": [
                        "Cardápio (kar-DA-pee-u) — menú / carta",
                        "Prato principal (PRA-tu preen-see-PAL) — plato principal",
                        "Entrada (en-TRA-da) — entrada / aperitivo",
                        "Sobremesa (so-bre-ME-za) — postre",
                        "Garçom / Garçonete (gar-SOHN / gar-so-NE-tchee) — mesero / mesera",
                        "Conta (KON-ta) — cuenta",
                        "Gorjeta (gor-ZHE-ta) — propina (10%)",
                        "Água com/sem gás (A-gwa kon/sayn GAHS) — agua con/sin gas",
                        "Carne ao ponto (KAR-nee ow PON-tu) — carne al punto",
                        "Frango (FRAN-gu) — pollo",
                        "Peixe (PAY-shee) — pescado",
                        "Delicioso (de-lee-see-OH-zu) — delicioso / rico"
                  ],
                  "keyLanguage": [
                        "Garçom, por favor, você traz o cardápio para nós?",
                        "Para beber, eu gostaria de uma água mineral sem gás e bem gelada.",
                        "Eu sou vegetariano, você tem alguma opção sem carne?",
                        "A conta, por favor! Aceita cartão de crédito ou Pix?",
                        "Lembre: Expressão típica do Brasil: 'Para mim pode ser...' (Para mí puede ser / yo quiero).",
                        "A taxa de serviço de 10% normalmente já vem incluída na conta no Brasil."
                  ],
                  "pronunciation": "O X em 'peixe' soa como /ʃ/ (som de 'ch' em inglês / 'sh'). O som de 'delicioso' tem S intervocálico que soa como Z. A palavra 'garçom' termina com som nasal /õ/.",
                  "tongueTwisters": [
                        "Trava-língua: O pinto pia, a pia pinga. Pinga a pia, o pinto pia!",
                        "No pedido: Peço peixe, peço pizza, peço pão e picanha para o jantar!"
                  ],
                  "dialogue": {
                        "title": "Fazendo o pedido no restaurante (Leia em duplas)",
                        "lines": [
                              {
                                    "speaker": "Garçom",
                                    "text": "Boa noite! Sejam bem-vindos ao Sabores do Brasil. Já escolheram?"
                              },
                              {
                                    "speaker": "Ana",
                                    "text": "Boa noite! O que você recomenda de prato do dia?"
                              },
                              {
                                    "speaker": "Garçom",
                                    "text": "Hoje nossa moqueca de peixe com camarão está espetacular, acompanha arroz e farofa."
                              },
                              {
                                    "speaker": "Ana",
                                    "text": "Parece ótima! Para mim pode ser a moqueca, por favor."
                              },
                              {
                                    "speaker": "Garçom",
                                    "text": "Excelente escolha! E para o senhor?"
                              },
                              {
                                    "speaker": "Leo",
                                    "text": "Eu prefiro uma picanha grelhada ao ponto com mandioca frita."
                              },
                              {
                                    "speaker": "Garçom",
                                    "text": "Perfeito! E para beber?"
                              },
                              {
                                    "speaker": "Ana",
                                    "text": "Um suco natural de abacaxi com hortelã para mim, e uma cerveja artesanal para ele."
                              },
                              {
                                    "speaker": "Leo",
                                    "text": "E depois nós vamos pedir a sobremesa!"
                              }
                        ]
                  },
                  "readingPassage": {
                        "title": "A cultura gastronômica dos botecos brasileiros (Leitura em voz alta)",
                        "content": "Ir a um boteco ou restaurante tradicional no Brasil é muito mais do que apenas almoçar ou jantar: é um verdadeiro evento social. Os amigos se encontram para 'jogar conversa fora' enquanto compartilham porções de pastel de queijo, coxinha e bolinho de bacalhau. O prato mais famoso dos sábados é a feijoada completa, servida em panelas de barro com couve refogada, pedaços de laranja, torresmo crocante e vinagrete. Ao final da refeição, ninguém tem pressa de ir embora, e pedir um cafezinho expresso com a conta é o costume mais tradicional dos brasileiros."
                  },
                  "breakoutActivity": {
                        "title": "Rodada do Microfone: Roleplay de Restaurante",
                        "tasks": [
                              "1. Chame o garçom e peça o cardápio: 'Garçom, por favor...'",
                              "2. Faça o pedido completo com prato e bebida: 'Para mim pode ser... e para beber...'",
                              "3. Peça a conta e especifique a forma de pagamento: 'A conta, por favor. Posso pagar com...?'",
                              "4. Elogie a refeição: 'A comida estava simplesmente deliciosa!'"
                        ]
                  },
                  "homework": "Ticket de saída: Envie um áudio simulando seu pedido favorito em um restaurante brasileiro completo."
            }
      },
      {
            "session": "Sesión 7",
            "date": "Martes 08 Dic",
            "time": "7:00 - 8:30 p. m.",
            "title": "Aula 7: Saúde e Bem-Estar: Partes do Corpo, Sintomas e Recomendações",
            "desc": "Saúde e bem-estar: Hoje você fala de sintomas, dores e vai ao médico ou à farmácia.",
            "pdfUrl": "materials/portugues-basico2-aula-07.pdf",
            "pdfName": "PolyglotMap-Portugues-Basico2-Aula07.pdf",
            "materials": {
                  "tag": "PORTUGUÊS BÁSICO 2 · AULA 7 DE 10",
                  "title": "Saúde e Bem-Estar: Partes do Corpo, Sintomas e Recomendações",
                  "subtitle": "Saúde e bem-estar: Hoje você fala de sintomas, dores e vai ao médico ou à farmácia.",
                  "goals": [
                        "Identificar as principais partes do corpo humano e expressar dores: Estou com dor de...",
                        "Descrever sintomas comuns: febre, tosse, gripe, alergia, enjoo.",
                        "Pedir remédios na farmácia e compreender instruções médicas e conselhos."
                  ],
                  "goldenRule": "Regra de ouro: Em português dizemos 'Estou com dor de...' (dor de cabeça, dor de garganta, dor nas costas)!",
                  "vocabulary": [
                        "Cabeça (ka-BE-sa) — cabeza",
                        "Garganta (gar-GAN-ta) — garganta",
                        "Estômago (es-TO-ma-gu) — estómago",
                        "Costas (KOS-tas) — espalda",
                        "Olho / Ouvido (O-lhyu / o-VEE-du) — ojo / oído",
                        "Dente (DEN-tchi) — diente",
                        "Febre (FE-bri) — fiebre",
                        "Gripe / Resfriado (GREE-pee / res-free-A-du) — gripe / resfriado",
                        "Tosse (TO-see) — tos",
                        "Remédio / Medicamento (re-ME-djee-u / me-djee-ka-MEN-tu) — medicina",
                        "Farmácia (far-MA-see-a) — farmacia",
                        "Receita médica (re-SAY-ta ME-djee-ka) — receta médica"
                  ],
                  "keyLanguage": [
                        "Estou com muita dor de cabeça e acho que estou com febre.",
                        "Minha garganta está inflamada, tenho tosse seca há dois dias.",
                        "Você deve tomar este remédio de oito em oito horas após as refeições.",
                        "Com licença, você tem algum analgésico sem receita médica?",
                        "Lembre: Expressões de dor: 'Estar com dor de...' ou 'O meu braço / dente está doendo'.",
                        "Para dar recomendações de saúde: 'Você precisa descansar', 'Você deve beber bastante água'."
                  ],
                  "pronunciation": "O som de 'olho' e 'joelho' com LH (/ʎ/): a língua toca o palato duro. As terminações em -te (dente, dor de dente) soam como /tʃi/ em quase todo o Brasil. O som de 'remédio' com som aberto /ɛ/ no é.",
                  "tongueTwisters": [
                        "Trava-língua: Tecelão tece tecido para o traje de trinta e três turcos!",
                        "Dores e remédios: Dor de dente, dor de dente, toma chá bem quente pra ficar contente!"
                  ],
                  "dialogue": {
                        "title": "Na consulta médica (Leia em duplas)",
                        "lines": [
                              {
                                    "speaker": "Médica",
                                    "text": "Olá, boa tarde! O que você está sentindo hoje?"
                              },
                              {
                                    "speaker": "Leo",
                                    "text": "Boa tarde, doutora. Desde ontem estou com uma forte dor de garganta e febre alta."
                              },
                              {
                                    "speaker": "Médica",
                                    "text": "Entendi. Você também está com tosse ou dor no corpo?"
                              },
                              {
                                    "speaker": "Leo",
                                    "text": "Sim, sinto o corpo todo dolorido e não consigo engolir direito."
                              },
                              {
                                    "speaker": "Médica",
                                    "text": "Deixe-me examinar sua garganta... Sim, ela está bastante inflamada. Vou prescrever um anti-inflamatório e um antibiótico."
                              },
                              {
                                    "speaker": "Leo",
                                    "text": "Como devo tomar esses remédios?"
                              },
                              {
                                    "speaker": "Médica",
                                    "text": "O anti-inflamatório uma vez ao dia e o antibiótico de 12 em 12 horas por sete dias. Beba bastante líquido e repouse!"
                              }
                        ]
                  },
                  "readingPassage": {
                        "title": "Cuidados com a saúde e vida ativa (Leitura em voz alta)",
                        "content": "Manter uma rotina de bem-estar físico e mental é essencial para prevenir doenças e viver com energia. Os médicos brasileiros recomendam praticar ao menos 30 minutos de exercícios aeróbicos por dia, como caminhada, natação ou ciclismo. Além dos exercícios, a hidratação constante é vital, especialmente em climas tropicais onde se perde muito líquido pelo suor. Se você sentir sintomas persistentes como fadiga extrema, tonturas frequentes ou dores crônicas no corpo, nunca tome medicamentos por conta própria; procure sempre uma Unidade Básica de Saúde ou um médico de confiança."
                  },
                  "breakoutActivity": {
                        "title": "Rodada do Microfone: Consulta Médica Express",
                        "tasks": [
                              "1. Diga o que você está sentindo usando: 'Estou com dor de... e sinto...'",
                              "2. Descreva um sintoma comum: 'Acho que peguei um resfriado porque estou com...'",
                              "3. Dê uma recomendação de saúde ao seu colega: 'Você deve tomar... e descansar.'",
                              "4. Peça um produto na farmácia: 'Olá, você tem algo para dor de...?'"
                        ]
                  },
                  "homework": "Ticket de saída: Envie um áudio explicando dois sintomas que você teve recentemente e que remédio tomou."
            }
      },
      {
            "session": "Sesión 8",
            "date": "Jueves 10 Dic",
            "time": "7:00 - 8:30 p. m.",
            "title": "Aula 8: Trabalho e Profissões: Ocupações, Atividades e Experiências",
            "desc": "Trabalho e profissões: Hoje você descreve sua carreira, suas tarefas e seu currículo.",
            "pdfUrl": "materials/portugues-basico2-aula-08.pdf",
            "pdfName": "PolyglotMap-Portugues-Basico2-Aula08.pdf",
            "materials": {
                  "tag": "PORTUGUÊS BÁSICO 2 · AULA 8 DE 10",
                  "title": "Trabalho e Profissões: Ocupações, Atividades e Experiências",
                  "subtitle": "Trabalho e profissões: Hoje você descreve sua carreira, suas tarefas e seu currículo.",
                  "goals": [
                        "Nomear profissões, cargos e setores de trabalho em português.",
                        "Descrever suas responsabilidades diárias no trabalho: Eu gerencio, eu analiso, sou responsável por...",
                        "Falar da sua trajetória profissional e responder perguntas de uma entrevista básica."
                  ],
                  "goldenRule": "Regra de ouro: Em português dizemos 'Eu trabalho como...' ou 'Eu sou engenheiro/médico' (sem artigo indefinido antes da profissão)!",
                  "vocabulary": [
                        "Profissão (pro-fee-SOWN) — profesión",
                        "Engenheiro / Engenheira (en-zhe-NYAY-ru / ra) — ingeniero / ingeniera",
                        "Advogado / Advogada (ad-vo-GA-du / da) — abogado / abogada",
                        "Professor / Professora (pro-fe-SOHR / ra) — profesor / profesora",
                        "Médico / Médica (ME-djee-ku / ka) — médico / médica",
                        "Empresa (em-PRE-za) — empresa",
                        "Escritório (es-kree-TO-ree-u) — oficina",
                        "Reunião (re-oo-nee-OWN) — reunión",
                        "Equipe (e-KEE-pee) — equipo de trabajo",
                        "Salário (sa-LA-ree-u) — salario / sueldo",
                        "Currículo (koo-REE-koo-lu) — currículum vítae",
                        "Experiência (es-pe-ree-EN-see-a) — experiencia"
                  ],
                  "keyLanguage": [
                        "Eu trabalho em uma empresa multinacional como analista de dados.",
                        "Eu sou responsável por liderar reuniões e apresentar relatórios mensais.",
                        "Trabalho remotamente em esquema de home office há três anos.",
                        "Qual é a sua principal função na sua equipe de trabalho?",
                        "Lembre: Não use artigo antes de profissão: 'Sou professor', NUNCA 'Sou um professor'.",
                        "'Trabalho de segunda a sexta, das 9h às 18h' para expressar jornada de trabalho."
                  ],
                  "pronunciation": "O som de D mudo em 'advogado' (/adji-vogado/): no português do Brasil muitas pessoas pronunciam um 'i' epentético suave [adʒivoˈgadu]. O som nasal de -ão em 'reunião' e 'profissão'. O som de NH em 'engenheiro'.",
                  "tongueTwisters": [
                        "Trava-língua: O padre Pedro prega o prego no prato de prata!",
                        "No escritório: Produzo relatórios, programo projetos, participo de reuniões e planejo o futuro da empresa!"
                  ],
                  "dialogue": {
                        "title": "A entrevista de emprego (Leia em duplas)",
                        "lines": [
                              {
                                    "speaker": "Entrevistadora",
                                    "text": "Boa tarde, Leo! Seja bem-vindo à nossa entrevista. Conte-me um pouco sobre você."
                              },
                              {
                                    "speaker": "Leo",
                                    "text": "Boa tarde! Muito obrigado pela oportunidade. Eu sou formado em marketing digital e trabalho há cinco anos com redes sociais."
                              },
                              {
                                    "speaker": "Entrevistadora",
                                    "text": "Muito interessante! Quais eram as suas principais tarefas na sua última empresa?"
                              },
                              {
                                    "speaker": "Leo",
                                    "text": "Eu gerenciava uma equipe de quatro pessoas, analisava métricas de engajamento e criava campanhas publicitárias."
                              },
                              {
                                    "speaker": "Entrevistadora",
                                    "text": "E por que você tem interesse em trabalhar conosco?"
                              },
                              {
                                    "speaker": "Leo",
                                    "text": "Porque admiro a inovação desta empresa e busco novos desafios profissionais na minha carreira."
                              }
                        ]
                  },
                  "readingPassage": {
                        "title": "A evolução do trabalho e o modelo home office no Brasil (Leitura em voz alta)",
                        "content": "O mercado de trabalho brasileiro passou por transformações profundas nos últimos anos. Cada vez mais profissionais de áreas como tecnologia, design, finanças e atendimento ao cliente aderiram ao teletrabalho ou ao regime híbrido. Essa modalidade oferece mais flexibilidade de horário e reduz o tempo gasto no trânsito das grandes cidades. No entanto, trabalhar em casa exige muita autodisciplina e organização para separar o tempo de trabalho do momento de descanso. Criar um ambiente tranquilo de escritório em casa tornou-se essencial para a produtividade e a saúde mental."
                  },
                  "breakoutActivity": {
                        "title": "Rodada do Microfone: Apresentação Profissional de 30s",
                        "tasks": [
                              "1. Diga qual é a sua profissão ou área de estudo: 'Eu sou... e trabalho com...'",
                              "2. Descreva sua responsabilidade diária: 'No meu dia a dia, eu sou responsável por...'",
                              "3. Diga como é o seu modelo de trabalho: 'Eu trabalho presencialmente / remotamente.'",
                              "4. Faça uma pergunta a um colega sobre a carreira dele: 'Há quanto tempo você trabalha na sua área?'"
                        ]
                  },
                  "homework": "Ticket de saída: Envie um áudio apresentando seu perfil profissional em 40 segundos como se estivesse em uma entrevista."
            }
      },
      {
            "session": "Sesión 9",
            "date": "Martes 15 Dic",
            "time": "7:00 - 8:30 p. m.",
            "title": "Aula 9: Opiniões e Preferências: Gostos, Opiniões e Comparações",
            "desc": "Minha opinião: Hoje você expressa o que pensa, compara opções e debate ideias.",
            "pdfUrl": "materials/portugues-basico2-aula-09.pdf",
            "pdfName": "PolyglotMap-Portugues-Basico2-Aula09.pdf",
            "materials": {
                  "tag": "PORTUGUÊS BÁSICO 2 · AULA 9 DE 10",
                  "title": "Opiniões e Preferências: Gostos, Opiniões e Comparações",
                  "subtitle": "Minha opinião: Hoje você expressa o que pensa, compara opções e debate ideias.",
                  "goals": [
                        "Expressar gostos, pontos de vista e opiniões: Eu acho que..., na minha opinião...",
                        "Fazer comparações de superioridade, inferioridade e igualdade: mais... do que, tão... quanto.",
                        "Concordar e discordar de forma educada: Concordo plenamente, discordo respeitosamente."
                  ],
                  "goldenRule": "Regra de ouro: Para comparar qualidades: 'São Paulo é mais movimentada do que Curitiba!'",
                  "vocabulary": [
                        "Eu acho que (eu A-shu ki) — yo creo que / pienso que",
                        "Na minha opinião (na MEE-nya o-pee-nee-OWN) — en mi opinión",
                        "Concordo (kon-KOR-du) — estoy de acuerdo",
                        "Discordo (dji-SKOR-du) — no estoy de acuerdo",
                        "Com certeza (kon ser-TE-za) — por supuesto",
                        "Mais... do que (MAYS... du ki) — más... que",
                        "Menos... do que (ME-nus... du ki) — menos... que",
                        "Tão... quanto (TOWN... KWAN-tu) — tan... como",
                        "Melhor (me-LYOHR) — mejor",
                        "Pior (pee-OHR) — peor",
                        "Maior (ma-yOHR) — mayor / más grande",
                        "Menor (me-NOHR) — menor / más pequeño"
                  ],
                  "keyLanguage": [
                        "Eu acho que aprender português é muito mais fácil do que aprender alemão.",
                        "Na minha opinião, a praia é melhor do que a montanha para descansar.",
                        "Eu concordo plenamente com você, essa ideia é brilhante!",
                        "Eu entendo o seu ponto de vista, mas discordo porque...",
                        "Lembre: Não se diz 'mais bom' nem 'mais ruim'; use sempre 'melhor' e 'pior'.",
                        "Para igualdade: 'Ele é tão dedicado quanto o irmão'."
                  ],
                  "pronunciation": "O som de CH em 'acho' (/ʃ/ como sh). O som de LH em 'melhor' (/ʎ/). O ditongo fechado em 'pior'. O ritmo das frases comparativas com ênfase no termo comparado.",
                  "tongueTwisters": [
                        "Trava-língua: Quem tudo quer saber, tudo quer comer, nada sabe, nada come!",
                        "Opinião rápida: Acho que o melhor é mais belo, o mais belo é tão bom quanto o melhor!"
                  ],
                  "dialogue": {
                        "title": "Praia ou Montanha? (Debate amigável em duplas)",
                        "lines": [
                              {
                                    "speaker": "Eva",
                                    "text": "Max, qual destino você prefere para as férias de inverno: praia ou serra?"
                              },
                              {
                                    "speaker": "Max",
                                    "text": "Na minha opinião, a serra é muito melhor! O clima é aconchegante, a comida é deliciosa e dá para relaxar perto da lareira."
                              },
                              {
                                    "speaker": "Eva",
                                    "text": "Eu discordo totalmente! Eu acho a praia infinitamente mais animada e divertida do que o campo."
                              },
                              {
                                    "speaker": "Max",
                                    "text": "Mas a praia fica lotada de turistas no verão!"
                              },
                              {
                                    "speaker": "Eva",
                                    "text": "É verdade, mas tomar água de coco olhando o mar não tem comparação com nada no mundo!"
                              },
                              {
                                    "speaker": "Max",
                                    "text": "Bem pensado... Cada lugar tem suas qualidades únicas!"
                              }
                        ]
                  },
                  "readingPassage": {
                        "title": "O debate: Cidade grande vs Cidade do interior (Leitura em voz alta)",
                        "content": "Morar em uma metrópole como São Paulo ou Rio de Janeiro traz inúmeras vantagens culturais e econômicas: há uma variedade incomparável de teatros, restaurantes cosmopolitas, museus de renome internacional e amplas oportunidades no mercado de trabalho. Por outro lado, o custo de vida é muito mais elevado e o trânsito diário costuma ser exaustivo. Já as cidades do interior oferecem uma tranquilidade inestimável, maior contato com a natureza e um ritmo de vida muito mais saudável. Afinal, a escolha do lugar ideal depende das prioridades e dos valores de cada fase da vida."
                  },
                  "breakoutActivity": {
                        "title": "Rodada do Microfone: Rodada de Opiniões",
                        "tasks": [
                              "1. Expresse uma opinião: 'Na minha opinião, o melhor filme/livro é...'",
                              "2. Faça uma comparação: 'Eu acho que o futebol é mais emocionante do que...'",
                              "3. Use comparativos irregulares: 'Para mim, o café é melhor do que o chá.'",
                              "4. Reaja educadamente à opinião do seu parceiro: 'Concordo com você porque...' ou 'Entendo, mas discordo porque...'"
                        ]
                  },
                  "homework": "Ticket de saída: Envie um áudio de 30 segundos comparando duas cidades ou dois hábitos da sua vida."
            }
      },
      {
            "session": "Sesión 10",
            "date": "Jueves 17 Dic",
            "time": "7:00 - 8:30 p. m.",
            "title": "Aula 10: Situações da Vida Diária: Convites, Telefonemas e Pedidos",
            "desc": "Convites e telefonemas: Hoje você convida, atende o telefone e pede ajuda com naturalidade.",
            "pdfUrl": "materials/portugues-basico2-aula-10.pdf",
            "pdfName": "PolyglotMap-Portugues-Basico2-Aula10.pdf",
            "materials": {
                  "tag": "PORTUGUÊS BÁSICO 2 · AULA 10 DE 10",
                  "title": "Situações da Vida Diária: Convites, Telefonemas e Pedidos",
                  "subtitle": "Convites e telefonemas: Hoje você convida, atende o telefone e pede ajuda.",
                  "goals": [
                        "Atender telefonemas e iniciar conversas formais e informais: Alô, quem está falando?",
                        "Fazer convites amigáveis e propostas de lazer: Quer sair hoje? Vamos almoçar juntos?",
                        "Aceitar ou recusar convites com elegância e cordialidade: Adoraria!, Infelizmente hoje não posso..."
                  ],
                  "goldenRule": "Regra de ouro: No telefone no Brasil atendemos dizendo 'Alô!' e nos despedimos dizendo 'Um abraço!' ou 'Beijo!'",
                  "vocabulary": [
                        "Alô! (a-LOH) — ¡Aló! / ¡Hola! (ao telefone)",
                        "Quem fala? (kayn FA-la) — ¿quién habla?",
                        "Ligação / Telefonema (lee-ga-SOWN / te-le-fo-NE-ma) — llamada",
                        "Recado (re-KA-du) — recado / mensaje",
                        "Convite (kon-VEE-tchee) — invitación",
                        "Festa de aniversário (FES-ta dji a-nee-ver-SA-ree-u) — fiesta de cumpleaños",
                        "Vamos...? (VA-mus) — ¿vamos a...?",
                        "Quer ir...? (KEHR EER) — ¿quieres ir...?",
                        "Com certeza! / Adoraria! (kon ser-TE-za / a-do-ra-REE-a) — ¡Me encantaría!",
                        "Infelizmente não posso (een-fe-leez-MEN-tchee nown PO-su) — no puedo",
                        "Fica para a próxima (FEE-ka pa-ra a PRO-see-ma) — queda para la próxima",
                        "Um abraço / Beijo! (un a-BRA-su / BAY-zhu) — un abrazo / beso"
                  ],
                  "keyLanguage": [
                        "Alô! Gostaria de falar com o Gabriel, por favor.",
                        "Ele não está no momento. Gostaria de deixar um recado?",
                        "Oi Camila! O que você vai fazer sábado à noite? Quer ir ao cinema comigo?",
                        "Adoraria! A que horas a gente se encontra?",
                        "Puxa, que pena! Infelizmente já tenho outro compromisso, mas fica para a próxima!",
                        "Lembre: 'A gente' se conjuga na 3ª pessoa do singular: 'A gente vai', 'A gente pode'."
                  ],
                  "pronunciation": "Entonação telefônica: 'Alô?' com tom ascendente ↗; 'Quem fala?' com tom interrogativo neutro. A pronúncia de 'abraço' e 'beijo' com entonação calorosa brasileira.",
                  "tongueTwisters": [
                        "Trava-língua: Se o Pedro é preto, o peito do Pedro é preto. Preto é o peito do Pedro!",
                        "No telefone: Alô, alô! É o Leo que liga pra chamar pro baile na beira da praia!"
                  ],
                  "dialogue": {
                        "title": "Convite para a festa de sexta-feira (Leia em duplas)",
                        "lines": [
                              {
                                    "speaker": "Leo",
                                    "text": "Alô, Bia! Tudo bem por aí?"
                              },
                              {
                                    "speaker": "Bia",
                                    "text": "Oi Leo! Tudo ótimo, e você?"
                              },
                              {
                                    "speaker": "Leo",
                                    "text": "Tudo joia! Estou ligando para te fazer um convite: sexta-feira é aniversário do Marcos e vamos fazer uma festa surpresa."
                              },
                              {
                                    "speaker": "Bia",
                                    "text": "Ai, que máximo! Onde vai ser?"
                              },
                              {
                                    "speaker": "Leo",
                                    "text": "Vai ser na casa dele, a partir das 20h. Você vem?"
                              },
                              {
                                    "speaker": "Bia",
                                    "text": "Com certeza, adoraria ir! O que posso levar para ajudar?"
                              },
                              {
                                    "speaker": "Leo",
                                    "text": "Se você puder trazer um bolo ou um refrigerante, vai ser ótimo!"
                              },
                              {
                                    "speaker": "Bia",
                                    "text": "Combinado! Então nos vemos na sexta. Um abraço!"
                              },
                              {
                                    "speaker": "Leo",
                                    "text": "Combinadíssimo! Um abraço e até lá!"
                              }
                        ]
                  },
                  "readingPassage": {
                        "title": "A arte do convívio e da hospitalidade brasileira (Leitura em voz alta)",
                        "content": "O povo brasileiro é internacionalmente reconhecido por sua espontaneidade calorosa e facilidade para cultivar amizades sinceras. Um convite informal para 'tomar um cafezinho' muitas vezes se transforma em uma longa e agradável tarde de risadas e conversas profundas. No Brasil, não se exige uma formalidade excessiva para demonstrar carinho: aceitar um convite com entusiasmo ou recusar explicando o motivo com gentileza são sinais fundamentais de consideração. Ao concluir o Básico 2, os estudantes não apenas dominam as estruturas da língua portuguesa, mas também absorvem a essência afetiva da cultura brasileira."
                  },
                  "breakoutActivity": {
                        "title": "Rodada do Microfone: Ligação Telefônica e Convite",
                        "tasks": [
                              "1. Ligue para um colega: 'Alô, boa noite! O [nome] está?'",
                              "2. Faça um convite tentador: 'Quer ir comigo a um show / restaurante no sábado?'",
                              "3. Aceite ou recuse o convite usando expressões naturais: 'Adoraria!' ou 'Puxa, hoje não posso...'",
                              "4. Despeça-se calorosamente: 'Então combinado! Um abraço!'"
                        ]
                  },
                  "homework": "Ticket de saída: Envie um áudio no grupo de WhatsApp fazendo um convite oficial para seus colegas de turma comemorarem o fim do curso."
            }
      }
    ]
  }
];

// Estado de la Aplicación
let currentUser = null;
let activeFilter = 'all';
let currentBookingCourse = null;
let credentialCustomPhoto = null;
let attendanceHistory = {}; // courseId -> [dates]

// Inicialización al cargar DOM
document.addEventListener('DOMContentLoaded', () => {
  loadSavedUser();
  setupEventListeners();
  renderCourses();
  updateUIForUser();
  setupCredentialGenerator();
  initDynamicHero();
});

// Cargar usuario desde LocalStorage
function loadSavedUser() {
  const saved = localStorage.getItem('polyglot_user');
  if (saved) {
    try {
      currentUser = JSON.parse(saved);
    } catch (e) {
      currentUser = null;
    }
  }

  const savedAtt = localStorage.getItem('polyglot_attendance');
  if (savedAtt) {
    try {
      attendanceHistory = JSON.parse(savedAtt);
    } catch (e) {
      attendanceHistory = {};
    }
  }
}

// Guardar usuario en LocalStorage
function saveUser(user) {
  currentUser = user;
  localStorage.setItem('polyglot_user', JSON.stringify(user));
  updateUIForUser();
  updateCredentialFromUser();
}

// Guardar Asistencia
function saveAttendance(courseId, dateStr) {
  if (!attendanceHistory[courseId]) {
    attendanceHistory[courseId] = [];
  }
  if (!attendanceHistory[courseId].includes(dateStr)) {
    attendanceHistory[courseId].push(dateStr);
  }
  localStorage.setItem('polyglot_attendance', JSON.stringify(attendanceHistory));
}

// Configurar Event Listeners
function setupEventListeners() {
  const filterButtons = document.querySelectorAll('[data-filter]');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterButtons.forEach(b => b.classList.remove('bg-yellow-400', 'text-slate-950', 'font-bold'));
      filterButtons.forEach(b => b.classList.add('bg-white/10', 'text-white'));
      btn.classList.add('bg-yellow-400', 'text-slate-950', 'font-bold');
      btn.classList.remove('bg-white/10', 'text-white');
      activeFilter = btn.getAttribute('data-filter');
      renderCourses();
    });
  });

  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', handleLoginFormSubmit);
  }

  const quickCheckinBtn = document.getElementById('quickCheckinBtn');
  if (quickCheckinBtn) {
    quickCheckinBtn.addEventListener('click', handleQuickCheckin);
  }
}

// Actualizar Header y Elementos según estado de sesión
function updateUIForUser() {
  const userGreeting = document.getElementById('userGreeting');
  const userPassportBadge = document.getElementById('userPassportBadge');
  const userMilesBadge = document.getElementById('userMilesBadge');
  const authBtn = document.getElementById('authBtn');
  const boardingPassesNavBtn = document.getElementById('boardingPassesNavBtn');
  const aulaNavBtn = document.getElementById('aulaNavBtn');
  const headerCredencialBtn = document.getElementById('headerCredencialBtn');

  if (currentUser) {
    const allowed = getEffectiveAllowedCourses(currentUser) || [];
    const isDocente = typeof isDocentePatricia === 'function' && isDocentePatricia(currentUser);

    if (userGreeting) {
      userGreeting.innerHTML = `
        <span class="text-xs text-sky-200">¡Bienvenido a bordo!</span>
        <span class="font-bold text-white flex items-center gap-1.5">${currentUser.name} ✈️</span>
      `;
      userGreeting.classList.remove('hidden');
    }

    if (userPassportBadge) {
      userPassportBadge.classList.add('hidden');
    }

    if (boardingPassesNavBtn) {
      boardingPassesNavBtn.classList.add('hidden');
    }

    if (headerCredencialBtn) {
      if (allowed.includes('bootcamp-portugues-basico2')) {
        headerCredencialBtn.classList.add('hidden');
      } else {
        headerCredencialBtn.classList.remove('hidden');
      }
    }

    if (userMilesBadge) {
      if (allowed.includes('bootcamp-portugues-basico2')) {
        userMilesBadge.classList.add('hidden');
      } else {
        userMilesBadge.classList.remove('hidden');
        userMilesBadge.innerHTML = `🌟 ${currentUser.miles || 1200} Millas`;
      }
    }

    if (aulaNavBtn) {
      aulaNavBtn.classList.remove('hidden');
      aulaNavBtn.classList.add('inline-flex');

      if (isDocente) {
        aulaNavBtn.href = 'docente.html';
        aulaNavBtn.className = "px-4 py-2 rounded-2xl text-xs font-black bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-600 hover:to-indigo-600 text-white shadow-lg hover:scale-105 transition-all flex items-center gap-1.5 select-none border border-white/20";
        aulaNavBtn.innerHTML = `
          <span>💼</span>
          <span>Panel Docente »</span>
        `;
      } else if (allowed.includes('bootcamp-portugues-basico2')) {
        aulaNavBtn.href = 'aula.html?course=bootcamp-portugues-basico2';
        aulaNavBtn.className = "px-4 py-2 rounded-2xl text-xs font-black bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white shadow-xl hover:scale-105 transition-all flex flex-col items-end leading-tight border-2 border-emerald-300/60 select-none animate-pulse";
        aulaNavBtn.innerHTML = `
          <span class="flex items-center gap-1.5 font-black text-yellow-300 text-xs sm:text-sm">
            <span>🇧🇷</span> PORTUGUÉS BÁSICO 2 »
          </span>
          <span class="text-[10px] sm:text-[11px] text-emerald-100 font-medium">Martes y jueves · 7:00 a 8:30 p. m.</span>
        `;
      } else if (allowed.includes('bootcamp-portugues-cero')) {
        aulaNavBtn.href = 'aula.html?course=bootcamp-portugues-cero';
        aulaNavBtn.className = "px-4 py-2 rounded-2xl text-xs font-black bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white shadow-xl hover:scale-105 transition-all flex flex-col items-end leading-tight border-2 border-emerald-300/60 select-none";
        aulaNavBtn.innerHTML = `
          <span class="flex items-center gap-1.5 font-black text-yellow-300 text-xs sm:text-sm">
            <span>🇧🇷</span> PORTUGUÉS DESDE CERO »
          </span>
          <span class="text-[10px] sm:text-[11px] text-emerald-100 font-medium">Martes y jueves · 7:00 a 8:00 p. m.</span>
        `;
      } else {
        const firstCourse = allowed[0] ? COURSES_DATA.find(c => c.id === allowed[0]) : null;
        const cTitle = firstCourse ? firstCourse.title : 'Mi Aula Virtual';
        const cSchedule = firstCourse ? `${firstCourse.scheduleDays} · ${firstCourse.scheduleTime}` : 'Ingresar al Aula';
        aulaNavBtn.href = `aula.html${firstCourse ? '?course=' + firstCourse.id : ''}`;
        aulaNavBtn.className = "px-4 py-2 rounded-2xl text-xs font-black bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 text-white shadow-lg hover:scale-105 transition-all flex flex-col items-end leading-tight border border-white/20 select-none";
        aulaNavBtn.innerHTML = `
          <span class="flex items-center gap-1.5 font-black text-yellow-300 text-xs">
            <span>🎒</span> ${cTitle} »
          </span>
          <span class="text-[10px] text-blue-100 font-medium">${cSchedule}</span>
        `;
      }
    }

    if (authBtn) {
      authBtn.innerHTML = `
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
        Cerrar Sesión
      `;
      authBtn.className = "px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/20 hover:bg-white/30 text-white border border-white/25 transition-all flex items-center gap-1.5";
      authBtn.onclick = handleLogout;
    }
  } else {
    if (userGreeting) userGreeting.classList.add('hidden');
    if (userPassportBadge) userPassportBadge.classList.add('hidden');
    if (userMilesBadge) userMilesBadge.classList.add('hidden');
    if (headerCredencialBtn) headerCredencialBtn.classList.remove('hidden');
    if (boardingPassesNavBtn) boardingPassesNavBtn.classList.add('hidden');

    if (aulaNavBtn) {
      aulaNavBtn.classList.add('hidden');
      aulaNavBtn.classList.remove('inline-flex');
    }

    if (authBtn) {
      authBtn.innerHTML = `
        <span class="text-base">📖</span>
        <span class="tracking-wide">VER MATERIALES</span>
      `;
      authBtn.className = "px-6 py-3 rounded-full text-xs sm:text-sm font-black bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 hover:from-yellow-300 hover:via-amber-400 hover:to-yellow-500 text-slate-950 shadow-[0_0_25px_rgba(250,204,21,0.65)] hover:shadow-[0_0_35px_rgba(250,204,21,0.9)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2 border-2 border-yellow-200 cursor-pointer select-none";
      authBtn.href = "aula.html?course=bootcamp-portugues-cero";
      authBtn.onclick = (e) => {
        window.location.href = "aula.html?course=bootcamp-portugues-cero";
      };
    }
  }

  // Refrescar tarjetas de cursos para reflejar el estado del alumno autenticado
  renderCourses();
}

// ========================================================
// Dynamic Hero Headline Rotation (POLYGLOT MAP)
// Rotación continua cada 60s con transición fade-out / fade-in (700ms)
// ========================================================
function initDynamicHero() {
  const titleEl = document.getElementById('dynamicHeroTitle');
  if (!titleEl) return;

  const phrases = [
    {
      line1: 'Conecta con el mundo.',
      line2: 'Transforma tu futuro.'
    },
    {
      line1: 'Tu origen no determina',
      line2: 'hasta dónde puedes llegar.'
    },
    {
      line1: 'Aprender con propósito.',
      line2: 'Crecer con impacto.'
    },
    {
      line1: 'Tu talento',
      line2: 'no tiene fronteras.'
    }
  ];

  let currentIndex = 0;
  const ROTATION_INTERVAL = 60000; // 60 segundos
  const TRANSITION_DURATION = 700; // 700 ms

  function formatPhraseHtml(phrase) {
    return `${phrase.line1} <br/><span class="text-[#ffd200]">${phrase.line2}</span>`;
  }

  function rotateTitle() {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const prefersReducedMotion = mediaQuery && mediaQuery.matches;

    currentIndex = (currentIndex + 1) % phrases.length;
    const nextPhrase = phrases[currentIndex];

    if (prefersReducedMotion) {
      // Cambio instantáneo para usuarios con preferencia de movimiento reducido
      titleEl.innerHTML = formatPhraseHtml(nextPhrase);
      return;
    }

    // 1. Transición de salida suave (fade-out 700ms)
    titleEl.style.opacity = '0';

    setTimeout(() => {
      // 2. Actualizar titular durante opacidad 0 (sin saltos de contenido)
      titleEl.innerHTML = formatPhraseHtml(nextPhrase);

      // 3. Transición de entrada suave (fade-in 700ms)
      requestAnimationFrame(() => {
        titleEl.style.opacity = '1';
      });
    }, TRANSITION_DURATION);
  }

  // Iniciar rotación continua
  setInterval(rotateTitle, ROTATION_INTERVAL);
}

// Control interactivo del acordeón de indicaciones por curso
window.toggleCourseGuide = function(courseId, event) {
  if (event && typeof event.stopPropagation === 'function') {
    event.stopPropagation();
  }
  const guideEl = document.getElementById('courseGuide-' + courseId);
  const chevronEl = document.getElementById('chevron-' + courseId);
  if (!guideEl) return;

  const isHidden = guideEl.classList.contains('hidden');
  if (isHidden) {
    guideEl.classList.remove('hidden');
    if (chevronEl) {
      chevronEl.innerHTML = '▲ Ocultar indicaciones';
      chevronEl.classList.add('bg-blue-600', 'text-white');
      chevronEl.classList.remove('bg-white/90', 'text-blue-800');
    }
  } else {
    guideEl.classList.add('hidden');
    if (chevronEl) {
      chevronEl.innerHTML = '▼ Tocar para ver indicaciones';
      chevronEl.classList.remove('bg-blue-600', 'text-white');
      chevronEl.classList.add('bg-white/90', 'text-blue-800');
    }
  }
};

// Renderizar Cursos en Modo Tarjetas Interactivas y Amigables
function renderCourses() {
  const container = document.getElementById('coursesContainer');
  if (!container) return;

  const filtered = COURSES_DATA.filter(c => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'ingles') return c.language === 'Inglés';
    if (activeFilter === 'portugues') return c.language === 'Portugués';
    if (activeFilter === 'bootcamp') return c.type === 'BOOTCAMP';
    if (activeFilter === 'club') return c.type === 'CLUB';
    return true;
  }).sort((a, b) => {
    // Los cursos activos van primero, los bloqueados después
    if (Boolean(a.isLocked) === Boolean(b.isLocked)) return 0;
    return a.isLocked ? 1 : -1;
  });

  container.innerHTML = filtered.map(course => {
    const flagSvg = getFlagSvg(course.flag);
    const isMeet = course.classLink && course.classLink.includes('meet.google.com');
    const platformName = course.classLink ? (isMeet ? 'Google Meet' : 'Zoom') : 'Virtual';
    const numClasses = course.syllabus ? course.syllabus.length : 9;
    const classTerm = course.language === 'Inglés' ? 'Clases' : 'Aulas';

    return `
      <div class="ticket-card bg-white text-slate-900 rounded-3xl p-5 sm:p-7 shadow-xl border-2 border-slate-100 hover:border-yellow-400/80 transition-all duration-300 hover:shadow-2xl flex flex-col justify-between gap-5 relative overflow-hidden group">
        
        <!-- Franja decorativa superior según idioma -->
        <div class="absolute top-0 left-0 right-0 h-1.5 ${course.language === 'Portugués' ? 'bg-gradient-to-r from-emerald-500 via-yellow-400 to-emerald-600' : 'bg-gradient-to-r from-blue-600 via-red-500 to-blue-700'}"></div>

        <!-- Encabezado de la Tarjeta con Badges -->
        <div class="flex items-center justify-between flex-wrap gap-2 pt-1 border-b border-slate-100 pb-3">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="inline-block px-3 py-1 rounded-full text-xs font-black tracking-wide ${course.badgeColor}">
              ${course.badgeText}
            </span>
            ${course.isLocked ? `
              <span class="inline-flex items-center gap-1 text-[11px] font-black px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 border border-rose-200">
                🔒 PRÓXIMAMENTE
              </span>
            ` : `
              <span class="inline-flex items-center gap-1 text-[11px] font-black px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                <span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                🟢 EN VIVO / ACCESO LIBRE
              </span>
            `}
          </div>

          <div class="flex items-center gap-2 text-xs font-mono font-bold text-slate-500">
            <span class="bg-slate-100 px-2.5 py-1 rounded-lg text-slate-700">✈️ ${course.flightCode}</span>
            <span class="text-blue-700 font-extrabold bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200">🇵🇪 Hora Perú (UTC-5)</span>
          </div>
        </div>

        <!-- Cuerpo Principal: Bandera, Título y Horario -->
        <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div class="flex items-start sm:items-center gap-4 sm:gap-5 flex-1">
            <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex-shrink-0 flex items-center justify-center shadow-md border-2 border-slate-100 overflow-hidden bg-slate-50 group-hover:scale-105 transition-transform">
              ${flagSvg}
            </div>

            <div class="space-y-1">
              <h3 class="text-2xl sm:text-3xl font-black text-[#0f2d8a] tracking-tight">
                ${course.title}
              </h3>
              
              <div class="flex flex-wrap items-center gap-x-4 gap-y-1 text-slate-600 text-xs sm:text-sm font-semibold pt-1">
                <div class="flex items-center gap-1.5 text-slate-800 font-bold">
                  <span class="text-blue-600 text-base">📅</span>
                  <span>${course.scheduleDays}</span>
                </div>
                <div class="flex items-center gap-1.5 text-blue-700 font-black bg-blue-50 px-2.5 py-0.5 rounded-lg border border-blue-200/60">
                  <span class="text-blue-600 text-base">🕒</span>
                  <span>${course.scheduleTime}</span>
                </div>
              </div>

              <p class="text-xs text-slate-500 font-medium pt-1">
                📍 ${course.gate}
              </p>
            </div>
          </div>

          <!-- Mini-chips de resumen rápido para el alumno -->
          <div class="flex md:flex-col gap-2 shrink-0 text-left w-full md:w-auto">
            <div class="flex-1 md:flex-initial px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1.5">
              <span>🎟️</span>
              <span>Sin clave ni contraseña</span>
            </div>
            <div class="flex-1 md:flex-initial px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold flex items-center gap-1.5">
              <span>📝</span>
              <span>Asistencia al final de clase</span>
            </div>
          </div>
        </div>

        <!-- ACORDEÓN INTERACTIVO: INDICACIONES RÁPIDAS PARA EL ESTUDIANTE -->
        <div class="w-full">
          <button type="button" onclick="toggleCourseGuide('${course.id}', event)" class="w-full py-2.5 px-4 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50 to-amber-50 hover:from-blue-100 hover:to-indigo-100 border border-blue-200 text-slate-900 font-extrabold text-xs sm:text-sm flex items-center justify-between transition-all cursor-pointer shadow-xs select-none">
            <span class="flex items-center gap-2">
              <span class="text-base">💡</span>
              <span class="text-blue-950 font-black text-left">¿Dudas sobre esta clase? Toca para ver indicaciones rápidas</span>
            </span>
            <span id="chevron-${course.id}" class="shrink-0 text-blue-800 font-black text-xs px-2.5 py-1 rounded-lg bg-white/90 border border-blue-200 shadow-xs transition-colors">
              ▼ Tocar para ver indicaciones
            </span>
          </button>

          <!-- Panel desplegable con respuestas claras e interactivas -->
          <div id="courseGuide-${course.id}" class="hidden mt-3 p-4 sm:p-5 rounded-2xl bg-slate-950 text-white text-xs space-y-3 border-2 border-yellow-400 shadow-xl transition-all">
            <div class="flex items-center justify-between border-b border-white/15 pb-2">
              <span class="font-black text-yellow-300 text-xs uppercase tracking-wide flex items-center gap-1.5">
                <span>📋</span> INDICACIONES PARA ESTUDIANTES · ${course.title.toUpperCase()}
              </span>
              <span class="text-[10px] text-slate-400 font-mono">100% ONLINE</span>
            </div>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
              <div class="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <p class="font-black text-emerald-400 flex items-center gap-1.5 text-xs sm:text-sm">
                  <span>🔑</span> ¿Pide contraseña o usuario?
                </p>
                <p class="text-slate-200 leading-relaxed text-xs">
                  <strong class="text-white">¡NO!</strong> Desactivamos las credenciales. Entras con un solo clic tocando el botón verde <strong class="text-emerald-300">'Entrar a Clase'</strong>.
                </p>
              </div>

              <div class="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <p class="font-black text-yellow-300 flex items-center gap-1.5 text-xs sm:text-sm">
                  <span>📝</span> ¿Cómo se registra la asistencia?
                </p>
                <p class="text-slate-200 leading-relaxed text-xs">
                  El docente compartirá el enlace oficial de asistencia <strong class="text-white">al finalizar cada clase</strong> (o por Facebook en transmisión en vivo). La <strong class="text-yellow-300">primera semana no hubo asistencia</strong> porque fue de adaptación. El Examen Final se activará el 18 de diciembre.
                </p>
              </div>

              <div class="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <p class="font-black text-sky-300 flex items-center gap-1.5 text-xs sm:text-sm">
                  <span>🕒</span> ¿Qué horario aplica?
                </p>
                <p class="text-slate-200 leading-relaxed text-xs">
                  Rige la <strong class="text-white">Hora oficial de Perú (UTC-5)</strong>: ${course.scheduleDays} de <strong class="text-sky-200">${course.scheduleTime}</strong>.
                </p>
              </div>

              <div class="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <p class="font-black text-rose-300 flex items-center gap-1.5 text-xs sm:text-sm">
                  <span>🔴</span> ¿Qué pasa si la sala se llena?
                </p>
                <p class="text-slate-200 leading-relaxed text-xs">
                  Transmisión simultánea en <strong class="text-blue-300">Facebook Live</strong> y grabaciones completas en <strong class="text-red-300">YouTube</strong> para ver cuando quieras.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- ACCIONES Y BOTONES PRINCIPALES -->
        <div class="pt-2 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          ${course.isLocked ? `
            <div class="flex-1 p-3.5 rounded-2xl bg-rose-50 border border-rose-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div class="flex items-center gap-2 text-rose-950 font-bold">
                <span class="text-base">🔒</span>
                <span>Sala en vivo bloqueada temporalmente. ¡Próximamente disponible!</span>
              </div>
              <a href="aula.html?course=${course.id}" target="_blank" class="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black transition flex items-center justify-center gap-1.5 shadow-sm">
                <span>📖</span> Ver Temario y Materiales »
              </a>
            </div>
          ` : `
            <!-- Botones de Acción Inmediata -->
            <div class="flex flex-wrap items-center gap-2.5 flex-1">
              <!-- Botón Entrar a Clase -->
              <a href="${course.classLink}" target="_blank" class="flex-1 sm:flex-initial px-5 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-xs sm:text-sm shadow-md hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 border border-emerald-300/40 cursor-pointer">
                <span class="text-base">🚀</span>
                <span>ENTRAR A CLASE (${platformName.toUpperCase()})</span>
                <span class="text-emerald-200 font-bold">»</span>
              </a>

              <!-- Botón Ver Materiales -->
              <a href="aula.html?course=${course.id}" target="_blank" class="flex-1 sm:flex-initial px-4 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs sm:text-sm shadow-sm hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer">
                <span class="text-base">📖</span>
                <span>Ver Materiales (${numClasses} ${classTerm}) »</span>
              </a>
            </div>

            <!-- Accesos a Transmisión / Grabación si la sala está llena -->
            <div class="flex items-center justify-center sm:justify-end gap-2 shrink-0 text-xs">
              <span class="text-slate-500 font-bold text-[11px] hidden lg:inline">¿Sala llena?</span>
              <a href="${course.streamLink || 'https://www.facebook.com/PolyglotMap8/'}" target="_blank" class="px-3 py-2 rounded-xl bg-[#1877f2] hover:bg-[#1264d1] text-white font-bold transition flex items-center gap-1 shadow-xs cursor-pointer" title="Facebook En Vivo">
                <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                <span>FB En Vivo</span>
              </a>
              <a href="${course.youtubeLink || 'https://www.youtube.com/@polyglot_map'}" target="_blank" class="px-3 py-2 rounded-xl bg-[#ff0000] hover:bg-red-700 text-white font-bold transition flex items-center gap-1 shadow-xs cursor-pointer" title="Ver Grabaciones en YouTube">
                <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                <span>YouTube</span>
              </a>
            </div>
          `}
        </div>

      </div>
    `;
  }).join('');
}

// Banderas en SVG puro
function getFlagSvg(flag) {
  if (flag === 'usa') {
    return `
      <svg class="w-full h-full" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="32" fill="#B22234"/>
        <path d="M0 8h64v5H0zm0 10h64v5H0zm0 10h64v5H0zm0 10h64v5H0zm0 10h64v5H0zm0 10h64v5H0z" fill="#FFFFFF"/>
        <rect width="28" height="28" fill="#3C3B6E"/>
        <circle cx="6" cy="6" r="1.5" fill="#FFFFFF"/>
        <circle cx="14" cy="6" r="1.5" fill="#FFFFFF"/>
        <circle cx="22" cy="6" r="1.5" fill="#FFFFFF"/>
        <circle cx="10" cy="12" r="1.5" fill="#FFFFFF"/>
        <circle cx="18" cy="12" r="1.5" fill="#FFFFFF"/>
        <circle cx="6" cy="18" r="1.5" fill="#FFFFFF"/>
        <circle cx="14" cy="18" r="1.5" fill="#FFFFFF"/>
        <circle cx="22" cy="18" r="1.5" fill="#FFFFFF"/>
        <circle cx="10" cy="24" r="1.5" fill="#FFFFFF"/>
        <circle cx="18" cy="24" r="1.5" fill="#FFFFFF"/>
      </svg>
    `;
  }
  if (flag === 'brazil') {
    return `
      <svg class="w-full h-full" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="32" fill="#009739"/>
        <polygon points="32,8 56,32 32,56 8,32" fill="#FEDD00"/>
        <circle cx="32" cy="32" r="15" fill="#012169"/>
        <path d="M18 34c4-7 16-9 28-2" stroke="#FFFFFF" stroke-width="2.5" fill="none"/>
        <circle cx="28" cy="37" r="1" fill="#FFFFFF"/>
        <circle cx="35" cy="28" r="1" fill="#FFFFFF"/>
        <circle cx="33" cy="40" r="1" fill="#FFFFFF"/>
      </svg>
    `;
  }
  return `<span>🌍</span>`;
}

// Click en Reservar Cupo
function handleCourseBookingClick(courseId) {
  const course = COURSES_DATA.find(c => c.id === courseId);
  if (!course) return;

  currentBookingCourse = course;

  if (!currentUser) {
    document.getElementById('bookingCourseName').innerText = course.title;
    document.getElementById('bookingCourseSchedule').innerText = `${course.scheduleDays} · ${course.scheduleTime}`;
    openModal('quickRegisterModal');
  } else {
    finalizeBooking(course, currentUser.name, currentUser.email);
  }
}

// Botón global inferior "Reserva tu cupo »"
function handleGlobalReserveClick() {
  if (COURSES_DATA.length > 0) {
    handleCourseBookingClick(COURSES_DATA[0].id);
  }
}

// Confirmar Reserva y Generar Boarding Pass
function finalizeBooking(course, travelerName, travelerEmail) {
  if (!currentUser) {
    currentUser = {
      name: travelerName || 'Viajero Políglota',
      email: travelerEmail || 'viajero@polyglotmap.com',
      passportNo: 'PM-' + Math.floor(100000 + Math.random() * 900000),
      miles: 1500,
      avatar: '✈️',
      bookedCourses: []
    };
  }

  const alreadyBooked = currentUser.bookedCourses.some(b => b.courseId === course.id);
  if (!alreadyBooked) {
    const seatNumber = `${Math.floor(Math.random() * 25) + 1}${['A', 'B', 'C', 'D'][Math.floor(Math.random() * 4)]}`;
    const bookingEntry = {
      courseId: course.id,
      title: course.title,
      flightCode: course.flightCode,
      gate: course.gate,
      seat: seatNumber,
      dateText: `${course.dateMain} (${course.scheduleDays})`,
      timeText: course.scheduleTime,
      bookedAt: new Date().toLocaleDateString('es-PE'),
      qrCodeData: `POLYGLOTMAP|${course.flightCode}|${seatNumber}|${currentUser.passportNo}`
    };

    currentUser.bookedCourses.push(bookingEntry);
    currentUser.miles = (currentUser.miles || 1200) + 500;
    saveUser(currentUser);
  }

  if (course.spotsLeft > 1) {
    course.spotsLeft -= 1;
  }

  renderCourses();
  triggerConfetti();

  closeModal('quickRegisterModal');
  closeModal('loginModal');
  showBoardingPass(course);
}

// =========================================================================
// MÓDULO: BOARDING PASS CON TEMARIO COMPLETO Y BOTONES DE CLASE / ASISTENCIA
// =========================================================================

function showBoardingPass(course) {
  const userBooking = (currentUser && currentUser.bookedCourses) ? (currentUser.bookedCourses.find(b => b.courseId === course.id) || {
    seat: '07A',
    flightCode: course.flightCode,
    gate: course.gate
  }) : { seat: '07A', flightCode: course.flightCode, gate: course.gate };

  const syllabusList = course.syllabus || [];
  const courseAtt = attendanceHistory[course.id] || [];
  const attendanceCount = courseAtt.length;
  const totalSessions = syllabusList.length || 10;

  const modalContent = document.getElementById('boardingPassContent');
  if (modalContent) {
    modalContent.innerHTML = `
      <div class="bg-white text-slate-900 rounded-3xl overflow-hidden shadow-2xl border-4 border-[#ffd200] relative">
        
        <!-- Header de la Tarjeta de Embarque -->
        <div class="bg-[#0e34a0] text-white p-5 sm:p-6 flex items-center justify-between border-b-2 border-dashed border-white/20">
          <div class="flex items-center gap-3">
            <div class="w-11 h-11 rounded-2xl bg-[#ffd200] text-slate-950 flex items-center justify-center font-black text-2xl shadow">
              ✈️
            </div>
            <div>
              <span class="text-[10px] uppercase tracking-widest font-bold text-yellow-300">Oficial Boarding Pass • Future Ready</span>
              <h4 class="text-xl sm:text-2xl font-black text-white leading-tight">POLYGLOT MAP AIRWAYS</h4>
            </div>
          </div>
          <div class="text-right">
            <span class="inline-block px-3 py-1 bg-[#ffd200] text-slate-950 font-black rounded-lg text-xs uppercase tracking-wider">
              CONFIRMADO • GRATIS
            </span>
            <p class="text-[10px] font-mono text-blue-200 mt-1">Hora Peruana (UTC-5)</p>
          </div>
        </div>

        <!-- Cuerpo del Pase de Abordar -->
        <div class="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          
          <!-- Metadatos del Pasajero -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-4 border-b border-slate-200">
            <div>
              <span class="text-[11px] font-bold uppercase text-slate-400 block">Pasajero / Viajero</span>
              <span class="text-base sm:text-lg font-black text-slate-900 truncate block">${currentUser ? currentUser.name : 'Viajero Políglota'}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold uppercase text-slate-400 block">Pasaporte No.</span>
              <span class="text-base sm:text-lg font-mono font-bold text-blue-600 block">${currentUser ? currentUser.passportNo : 'PM-102938'}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold uppercase text-slate-400 block">Vuelo / Código</span>
              <span class="text-base sm:text-lg font-mono font-black text-slate-900 block">${course.flightCode}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold uppercase text-slate-400 block">Asiento Asignado</span>
              <span class="text-xl sm:text-2xl font-mono font-black text-[#0e34a0] block">${userBooking.seat}</span>
            </div>
          </div>

          <!-- Banner del Bootcamp -->
          <div class="bg-blue-50/80 p-4 rounded-2xl border border-blue-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span class="text-xs font-black uppercase text-blue-800 tracking-wide">${course.badgeText}</span>
              <h5 class="text-xl sm:text-2xl font-black text-[#0f2d8a]">${course.title}</h5>
              <p class="text-xs text-slate-600 mt-0.5 font-medium">📅 ${course.scheduleDays} | 🕒 ${course.scheduleTime}</p>
            </div>
            <div class="bg-[#ffd200] text-slate-950 px-4 py-2 rounded-xl text-center flex-shrink-0 font-black shadow-sm">
              ${course.dateBadge ? `
                <span class="inline-block px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-rose-600 text-white mb-1 shadow-xs">
                  ${course.dateBadge}
                </span>
              ` : `
                <span class="text-[10px] block leading-tight">PERÍODO OFICIAL</span>
              `}
              <span class="text-base font-black">${course.dateMain}</span>
              <span class="text-[10px] block text-slate-800">${course.dateTo}</span>
            </div>
          </div>

          <!-- BANNER DESTACADO: ABRIR EN PANTALLA COMPLETA ESTILO CREHANA -->
          <div class="bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-400 p-4 sm:p-5 rounded-2xl text-slate-950 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg border-2 border-yellow-500">
            <div>
              <span class="text-[10px] font-mono font-black uppercase tracking-widest text-slate-900 bg-black/10 px-2 py-0.5 rounded">
                MODO MICROLEARNING • ESTILO CREHANA
              </span>
              <h5 class="text-lg font-black text-slate-950 mt-1 leading-tight">
                Aula Virtual & Dashboard Completo
              </h5>
              <p class="text-xs text-slate-800 mt-0.5">
                Abre la pantalla completa con reproductor de grabaciones, links de reunión, materiales oficiales y temario detallado.
              </p>
            </div>
            <button onclick="openAulaTab('${course.id}')" class="w-full sm:w-auto bg-slate-950 hover:bg-[#0e34a0] text-yellow-300 font-black px-5 py-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow-xl transition-all transform hover:scale-105 active:scale-95 flex-shrink-0 select-none">
              <span>🚀 Abrir en Nueva Pestaña »</span>
            </button>
          </div>

          <!-- ========================================================= -->
          <!-- BOTONES REQUERIDOS: ENTRAR A CLASE, ASISTENCIA, EXAMEN    -->
          <!-- ========================================================= -->
          <div class="bg-slate-900 text-white p-5 rounded-2xl shadow-lg border-2 border-yellow-400/30 space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-xs font-mono text-[#ffd200] uppercase font-bold tracking-wider flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                ACCESO DIRECTO A LA SALA DE VUELO
              </span>
              <span class="text-xs font-mono text-emerald-400 font-bold">
                📝 Evaluación: Examen Final
              </span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              
              <!-- 1. Botón ENTRAR A LA CLASE -->
              <a href="${course.classLink || 'https://zoom.us'}" target="_blank" class="bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white font-black py-3 px-4 rounded-xl text-sm shadow-md transition-all flex items-center justify-center gap-2 text-center group">
                <span class="text-lg group-hover:scale-125 transition-transform">🚀</span>
                <span>Entrar a la Clase</span>
              </a>

              <!-- 2. Botón EXAMEN FINAL (BLOQUEADO) -->
              <button onclick="handleLockedExam()" class="bg-slate-800 text-slate-300 hover:text-white font-bold py-3 px-4 rounded-xl text-sm border border-slate-700 opacity-90 flex items-center justify-center gap-2 text-center relative group cursor-pointer">
                <span class="text-base">📝</span>
                <span>Examen Final</span>
                <span class="text-[10px] bg-amber-500 text-slate-950 font-bold px-1.5 py-0.5 rounded ml-1 uppercase">Próximamente</span>
              </button>

            </div>

            <p class="text-[11px] text-slate-400 font-medium text-center pt-1">
              ℹ️ Debido a la gran cantidad de participantes, la evaluación se realizará únicamente mediante el Examen Final en la última sesión.
            </p>
          </div>

          <!-- ========================================================= -->
          <!-- TEMARIO COMPLETO PARA TODAS LAS FECHAS MENCIONADAS       -->
          <!-- ========================================================= -->
          <div class="space-y-3 pt-2">
            <div class="flex items-center justify-between border-b pb-2">
              <div>
                <h6 class="text-base sm:text-lg font-black text-[#0e34a0] flex items-center gap-2">
                  <span>📖</span>
                  <span>Temario Oficial & Plan de Vuelo (${syllabusList.length} Sesiones)</span>
                </h6>
                <p class="text-xs text-slate-500">Cronograma sesión por sesión para todas las fechas del bootcamp</p>
              </div>
              <span class="text-xs font-mono bg-blue-100 text-blue-800 px-2.5 py-1 rounded-full font-bold">
                100% En Vivo
              </span>
            </div>

            <div class="space-y-2.5">
              ${syllabusList.map((item, idx) => {
                const isAttended = courseAtt.includes(item.date);
                return `
                  <div class="p-3.5 rounded-xl border transition-all ${isAttended ? 'bg-emerald-50 border-emerald-300' : 'bg-slate-50 border-slate-200 hover:border-blue-300'}">
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                      <div class="flex items-center gap-2 flex-wrap">
                        <span class="bg-[#0e34a0] text-white text-[11px] font-black px-2 py-0.5 rounded font-mono">
                          ${item.session}
                        </span>
                        <span class="text-xs font-bold text-slate-700 flex items-center gap-1">
                          📅 ${item.date}
                        </span>
                        <span class="text-[11px] font-mono text-slate-500">
                          🕒 ${item.time}
                        </span>
                      </div>
                      <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        Programada
                      </span>
                    </div>
                    <h6 class="font-bold text-slate-900 text-sm mt-1.5">${item.title}</h6>
                    <p class="text-xs text-slate-600 mt-0.5">${item.desc}</p>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Código de Barras y Sellos -->
          <div class="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t-2 border-dashed border-slate-200">
            <div class="space-y-1 w-full sm:w-1/2">
              <div class="barcode-strip rounded"></div>
              <span class="text-[10px] font-mono text-slate-400 block text-center tracking-widest">PM-ETK-${Math.floor(10000000 + Math.random()*90000000)}</span>
            </div>

            <div class="flex items-center gap-3">
              <div class="passport-stamp text-xs">
                <span>FUTURE</span>
                <span>READY</span>
              </div>
              <div class="passport-stamp green text-xs">
                <span>POLYGLOT</span>
                <span>VERIFIED</span>
              </div>
            </div>
          </div>

        </div>

        <!-- Footer del Modal -->
        <div class="bg-slate-100 p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200">
          <div class="text-xs text-slate-600 font-semibold flex items-center gap-1.5">
            <span>ℹ️ Presenta este boarding pass virtual al inicio de cada clase vía Zoom/Meet.</span>
          </div>
          <div class="flex items-center gap-2">
            <button onclick="window.print()" class="bg-slate-800 hover:bg-slate-900 text-white font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 transition">
              <span>🖨️ Imprimir / Guardar PDF</span>
            </button>
            <button onclick="shareTicket('${course.title}')" class="bg-[#ffd200] hover:bg-yellow-400 text-slate-950 font-black px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 transition">
              <span>📲 Compartir por WhatsApp</span>
            </button>
          </div>
        </div>

      </div>
    `;
    openModal('boardingPassModal');
  }
}

// Registrar Asistencia
function recordAttendance(courseId) {
  const course = COURSES_DATA.find(c => c.id === courseId);
  if (!course) return;

  const todayStr = new Date().toLocaleDateString('es-PE', { weekday: 'long', day: 'numeric', month: 'short' });
  saveAttendance(courseId, todayStr);
  
  if (currentUser) {
    currentUser.miles = (currentUser.miles || 1200) + 150;
    saveUser(currentUser);
  }

  triggerConfetti();
  alertNotification(`¡Asistencia de hoy registrada con éxito! Ganaste +150 millas lingüísticas.`);
  showBoardingPass(course);
}

// Aviso de Examen Final Bloqueado
function handleLockedExam() {
  alert('📝 Examen Final Bloqueado\n\nDebido a la alta cantidad de participantes, la evaluación se realizará únicamente mediante el Examen Final al término del bootcamp para todos los estudiantes inscritos.');
}

// Funciones de Control de Acceso Oficial
function isSpecialAdminUser(user) {
  if (!user) return false;
  const n = (user.name || '').toLowerCase();
  const e = (user.email || '').toLowerCase();
  const pass = (user.passportNo || '');
  return pass === 'PM-VIP-001' || pass === 'PM-VIP-002' || pass === 'PM-VIP-003' ||
         n.includes('melanie almeyda') || (n === 'melanie') || e.includes('melaniealmeyda') || e.includes('melanie@polyglotmap.com') ||
         n.includes('valeria') || e.includes('valeriavalenzuela') ||
         n.includes('viajero') || e.includes('viajero2026') || e.includes('viajero');
}

function isDocentePatricia(user) {
  if (!user) return false;
  const n = (user.name || user.n || '').toLowerCase();
  const u = (user.shortName || user.u || '').toLowerCase();
  const e = (user.email || user.e || '').toLowerCase();
  const role = (user.role || '').toLowerCase();
  const pass = (user.passportNo || '');

  if (pass === 'PM-DOC-001' || pass === 'PM-DOCENTE-PATRICIA') return true;
  if (role.includes('docente oficial') || role.includes('profesora oficial') || role.includes('docente')) return true;
  if (n.includes('docente') || u.includes('docente') || u.includes('docente2026') || n.includes('docente2026')) return true;
  if (e.includes('docente')) return true;

  return false;
}

function canUserViewMaterials(user) {
  if (!user) return false;
  if (isSpecialAdminUser(user)) return true;
  if (isDocentePatricia(user)) return true;
  return false;
}

function isMelanieUser(user) {
  return isSpecialAdminUser(user);
}

const ALL_AVAILABLE_BOOTCAMPS = [
  'bootcamp-portugues-cero',
  'bootcamp-portugues-basico2',
  'bootcamp-ingles-cero',
  'club-ingles-a2'
];

function getEffectiveAllowedCourses(user) {
  if (!user) return ALL_AVAILABLE_BOOTCAMPS;
  if (isDocentePatricia(user)) {
    return ['bootcamp-portugues-cero'];
  }
  // Todos los estudiantes inscritos tienen acceso completo a todos los bootcamps
  return ALL_AVAILABLE_BOOTCAMPS;
}

function userCanAccessCourse(courseId, user) {
  if (courseId === 'bootcamp-master-classes') {
    return false;
  }
  if (!user) {
    return ALL_AVAILABLE_BOOTCAMPS.includes(courseId);
  }
  if (isDocentePatricia(user)) {
    return courseId === 'bootcamp-portugues-cero' || courseId === 'bootcamp-portugues-basico2';
  }
  return ALL_AVAILABLE_BOOTCAMPS.includes(courseId);
}

function getCourseNamesList(courseIds) {
  if (!courseIds || courseIds.length === 0) return 'tus cursos asignados';
  const titles = courseIds.map(id => {
    const c = COURSES_DATA.find(x => x.id === id);
    return c ? c.title : id;
  });
  return titles.join(', ');
}

// Click en toda la tarjeta del curso
function handleCardClick(courseId) {
  const course = COURSES_DATA.find(c => c.id === courseId);
  if (!course) return;

  if (course.isLocked) {
    alert(`🔒 ${course.title} Bloqueado Temporalmente\n\nEl acceso a las clases en vivo de este curso está bloqueado por el momento. ¡Próximamente disponible!\n\nPuedes consultar el temario y las unidades en el aula virtual.`);
    window.open(`aula.html?course=${courseId}`, '_blank');
    return;
  }

  // Acceso libre directo al aula virtual con temarios y links
  window.open(`aula.html?course=${courseId}`, '_blank');
}

// Click en INICIAR MI VIAJE / USUARIO (Acceso Libre)
function handleStartJourneyClick(courseId) {
  window.open(`aula.html?course=${courseId || 'bootcamp-portugues-cero'}`, '_blank');
}

// Ir al Panel de Clases (aula.html para alumnos / docente.html para docentes) en pestaña completa
function goToClassPanel(courseId) {
  if (currentUser && typeof isDocentePatricia === 'function' && isDocentePatricia(currentUser)) {
    window.open('docente.html', '_blank');
    return;
  }
  const targetId = courseId || 'bootcamp-portugues-cero';
  window.open(`aula.html?course=${targetId}`, '_blank');
}

// Compatibilidad
function openAulaTab(courseId) {
  goToClassPanel(courseId);
}

// Ver pase de abordar existente
function viewBoardingPass(courseId) {
  const course = COURSES_DATA.find(c => c.id === courseId);
  if (course) {
    showBoardingPass(course);
  }
}

// Compartir Ticket
function shareTicket(courseTitle) {
  const text = encodeURIComponent(`¡Me acabo de inscribir al ${courseTitle} 100% GRATIS en el Evento Future Ready de Polyglot Map! Reserva tu cupo aquí: https://polyglotmap.com`);
  window.open(`https://wa.me/?text=${text}`, '_blank');
}

// Autenticación de Participantes Registrados (Usuario y Contraseña)
function handleLoginFormSubmit(e) {
  e.preventDefault();
  const uInput = document.getElementById('loginUsername');
  const pInput = document.getElementById('loginPassword');
  const errorMsg = document.getElementById('passcodeError');

  const usernameVal = uInput ? uInput.value.trim() : '';
  const passwordVal = pInput ? pInput.value.trim() : '';

  const auth = typeof authenticateParticipant === 'function'
    ? authenticateParticipant(usernameVal, passwordVal)
    : { success: false, message: 'El sistema de validación se está iniciando...' };

  if (!auth.success) {
    if (errorMsg) {
      errorMsg.innerText = '⚠️ ' + auth.message;
      errorMsg.classList.remove('hidden');
    }
    if (pInput) {
      pInput.classList.add('border-rose-500', 'bg-rose-950/20');
      pInput.focus();
    }
    return;
  }

  if (errorMsg) errorMsg.classList.add('hidden');

  const allowed = auth.student.allowedCourses || getEffectiveAllowedCourses(auth.student) || ['bootcamp-portugues-cero'];

  // Generar pases de abordar únicamente para los cursos permitidos del estudiante
  const defaultBooked = allowed.map(cid => {
    const c = COURSES_DATA.find(x => x.id === cid);
    if (!c) return null;
    return {
      courseId: c.id,
      title: c.title,
      flightCode: c.flightCode,
      gate: c.gate,
      seat: '07A',
      dateText: `${c.dateMain} (${c.scheduleDays})`,
      timeText: c.scheduleTime,
      bookedAt: new Date().toLocaleDateString('es-PE'),
      qrCodeData: `POLYGLOTMAP|${c.flightCode}|07A|${auth.student.passportNo || 'PM-2026'}`
    };
  }).filter(Boolean);

  saveUser({
    name: auth.student.name,
    email: auth.student.email,
    passportNo: auth.student.passportNo || 'PM-2026',
    role: auth.student.role || 'Estudiante Inscrito · Portugués Desde Cero',
    miles: 2500,
    avatar: '👨‍✈️',
    allowedCourses: allowed,
    bookedCourses: defaultBooked
  });

  closeModal('loginModal');
  triggerConfetti();
  alertNotification(`¡Bienvenido(a) ${auth.student.shortName || auth.student.name}! Acceso verificado.`);
  
  // Abrir inmediatamente el Panel correspondiente (docente.html para docente Patricia / aula.html para estudiantes)
  setTimeout(() => {
    if (typeof isDocentePatricia === 'function' && isDocentePatricia(auth.student)) {
      window.open('docente.html', '_blank');
      return;
    }
    let targetCourseId = currentBookingCourse ? currentBookingCourse.id : null;
    if (!targetCourseId || !allowed.includes(targetCourseId)) {
      targetCourseId = allowed[0] || 'bootcamp-portugues-cero';
    }
    window.open(`aula.html?course=${targetCourseId}`, '_blank');
  }, 600);
}

// Checkin Rápido
function handleQuickCheckin() {
  const uInput = document.getElementById('loginUsername');
  if (uInput) uInput.focus();
}

// Cerrar Sesión
function handleLogout() {
  if (window.location.pathname.includes('docente.html')) {
    localStorage.removeItem('polyglot_user');
    currentUser = null;
    window.location.href = 'index.html';
    return;
  }
  if (confirm('¿Deseas cerrar tu sesión de viajero? Tus pases guardados seguirán disponibles al reingresar.')) {
    localStorage.removeItem('polyglot_user');
    currentUser = null;
    if (window.location.pathname.includes('aula.html')) {
      window.location.href = 'index.html';
      return;
    }
    updateUIForUser();
    renderCourses();
  }
}

// Mostrar Pasaporte Digital del Viajero
function openPassportModal() {
  if (!currentUser) {
    openModal('loginModal');
    return;
  }

  const passportContainer = document.getElementById('passportContent');
  if (passportContainer) {
    const booked = currentUser.bookedCourses || [];
    passportContainer.innerHTML = `
      <div class="bg-gradient-to-br from-[#0c2364] via-[#081b4f] to-[#040e2b] text-white p-6 sm:p-8 rounded-3xl border-2 border-[#ffd200]/50 shadow-2xl relative overflow-hidden">
        
        <div class="absolute -right-12 -bottom-12 w-64 h-64 rounded-full border-8 border-yellow-400/10 flex items-center justify-center pointer-events-none text-9xl opacity-20">
          🌍
        </div>

        <div class="flex items-center justify-between pb-6 border-b border-white/20">
          <div class="flex items-center gap-3">
            <img src="assets/polyglot-logo.png" alt="Polyglot Map" class="w-12 h-12 object-contain drop-shadow">
            <div>
              <span class="text-xs font-mono tracking-widest text-[#ffd200] block font-bold">REPÚBLICA POLÍGLOTA • PASAPORTE DIGITAL</span>
              <h3 class="text-2xl font-black tracking-tight">PASAPORTE DE APRENDIZAJE</h3>
            </div>
          </div>
          <div class="text-right">
            <span class="text-xs font-mono text-sky-300 block">N° DOCUMENTO</span>
            <span class="text-lg font-mono font-black text-[#ffd200]">${currentUser.passportNo}</span>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 my-6 items-center">
          <div class="flex flex-col items-center p-4 bg-white/5 rounded-2xl border border-white/10">
            <div class="w-24 h-24 rounded-2xl bg-gradient-to-tr from-yellow-400 to-amber-200 flex items-center justify-center text-5xl shadow-lg border-2 border-white">
              ${currentUser.avatar || '✈️'}
            </div>
            <span class="text-xs font-bold uppercase tracking-wider text-yellow-300 mt-3">Viajero Frecuente</span>
            <span class="text-[11px] text-slate-300">Rango: Políglota Activo</span>
          </div>

          <div class="sm:col-span-2 space-y-3">
            <div>
              <span class="text-[11px] uppercase tracking-wider text-slate-400 font-bold block">Nombre Completo</span>
              <span class="text-xl font-black text-white">${currentUser.name}</span>
            </div>
            <div class="grid grid-cols-2 gap-3">
              <div>
                <span class="text-[11px] uppercase tracking-wider text-slate-400 font-bold block">Correo de Contacto</span>
                <span class="text-sm font-medium text-sky-200 truncate block">${currentUser.email}</span>
              </div>
              <div>
                <span class="text-[11px] uppercase tracking-wider text-slate-400 font-bold block">Millas Acumuladas</span>
                <span class="text-base font-black text-[#ffd200] flex items-center gap-1">🌟 ${currentUser.miles || 1200} pts</span>
              </div>
            </div>
            <div class="pt-2">
              <span class="text-[11px] uppercase tracking-wider text-slate-400 font-bold block">Nivel de Idiomas</span>
              <div class="w-full bg-white/10 h-2.5 rounded-full mt-1.5 overflow-hidden">
                <div class="bg-gradient-to-r from-yellow-400 to-emerald-400 h-full rounded-full" style="width: 65%"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="border-t border-white/20 pt-5">
          <h5 class="text-xs uppercase tracking-widest font-mono text-[#ffd200] mb-3 flex items-center gap-1.5">
            <span>✈️ Visas y Bootcamps Registrados (${booked.length})</span>
          </h5>

          ${booked.length === 0 ? `
            <div class="text-center py-6 bg-white/5 rounded-2xl border border-dashed border-white/20">
              <p class="text-sm text-slate-300">Aún no has sellado tu pasaporte con ningún bootcamp.</p>
              <p class="text-xs text-yellow-300 font-semibold mt-1">¡Elige un curso en el catálogo y reserva tu cupo gratis para obtener tu primer sello!</p>
            </div>
          ` : `
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              ${booked.map(b => `
                <div class="p-3 bg-white/10 rounded-xl border border-white/15 flex items-center justify-between">
                  <div>
                    <h6 class="font-bold text-white text-sm">${b.title}</h6>
                    <span class="text-xs font-mono text-sky-200">Vuelo: ${b.flightCode} • Asiento: ${b.seat}</span>
                  </div>
                  <button onclick="viewBoardingPass('${b.courseId}')" class="px-2.5 py-1 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-bold text-xs rounded-lg transition">
                    Pase »
                  </button>
                </div>
              `).join('')}
            </div>
          `}
        </div>

      </div>
    `;
    openModal('passportModal');
  }
}

// Abrir Mis Pases de Abordar
function openMyBookingsModal() {
  if (!currentUser || !currentUser.bookedCourses || currentUser.bookedCourses.length === 0) {
    alertNotification('Aún no tienes pases de abordar. ¡Reserva un bootcamp gratis para emitir tu boleto!');
    return;
  }
  openPassportModal();
}

// =========================================================================
// MÓDULO: GENERADOR DE CREDENCIAL CON SUBIR FOTO & COPY LINKEDIN FUTURE READY
// =========================================================================

function setupCredentialGenerator() {
  const nameInput = document.getElementById('credNameInput');
  const courseSelect = document.getElementById('credCourseSelect');
  const roleSelect = document.getElementById('credRoleSelect');
  const photoInput = document.getElementById('credPhotoInput');

  if (nameInput) {
    nameInput.addEventListener('input', updateCredentialPreview);
  }
  if (courseSelect) {
    courseSelect.addEventListener('change', updateCredentialPreview);
  }
  if (roleSelect) {
    roleSelect.addEventListener('change', updateCredentialPreview);
  }
  if (photoInput) {
    photoInput.addEventListener('change', handleCredentialPhotoUpload);
  }

  updateCredentialFromUser();
  updateCredentialPreview();
}

function updateCredentialFromUser() {
  const nameInput = document.getElementById('credNameInput');
  const courseSelect = document.getElementById('credCourseSelect');

  if (nameInput && currentUser && !nameInput.value) {
    nameInput.value = currentUser.name;
  }

  if (courseSelect && currentUser) {
    const allowed = getEffectiveAllowedCourses(currentUser);
    if (allowed && allowed.length > 0) {
      if (!isSpecialAdminUser(currentUser)) {
        Array.from(courseSelect.options).forEach(opt => {
          if (!allowed.includes(opt.value)) {
            opt.disabled = true;
            if (!opt.textContent.includes('🔒')) {
              opt.textContent = '🔒 ' + opt.textContent + ' (No asignado)';
            }
          } else {
            opt.disabled = false;
            opt.textContent = opt.textContent.replace('🔒 ', '').replace(' (No asignado)', '');
          }
        });
        if (!allowed.includes(courseSelect.value)) {
          courseSelect.value = allowed[0];
        }
      }
    }
  }

  updateCredentialPreview();
}

function handleCredentialPhotoUpload(e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(evt) {
      credentialCustomPhoto = evt.target.result;
      updateCredentialPreview();
      const statusElem = document.getElementById('uploadPhotoStatus');
      if (statusElem) {
        statusElem.innerHTML = `
          <span class="text-emerald-400 font-bold flex items-center gap-1">
            ✅ Foto cargada correctamente.
            <button type="button" onclick="removeUploadedPhoto()" class="text-red-300 hover:text-red-200 underline text-[11px] ml-1">Quitar foto</button>
          </span>
        `;
      }
      alertNotification('¡Foto cargada exitosamente en tu credencial!');
    };
    reader.readAsDataURL(file);
  }
}

function removeUploadedPhoto() {
  credentialCustomPhoto = null;
  const photoInput = document.getElementById('credPhotoInput');
  if (photoInput) photoInput.value = '';
  const statusElem = document.getElementById('uploadPhotoStatus');
  if (statusElem) statusElem.innerHTML = '';
  setCredentialAvatar('👩‍🚀');
  updateCredentialPreview();
  alertNotification('Foto removida. Se restableció el avatar.');
}

function setCredentialAvatar(emoji) {
  credentialCustomPhoto = null;
  const avatarElem = document.getElementById('credBadgeAvatar');
  if (avatarElem) {
    avatarElem.innerHTML = `<span class="text-4xl select-none">${emoji}</span>`;
  }
  const statusElem = document.getElementById('uploadPhotoStatus');
  if (statusElem) statusElem.innerHTML = '';
}

function updateCredentialPreview() {
  const nameInput = document.getElementById('credNameInput');
  const courseSelect = document.getElementById('credCourseSelect');
  const roleSelect = document.getElementById('credRoleSelect');

  const attendeeName = (nameInput && nameInput.value.trim()) ? nameInput.value.trim() : (currentUser ? currentUser.name : 'Camila Morales');
  const selectedCourseId = courseSelect ? courseSelect.value : 'bootcamp-ingles-cero';
  const attendeeRole = roleSelect ? roleSelect.value : 'PARTICIPANTE OFICIAL';

  const course = COURSES_DATA.find(c => c.id === selectedCourseId) || COURSES_DATA[0];

  const nameDisplay = document.getElementById('credBadgeName');
  const roleDisplay = document.getElementById('credBadgeRole');
  const courseDisplay = document.getElementById('credBadgeCourse');
  const scheduleDisplay = document.getElementById('credBadgeSchedule');
  const flagDisplay = document.getElementById('credBadgeFlag');
  const idDisplay = document.getElementById('credBadgeId');
  const avatarElem = document.getElementById('credBadgeAvatar');

  if (nameDisplay) nameDisplay.innerText = attendeeName;
  if (roleDisplay) roleDisplay.innerText = attendeeRole.toUpperCase();
  if (courseDisplay) courseDisplay.innerText = course.title;
  if (scheduleDisplay) scheduleDisplay.innerText = `📅 ${course.scheduleDays} | 🕒 ${course.scheduleTime}`;
  if (flagDisplay) {
    flagDisplay.innerText = course.language === 'Inglés' ? '🇺🇸' : '🇧🇷';
  }
  if (idDisplay) {
    const passNum = currentUser ? currentUser.passportNo : 'PM-2026';
    idDisplay.innerText = `#PM-FUTURE-READY-${course.flightCode}-${passNum.replace('PM-', '')}`;
  }

  if (avatarElem) {
    if (credentialCustomPhoto) {
      avatarElem.innerHTML = `<img src="${credentialCustomPhoto}" class="w-full h-full object-cover rounded-2xl" alt="Foto del Participante" />`;
    }
  }

  // Actualizar también la caja con el copy de LinkedIn en vivo
  updateLinkedInCopyBox(attendeeName, course);
}

// Generar Copy específico para LinkedIn: Evento Future Ready - Bootcamp de Idiomas
function generateLinkedInCopy(attendeeName, course) {
  return `¡Emocionado/a de despegar en un nuevo viaje lingüístico! 🌍✈️

Me acabo de inscribir oficialmente al Evento Future Ready - Bootcamp de Idiomas con Polyglot Map.

📚 Programa: ${course.badgeText} — "${course.title}" (100% Gratuito)
📅 Horario: ${course.scheduleDays} (${course.scheduleTime}) · Hora Peruana (UTC-5)
🚀 Inicio: ${course.dateMain} ${course.dateTo}
📍 Modalidad: Clases en vivo e inmersivas con enfoque de viaje y futuro laboral.

¡Nos vemos en clase! 🎓✨

👉 Reserva tu cupo sin costo y emite tu credencial aquí: https://polyglotmap.com

#PolyglotMap #FutureReady #BootcampIdiomas #Inglés #Portugués #EdTech #AprenderIdiomas #EducaciónGlobal`;
}

function updateLinkedInCopyBox(attendeeName, course) {
  const copyBox = document.getElementById('linkedinCopyText');
  if (copyBox) {
    copyBox.value = generateLinkedInCopy(attendeeName, course);
  }
}

// Copiar Copy de LinkedIn
function copyLinkedInText() {
  const copyBox = document.getElementById('linkedinCopyText');
  if (copyBox) {
    navigator.clipboard.writeText(copyBox.value).then(() => {
      triggerConfetti();
      alertNotification('¡Copy de LinkedIn copiado al portapapeles!');
    }).catch(() => {
      copyBox.select();
      document.execCommand('copy');
      alertNotification('¡Copy copiado al portapapeles!');
    });
  }
}

// Descargar Credencial como Imagen PNG
function downloadCredentialImage() {
  const card = document.getElementById('credentialBadgeCard');
  if (!card) return;

  alertNotification('Generando tu credencial oficial...');

  if (typeof html2canvas === 'function') {
    html2canvas(card, {
      scale: 2.5,
      backgroundColor: null,
      useCORS: true,
      logging: false
    }).then(canvas => {
      const link = document.createElement('a');
      link.download = `Credencial_FutureReady_PolyglotMap_${Date.now()}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
      triggerConfetti();
      alertNotification('¡Credencial descargada con éxito! Compártela en LinkedIn.');
    }).catch(err => {
      console.error(err);
      window.print();
    });
  } else {
    window.print();
  }
}

// Compartir Credencial en LinkedIn
function shareCredentialLinkedIn() {
  const nameInput = document.getElementById('credNameInput');
  const courseSelect = document.getElementById('credCourseSelect');

  const attendeeName = (nameInput && nameInput.value.trim()) ? nameInput.value.trim() : (currentUser ? currentUser.name : 'un Viajero');
  const selectedCourseId = courseSelect ? courseSelect.value : 'bootcamp-ingles-cero';
  const course = COURSES_DATA.find(c => c.id === selectedCourseId) || COURSES_DATA[0];

  const shareText = generateLinkedInCopy(attendeeName, course);

  navigator.clipboard.writeText(shareText).then(() => {
    alertNotification('¡Copy copiado al portapapeles! Abriendo LinkedIn...');
  }).catch(() => {});

  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://polyglotmap.com')}`;
  window.open(linkedinUrl, '_blank', 'width=650,height=600');
}

// Compartir Credencial en WhatsApp
function shareCredentialWhatsApp() {
  const nameInput = document.getElementById('credNameInput');
  const courseSelect = document.getElementById('credCourseSelect');

  const attendeeName = (nameInput && nameInput.value.trim()) ? nameInput.value.trim() : (currentUser ? currentUser.name : 'Viajero');
  const selectedCourseId = courseSelect ? courseSelect.value : 'bootcamp-ingles-cero';
  const course = COURSES_DATA.find(c => c.id === selectedCourseId) || COURSES_DATA[0];

  const text = encodeURIComponent(`¡Hola! 👋 Me acabo de inscribir al "${course.title}" 100% GRATIS en el Evento Future Ready - Bootcamp de Idiomas de Polyglot Map ✈️. ¡Crea tu credencial de participante y reserva tu cupo aquí: https://polyglotmap.com !`);
  window.open(`https://wa.me/?text=${text}`, '_blank');
}

// Animación de Confetti
function triggerConfetti() {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ffd200', '#1447e6', '#38bdf8', '#ffffff']
    });
  }
}

// Alertas Flotantes
function alertNotification(msg) {
  const toast = document.createElement('div');
  toast.className = 'fixed bottom-5 right-5 z-50 bg-slate-900 border-2 border-[#ffd200] text-white px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 animate-bounce';
  toast.innerHTML = `
    <span class="text-2xl">✈️</span>
    <span class="text-sm font-bold">${msg}</span>
  `;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 4000);
}

// Controladores Genéricos de Modal
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(id) {
  if (id === 'materialDetailModal' && typeof isMaterialModalMaximized !== 'undefined' && isMaterialModalMaximized) {
    if (typeof toggleMaximizeMaterialModal === 'function') {
      toggleMaximizeMaterialModal();
    }
  }
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
  }
}


// Función utilitaria para alternar la visibilidad de la contraseña en los formularios
function togglePasswordVisibility(inputId, btn) {
  const input = document.getElementById(inputId);
  if (!input) return;
  if (input.type === 'password') {
    input.type = 'text';
    if (btn) btn.innerHTML = '🙈';
  } else {
    input.type = 'password';
    if (btn) btn.innerHTML = '👁️';
  }
}
