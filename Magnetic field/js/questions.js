// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "What is the unit of electric charge?",
    answer: "Ampere",
    options: [
      "Volt",
      "Ampere",
      "Cuolomb",
      "Ohm"
    ]
  },
    {
    numb: 2,
    question: "Which of the following is a conductor of electricity?",
    answer: "Metal",
    options: [
      "Wood",
      "Metal",
      "Plastic",
      "Glass"
    ]
  },
    {
    numb: 3,
    question: "What is the voltage of a standard household outlet in the United States",
    answer: "",
    options: [
      "120V",
      "240V",
      "360V",
      "480V"
    ]
  },
    {
    numb: 4,
    question: "Which of the following is a type of electric circuit?",
    answer: "",
    options: [
      "Series",
      "Parallel",
      "Alternating",
      "Direct"
    ]
  },
    {
    numb: 5,
    question: "What is the function of a fuse in an elecrtical circuit?",
    answer: "",
    options: [
      "To increase voltage",
      "To decrease voltage",
      "To protect from overload ",
      "To regulate frequency"
    ]
  },
  {
    numb: 6,
    question: "Which of the following is a type of electric current?",
    answer: "",
    options: [
      "Alternating Current (AC)",
      "Direct Current (DC)",
      "Resomamt Current (RC)",
      "Inductive Current(IC)"
    ]
  }, {
    numb: 7,
    question: "What is the unit of electrical resistance?",
    answer: "Ohm",
    options: [
      "Ohm",
      "Volt",
      "Ampere",
      "Watt"
    ]
  }, {
    numb: 8,
    question: "Which of the following devices converts AC to DC?",
    answer: "",
    options: [
      "Transformer",
      "Generator",
      "Rectifier",
      "Inverter"
    ]
  }, {
    numb: 9,
    question: "What is the term for the flow of electrons through a conductor?",
    answer: "",
    options: [
      "Electromagnetism",
      "Electrostatics",
      "Electric Current",
      "Electrical resistance"
    ]
  }, {
    numb: 10,
    question: "Which of the following is a safety precautions when working with electricity?",
    answer: "",
    options: [
      "Using water to extinguish electrical fires",
      "Using metal tools to repair electrical devices",
      "Turning off power before maintenance",
      "Overloading electrical outlets"
    ]
  }, {
    numb: 11,
    question: "What is the purpose of an electrical ground?",
    answer: "",
    options: [
      "To complete a circuit",
      "To prevent shock ",
      "To increase voltage",
      "To reduce current"
    ]
  }, {
    numb: 12,
    question: "Which of the following is a type of electrical wire insulation?",
    answer: "",
    options: [
      "Rubber",
      "Plastic",
      "Copper",
      "Aluminium"
    ]
  }, {
    numb: 13,
    question: "What is the umit of electrical power?",
    answer: "",
    options: [
      "Watt",
      "Volt",
      "Ampere",
      "ohm"
    ]
  }, {
    numb: 14,
    question: "Which of the following devices converts DC to AC?",
    answer: "",
    options: [
      "Inverters",
      "Rectifier",
      "Transformer",
      "Generator"
    ]
  }, {
    numb: 15,
    question: "What is the term for the opposition to the flow of electric current?",
    answer: "",
    options: [
      "Resistance",
      "Inductance",
      "Capacitance",
      "Conductance"
    ]
  }, {
    numb: 16,
    question: "Which of the following is a type of electrical circuit breaker?",
    answer: "",
    options: [
      "Fuse",
      "Switch",
      "Relay",
      "Circuit breaker"
    ]
  }, {
    numb: 17,
    question: "What is the purpose of an electrical transformer?",
    answer: "",
    options: [
      "To increase or decrease voltage",
      "To increase or decrease current",
      "To change the frequency",
      "To change the waveform"
    ]
  }, {
    numb: 18,
    question: "Which of the following is not a type of electrical conductor?",
    answer: "",
    options: [
      " Copper",
      "Aluminium",
      "Steel",
      "Wood"
    ]
  }, {
    numb: 19,
    question:"12v DC battery is connectrd to a 10ohm resisitor and 20ohm resistor in series. What is the current flowing through the circuit?",
    answer: "",
    options: [
      "0.4A",
      "0.6A",
      "0.8A",
      "1.2A"
    ]
  }, {
    numb: 20,
    question: "A transformer has a primary voltage of 120v and a secondary voltage of 240v. if the primary current is 2A , what is the secondary current?",
    answer: "",
    options: [
      "1A",
      "2A",
      "4A",
      "6A"
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