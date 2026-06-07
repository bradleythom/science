/* ==========================================================================
   THE 115-MARK GAUNTLET - GAMEPLAY ENGINE & SYNTHESIZER (20-QUESTION EXPANDED)
   ========================================================================== */

// 1. Question Bank Database (20 Questions - 5 per Sector)
const QUESTIONS = [
  // ==================== SECTOR 1: BIOLOGY HUB (23 Marks) ====================
  {
    sector: 1,
    sectorName: "Biology Hub",
    marks: 4,
    question: "A student is labeling a 2D diagram of a typical plant cell. Which of the following organelle groups is responsible for: (1) converting glucose into usable cellular energy (ATP), (2) synthesizing carbohydrates via photosynthesis, and (3) maintaining cell turgor pressure?",
    options: [
      "(1) Mitochondria, (2) Chloroplast, (3) Vacuole",
      "(1) Ribosome, (2) Vacuole, (3) Cell Wall",
      "(1) Chloroplast, (2) Mitochondria, (3) Cytoplasm",
      "(1) Nucleus, (2) Chloroplast, (3) Cell Membrane"
    ],
    correctIndex: 0,
    explanation: "Mitochondria are the sites of aerobic respiration, converting glucose to ATP. Chloroplasts carry out photosynthesis to produce glucose. The large central vacuole stores cell sap and maintains turgidity (turgor pressure)."
  },
  {
    sector: 1,
    sectorName: "Biology Hub",
    marks: 4,
    question: "Euglena is a single-celled flagellate eukaryote that challenges traditional plant/animal classification. What cell structure features explain this exception?",
    options: [
      "They possess chloroplasts for photosynthesis but lack a rigid cell wall and use a flagellum for movement",
      "They have a cellulose cell wall but move using flagellar tails and digest food in a stomach",
      "They lack a true nucleus but have a flagellum and a large central vacuole",
      "They possess cilia for locomotion but can only consume nutrients from their food reservoir"
    ],
    correctIndex: 0,
    explanation: "Euglena is plant-like because it has chloroplasts to synthesize its own food, but animal-like because it lacks a cellulose cell wall (having a protein pellicle instead) and is highly motile due to a flagellum."
  },
  {
    sector: 1,
    sectorName: "Biology Hub",
    marks: 5,
    question: "During chemical and mechanical digestion in the human body, how are the stomach and small intestine correctly matched to their primary biochemical and digestive roles?",
    options: [
      "Stomach: Acidic hydrolysis of proteins and mechanical churning; Small Intestine: Enzymatic digestion and absorption of nutrients into the bloodstream",
      "Stomach: Absorption of water and minerals; Small Intestine: Production of bile and mechanical grinding",
      "Stomach: Storage of bile and synthesis of lipase; Small Intestine: Secretion of strong hydrochloric acid (pH 1-2)",
      "Stomach: Alkaline absorption of fats; Small Intestine: Storage of solid feces"
    ],
    correctIndex: 0,
    explanation: "The stomach uses peristaltic churning (mechanical) and pepsin in an acidic environment (HCl, pH 1-2) to break down proteins. The small intestine uses pancreatic/intestinal enzymes to complete digestion and absorbs the resulting nutrients."
  },
  {
    sector: 1,
    sectorName: "Biology Hub",
    marks: 5,
    question: "According to the 'Lock and Key' model, which statement correctly describes the behavior of enzymes as biological catalysts during and after a chemical reaction?",
    options: [
      "They change shape permanently to bind to any reactant molecule, and are consumed in the process",
      "They lower activation energy, bind to specific substrates at their active site, and remain chemically unchanged after the reaction",
      "They speed up reactions by increasing the system's temperature, and break down into amino acids",
      "They work best at any temperature and pH, acting as reactants in the cellular process"
    ],
    correctIndex: 1,
    explanation: "Enzymes speed up chemical reactions by lowering the activation energy barrier. Substrates bind specifically to the active site. After the reaction, products are released, and the enzyme remains unchanged and ready to catalyze again."
  },
  {
    sector: 1,
    sectorName: "Biology Hub",
    marks: 5,
    question: "In a laboratory study evaluating photosynthesis, a student performs an iodine starch test on a green leaf that was partially covered with light-blocking foil. What are the observed properties and explanation?",
    options: [
      "The uncovered parts turn blue-black because light-exposed cells carried out photosynthesis to produce starch, which complexes with iodine",
      "The covered parts turn brick-red because starch is converted into simple reducing sugars",
      "The uncovered parts turn bright green because iodine stains the chlorophyll green",
      "The covered parts turn blue-black because darkness accelerates starch storage"
    ],
    correctIndex: 0,
    explanation: "Photosynthesis requires light. The light-exposed (uncovered) parts of the leaf produce glucose, which is stored as starch. Iodine reacts with starch to turn blue-black. Covered parts have no starch and remain yellow-brown."
  },
  // ==================== SECTOR 2: CHEMISTRY PLAYGROUND (28 Marks) ====================
  {
    sector: 2,
    sectorName: "Chemistry Playground",
    marks: 5,
    question: "How is a chemical compound distinguished from an element, and how are elements organized within the rows (periods) and columns (groups) of the Periodic Table?",
    options: [
      "Compounds contain only one type of atom; periods contain elements with the same number of valence electrons",
      "Compounds consist of two or more chemically bonded elements; periods represent the number of electron shells, while groups represent the number of valence electrons",
      "Elements are mixtures of compounds; groups contain elements with similar masses",
      "Compounds are physically mixed substances; periods represent atomic mass, and groups represent states of matter"
    ],
    correctIndex: 1,
    explanation: "A compound contains atoms of different elements chemically bonded. In the Periodic Table, horizontal rows (periods) indicate the number of electron shells, and vertical columns (groups) represent the count of valence electrons."
  },
  {
    sector: 2,
    sectorName: "Chemistry Playground",
    marks: 5,
    question: "A student is testing a mystery element in the laboratory. She observes that it rings loudly when struck, can be drawn into thin wires, can be hammered into flat sheets, and reflects light. What terms describe these four physical properties?",
    options: [
      "Malleable, Ductile, Lustrous, Sonorous",
      "Sonorous, Ductile, Malleable, Lustrous",
      "Lustrous, Sonorous, Malleable, Ductile",
      "Ductile, Lustrous, Malleable, Sonorous"
    ],
    correctIndex: 1,
    explanation: "Sonorous means producing a ringing sound when struck; ductile means able to be drawn into wires; malleable means able to be hammered into sheets; lustrous means shiny and reflective. These are classic metallic properties."
  },
  {
    sector: 2,
    sectorName: "Chemistry Playground",
    marks: 6,
    question: "According to atomic structure shell constraints for elements up to atomic number 20, what are the maximum capacities of the first three electron shells, and what is the configuration of a chlorine atom (atomic number 17)?",
    options: [
      "Capacity: 2, 8, 8; Configuration: 2, 8, 7",
      "Capacity: 8, 8, 8; Configuration: 2, 8, 7",
      "Capacity: 2, 8, 18; Configuration: 2, 8, 5, 2",
      "Capacity: 2, 8, 8; Configuration: 2, 10, 5"
    ],
    correctIndex: 0,
    explanation: "The first shell holds up to 2, the second up to 8, and the third up to 8 (for the first 20 elements). A chlorine atom has 17 electrons, meaning they arrange as 2 in the first shell, 8 in the second, and 7 in the third (2, 8, 7)."
  },
  {
    sector: 2,
    sectorName: "Chemistry Playground",
    marks: 6,
    question: "Caesium (atomic number 55) is located at the bottom of Group 1 (Alkali Metals). Why does Caesium react much more violently with water than sodium or potassium?",
    options: [
      "Caesium has more valence electrons, which are highly reactive",
      "Caesium's valence electron is in an outer shell further from the nucleus, experiencing higher shielding and weaker electrostatic attraction, making it extremely easy to lose",
      "Caesium has high electronegativity and aggressively attracts oxygen from water molecules",
      "Caesium has a higher boiling point, which accelerates the release of thermal energy"
    ],
    correctIndex: 1,
    explanation: "Reactivity of Group 1 metals increases down the group. As atomic radius and shielding from inner shells increase, the positive nucleus exerts a weaker electrostatic pull on the single valence electron, making it easier to lose."
  },
  {
    sector: 2,
    sectorName: "Chemistry Playground",
    marks: 6,
    isHydrogenPop: true,
    question: "During a metal-acid reaction, a gas is produced that makes a 'squeaky pop' sound with a lit splint. If universal indicator is added to the acid beforehand and after the reaction is completed with excess metal, what gas was released, and how does the indicator color shift?",
    options: [
      "Oxygen gas; color shifts from green (pH 7) to blue (alkaline)",
      "Hydrogen gas; color shifts from warm red (acidic) towards neutral green (as acid is neutralized)",
      "Carbon dioxide; color shifts from red (acidic) to deep purple (alkaline)",
      "Hydrogen gas; color shifts from purple (alkaline) to neutral green"
    ],
    correctIndex: 1,
    explanation: "Acids react with metals to produce salt and hydrogen gas (H₂), which is flammable and squeaks when ignited. As the hydrogen ions (H⁺) in the acid react, the pH rises, shifting the universal indicator from red (strongly acidic) towards green (neutral)."
  },
  // ==================== SECTOR 3: PHYSICS LAB (31 Marks) ====================
  {
    sector: 3,
    sectorName: "Physics Lab",
    marks: 6,
    question: "A cyclist rides along a straight path. She covers a distance of 1.8 kilometers in exactly 4 minutes. What is her average speed in meters per second (m/s)?",
    options: [
      "0.45 m/s",
      "7.5 m/s",
      "450 m/s",
      "4.5 m/s"
    ],
    correctIndex: 1,
    explanation: "Convert distance to meters: 1.8 km = 1800 m. Convert time to seconds: 4 minutes = 240 s. Speed is calculated as v = d / t = 1800 m / 240 s = 7.5 m/s."
  },
  {
    sector: 3,
    sectorName: "Physics Lab",
    marks: 6,
    question: "In an electrical circuit, how must an ammeter and a voltmeter be connected to measure a resistor, and what is the electrical rationale behind these connections?",
    options: [
      "Ammeter in series (has very low resistance to avoid altering current); Voltmeter in parallel (has very high resistance to avoid drawing current)",
      "Ammeter in parallel (has high resistance); Voltmeter in series (has low resistance)",
      "Both in parallel (both have low resistance)",
      "Both in series (both have high resistance)"
    ],
    correctIndex: 0,
    explanation: "Ammeters must be in series to count charge passing through. They have low resistance to avoid affecting flow. Voltmeters must be in parallel across a component to measure work done per charge, and have high resistance so current bypasses them."
  },
  {
    sector: 3,
    sectorName: "Physics Lab",
    marks: 6,
    question: "In electrical circuit schematics, how does the direction of conventional current compare to the physical flow of electrons?",
    options: [
      "Conventional current flows from the positive terminal to the negative terminal, which is opposite to the direction of electron flow",
      "Conventional current flows from negative to positive, which is identical to electron flow",
      "Both current and electrons flow from positive to negative",
      "Conventional current flows from negative to positive, which is opposite to electron flow"
    ],
    correctIndex: 0,
    explanation: "Conventional current was defined as positive charge flow from positive (+) to negative (-). We now know that electrons are negative charges that flow from the negative (-) terminal to the positive (+) terminal, making the directions opposite."
  },
  {
    sector: 3,
    sectorName: "Physics Lab",
    marks: 6,
    question: "A student places iron filings around a bar magnet. What is the direction of the magnetic field lines, and how do they behave near the poles of the magnet?",
    options: [
      "They run from the South pole to the North pole, and are furthest apart near the poles",
      "They run from the North pole to the South pole, and are most concentrated near the poles where the force is strongest",
      "They form concentric circles centered on the middle of the magnet, flowing outwards",
      "They run randomly between poles, and are weakest near the pole faces"
    ],
    correctIndex: 1,
    explanation: "Magnetic field lines flow from the North pole to the South pole externally. The lines are most concentrated (densest) at the poles, representing where the magnetic flux density and magnetic strength are at a maximum."
  },
  {
    sector: 3,
    sectorName: "Physics Lab",
    marks: 7,
    question: "A heavy steel ball is released from rest at the top of a curved ramp. As it rolls down, what energy transformations occur, and how does the Law of Conservation of Energy apply if thermal energy is detected?",
    options: [
      "Kinetic energy transforms into potential energy, destroying heat",
      "Gravitational potential energy transforms into kinetic energy, and some energy is converted to thermal energy due to friction, but the total energy remains constant",
      "Thermal energy transforms into potential energy, creating new kinetic energy",
      "Kinetic energy is converted entirely into electrical energy, violating the conservation of energy"
    ],
    correctIndex: 1,
    explanation: "At the top, energy is stored as gravitational potential energy. Downwards, it converts to kinetic energy of movement. Friction turns a portion into thermal energy (heat). Total energy remains constant, matching the Law of Conservation of Energy."
  },
  // ==================== SECTOR 4: SKILLS & METHODOLOGY (33 Marks) ====================
  {
    sector: 4,
    sectorName: "Methodology Skills",
    marks: 6,
    question: "A student investigates how the size of zinc particles (powder vs large chunks) affects the rate of reaction with hydrochloric acid by measuring the volume of hydrogen gas produced every 10 seconds. She keeps the temperature, volume, and concentration of the acid identical. What are the independent, dependent, and controlled variables?",
    options: [
      "Independent: Size of zinc particles; Dependent: Volume of hydrogen gas; Controlled: Temperature, volume, and concentration of acid",
      "Independent: Temperature of acid; Dependent: Size of zinc particles; Controlled: Volume of hydrogen gas",
      "Independent: Volume of hydrogen gas; Dependent: Concentration of acid; Controlled: Zinc particle size",
      "Independent: Rate of reaction; Dependent: Temperature; Controlled: Volume of hydrogen gas"
    ],
    correctIndex: 0,
    explanation: "The independent variable is what you change (zinc particle size). The dependent variable is what you measure (volume of hydrogen gas). Controlled variables are what you keep identical (acid volume, concentration, temperature) to make the test fair."
  },
  {
    sector: 4,
    sectorName: "Methodology Skills",
    marks: 6,
    question: "An engineering test measures how much a wooden plank sags (in mm) when different weights (1 kg, 5 kg, 10 kg) are placed at its center. The plank length, width, and wood type are kept identical. Identify the independent and dependent variables.",
    options: [
      "Independent: Sag of the plank; Dependent: Applied weight",
      "Independent: Applied weight; Dependent: Sag of the plank",
      "Independent: Plank length; Dependent: Wood type",
      "Independent: Wood type; Dependent: Applied weight"
    ],
    correctIndex: 1,
    explanation: "The independent variable is the weight added, which is directly manipulated. The dependent variable is the plank's sag depth in millimeters, which changes in response to the weight and is measured."
  },
  {
    sector: 4,
    sectorName: "Methodology Skills",
    marks: 7,
    question: "When reacting zinc metal with concentrated hydrochloric acid, what is the most critical set of safety precautions, and what scientific hazard reasoning supports them?",
    options: [
      "Wear safety goggles to protect eyes from corrosive acid splashes, and handle near a ventilation source or open flame because hydrogen gas is highly flammable",
      "Wear safety goggles to prevent eye damage from corrosive acid, and ensure there are no open flames nearby because hydrogen gas forms an explosive mixture with air",
      "Wear thermal gloves to prevent heat burns, and seal the test tube tightly to prevent gas release",
      "Avoid wearing lab coats to ensure free movement, and inhale the gas to verify its purity"
    ],
    correctIndex: 1,
    explanation: "Safety goggles are essential to protect eyes from corrosive acid splashes. Since the reaction produces hydrogen gas, which is highly flammable and forms explosive mixtures with oxygen, open flames must be eliminated from the testing area."
  },
  {
    sector: 4,
    sectorName: "Methodology Skills",
    marks: 7,
    question: "A student needs to heat a solid chemical mixture to a very high temperature in a furnace directly over a Bunsen burner flame. Which lab apparatus is designed to hold the solid chemical under these conditions, and what is its 2D profile name?",
    options: [
      "A beaker made of glass",
      "A conical flask made of borosilicate",
      "A crucible and lid, made of heat-resistant porcelain",
      "An evaporating basin, made of plastic"
    ],
    correctIndex: 2,
    explanation: "A crucible is a cup-shaped piece of laboratory equipment made of heat-resistant porcelain designed to withstand temperatures high enough to melt metals. Glass beakers and flasks would crack under direct extreme heat."
  },
  {
    sector: 4,
    sectorName: "Methodology Skills",
    marks: 7,
    question: "A study tests the color intensity of hair dye at concentrations of 1%, 5%, and 10%. The light absorption values are recorded as 0.15, 0.75, and 1.50 respectively. What quantitative conclusion can be drawn from this data?",
    options: [
      "Increasing dye concentration decreases light absorption",
      "The light absorption is directly proportional to the dye concentration",
      "Light absorption is independent of the dye concentration",
      "Doubling the concentration quadruples the absorption value"
    ],
    correctIndex: 1,
    explanation: "A 5x increase in concentration (1% to 5%) causes a 5x increase in absorption (0.15 to 0.75). A 10x increase in concentration (1% to 10%) causes a 10x increase in absorption (0.15 to 1.50). This indicates a direct proportional relationship."
  }
];

