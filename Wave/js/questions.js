// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Which experiment demonstrated the wave-like behaviour of electrons?",
    answer: "Davisson-Germer experiments",
    options: [
      "Double-slit experiment",
      "Photoelectric effect",
      "Compton scattering",
      "Davisson-Germer experiments"
    ]
  }, {
    numb: 2,
    question: "What is the name of the principle that states that certain properties ,like positions and momentum cannot be precisely known at the same time?",
    answer: "Heisenberg's uncertainty principle",
    options: [
      "Heisenberg's uncertainty principle",
      "Schrodinger wave equation",
      "De Broglie's Hypothesis",
      "Planck's constant"
    ]
  }, {
    numb: 3,
    question: "Which type of radiation  exhibits both wave-like and particle-like behaviour?",
    answer: "",
    options: [
      "Gamma radiation",
      "X-ray radiation",
      "Visible light",
      "Electromagnetic radiation"
    ]
  }, {
    numb: 4,
    question:"What is the term for the ability of a particle to exhibit both wave-like and particle-like behaviour ?",
    answer: "wave-particle duality",
    options: [
      "wave-particle duality",
      "Quantum superposition",
      "Entanglement",
      "Quantization"
    ]
  }, {
    numb: 5,
    question: "Which scientist proposed that particles ,like electrons,can exhibit wave-like behaviour?",
    answer: "",
    options: [
      "Louis de Broglie",
      "Erwin Schrodinger",
      "Werner Heisenberg",
      "Albert Einstein"
    ]
  }, {
    numb: 6,
    question: "What is the name of the equation that describes tha wave function of a particle?",
    answer: "",
    options: [
      "Schrodinger Equation",
      "Dirac Equation",
      "Klein-Gordon Equation",
      "Maxwell's Equations"
    ]
  }, {
    numb: 7,
    question: "which experiment demonstrated the particle-like behaviour of light?",
    answer: "",
    options: [
      "Photoelectric effect",
      "Compton scattering",
      "Double-slit experiment",
      "Michelson-Morley experiment"
    ]
  }, 
  {
    numb:8 ,
    question: "What is the term for the smallest unit of energy that can be absorbed or emitted by a particle?",
    answer: "",
    options: [
      "Photon",
      "Quantum",
      "Wave packet",
      "Particle-like behaviour"
    ]
  },
  {
    numb: 9,
    question: "Which scientist developed the concept of wave-particle duality?",
    answer: "",
    options: [
      "Albert Einstein",
      "Louis de Broglie",
      "Erwin Schrodinger",
      "Werner Heisenberg"
    ]
  },{
    numb: 10,
    question: "What is the principle that states that the act of observation can affect the behaviour of a particle?",
    answer: "",
    options: [
      "Observer effect",
      "Uncertainty principle",
      "Superposition principle",
      "Entanglement principle"
    ]
  },{
    numb:11 ,
    question: "what is the name of the phenomenon where particles can be entangles, meaning their properties are conducted even when separated by large distances,and is a fundamental aspect of wave-particle duality?",
    answer: "Entanglement",
    options: [
      "Superposition",
      "Entanglement",
      "Quantization",
      "Wave-particle duality"
    ]
  },{
    numb: 12,
    question: "Which scientist developed the concept of wave particle duality for particles other than electrons?",
    answer: "Pual Dirac",
    options: [
      "Louis de Broglie",
      "Erwin Schrodinger",
      "Werner Heisenberg",
      "Paul Driac"
    ]
  },{
    numb:13 ,
    question: "What is the term for the ability of a partcle to pass through two or more slits simultaneously,resulting in an interference pattern?",
    answer: "Interference",
    options: [
      "Diffraction",
      "Interference",
      "Superposition",
      "Quantization"
    ]
  },{
    numb: 14,
    question: "Which experiment demonstrated the wave-like behaviour of particles,and was performed by Davisson and Germer in 1927?",
    answer: "Electron diffraction experiment",
    options: [
      "Double-slit experiment",
      "Photoelectric effect",
      "Compton scattering",
      "Electron diffraction experiment"
    ]
  },{
    numb:15 ,
    question: "What type of particle exhibits both wave-like and particle-like behaviour, and is also known as a fermion?",
    answer: "Electron",
    options: [
      "Photon",
      "Electron",
      "Quark",
      "Atom"
    ]
  },{
    numb: 16,
    question: "Which experimen demonstrated the particle-like behaviour of light,and was performed by Compton in 1923?",
    answer: "Compton scattering",
    options: [
      "photoelectric effect",
      "Compton scattering",
      "Double-slit experiment",
      "Michelson-Morley experiment"
    ]
  },{
    numb:17 ,
    question: " A particle has a wavelength of 5 x 10^-11 m. What is its momentum? (h = 6.626 x 10^-34 J s)    ?",
    answer: " 1.33 x 10^-23 kg m/s",
    options: [
      " 1.33 x 10^-24 kg m/s",
      " 1.33 x 10^-23 kg m/s",
      " 1.33 x 10^-25 kg m/s",
      " 1.33 x 10^-26 kg m/s"
    ]
  },{
    numb:18 ,
    question: " An electron has a kinetic energy of 2.5 x 10^-19 J. What is its wavelength? (h = 6.626 x 10^-34 J s, me = 9.11 x 10^-31 kg)?",
    answer: " 7.28 x 10^-11 m",
    options: [
      "7.46 x 10^14 Hz",
      "7.46 x 10^15 Hz",
      "7.46 x 10^16 Hz",
      "7.46 x 10^17 Hz",
    ]
  },{
    numb:19 ,
    question: ". An electron is in a potential well with a depth of 5 eV. What is the minimum energy it can have? (1 eV = 1.6 x 10^-19 J)?",
    answer: "5 x 10^-19 J",
    options: [
      " 3.2 x 10^-19 J",
      " 5 x 10^-19 J",
      " 8 x 10^-19 J",
      " 11.2 x 10^-19 J"
    ]
  },{
    numb:20 ,
    question: " A particle has a wave function ψ(x) = Ae^(-x^2/(2a^2)). What is the probability density at x = 0? (A = 1/(a√(2π)))?",
    answer: " 1.64 x 10^-19 J",
    options: [
      " 1.38 x 10^-19 J",
      " 1.64 x 10^-19 J",
      " 1.88 x 10^-19 J",
      " 2.15 x 10^-19 J"
    ]
  },{
    numb:21 ,
    question: " An electron has a velocity of 2.5 x 10^5 m/s. What is its de Broglie wavelength? (h = 6.626 x 10^-34 J s, me = 9.11 x 10^-31 kg)?",
    answer: " 2.83 x 10^-11 m",
    options: [
      " 2.83 x 10^-10 m",
      " 2.83 x 10^-11 m",
      " 2.83 x 10^-12 m",
      " 2.83 x 10^-9 m"
    ]
  },{
    numb:22 ,
    question: " A particle is in a box of length L = 1 x 10^-10 m. What is the energy of the second excited state? (h = 6.626 x 10^-34 J s, me = 9.11 x 10^-31 kg)?",
    answer: " 9.99 x 10^-20 J",
    options: [
      " 3.33 x 10^-20 J",
      " 6.66 x 10^-20 J",
      " 9.99 x 10^-20 J",
      " 1.33 x 10^-19 J"
    ]
  },{
    numb:23 ,
    question: "?",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },{
    numb:24 ,
    question: "?",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },{
    numb:25 ,
    question: "?",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },{
    numb:26 ,
    question: "?",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },{
    numb: 27,
    question: "?",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },{
    numb: 28,
    question: "?",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },{
    numb: 29,
    question: "?",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },{
    numb:30 ,
    question: "?",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },{
    numb: 31,
    question: "?",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },{
    numb:32 ,
    question: "?",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },{
    numb:33 ,
    question: "?",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },{
    numb:34 ,
    question: "?",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },{
    numb:35 ,
    question: "?",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },{
    numb:36 ,
    question: "?",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },{
    numb:37 ,
    question: "?",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },{
    numb: 38,
    question: "?",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },{
    numb: 39,
    question: "?",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },{
    numb:40 ,
    question: "?",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },{
    numb:41 ,
    question: "?",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },{
    numb:42 ,
    question: "?",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },{
    numb:43 ,
    question: "?",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },{
    numb:44 ,
    question: "?",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },{
    numb:45 ,
    question: "?",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },{
    numb:46 ,
    question: "?",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },{
    numb:47 ,
    question: "?",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },{
    numb:48 ,
    question: "?",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },{
    numb:49 ,
    question: "?",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },{
    numb:50 ,
    question: "?",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];