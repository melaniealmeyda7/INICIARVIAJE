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
    statusBadge: '✨ NUEVO',
    statusBadgeColor: 'bg-purple-100 text-purple-700 border-purple-200',
    title: 'Inglés desde cero',
    country: 'Estados Unidos / Global',
    flag: 'usa',
    language: 'Inglés',
    scheduleDays: 'Miércoles y viernes',
    scheduleTime: '7:00 a 8:00 p. m.',
    dateFrom: 'DEL',
    dateMain: '18 NOV',
    dateTo: 'AL 18 DIC',
    flightCode: 'PM-ENG01',
    gate: 'Puerta V-01 (Auditorio Virtual)',
    classLink: 'https://zoom.us/join?pwd=polyglotmap-future-ready',
    streamLink: 'https://youtube.com/live',
    registrationLink: 'https://forms.gle/8ANqwWUxt8tfi6RC6?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAcGRvZgJzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAafE60rN24MB4wGMEHubz6r5r_UrKPuaQhTrbIlcMs1hSweeR208EGV_SzzOsQ_aem_-2YkylOyhS6WLHyH8GU31w',
    seatClass: 'Clase Ejecutiva Lingüística',
    freeBadge: '100% GRATUITO',
    spotsTotal: 50,
    spotsLeft: 7,
    description: 'Aprende los fundamentos del idioma inglés con metodología inmersiva natural de viaje: presentaciones, aeropuerto, hospedaje y conversaciones cotidianas.',
    instructor: 'Coach Bilingüe Polyglot Map',
    perks: ['Clases en vivo', 'Material descargable PDF', 'Acceso a comunidad viajera', 'Certificado de asistencia'],
    syllabus: [
      {
        session: 'Sesión 1',
        unit: 'Class 1 of 10 · Greetings & Introductions',
        date: 'Miércoles 18 Nov',
        time: '7:00 - 8:00 p. m.',
        title: 'Hello! (Greetings & Introductions)',
        desc: 'Today you say hello, say your name and ask how people are. The H sound phonetics and greetings.',
        materials: {
          tag: "ENGLISH FROM SCRATCH · CLASS 1 OF 10",
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
        unit: 'Class 2 of 10 · The Alphabet & Numbers 0–20',
        date: 'Viernes 20 Nov',
        time: '7:00 - 8:00 p. m.',
        title: 'ABC and Numbers (Alphabet & 0–20)',
        desc: 'Today you spell your name and say phone numbers. Vowel names and TH pronunciation.',
        materials: {
          tag: "ENGLISH FROM SCRATCH · CLASS 2 OF 10",
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
        unit: 'Class 3 of 10 · Countries & Nationalities',
        date: 'Miércoles 25 Nov',
        time: '7:00 - 8:00 p. m.',
        title: 'Where are you from? (Countries & Nationalities)',
        desc: 'Today you say where you are from and your nationality. B and V sounds distinction.',
        materials: {
          tag: "ENGLISH FROM SCRATCH · CLASS 3 OF 10",
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
        unit: 'Class 4 of 10 · Family Members',
        date: 'Viernes 27 Nov',
        time: '7:00 - 8:00 p. m.',
        title: 'My Family (Close & Extended Family)',
        desc: 'Today you talk about your family: who they are and how many. The voiced TH sound.',
        materials: {
          tag: "ENGLISH FROM SCRATCH · CLASS 4 OF 10",
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
        unit: 'Class 5 of 10 · Colors & Everyday Things',
        date: 'Miércoles 02 Dic',
        time: '7:00 - 8:00 p. m.',
        title: 'Colors and Things (Objects & Colors)',
        desc: 'Today you name colors and objects around you. Articles a/an and S + consonant phonetics.',
        materials: {
          tag: "ENGLISH FROM SCRATCH · CLASS 5 OF 10",
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
        unit: 'Class 6 of 10 · Days, Months & Time',
        date: 'Viernes 04 Dic',
        time: '7:00 - 8:00 p. m.',
        title: 'Days, Months and Time (Calendar & Clocks)',
        desc: 'Today you say the day, the month and the time. Prepositions on/in/at and silent letters.',
        materials: {
          tag: "ENGLISH FROM SCRATCH · CLASS 6 OF 10",
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
        unit: 'Class 7 of 10 · Daily Routine',
        date: 'Miércoles 09 Dic',
        time: '7:00 - 8:00 p. m.',
        title: 'My Day (Daily Actions & Times)',
        desc: 'Today you talk about what you do every day. Third person -S rule and daily verbs.',
        materials: {
          tag: "ENGLISH FROM SCRATCH · CLASS 7 OF 10",
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
        unit: 'Class 8 of 10 · Food & Drinks',
        date: 'Viernes 11 Dic',
        time: '7:00 - 8:00 p. m.',
        title: 'Food and Drinks (Likes & Ordering Polite)',
        desc: 'Today you say what you like and order food. EE vs I phonetics and café dialogues.',
        materials: {
          tag: "ENGLISH FROM SCRATCH · CLASS 8 OF 10",
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
        unit: 'Class 9 of 10 · Places in Town & Directions',
        date: 'Miércoles 16 Dic',
        time: '7:00 - 8:00 p. m.',
        title: 'Places in Town (Locations & Directions)',
        desc: 'Today you name places and give simple directions. The English R sound and city prepositions.',
        materials: {
          tag: "ENGLISH FROM SCRATCH · CLASS 9 OF 10",
          title: "Places in Town & Directions",
          subtitle: "Today you name places and give simple directions.",
          goals: [
            "Name places in town: bank, hospital, school, supermarket, library…",
            "Ask where things are: Where is the bank?",
            "Give directions: Turn left. Turn right. Go straight."
          ],
          goldenRule: "Golden rule: use your hands to show left and right!",
          vocabulary: [
            "Bank (bank)", "Hospital (JOS-pi-tal)", "School (s-KUL)", "Supermarket (SU-per-mar-ket)", "Pharmacy (FAR-ma-si)", "Park (park)",
            "Restaurant (RES-te-rant)", "Bus stop (bas stop)", "Library (LAI-bre-ri)", "Post office (poust O-fis)", "Station (STEI-shon)", "Town (taun)"
          ],
          keyLanguage: [
            "Where is the bank? — It's next to the park.",
            "Turn left. / Turn right.",
            "Go straight. / Stop!",
            "It's in front of the school.",
            "Remember: next to = beside · in front of = facing · behind = at the back · between = in the middle"
          ],
          pronunciation: "The English R: right, red, restaurant. Tongue curls back, do not roll it! English R is quiet and soft (not Spanish rolled perro). Stress: RES-te-rant, LAI-bre-ri, JOS-pi-tal.",
          tongueTwisters: [
            "Twister (the R): Right, right, the red restaurant. Turn right at the library!"
          ],
          dialogue: {
            title: "Asking for directions (Read in turns, then swap roles!)",
            lines: [
              { speaker: "Tom", text: "Excuse me! Where is the bank?" },
              { speaker: "Ana", text: "Go straight." },
              { speaker: "Tom", text: "OK. Then?" },
              { speaker: "Ana", text: "Turn right. It's next to the park." },
              { speaker: "Tom", text: "Is it near?" },
              { speaker: "Ana", text: "Yes, it's near. Two minutes." },
              { speaker: "Tom", text: "Thank you very much!" }
            ]
          },
          readingPassage: {
            title: "Around my town (Read aloud)",
            content: "My town is small. / There is a park near my house. / The restaurant is next to the library. / The bank is on the right. / To go to the hospital, / go straight and turn left. / I love my town!"
          },
          breakoutActivity: {
            title: "Live Speaking: Mic Round & Town Navigator",
            tasks: [
              "1. Ask a classmate: Where is the bank / park?",
              "2. Give directions: 'Go straight / Turn left.'",
              "3. Tell us a place near your house: 'Near my house there is a…'",
              "4. Say: 'It's next to the ___.'"
            ]
          },
          homework: "Exit ticket: Send a voice note: 'Near my house there is a ___.'"
        }
      },
      {
        session: 'Sesión 10',
        unit: 'Class 10 of 10 · Graduation & Final Speech',
        date: 'Viernes 18 Dic',
        time: '7:00 - 8:00 p. m.',
        title: 'My English Passport (Final Review & Graduation)',
        desc: 'Today you present yourself in English: your name, family, country, routine, favorites and directions. Future Ready Certificate!',
        materials: {
          tag: "ENGLISH FROM SCRATCH · CLASS 10 OF 10",
          title: "My English Passport (Review & Graduation)",
          subtitle: "Today you present yourself in English: your name, family, country, routine, favorites and directions.",
          goals: [
            "Integrate everything learned from Class 1 to 9.",
            "Give your 2-minute personal speech in English with confidence.",
            "Receive your official Future Ready certificate and digital badges."
          ],
          goldenRule: "Golden rule: you started from scratch, now you speak English!",
          vocabulary: [
            "Passport", "Traveler", "Fluency", "Future Ready", "Certificate", "Badge",
            "Success", "Graduate", "Global", "Dream", "Journey", "Celebrate"
          ],
          keyLanguage: [
            "Hello! My name is ___. I'm from ___. I'm ___.",
            "This is my family: my mother is ___, my father is ___.",
            "Every day, I wake up at ___ and I study English.",
            "I like ___ and my favorite place in town is ___.",
            "Thank you teacher and classmates, see you on the next flight!"
          ],
          pronunciation: "Master review: The H sound, voiced/unvoiced TH, third-person -S, vowel names and the soft English R.",
          tongueTwisters: [
            "Grand Finale: Hello, happy travelers! We speak English, we fly high!"
          ],
          dialogue: {
            title: "Graduation speech (Roleplay)",
            lines: [
              { speaker: "Student", text: "Hello everyone! My name is Carlos. I'm from Peru. I'm 25." },
              { speaker: "Teacher", text: "Wonderful Carlos! Tell us about your routine and favorites." },
              { speaker: "Student", text: "I wake up at seven and study English. I like pizza and coffee. Thank you Polyglot Map!" },
              { speaker: "Class", text: "Congratulations Carlos! Hooray!" }
            ]
          },
          readingPassage: {
            title: "The Polyglot Journey (Read aloud)",
            content: "Ten classes ago, we said hello for the first time. / Today we can introduce ourselves, / talk about our families, / share our daily routines / and order food in English! / This is just the beginning of our journey. / Fly high, future polyglots!"
          },
          breakoutActivity: {
            title: "Graduation Summit: 1-Minute Speech",
            tasks: [
              "1. Introduce yourself: Name, country, nationality.",
              "2. Describe your family and your daily routine.",
              "3. Share your favorite food and places in town.",
              "4. Celebrate with your classmates and receive feedback!"
            ]
          },
          homework: "Exit ticket: Digital graduation selfie & final voice note: 'I speak English with Polyglot Map!'"
        }
      }
    ]
  },
  {
    id: 'club-ingles-a2',
    type: 'CLUB',
    badgeText: 'CLUB DE INGLÉS CONVERSACIONAL',
    badgeColor: 'bg-sky-100 text-sky-800 border-sky-200',
    statusBadge: '✨ NUEVO',
    statusBadgeColor: 'bg-purple-100 text-purple-700 border-purple-200',
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
    classLink: 'https://meet.google.com/new?polyglotmap-club-a2',
    streamLink: 'https://youtube.com/live',
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
    statusBadge: '🔥 Más de 1800 inscritos',
    statusBadgeColor: 'bg-amber-100 text-amber-800 border-amber-300 font-extrabold',
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
    classLink: 'https://zoom.us/join?pwd=polyglotmap-portugues-zero',
    streamLink: 'https://youtube.com/live',
    registrationLink: 'https://forms.gle/wsipVZ9EkpzA9uXu6',
    seatClass: 'Inmersión Samba Principiante',
    freeBadge: '100% GRATUITO',
    spotsTotal: 40,
    spotsLeft: 6,
    description: 'Fonética, pronunciación carioca y paulista, vocabulario elemental y supervivencia en Brasil para principiantes sin conocimientos previos.',
    instructor: 'Profesor Nativo de São Paulo',
    perks: ['Fonética brasileña guiada', 'Guía de expresiones cotidianas', 'Canciones y cultura carioca', 'Pasaporte con sello de Brasil'],
    syllabus: [
      { session: 'Sesión 1', date: 'Martes 17 Nov', time: '7:00 - 8:00 p. m.', title: 'Fonética Brasileira: Sons Nasais e Alfabeto', desc: 'Diferencias fonéticas con el español, la tilde en ÃO, sonidos de la Ç, X y LH sin trabarse.' },
      { session: 'Sesión 2', date: 'Jueves 19 Nov', time: '7:00 - 8:00 p. m.', title: 'Saudações, Apresentações e Nacionalidades', desc: 'Tudo bem? Tudo bom! Cumplidos brasileños, presentaciones y conjugación básica de verbos SER y ESTAR.' },
      { session: 'Sesión 3', date: 'Martes 24 Nov', time: '7:00 - 8:00 p. m.', title: 'No Aeroporto de Guarulhos e Trânsito', desc: 'Vocabulario de aduana, pedir información, tomar Ubers y moverse por las grandes metrópolis de Brasil.' },
      { session: 'Sesión 4', date: 'Jueves 26 Nov', time: '7:00 - 8:00 p. m.', title: 'Pousada, Hotel e Frases de Sobrevivência', desc: 'Hacer check-in en hoteles y posadas de playa, pedir cosas prestadas y cortesía brasileña.' },
      { session: 'Sesión 5', date: 'Martes 01 Dic', time: '7:00 - 8:00 p. m.', title: 'Na Praia e no Restaurante Típico', desc: 'Pedir picanha, açaí, sucos naturais e pratos típicos. Diálogos reales en botecos y restaurantes.' },
      { session: 'Sesión 6', date: 'Jueves 03 Dic', time: '7:00 - 8:00 p. m.', title: 'Compras, Dinheiro, Pagamentos e Números', desc: 'Cuánto cuesta (quanto custa?), cómo funciona el sistema PIX y comprar en ferias y shoppings.' },
      { session: 'Sesión 7', date: 'Martes 08 Dic', time: '7:00 - 8:00 p. m.', title: 'Expressões Cotidianas e Gírias do Brasil', desc: 'Gírias populares: Legal, Beleza, Massa, Show de bola, Cara, Valeu y modismos regionales.' },
      { session: 'Sesión 8', date: 'Jueves 10 Dic', time: '7:00 - 8:00 p. m.', title: 'Música, Cultura Carioca e Paulista', desc: 'Aprender vocabulario a través de la MPB, Bossa Nova y ritmos actuales para soltar el habla.' },
      { session: 'Sesión 9', date: 'Martes 15 Dic', time: '7:00 - 8:00 p. m.', title: 'Simulação Real de Conversação e Viagem', desc: 'Práctica interactiva en vivo por parejas recreando situaciones reales de viaje en Brasil.' },
      { session: 'Sesión 10', date: 'Jueves 17 Dic', time: '7:00 - 8:00 p. m.', title: 'Encerramento Future Ready & Conclusão', desc: 'Evaluación formativa, despedida con sellos para el pasaporte y consejos de continuidad.' }
    ]
  },
  {
    id: 'bootcamp-portugues-basico2',
    type: 'BOOTCAMP',
    badgeText: 'BOOTCAMP · PORTUGUÉS',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    statusBadge: '🔥 Más de 1800 inscritos',
    statusBadgeColor: 'bg-amber-100 text-amber-800 border-amber-300 font-extrabold',
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
    classLink: 'https://zoom.us/join?pwd=polyglotmap-portugues-b2',
    streamLink: 'https://youtube.com/live',
    registrationLink: 'https://forms.gle/wsipVZ9EkpzA9uXu6',
    seatClass: 'Fluidez y Estructura Básico 2',
    freeBadge: '100% GRATUITO',
    spotsTotal: 35,
    spotsLeft: 5,
    description: 'Para estudiantes con nociones previas. Construcción de oraciones compuestas, tiempos verbales del pasado, interacción fluida y cultura brasileña profunda.',
    instructor: 'Especialista en Lingüística Portuguesa',
    perks: ['Conversación y gramática aplicada', 'Casos prácticos de viaje y negocios', 'Módulo de 1.5 hrs intensivas', 'Sello Oficial de Inmigración Básico 2'],
    syllabus: [
      { session: 'Sesión 1', date: 'Martes 17 Nov', time: '7:00 - 8:30 p. m.', title: 'Revisão e Diagnóstico: Pretérito Perfeito vs Imperfeito', desc: 'Dominio de los tiempos pasados en portugués, contraste con el portuñol y narración fluida.' },
      { session: 'Sesión 2', date: 'Jueves 19 Nov', time: '7:00 - 8:30 p. m.', title: 'Storytelling: Vivências e Trajetórias', desc: 'Cómo contar tu historia personal y profesional en portugués con naturalidad y corrección gramatical.' },
      { session: 'Sesión 3', date: 'Martes 24 Nov', time: '7:00 - 8:30 p. m.', title: 'Futuro do Presente e Planos de Carreira', desc: 'Proyecciones a futuro, vocabulario corporativo y metas personales en el mercado de Brasil.' },
      { session: 'Sesión 4', date: 'Jueves 26 Nov', time: '7:00 - 8:30 p. m.', title: 'Comunicação Profissional e E-mails Corporativos', desc: 'Redacción de correos formales, vocabulario de LinkedIn en portugués y entrevistas laborales.' },
      { session: 'Sesión 5', date: 'Martes 01 Dic', time: '7:00 - 8:30 p. m.', title: 'Expressando Opiniões e Debates Temáticos', desc: 'Conectores lógicos: porém, contudo, todavia, além disso. Debates sobre sociedad y cultura.' },
      { session: 'Sesión 6', date: 'Jueves 03 Dic', time: '7:00 - 8:30 p. m.', title: 'Diversidade Linguística: Sotaques e Regionalismos', desc: 'Comprensión auditiva de sotaques del Nordeste, Minas Gerais, Rio y São Paulo.' },
      { session: 'Sesión 7', date: 'Martes 08 Dic', time: '7:00 - 8:30 p. m.', title: 'Casos de Negócios e Networking Internacional', desc: 'Cultura empresarial brasileña, cómo cerrar tratos, reuniones virtuales y etiqueta comercial.' },
      { session: 'Sesión 8', date: 'Jueves 10 Dic', time: '7:00 - 8:30 p. m.', title: 'Articulação Oral Rápida e Redução de Sotaque', desc: 'Ejercicios de articulación veloz, fluidez bajo presión y entonación nativa brasileña.' },
      { session: 'Sesión 9', date: 'Martes 15 Dic', time: '7:00 - 8:30 p. m.', title: 'Apresentação de Projetos de Impacto', desc: 'Exposiciones orales de los estudiantes sobre proyectos o destinos de viaje con feedback docente.' },
      { session: 'Sesión 10', date: 'Jueves 17 Dic', time: '7:00 - 8:30 p. m.', title: 'Avaliação Final de Fluência & Certificação Future Ready', desc: 'Feedback individual de avance, desbloqueo de sellos de dominio y clausura del programa.' }
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

  if (currentUser) {
    userGreeting.innerHTML = `
      <span class="text-xs text-sky-200">¡Bienvenido a bordo!</span>
      <span class="font-bold text-white flex items-center gap-1.5">${currentUser.name} ✈️</span>
    `;
    userGreeting.classList.remove('hidden');

    userPassportBadge.classList.remove('hidden');
    userMilesBadge.classList.remove('hidden');
    userMilesBadge.innerHTML = `🌟 ${currentUser.miles || 1200} Millas`;

    // boardingPassesNavBtn permanece oculto por diseño
    if (boardingPassesNavBtn) {
      boardingPassesNavBtn.classList.add('hidden');
    }

    if (aulaNavBtn) {
      aulaNavBtn.classList.remove('hidden');
      aulaNavBtn.classList.add('inline-flex');
    }

    authBtn.innerHTML = `
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
      Cerrar Sesión
    `;
    authBtn.className = "px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/20 hover:bg-white/30 text-white border border-white/25 transition-all flex items-center gap-1.5";
    authBtn.onclick = handleLogout;
  } else {
    userGreeting.classList.add('hidden');
    userPassportBadge.classList.add('hidden');
    userMilesBadge.classList.add('hidden');
    boardingPassesNavBtn.classList.add('hidden');

    if (aulaNavBtn) {
      aulaNavBtn.classList.add('hidden');
      aulaNavBtn.classList.remove('inline-flex');
    }

    authBtn.innerHTML = `
      <span class="w-2.5 h-2.5 rounded-full bg-slate-950 animate-ping"></span>
      <span class="tracking-wide">✈️ INICIAR MI VIAJE / USUARIO</span>
    `;
    authBtn.className = "px-6 py-3 rounded-full text-xs sm:text-sm font-black bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 hover:from-yellow-300 hover:via-amber-400 hover:to-yellow-500 text-slate-950 shadow-[0_0_25px_rgba(250,204,21,0.65)] hover:shadow-[0_0_35px_rgba(250,204,21,0.9)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2 border-2 border-yellow-200 cursor-pointer select-none";
    authBtn.onclick = () => openModal('loginModal');
  }
}

// Renderizar Cursos con fidelidad al Flyer
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
  });

  container.innerHTML = filtered.map(course => {
    const isBooked = currentUser && currentUser.bookedCourses && currentUser.bookedCourses.some(b => b.courseId === course.id);
    const flagSvg = getFlagSvg(course.flag);

    return `
      <div onclick="handleCardClick('${course.id}')" class="ticket-card bg-white text-slate-900 rounded-3xl p-5 sm:p-7 shadow-xl border border-white/20 flex flex-col md:flex-row items-stretch justify-between gap-6 transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] cursor-pointer group">
        
        <!-- Lado Izquierdo: Bandera e Información del Curso -->
        <div class="flex items-start sm:items-center gap-5 flex-1">
          <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex-shrink-0 flex items-center justify-center shadow-md border-2 border-slate-100 overflow-hidden bg-slate-50">
            ${flagSvg}
          </div>

          <div class="space-y-1.5 flex-1">
            <div class="flex items-center gap-2 flex-wrap">
              <span class="inline-block px-3 py-1 rounded-full text-xs font-black tracking-wide ${course.badgeColor}">
                ${course.badgeText}
              </span>
              ${course.statusBadge ? `
                <span class="inline-flex items-center gap-1 text-[11px] font-black px-2.5 py-0.5 rounded-full border shadow-sm ${course.statusBadgeColor}">
                  ${course.statusBadge}
                </span>
              ` : ''}
            </div>

            <h3 class="text-2xl sm:text-3xl font-black text-[#0f2d8a] tracking-tight">
              ${course.title}
            </h3>

            <div class="text-slate-600 text-sm sm:text-base space-y-0.5 pt-0.5">
              <div class="flex items-center gap-2 font-medium">
                <span class="text-blue-600">📅</span>
                <span>${course.scheduleDays}</span>
              </div>
              <div class="flex items-center gap-2 font-medium">
                <span class="text-blue-600">🕒</span>
                <span>${course.scheduleTime}</span>
              </div>
            </div>

            <div class="flex items-center gap-3 pt-2 text-xs font-mono text-slate-500">
              <span class="bg-slate-100 px-2 py-0.5 rounded font-semibold text-slate-700">✈️ ${course.flightCode}</span>
              <span>📍 ${course.gate}</span>
            </div>

            <!-- AVISO DE INSCRIPCIÓN Y CERTIFICACIÓN OFICIAL -->
            <div class="mt-3.5 p-3 rounded-2xl bg-amber-50 border border-amber-200/80 text-left text-xs space-y-1.5" onclick="event.stopPropagation()">
              <p class="text-amber-950 font-bold leading-snug">
                ⚠️ <strong class="text-amber-900">¿Aún no estás inscrito?</strong> Solamente se dará constancia de participación / certificación a los que estén inscritos y cumplan con los requisitos del programa.
              </p>
              <div class="pt-0.5">
                <a href="${course.registrationLink}" target="_blank" class="inline-flex items-center gap-1.5 text-xs font-black text-[#0f2d8a] hover:text-blue-700 hover:underline bg-white px-3 py-1.5 rounded-xl border border-amber-300 shadow-sm transition">
                  <span>📝 Formulario de Inscripción Oficial aquí »</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        <!-- Lado Derecho: Bloque Amarillo de Fecha del Flyer (Limpio, idéntico al flyer, sin botones) -->
        <div class="flex items-center justify-center border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-8">
          <div class="bg-[#ffd200] text-slate-950 font-black rounded-2xl w-36 sm:w-44 py-4 px-3 text-center shadow-md flex flex-col justify-center select-none transform hover:scale-105 transition-transform">
            <span class="text-xs uppercase tracking-wider font-black text-slate-900/90">${course.dateFrom}</span>
            <span class="text-2xl sm:text-3xl font-black tracking-tight leading-none my-1">${course.dateMain}</span>
            <span class="text-xs uppercase tracking-wider font-black text-slate-900/90">${course.dateTo}</span>
          </div>
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
              <span class="text-[10px] block leading-tight">PERÍODO OFICIAL</span>
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
                Abre la pantalla completa con reproductor de grabaciones, links de reunión, asistencia en Google Forms y temario detallado.
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
              <span class="text-xs font-mono text-slate-300">
                Asistencia: <strong class="text-yellow-300">${attendanceCount}/${totalSessions}</strong> sesiones
              </span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              
              <!-- 1. Botón ENTRAR A LA CLASE -->
              <a href="${course.classLink || 'https://zoom.us'}" target="_blank" class="bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white font-black py-3 px-4 rounded-xl text-sm shadow-md transition-all flex items-center justify-center gap-2 text-center group">
                <span class="text-lg group-hover:scale-125 transition-transform">🚀</span>
                <span>Entrar a la Clase</span>
              </a>

              <!-- 2. Botón REGISTRAR ASISTENCIA -->
              <button onclick="recordAttendance('${course.id}')" class="bg-[#ffd200] hover:bg-yellow-400 active:scale-95 text-slate-950 font-black py-3 px-4 rounded-xl text-sm shadow-md transition-all flex items-center justify-center gap-2 text-center">
                <span>📋</span>
                <span>Registrar Asistencia</span>
              </button>

              <!-- 3. Botón EXAMEN FINAL (BLOQUEADO) -->
              <button onclick="handleLockedExam()" class="bg-slate-800 text-slate-400 font-bold py-3 px-4 rounded-xl text-sm border border-slate-700 cursor-not-allowed opacity-80 flex items-center justify-center gap-2 text-center relative group">
                <span class="text-base">🔒</span>
                <span>Examen Final</span>
                <span class="text-[10px] bg-red-500/80 text-white font-bold px-1.5 py-0.5 rounded ml-1 uppercase">Bloqueado</span>
              </button>

            </div>

            <p class="text-[11px] text-slate-400 font-medium text-center pt-1">
              🔒 El examen final se desbloqueará automáticamente en la última sesión para quienes cumplan con la asistencia requerida.
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
                      ${isAttended ? `
                        <span class="inline-flex items-center gap-1 text-[11px] font-black text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                          ✅ Asistencia Confirmada
                        </span>
                      ` : `
                        <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          Programada
                        </span>
                      `}
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
  alert('🔒 Examen Final Bloqueado: Este examen se habilitará oficialmente en la sesión 10 (última semana de clases) para los estudiantes que cuenten con el 100% de asistencia registrada.');
}

// Click en toda la tarjeta del curso
function handleCardClick(courseId) {
  if (!currentUser) {
    handleStartJourneyClick(courseId);
  } else {
    goToClassPanel(courseId);
  }
}

// Click en INICIAR MI VIAJE / USUARIO
function handleStartJourneyClick(courseId) {
  const course = COURSES_DATA.find(c => c.id === courseId);
  if (course) {
    currentBookingCourse = course;
  }
  openModal('loginModal');
}

// Ir al Panel de Clases (aula.html) en pestaña completa
function goToClassPanel(courseId) {
  if (!currentUser) {
    handleStartJourneyClick(courseId);
    return;
  }
  const targetId = courseId || (currentBookingCourse ? currentBookingCourse.id : 'bootcamp-ingles-cero');
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

  saveUser({
    name: auth.student.name,
    email: auth.student.email,
    passportNo: auth.student.passportNo || 'PM-2026',
    miles: 2500,
    avatar: '👨‍✈️',
    bookedCourses: currentUser ? currentUser.bookedCourses : []
  });

  closeModal('loginModal');
  triggerConfetti();
  alertNotification(`¡Bienvenido(a) ${auth.student.shortName || auth.student.name}! Acceso verificado.`);
  
  // Abrir inmediatamente el Panel de Clases
  setTimeout(() => {
    const courseId = currentBookingCourse ? currentBookingCourse.id : 'bootcamp-ingles-cero';
    window.open(`aula.html?course=${courseId}`, '_blank');
  }, 600);
}

// Checkin Rápido
function handleQuickCheckin() {
  const uInput = document.getElementById('loginUsername');
  if (uInput) uInput.focus();
}

// Cerrar Sesión
function handleLogout() {
  if (confirm('¿Deseas cerrar tu sesión de viajero? Tus pases guardados seguirán disponibles al reingresar.')) {
    localStorage.removeItem('polyglot_user');
    currentUser = null;
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
      <div class="bg-gradient-to-br from-[#071330] via-[#0c2461] to-[#050e26] text-white p-6 sm:p-8 rounded-3xl border-2 border-[#ffd200]/40 shadow-2xl relative overflow-hidden">
        
        <div class="absolute -right-12 -bottom-12 w-64 h-64 rounded-full border-8 border-yellow-400/10 flex items-center justify-center pointer-events-none text-9xl opacity-20">
          🌍
        </div>

        <div class="flex items-center justify-between pb-6 border-b border-white/20">
          <div class="flex items-center gap-3">
            <span class="text-3xl">🛂</span>
            <div>
              <span class="text-xs font-mono tracking-widest text-[#ffd200] block">REPÚBLICA POLÍGLOTA • PASAPORTE DIGITAL</span>
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
  if (nameInput && currentUser && !nameInput.value) {
    nameInput.value = currentUser.name;
    updateCredentialPreview();
  }
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
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
  }
}