// 2. Sound Effects Engine (Web Audio API Synthesizer)
let audioCtx = null;

function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

function playCorrectSound() {
  initAudio();
  const osc1 = audioCtx.createOscillator();
  const osc2 = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();

  osc1.type = 'sine';
  osc2.type = 'sine';

  osc1.connect(gainNode);
  osc2.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  const now = audioCtx.currentTime;
  gainNode.gain.setValueAtTime(0, now);
  gainNode.gain.linearRampToValueAtTime(0.12, now + 0.05);
  gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

  osc1.frequency.setValueAtTime(659.25, now); // E5
  osc2.frequency.setValueAtTime(880.00, now + 0.08); // A5

  osc1.start(now);
  osc2.start(now);
  osc1.stop(now + 0.5);
  osc2.stop(now + 0.5);
}

function playSqueakyPopSound() {
  initAudio();
  const now = audioCtx.currentTime;
  
  // Part 1: The Squeak (rapid upward pitch sweep)
  const oscSqueak = audioCtx.createOscillator();
  const gainSqueak = audioCtx.createGain();
  
  oscSqueak.type = 'sine';
  oscSqueak.frequency.setValueAtTime(300, now);
  oscSqueak.frequency.exponentialRampToValueAtTime(900, now + 0.08);
  
  gainSqueak.gain.setValueAtTime(0, now);
  gainSqueak.gain.linearRampToValueAtTime(0.15, now + 0.02);
  gainSqueak.gain.exponentialRampToValueAtTime(0.001, now + 0.09);
  
  oscSqueak.connect(gainSqueak);
  gainSqueak.connect(audioCtx.destination);
  
  oscSqueak.start(now);
  oscSqueak.stop(now + 0.1);
  
  // Part 2: The Pop (low frequency pulse)
  const oscPop = audioCtx.createOscillator();
  const gainPop = audioCtx.createGain();
  
  oscPop.type = 'triangle';
  oscPop.frequency.setValueAtTime(120, now + 0.07);
  oscPop.frequency.exponentialRampToValueAtTime(40, now + 0.18);
  
  gainPop.gain.setValueAtTime(0, now + 0.07);
  gainPop.gain.linearRampToValueAtTime(0.3, now + 0.08);
  gainPop.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
  
  oscPop.connect(gainPop);
  gainPop.connect(audioCtx.destination);
  
  oscPop.start(now + 0.07);
  oscPop.stop(now + 0.25);
}

