// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Which of the following is the correct order of taxonomic ranks from most general to most specific?",
    answer: "Kingdom,Phylum,Class,Order,Family,Genus,Species",
    options: [
      "Kingdom,Phylum,Class,Order,Family,Genus,Species",
      "Domain,Kingdom,Phylum,Class,Order,Family,Genus",
      "Kingdom,Domain,Phylum,Class,Order,Family,Genus",
      "Phylum,Class,Order,Family,Species,Kingdom"
    ]
  },
    {
    numb: 2,
    question: "What is the term for the process of giving scientific name to newly discovered species?",
    answer: "Nomenclature",
    options: [
      "Taxonomy",
      "Nomenclature",
      "Classification",
      "Binomial nomenclature"
    ]
  },
    {
    numb: 3,
    question: "which of the following is an example of homotypic synonym",
    answer: "Feils leo and panthere leo",
    options: [
      "Feils leo and panthere leo",
      "Canis lupus and Canis familiaris",
      "Quercus robur and Quercus pedunculata",
      "Homo sapiens and homo erectus"
    ]
  },
    {
    numb: 4,
    question: "What is the term for the scientific name of a species that consists of a genus name and a specie epithet?",
    answer: "Binomial nomenclature",
    options: [
      "Binomial nomenclature",
      "Trinomial nomenclature",
      "Polynomial nomenclature",
      "species name"
    ]
  },
    {
    numb: 5,
    question: "which of the following is an example of a heterotypic synonym?",
    answer: "Canis lupus and Canis familiaris",
    options: [
      "Quercus robur and Quercus pedunculata",
      "Canis lupus and Canis familiaris",
      "Felis leo and Panthera leo",
      "Homo sapiens and Homo erectus"
    ]
  },
  {
    numb: 6,
    question: "Who is credited with developing the system of binomial nomenclature?",
    answer: "Carolus Linnaeus",
    options: [
      "Carolus Linnaeus",
      "Charles Darwin",
      "Gregor Mendel",
      "Jean-Baptiste Lamarck"
    ]
  }, {
    numb: 7,
    question: "What is the term for the study of the names of organisms?",
    answer: "Nomenclature",
    options: [
      "Taxonomy",
      "Nomenclature",
      "Classification",
      "Systematics"
    ]
  }, {
    numb: 8,
    question: "Which of the following is an example of a nomen nudum?",
    answer: "Felis leo",
    options: [
      "Homo sapiens",
      "Felis leo",
      "Quercus robur",
      "Canis lupus"
    ]
  }, {
    numb: 9,
    question: "What is the term for the procedd of grouping organisms based on their shared characteristics?",
    answer: "Classification",
    options: [
      "Taxonomy",
      "Nomenclature",
      "Classification",
      "Systematics"
    ]
  }, {
    numb: 10,
    question: "Which of the following is an example of a conserved name?",
    answer: "Quercus robur",
    options: [
      "Felis leo",
      "Canis lupus",
      "Quercus robur",
      "Homo sapiens"
    ]
  }, {
    numb: 11,
    question: "Which of the following is the correct term for the scientific name for a genus or subgenus that is derived from a latin or Greek word?",
    answer: "Classical name",
    options: [
      "Patronym",
      "Matronym",
      "Vernacular name",
      "Classical name"
    ]
  }, {
    numb: 12,
    question: "What is the term of the process of giving a new scientific name to a specie or genus that was perviously known by a different name?",
    answer: "New combination",
    options: [
      "Nomenclature synonymy",
      "Taxonomic revision",
      "Binomial nomenclature",
      "New combination"
    ]
  }, {
    numb: 13,
    question: "Which of the following is an example of a nomen oblitum?",
    answer: "Brontosaurus",
    options: [
      "Felis leo",
      "Canis lupus",
      "Quercus ronur",
      "Brontosaurus"
    ]
  }, {
    numb: 14,
    question: "Who is the author of the  book [Species plantarum],which is considered the starting piont of botanical nomenclature?",
    answer: "Carolus Linnaeus",
    options: [
      "Charles Darwin",
      "Jean-Baptiste Lamarck",
      "Gregor Mendel",
      "Carolus Linnaeus"
    ]
  }, {
    numb: 15,
    question: "What is the term for the study of the relationships between organisms and their names?",
    answer: "Systematics",
    options: [
      "Nomenclature",
      "Systematics",
      "Phylogenetics",
      "Taxonomy"
    ]
  }, {
    numb: 16,
    question: "Which of the following is an example of a type specimen?",
    answer: "A holotype",
    options: [
      "A paratype",
      "A syntype",
      "A holotype",
      "A lecotype"
    ]
  }, {
    numb: 17,
    question: "Who is the author of the book [international code of nomenclature for Algae,fungi,and plants]?",
    answer: "John McNeil",
    options: [
      "Carolus Linnaeus",
      "Charles Darwin",
      "Gregor Mendel",
      "John McNeil"
    ]
  }, {
    numb: 18,
    question: "What is the term for the study of the names of fungi?",
    answer: "Nomenclatural mycology",
    options: [
      "Mycology",
      "Mycotaxonomy",
      "Nomenclatural mycology",
      "Fungal nomenclature"
    ]
  }, {
    numb: 19,
    question:"Who wrote the book [international code of zoological Nomenclature?",
    answer: "Richard Melville",
    options: [
      "Carolus Linnaeus",
      "Charles Darwin",
      "Gregor Mendel",
      "Richard Melville"
    ]
  }, {
    numb: 20,
    question: "What is the term for the study of the names of animals?",
    answer: "Nomenclatural zoology",
    options: [
      "Zoology",
      "Zootaxonomy",
      "Nomenclatural zoology",
      "Animal nomenclature"
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