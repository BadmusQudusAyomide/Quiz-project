// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "What determines the quantum efficiency of a photodetector?",
    answer: "Material properties and wavelength",
    options: [
      "Bandgap energy only",
      "Material properties and wavelength",
      "Temperature and bias voltage",
      "Device structure and packaging"
    ]
  },
    {
    numb: 2,
    question: "In a p-n junction photodiode,what is the primary mechanism for photo-current generation?",
    answer: "Drift current in the depletion region",
    options: [
      "Drift current in the depletion region",
      "Diffusion current in the neutral regions",
      "Tunneling current through the junction",
      "Thermionic emissions over the junction"
    ]
  },
    {
    numb: 3,
    question: "What is the purpose of the multiplication stage in a photomultiplier tube[PMT]",
    answer: "To amplify the photocurrent",
    options: [
      "To amplify the photocurrent",
      "To reduce noise aand dark current",
      "To increase the quantum efficiency",
      "To improve the spectral response"
    ]
  },
    {
    numb: 4,
    question: "Which material property is most critical for the photoconductive operation?",
    answer: "High dark resistivity",
    options: [
      "High absorption corfficient",
      "High carrier mobility",
      "High quantum efficiency",
      "High dark resistivity"
    ]
  },
    {
    numb: 5,
    question: "What is the responsivity of a photodetector dependent on?",
    answer: "Quantum efficiency, active area ,and wavelength",
    options: [
      "Quantum efficiency and active area only",
      "Wavelength and bias voltage only",
      "Quantum efficiency, active area, and wavelength",
      "Temperature and packaging only"
    ]
  },
  {
    numb: 6,
    question: "How do surface states affect the photoelectric behavior of metal-semiconductor interfaces?",
    answer: "They pin the Fermi level",
    options: [
      "They increase the quantum efficiency",
      "They decrease the dark current",
      " They pin the Fermi level",
      "They reduce the absorption coefficient"
    ]
  }, {
    numb: 7,
    question: "Which material system is known for its high photoelectric gain and fast response time?",
    answer: " Graphene and TMDs",
    options: [
      "Silicon (Si)",
      "Germanium (Ge)",
      "Gallium Arsenide (GaAs)",
      "Graphene and TMDs"
    ]
  }, {
    numb: 8,
    question: "What is the primary mechanism for plasmonic enhancement in photoelectric devices    ?",
    answer: "Localized surface plasmons",
    options: [
      "Localized surface plasmons",
      "Surface roughness and scattering",
      "Thin-film interference",
      "Quantum tunneling"
    ]
  }, {
    numb: 9,
    question: " In a metal-insulator-metal (MIM) tunnel junction, what determines the photoelectric current?",
    answer: "Tunneling probability and Fermi-Dirac statistics",
    options: [
      "Tunneling probability and Fermi-Dirac statistics",
      "Thermionic emission and Richardson's constant",
      "Internal photoemission and Schottky emission",
      "Drift-diffusion and carrier mobility"
    ]
  }, {
    numb: 10,
    question: "What is the advantage of using a heterojunction photodiode over a homojunction photodiode?",
    answer: "Wider spectral response",
    options: [
      "Higher quantum efficiency",
      "Faster response time",
      "Lower dark current",
      "Wider spectral response"
    ]
  }, {
    numb: 11,
    question: "?",
    answer: "",
    options: [
      "",
      " ",
      "",
      ""
    ]
  }, {
    numb: 12,
    question: "?",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  }, {
    numb: 13,
    question: "?",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  }, {
    numb: 14,
    question: "?",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  }, {
    numb: 15,
    question: "?",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  }, {
    numb: 16,
    question: "?",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  }, {
    numb: 17,
    question: "?",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  }, {
    numb: 18,
    question: "?",
    answer: "",
    options: [
      " ",
      "",
      "",
      ""
    ]
  }, {
    numb: 19,
    question:"?",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  }, {
    numb: 20,
    question: "?",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  }, {
    numb: 21,
    question: "A 3-phase AC circuit has a line voltage of 480V and a line current of 10A. What is the total power consumed by the circuit?",
    answer: "",
    options: [
      "12.8 KW",
      "14.4 KW",
      "16.2 KW",
      "20.8 KW"
    ]
  }, {
    numb: 22,
    question: "A capacitor has a capacitance of 100µF and is connected to a 120V AC circuit . What is the reactive power consumed by the capacitor?",
    answer: "",
    options: [
      "0.628 KVAR",
      "1.256 KVAR",
      "2.512 KVAR",
      "3.768 KVAR"
    ]
  }, {
    numb: 23,
    question: "A 12V DC motor has a resistance of 5 ohms and an inductive reactance of 10 ohms. What is the power consumed by the motor?",
    answer: "",
    options: [
      "24W",
      "48W",
      "72W",
      "96W"
    ]
  }, {
    numb: 24,
    question: "A transmission line has a resistance of 10 ohms and an inductive reactance of 20 ohms per kilometer.If the line is 10km long and the sending end voltage is 120KV,what is the receiving end voltage?",
    answer: "",
    options: [
      "108 KV",
      "112 KV",
      "116 KV",
      "120 KV"
    ]
  }, {
    numb: 25,
    question: "A capacitor has a capacitance of 50µF and is connected to a 120V AC circuit . What is the peak current flowing through the capacitor?",
    answer: "",
    options: [
      "3.14A",
      "6.28A",
      "9.42A",
      "12.56A"
    ]
  }, {
    numb: 26,
    question: "A 3-phase AC circuit has a line voltage of 415V and a line current of 15A . if the power factor is 0.85, what is the total active power consumed by the circuit?",
    answer: "",
    options: [
      "21.3KW",
      "23.1KW",
      "25.5KW",
      "27.9KW"
    ]
  }, {
    numb: 27,
    question: "12V DC battery is connected to a 5 ohm resistor and a 10 0hm resistor in parallel. what is the total current drawn from the battery?",
    answer: "",
    options: [
      "1.2A",
      "1.5A",
      "2.4A",
      "3.6A"
    ]
  }, {
    numb: 28,
    question: "A transformer has a primary voltage of 230V and a secondary voltage of 115V . if the primary current is 5A, what is the secondary current?",
    answer: "",
    options: [
      "10A",
      "12A",
      "15A",
      "20A"
    ]
  }, {
    numb: 29,
    question: "240V AC circuit has a resistance of 15 ohms and an inductive reactance of 30 ohms. what is the impedance of the circuit?",
    answer: "",
    options: [
      "33.54 ohms",
      "36.87 ohms",
      "40.25 ohms",
      "45.62 ohms"
    ]
  }, {
    numb: 30,
    question: "A capacitor has a capacitance of 200µF and is connected to a 120V AC circuit. what is the reactive power consumed by the capacitor ?",
    answer: "",
    options: [
      "1.256 KVAR",
      "2.512 KVAR",
      "3.768 KVAR",
      "5.024 KVAR"
    ]
  }, {
    numb: 31,
    question: "A transmission line has a resistance of 20 ohms and an induvtive reactance of 40ohms per kilometer. if the line is 20km long and the sending end voltage is 138KV , what is the receiving end voltage?",
    answer: "",
    options: [
      "120KV",
      "124KV",
      "128KV",
      "132KV"
    ]
  }, {
    numb: 32,
    question: " A 12V DC motor has a resistance of 10 ohms and an inductive reactance of 20 ohms. what is the power consumed by the motor?",
    answer: "",
    options: [
      "48W",
      "72W",
      "96W",
      "12OW"
    ]
  }, {
    numb: 33,
    question: "?",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  }, {
    numb: 34,
    question: "?",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  }, {
    numb: 35,
    question: "?",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  }, {
    numb: 36,
    question: "?",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  }, {
    numb: 37,
    question: "?",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  }, {
    numb: 38,
    question: "?",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  }, {
    numb: 39,
    question: "?",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  }, {
    numb: 40,
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