function playIncorrectSound() {
  initAudio();
  const osc = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();

  osc.type = 'sawtooth';
  osc.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  const now = audioCtx.currentTime;
  gainNode.gain.setValueAtTime(0, now);
  gainNode.gain.linearRampToValueAtTime(0.15, now + 0.05);
  gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

  osc.frequency.setValueAtTime(130, now);
  osc.frequency.linearRampToValueAtTime(90, now + 0.35);

  osc.start(now);
  osc.stop(now + 0.4);
}

function playSectorUnlockedSound() {
  initAudio();
  const now = audioCtx.currentTime;
  const notes = [261.63, 329.63, 392.00, 523.25]; // C4, E4, G4, C5 arpeggio
  
  notes.forEach((freq, index) => {
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now + (index * 0.1));
    
    gainNode.gain.setValueAtTime(0, now + (index * 0.1));
    gainNode.gain.linearRampToValueAtTime(0.08, now + (index * 0.1) + 0.03);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + (index * 0.1) + 0.3);
    
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    osc.start(now + (index * 0.1));
    osc.stop(now + (index * 0.1) + 0.45);
  });
}

function playGameOverSound() {
  initAudio();
  const now = audioCtx.currentTime;
  const notes = [220.00, 207.65, 196.00, 164.81]; // A3, G#3, G3, E3
  
  notes.forEach((freq, index) => {
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(freq, now + (index * 0.25));
    
    gainNode.gain.setValueAtTime(0, now + (index * 0.25));
    gainNode.gain.linearRampToValueAtTime(0.1, now + (index * 0.25) + 0.05);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + (index * 0.25) + 0.5);
    
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    osc.start(now + (index * 0.25));
    osc.stop(now + (index * 0.25) + 0.6);
  });
}

function playVictorySound() {
  initAudio();
  const now = audioCtx.currentTime;
  const notes = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99, 1046.50];
  
  notes.forEach((freq, index) => {
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    osc.type = (index === notes.length - 1) ? 'sine' : 'triangle';
    osc.frequency.setValueAtTime(freq, now + (index * 0.08));
    
    gainNode.gain.setValueAtTime(0, now + (index * 0.08));
    gainNode.gain.linearRampToValueAtTime(0.1, now + (index * 0.08) + 0.03);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + (index * 0.08) + 0.6);
    
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    osc.start(now + (index * 0.08));
    osc.stop(now + (index * 0.08) + 0.75);
  });

  setTimeout(() => {
    const chord = [261.63, 392.00, 523.25, 659.25];
    chord.forEach((freq) => {
      const osc = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      
      gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.08, audioCtx.currentTime + 0.1);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1.5);
      
      osc.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      
      osc.start(audioCtx.currentTime);
      osc.stop(audioCtx.currentTime + 1.8);
    });
  }, 600);
}


// Active questions list and shuffling logic
let activeQuestions = [];

function shuffleQuestions() {
  const sector1 = QUESTIONS.filter(q => q.sector === 1);
  const sector2 = QUESTIONS.filter(q => q.sector === 2);
  const sector3 = QUESTIONS.filter(q => q.sector === 3);
  const sector4 = QUESTIONS.filter(q => q.sector === 4);

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  shuffle(sector1);
  shuffle(sector2);
  shuffle(sector3);
  shuffle(sector4);

  activeQuestions = [...sector1, ...sector2, ...sector3, ...sector4];
}

// 3. Game State Variables
let gameState = {
  score: 0,
  lives: 3,
  currentQuestionIdx: 0, // 0 to 19 absolute
  timeLeft: 720,        // 12 minutes (720 seconds) per sector
  timerInterval: null,
  sectorTimes: {
    1: 0,
    2: 0,
    3: 0,
    4: 0
  },
  sectorStartTime: 0
};

// 4. Cache DOM Elements
const bodyEl = document.body;
const welcomeScreen = document.getElementById('welcome-screen');
const questionScreen = document.getElementById('question-screen');
const feedbackPanel = document.getElementById('feedback-panel');
const gameOverScreen = document.getElementById('game-over-screen');
const victoryScreen = document.getElementById('victory-screen');

const gameHeader = document.getElementById('game-header');
const sectorBadge = document.getElementById('sector-badge');
const countdownTimer = document.getElementById('countdown-timer');
const scoreDisplay = document.getElementById('score-display');
const progressBarFill = document.getElementById('progress-bar-fill');
const livesDisplay = document.getElementById('lives-display');

const questionNumEl = document.getElementById('current-question-num');
const questionValueEl = document.getElementById('question-value-badge');
const questionTextEl = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');

const feedbackStatusIcon = document.getElementById('feedback-status-icon');
const feedbackStatusTitle = document.getElementById('feedback-status-title');
const feedbackScoreNotice = document.getElementById('feedback-score-notice');
const feedbackExplanation = document.getElementById('feedback-explanation');

const goScoreEl = document.getElementById('go-score');
const goSectorEl = document.getElementById('go-sector');
const goReasonEl = document.getElementById('game-over-reason');

const vicScoreEl = document.getElementById('vic-score');
const vicLivesEl = document.getElementById('vic-lives');
const vicTimeEl = document.getElementById('vic-time');
const vicCommentEl = document.getElementById('vic-feedback-comment');

const btnBegin = document.getElementById('btn-begin');
const btnFeedbackContinue = document.getElementById('btn-feedback-continue');
const btnRestartGo = document.getElementById('btn-restart-go');
const btnRestartVic = document.getElementById('btn-restart-vic');


// 5. Game Engine Methods

// Initialize/Reset State
function initGame() {
  gameState.score = 0;
  gameState.lives = 3;
  gameState.currentQuestionIdx = 0;
  gameState.timeLeft = 720;
  gameState.sectorTimes = { 1: 0, 2: 0, 3: 0, 4: 0 };
  
  if (gameState.timerInterval) {
    clearInterval(gameState.timerInterval);
    gameState.timerInterval = null;
  }

  bodyEl.className = 'theme-biology';
  updateLivesUI();

  scoreDisplay.innerHTML = `0 <span class="score-total">/ 115</span>`;
  progressBarFill.style.width = '0%';
  countdownTimer.textContent = "12:00";
  countdownTimer.classList.remove('urgent');

  welcomeScreen.classList.remove('hidden');
  questionScreen.classList.add('hidden');
  feedbackPanel.classList.add('hidden');
  gameOverScreen.classList.add('hidden');
  victoryScreen.classList.add('hidden');
  gameHeader.classList.add('hidden');
}

// Start Gameplay
function startGame() {
  initAudio();
  
  gameState.score = 0;
  gameState.lives = 3;
  gameState.currentQuestionIdx = 0;
  gameState.timeLeft = 720;
  gameState.sectorTimes = { 1: 0, 2: 0, 3: 0, 4: 0 };

  shuffleQuestions();
  updateLivesUI();

  scoreDisplay.innerHTML = `0 <span class="score-total">/ 115</span>`;
  progressBarFill.style.width = '0%';
  countdownTimer.textContent = "12:00";
  countdownTimer.classList.remove('urgent');

  welcomeScreen.classList.add('hidden');
  gameOverScreen.classList.add('hidden');
  victoryScreen.classList.add('hidden');
  questionScreen.classList.remove('hidden');
  gameHeader.classList.remove('hidden');
  
  startSectorTimer();
  loadQuestion(0);
}

// Start Timer for a sector
function startSectorTimer() {
  if (gameState.timerInterval) {
    clearInterval(gameState.timerInterval);
  }
  
  gameState.timeLeft = 720; // 12 minutes
  gameState.sectorStartTime = Date.now();
  countdownTimer.classList.remove('urgent');
  updateTimerDisplay();

  gameState.timerInterval = setInterval(() => {
    gameState.timeLeft--;
    updateTimerDisplay();

    if (gameState.timeLeft <= 60) {
      countdownTimer.classList.add('urgent');
    }

    if (gameState.timeLeft <= 0) {
      clearInterval(gameState.timerInterval);
      gameState.timerInterval = null;
      triggerGameOver("Time Expired! The sector countdown reached zero.");
    }
  }, 1000);
}

function updateTimerDisplay() {
  const mins = Math.floor(gameState.timeLeft / 60);
  const secs = gameState.timeLeft % 60;
  countdownTimer.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Load current question to UI
function loadQuestion(index) {
  const q = activeQuestions[index];
  
  if (q.sector === 1) bodyEl.className = 'theme-biology';
  else if (q.sector === 2) bodyEl.className = 'theme-chemistry';
  else if (q.sector === 3) bodyEl.className = 'theme-physics';
  else if (q.sector === 4) bodyEl.className = 'theme-methodology';

  sectorBadge.textContent = `SECTOR ${q.sector}: ${q.sectorName.toUpperCase()}`;
  sectorBadge.className = `sector-badge sector-${q.sector}`;

  const sectorQIndex = (index % 5) + 1; // 5 questions per sector now
  questionNumEl.textContent = sectorQIndex;
  questionValueEl.textContent = `+${q.marks} MARKS`;
  questionTextEl.textContent = q.question;

  optionsContainer.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];
  
  q.options.forEach((opt, oIdx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span class="option-letter">${letters[oIdx]}</span> <span class="option-text">${opt}</span>`;
    btn.addEventListener('click', () => selectOption(oIdx, btn));
    optionsContainer.appendChild(btn);
  });

  const progressPercent = (index / activeQuestions.length) * 100;
  progressBarFill.style.width = `${progressPercent}%`;
}

// Select an MCQ Option
function selectOption(selectedIdx, btnElement) {
  const q = activeQuestions[gameState.currentQuestionIdx];
  const allOptionButtons = optionsContainer.querySelectorAll('.option-btn');
  
  allOptionButtons.forEach(btn => {
    btn.disabled = true;
    btn.style.pointerEvents = 'none';
  });

  const isCorrect = (selectedIdx === q.correctIndex);
  
  if (isCorrect) {
    gameState.score += q.marks;
    scoreDisplay.innerHTML = `${gameState.score} <span class="score-total">/ 115</span>`;
    btnElement.classList.add('correct-choice');

    if (q.isHydrogenPop) {
      playSqueakyPopSound();
    } else {
      playCorrectSound();
    }

    feedbackPanel.className = 'feedback-panel correct';
    feedbackStatusTitle.textContent = "CORRECT!";
    feedbackScoreNotice.textContent = `+${q.marks} Marks Acquired`;
    feedbackScoreNotice.style.color = 'var(--color-success)';
    
    feedbackStatusIcon.innerHTML = `
      <svg fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
      </svg>`;
  } else {
    gameState.lives--;
    btnElement.classList.add('wrong-choice');
    allOptionButtons[q.correctIndex].classList.add('correct-choice');

    questionScreen.classList.add('shake-element', 'flash-red');
    setTimeout(() => {
      questionScreen.classList.remove('shake-element', 'flash-red');
    }, 550);

    playIncorrectSound();
    updateLivesUI();

    feedbackPanel.className = 'feedback-panel incorrect';
    feedbackStatusTitle.textContent = "INCORRECT";
    feedbackScoreNotice.textContent = `0 Marks (Lost 1 Life)`;
    feedbackScoreNotice.style.color = 'var(--color-danger)';

    feedbackStatusIcon.innerHTML = `
      <svg fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
      </svg>`;
  }

  feedbackExplanation.textContent = q.explanation;
  feedbackPanel.classList.remove('hidden');
}

function updateLivesUI() {
  for (let i = 1; i <= 3; i++) {
    const heart = document.getElementById(`heart-${i}`);
    if (i <= gameState.lives) {
      heart.className = 'heart-icon active';
    } else {
      if (heart.classList.contains('active')) {
        heart.className = 'heart-icon lost';
      } else {
        heart.className = 'heart-icon';
      }
    }
  }
}

// Proceed after clicking Continue on feedback screen
function continueGame() {
  feedbackPanel.classList.add('hidden');

  if (gameState.lives <= 0) {
    triggerGameOver("No Lives Remaining! You depleted your lives pool.");
    return;
  }

  const q = activeQuestions[gameState.currentQuestionIdx];
  const sectorTimeElapsed = Math.floor((Date.now() - gameState.sectorStartTime) / 1000);
  gameState.sectorTimes[q.sector] += sectorTimeElapsed;

  if (gameState.currentQuestionIdx >= activeQuestions.length - 1) {
    progressBarFill.style.width = '100%';
    triggerVictory();
    return;
  }

  const nextIdx = gameState.currentQuestionIdx + 1;
  const nextQ = activeQuestions[nextIdx];
  gameState.currentQuestionIdx = nextIdx;

  if (nextQ.sector !== q.sector) {
    playSectorUnlockedSound();
    startSectorTimer();
  } else {
    gameState.sectorStartTime = Date.now();
  }

  loadQuestion(gameState.currentQuestionIdx);
}

function triggerGameOver(reason) {
  if (gameState.timerInterval) {
    clearInterval(gameState.timerInterval);
    gameState.timerInterval = null;
  }

  playGameOverSound();

  gameHeader.classList.add('hidden');
  questionScreen.classList.add('hidden');
  feedbackPanel.classList.add('hidden');

  goReasonEl.textContent = reason;
  goScoreEl.textContent = gameState.score;
  
  const reachedQ = activeQuestions[gameState.currentQuestionIdx];
  goSectorEl.textContent = `Sector ${reachedQ.sector}: ${reachedQ.sectorName}`;

  gameOverScreen.classList.remove('hidden');
}

function triggerVictory() {
  if (gameState.timerInterval) {
    clearInterval(gameState.timerInterval);
    gameState.timerInterval = null;
  }

  playVictorySound();

  gameHeader.classList.add('hidden');
  questionScreen.classList.add('hidden');
  feedbackPanel.classList.add('hidden');

  vicScoreEl.textContent = gameState.score;
  vicLivesEl.textContent = `${gameState.lives} / 3`;

  const totalSecs = Object.values(gameState.sectorTimes).reduce((a, b) => a + b, 0);
  const avgSecs = Math.floor(totalSecs / 4);
  const avgMins = Math.floor(avgSecs / 60);
  const avgRemainSecs = avgSecs % 60;
  vicTimeEl.textContent = `${avgMins.toString().padStart(2, '0')}:${avgRemainSecs.toString().padStart(2, '0')}`;

  if (gameState.score === 115) {
    vicCommentEl.textContent = "Flawless Conquest! You achieved a perfect score of 115. Your mastery of cell structures, chemical configurations, circuit theory, and methodology parameters is exceptional. You are fully prepared for academic success!";
  } else if (gameState.score >= 90) {
    vicCommentEl.textContent = `Excellent work! You scored ${gameState.score} marks out of 115. You have a solid command of Year 9 general science. Review the few questions you missed to lock in a perfect score next time!`;
  } else {
    vicCommentEl.textContent = `Congratulations on completing the Gauntlet with ${gameState.score} marks! You survived, but there is room to sharpen your skills. Re-enter the Gauntlet to practice cell differences, electron shells, speed maths, and lab variables.`;
  }

  victoryScreen.classList.remove('hidden');
}

// 6. Bind Event Listeners
btnBegin.addEventListener('click', startGame);
btnFeedbackContinue.addEventListener('click', continueGame);
btnRestartGo.addEventListener('click', startGame);
btnRestartVic.addEventListener('click', startGame);

window.addEventListener('DOMContentLoaded', () => {
  shuffleQuestions();
  initGame();
});
