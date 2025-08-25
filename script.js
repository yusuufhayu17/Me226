const questions = [
  {
    question: "What is the correct term for an atom that loses an electron and acquires a net positive charge?",
    options: [
      "A) Cation",
      "B) Anion",
      "C) Proton",
      "D) Neutron"
    ],
    answer: 0
  },
  {
    question: "What is the primary characteristic of die casting?",
    options: [
      "A) It is a cost-effective choice for low-quantity production.",
      "B) It is used to create large parts from materials like iron.",
      "C) Metal is injected into the mold under high pressure.",
      "D) It is primarily used for hard metals like iron and steel."
    ],
    answer: 2
  },
  {
    question: "The \"Stone Age\" is associated with the use of which natural materials?",
    options: [
      "A) Bronze and alloys",
      "B) Stone, clay, skins, and wood",
      "C) Iron, steel, and copper",
      "D) Thermoplastics and rubbers"
    ],
    answer: 1
  },
  {
    question: "What is the main property of a material bonded with covalent bonds, such as silicon?",
    options: [
      "A) Low melting point",
      "B) Good electrical conductivity",
      "C) Brittleness",
      "D) High ductility"
    ],
    answer: 2
  },
  {
    question: "What is the definition of \"castability\"?",
    options: [
      "A) The ease with which a metal can be poured into a mold to obtain a casting free of defects.",
      "B) The temperature at which a material solidifies.",
      "C) The amount of energy required to melt a metal.",
      "D) The measure of how well a liquid will flow and fill a mold cavity."
    ],
    answer: 0
  },
  {
    question: "What is the definition of Material Engineering?",
    options: [
      "A) It concerns itself with the study of the behavior and properties of materials, their processing, production, and efficient use in engineering applications.",
      "B) It focuses on the chemical composition of materials.",
      "C) It deals with the discovery and design of new materials.",
      "D) It studies the relationship between structure and properties of materials."
    ],
    answer: 0
  },
  {
    question: "What is a key characteristic of High-Strength, Low-Alloy (HSLA) steels?",
    options: [
      "A) They contain more than 10 wt% of alloying elements.",
      "B) They are less resistant to corrosion than plain carbon steels.",
      "C) They have lower strengths than plain low-carbon steels.",
      "D) They may be strengthened by heat treatment."
    ],
    answer: 3
  },
  {
    question: "What property is associated with ionic and covalent bonds due to their high bond strength?",
    options: [
      "A) High melting point, high strength, and hardness",
      "B) Good thermal conductivity",
      "C) Good electrical conductivity",
      "D) Low melting point"
    ],
    answer: 0
  },
  {
    question: "According to the documents, what is a key disadvantage of many ferrous alloys?",
    options: [
      "A) They are not weldable.",
      "B) They have very low tensile strength.",
      "C) They are susceptible to corrosion.",
      "D) They cannot be heat-treated."
    ],
    answer: 2
  },
  {
    question: "What do Group 0 elements in the periodic table have?",
    options: [
      "A) Half-filled electron shells",
      "B) No electrons in their shells",
      "C) One electron greater than a filled electron shell",
      "D) Filled electron shells"
    ],
    answer: 3
  },
  {
    question: "What is the definition of a \"material\" as a substance?",
    options: [
      "A) A substance that is always a liquid.",
      "B) A substance (most often a solid) intended for a certain application.",
      "C) A substance used to create other substances.",
      "D) A substance that must be a metal or alloy."
    ],
    answer: 1
  },
  {
    question: "Which material is primarily die-cast?",
    options: [
      "A) Steel",
      "B) Iron",
      "C) Stone",
      "D) Copper"
    ],
    answer: 3
  },
  {
    question: "The Bronze Age began around 3000 BC with the discovery of which alloying process?",
    options: [
      "A) Alloying steel with carbon",
      "B) Alloying stone with clay",
      "C) Alloying copper to make it harder",
      "D) Alloying iron with copper"
    ],
    answer: 2
  },
  {
    question: "What is the purpose of a \"pattern\" in sand casting?",
    options: [
      "A) To produce internal features of the part.",
      "B) To form the mold cavity in the sand.",
      "C) To inject molten metal into the mold.",
      "D) To increase the fluidity of the metal."
    ],
    answer: 1
  },
  {
    question: "What is the primary characteristic of low-carbon steels?",
    options: [
      "A) They have extremely high strength and hardness.",
      "B) They contain a high concentration of alloying elements.",
      "C) They are very expensive to produce.",
      "D) They are unresponsive to heat treatments intended to form martensite."
    ],
    answer: 3
  },
  {
    question: "What does \"fluidity\" refer to in the context of casting?",
    options: [
      "A) The speed at which a molten metal cools.",
      "B) The measure of how well a liquid will flow and fill a mold cavity.",
      "C) The ease with which a metal can be poured.",
      "D) The ability of a material to withstand high pressure."
    ],
    answer: 1
  },
  {
    question: "What is the primary focus of Materials Science?",
    options: [
      "A) The economic extraction of minerals",
      "B) The discovery and design of new materials",
      "C) The study of the periodic table",
      "D) The study of material properties in thin sections"
    ],
    answer: 1
  },
  {
    question: "What is a \"core\" in sand casting used for?",
    options: [
      "A) To produce internal features like holes or passages",
      "B) To increase the metal's melting temperature",
      "C) To form the external shape of the mold",
      "D) To compensate for metal contraction upon cooling"
    ],
    answer: 0
  },
  {
    question: "Which of the following is an example of a low-carbon steel application?",
    options: [
      "A) High-rise building support columns",
      "B) Structural shapes that are heat-treated for strength",
      "C) Pressure vessels",
      "D) Automobile body components"
    ],
    answer: 3
  },
  {
    question: "What is a characteristic of metallic bonds?",
    options: [
      "A) They are non-directional",
      "B) They result in materials with poor electrical conductivity",
      "C) They are formed by atoms sharing electrons",
      "D) Electrons are fixed in one position"
    ],
    answer: 0
  },
  {
    question: "What is the correct term for an atom that accepts electrons and acquires a net negative charge?",
    options: [
      "A) Cation",
      "B) Anion",
      "C) Neutron",
      "D) Proton"
    ],
    answer: 1
  },
  {
    question: "What is the carbon concentration range for medium-carbon steels?",
    options: [
      "A) Less than 0.25 wt% C",
      "B) Exactly 1.0 wt% C",
      "C) Between 0.25 and 0.60 wt% C",
      "D) Greater than 1.0 wt% C"
    ],
    answer: 2
  },
  {
    question: "Which of the following describes the definition of manufacturing processes?",
    options: [
      "A) The act of inspecting and certifying a finished product",
      "B) Technical methods to change raw materials from their raw form to the final product",
      "C) The process of sorting and packaging final products for delivery",
      "D) The application of heat treatment to change material properties"
    ],
    answer: 1
  },
  {
    question: "Which type of bond is characterized by a \"sea\" of electrons surrounding positively charged cores?",
    options: [
      "A) Van der Waals bond",
      "B) Covalent bond",
      "C) Ionic bond",
      "D) Metallic bond"
    ],
    answer: 3
  },
  {
    question: "In a covalent bond, what do atoms do to achieve bonding?",
    options: [
      "A) They give up valence electrons to form an electron sea.",
      "B) They share electrons among two or more atoms.",
      "C) They acquire a net positive or negative charge.",
      "D) They transfer electrons from one atom to another."
    ],
    answer: 1
  },
  {
    question: "Which of the following is a method for altering the properties of materials?",
    options: [
      "A) Heat treatment",
      "B) Surveying",
      "C) Material Engineering",
      "D) Materials Selection"
    ],
    answer: 0
  },
  {
    question: "The Bronze Age began around 3000 BC with the discovery of which alloying process?",
    options: [
      "A) Alloying steel with carbon",
      "B) Alloying stone with clay",
      "C) Alloying copper to make it harder",
      "D) Alloying iron with copper"
    ],
    answer: 2
  },
  {
    question: "What is a key characteristic of High-Strength, Low-Alloy (HSLA) steels?",
    options: [
      "A) They contain more than 10 wt% of alloying elements",
      "B) They are less resistant to corrosion than plain carbon steels",
      "C) They have lower strengths than plain low-carbon steels",
      "D) They may be strengthened by heat treatment"
    ],
    answer: 3
  },
  {
    question: "What property is associated with ionic and covalent bonds due to their high bond strength?",
    options: [
      "A) High melting point, high strength, and hardness",
      "B) Good thermal conductivity",
      "C) Good electrical conductivity",
      "D) Low melting point"
    ],
    answer: 0
  },
  {
    question: "What is the definition of Material Engineering?",
    options: [
      "A) It concerns itself with the study of the behavior and properties of materials, their processing, production, and efficient use in engineering applications.",
      "B) It focuses on the chemical composition of materials.",
      "C) It deals with the discovery and design of new materials.",
      "D) It studies the relationship between structure and properties of materials."
    ],
    answer: 0
  },
  {
    question: "What is the primary characteristic of low-carbon steels?",
    options: [
      "A) They have extremely high strength and hardness.",
      "B) They contain a high concentration of alloying elements.",
      "C) They are very expensive to produce.",
      "D) They are unresponsive to heat treatments intended to form martensite."
    ],
    answer: 3
  },
  {
    question: "Which of the following is an example of a low-carbon steel application?",
    options: [
      "A) High-rise building support columns",
      "B) Structural shapes that are heat-treated for strength",
      "C) Pressure vessels",
      "D) Automobile body components"
    ],
    answer: 3
  },
  {
    question: "What does \"fluidity\" refer to in the context of casting?",
    options: [
      "A) The speed at which a molten metal cools.",
      "B) The measure of how well a liquid will flow and fill a mold cavity.",
      "C) The ease with which a metal can be poured.",
      "D) The ability of a material to withstand high pressure."
    ],
    answer: 1
  },
  {
    question: "What is the purpose of a \"pattern\" in sand casting?",
    options: [
      "A) To produce internal features of the part.",
      "B) To form the mold cavity in the sand.",
      "C) To inject molten metal into the mold.",
      "D) To increase the fluidity of the metal."
    ],
    answer: 1
  },
  {
    question: "What is a \"core\" in sand casting used for?",
    options: [
      "A) To produce internal features like holes or passages",
      "B) To increase the metal's melting temperature",
      "C) To form the external shape of the mold",
      "D) To compensate for metal contraction upon cooling"
    ],
    answer: 0
  },
  {
    question: "What is the correct term for an atom that loses an electron and acquires a net positive charge?",
    options: [
      "A) Cation",
      "B) Anion",
      "C) Proton",
      "D) Neutron"
    ],
    answer: 0
  },
  {
    question: "The \"Stone Age\" is associated with the use of which natural materials?",
    options: [
      "A) Bronze and alloys",
      "B) Stone, clay, skins, and wood",
      "C) Iron, steel, and copper",
      "D) Thermoplastics and rubbers"
    ],
    answer: 1
  },
  {
    question: "What is the primary characteristic of die casting?",
    options: [
      "A) It is a cost-effective choice for low-quantity production.",
      "B) It is used to create large parts from materials like iron.",
      "C) Metal is injected into the mold under high pressure.",
      "D) It is primarily used for hard metals like iron and steel."
    ],
    answer: 2
  },
  {
    question: "What is the main property of a material bonded with covalent bonds, such as silicon?",
    options: [
      "A) Low melting point",
      "B) Good electrical conductivity",
      "C) Brittleness",
      "D) High ductility"
    ],
    answer: 2
  },
  {
    question: "What is the definition of \"castability\"?",
    options: [
      "A) The ease with which a metal can be poured into a mold to obtain a casting free of defects.",
      "B) The temperature at which a material solidifies.",
      "C) The amount of energy required to melt a metal.",
      "D) The measure of how well a liquid will flow and fill a mold cavity."
    ],
    answer: 0
  },
  {
    question: "What is the definition of a \"material\" as a substance?",
    options: [
      "A) A substance that is always a liquid.",
      "B) A substance (most often a solid) intended for a certain application.",
      "C) A substance used to create other substances.",
      "D) A substance that must be a metal or alloy."
    ],
    answer: 1
  },
  {
    question: "Which material is primarily die-cast?",
    options: [
      "A) Steel",
      "B) Iron",
      "C) Stone",
      "D) Copper"
    ],
    answer: 3
  },
  {
    question: "According to the documents, what is a key disadvantage of many ferrous alloys?",
    options: [
      "A) They are not weldable.",
      "B) They have very low tensile strength.",
      "C) They are susceptible to corrosion.",
      "D) They cannot be heat-treated."
    ],
    answer: 2
  },
  {
    question: "What do Group 0 elements in the periodic table have?",
    options: [
      "A) Half-filled electron shells",
      "B) No electrons in their shells",
      "C) One electron greater than a filled electron shell",
      "D) Filled electron shells"
    ],
    answer: 3
  },
  {
    question: "What is a characteristic of metallic bonds?",
    options: [
      "A) They are non-directional",
      "B) They result in materials with poor electrical conductivity",
      "C) They are formed by atoms sharing electrons",
      "D) Electrons are fixed in one position"
    ],
    answer: 0
  },
  {
    question: "What is the correct term for an atom that accepts electrons and acquires a net negative charge?",
    options: [
      "A) Cation",
      "B) Anion",
      "C) Neutron",
      "D) Proton"
    ],
    answer: 1
  },
  {
    question: "What is the carbon concentration range for medium-carbon steels?",
    options: [
      "A) Less than 0.25 wt% C",
      "B) Exactly 1.0 wt% C",
      "C) Between 0.25 and 0.60 wt% C",
      "D) Greater than 1.0 wt% C"
    ],
    answer: 2
  },
  {
    question: "Which of the following describes the definition of manufacturing processes?",
    options: [
      "A) The act of inspecting and certifying a finished product",
      "B) Technical methods to change raw materials from their raw form to the final product",
      "C) The process of sorting and packaging final products for delivery",
      "D) The application of heat treatment to change material properties"
    ],
    answer: 1
  },
  {
    question: "What is the correct term for an atom that loses an electron and acquires a net positive charge?",
    options: [
      "A) Cation",
      "B) Anion",
      "C) Proton",
      "D) Neutron"
    ],
    answer: 0
  },
  {
    question: "What is the primary characteristic of die casting?",
    options: [
      "A) It is a cost-effective choice for low-quantity production.",
      "B) It is used to create large parts from materials like iron.",
      "C) Metal is injected into the mold under high pressure.",
      "D) It is primarily used for hard metals like iron and steel."
    ],
    answer: 2
  },
  {
    question: "The \"Stone Age\" is associated with the use of which natural materials?",
    options: [
      "A) Bronze and alloys",
      "B) Stone, clay, skins, and wood",
      "C) Iron, steel, and copper",
      "D) Thermoplastics and rubbers"
    ],
    answer: 1
  },
  {
    question: "What is the main property of a material bonded with covalent bonds, such as silicon?",
    options: [
      "A) Low melting point",
      "B) Good electrical conductivity",
      "C) Brittleness",
      "D) High ductility"
    ],
    answer: 2
  },
  {
    question: "What is the definition of Material Engineering?",
    options: [
      "A) It concerns itself with the study of the behavior and properties of materials, their processing, production, and efficient use in engineering applications.",
      "B) It focuses on the chemical composition of materials.",
      "C) It deals with the discovery and design of new materials.",
      "D) It studies the relationship between structure and properties of materials."
    ],
    answer: 0
  },
  {
    question: "What is a key characteristic of High-Strength, Low-Alloy (HSLA) steels?",
    options: [
      "A) They contain more than 10 wt% of alloying elements.",
      "B) They are less resistant to corrosion than plain carbon steels.",
      "C) They have lower strengths than plain low-carbon steels.",
      "D) They may be strengthened by heat treatment."
    ],
    answer: 3
  },
  {
    question: "What property is associated with ionic and covalent bonds due to their high bond strength?",
    options: [
      "A) High melting point, high strength, and hardness",
      "B) Good thermal conductivity",
      "C) Good electrical conductivity",
      "D) Low melting point"
    ],
    answer: 0
  },
  {
    question: "According to the documents, what is a key disadvantage of many ferrous alloys?",
    options: [
      "A) They are not weldable.",
      "B) They have very low tensile strength.",
      "C) They are susceptible to corrosion.",
      "D) They cannot be heat-treated."
    ],
    answer: 2
  },
  {
    question: "What do Group 0 elements in the periodic table have?",
    options: [
      "A) Half-filled electron shells",
      "B) No electrons in their shells",
      "C) One electron greater than a filled electron shell",
      "D) Filled electron shells"
    ],
    answer: 3
  },
  {
    question: "What is the definition of a \"material\" as a substance?",
    options: [
      "A) A substance that is always a liquid.",
      "B) A substance (most often a solid) intended for a certain application.",
      "C) A substance used to create other substances.",
      "D) A substance that must be a metal or alloy."
    ],
    answer: 1
  },
  {
    question: "Which material is primarily die-cast?",
    options: [
      "A) Steel",
      "B) Iron",
      "C) Stone",
      "D) Copper"
    ],
    answer: 3
  },
  {
    question: "The Bronze Age began around 3000 BC with the discovery of which alloying process?",
    options: [
      "A) Alloying steel with carbon",
      "B) Alloying stone with clay",
      "C) Alloying copper to make it harder",
      "D) Alloying iron with copper"
    ],
    answer: 2
  },
  {
    question: "What is the purpose of a \"pattern\" in sand casting?",
    options: [
      "A) To produce internal features of the part.",
      "B) To form the mold cavity in the sand.",
      "C) To inject molten metal into the mold.",
      "D) To increase the fluidity of the metal."
    ],
    answer: 1
  },
  {
    question: "What is the primary characteristic of low-carbon steels?",
    options: [
      "A) They have extremely high strength and hardness.",
      "B) They contain a high concentration of alloying elements.",
      "C) They are very expensive to produce.",
      "D) They are unresponsive to heat treatments intended to form martensite."
    ],
    answer: 3
  },
  {
    question: "What does \"fluidity\" refer to in the context of casting?",
    options: [
      "A) The speed at which a molten metal cools.",
      "B) The measure of how well a liquid will flow and fill a mold cavity.",
      "C) The ease with which a metal can be poured.",
      "D) The ability of a material to withstand high pressure."
    ],
    answer: 1
  },
  {
    question: "What is the primary focus of Materials Science?",
    options: [
      "A) The economic extraction of minerals",
      "B) The discovery and design of new materials",
      "C) The study of the periodic table",
      "D) The study of material properties in thin sections"
    ],
    answer: 1
  },
  {
    question: "What is a \"core\" in sand casting used for?",
    options: [
      "A) To produce internal features like holes or passages",
      "B) To increase the metal's melting temperature",
      "C) To form the external shape of the mold",
      "D) To compensate for metal contraction upon cooling"
    ],
    answer: 0
  },
  {
    question: "Which of the following is an example of a low-carbon steel application?",
    options: [
      "A) High-rise building support columns",
      "B) Structural shapes that are heat-treated for strength",
      "C) Pressure vessels",
      "D) Automobile body components"
    ],
    answer: 3
  },
  {
    question: "What is a characteristic of metallic bonds?",
    options: [
      "A) They are non-directional",
      "B) They result in materials with poor electrical conductivity",
      "C) They are formed by atoms sharing electrons",
      "D) Electrons are fixed in one position"
    ],
    answer: 0
  },
  {
    question: "What is the correct term for an atom that accepts electrons and acquires a net negative charge?",
    options: [
      "A) Cation",
      "B) Anion",
      "C) Neutron",
      "D) Proton"
    ],
    answer: 1
  },
  {
    question: "What is the carbon concentration range for medium-carbon steels?",
    options: [
      "A) Less than 0.25 wt% C",
      "B) Exactly 1.0 wt% C",
      "C) Between 0.25 and 0.60 wt% C",
      "D) Greater than 1.0 wt% C"
    ],
    answer: 2
  },
  {
    question: "Which of the following describes the definition of manufacturing processes?",
    options: [
      "A) The act of inspecting and certifying a finished product",
      "B) Technical methods to change raw materials from their raw form to the final product",
      "C) The process of sorting and packaging final products for delivery",
      "D) The application of heat treatment to change material properties"
    ],
    answer: 1
  },
  {
    question: "Which type of bond is characterized by a \"sea\" of electrons surrounding positively charged cores?",
    options: [
      "A) Van der Waals bond",
      "B) Covalent bond",
      "C) Ionic bond",
      "D) Metallic bond"
    ],
    answer: 3
  },
  {
    question: "In a covalent bond, what do atoms do to achieve bonding?",
    options: [
      "A) They give up valence electrons to form an electron sea.",
      "B) They share electrons among two or more atoms.",
      "C) They acquire a net positive or negative charge.",
      "D) They transfer electrons from one atom to another."
    ],
    answer: 1
  },
  {
    question: "What is the purpose of a \"pattern\" in sand casting?",
    options: [
      "A) To produce internal features of the part.",
      "B) To form the mold cavity in the sand.",
      "C) To inject molten metal into the mold.",
      "D) To increase the fluidity of the metal."
    ],
    answer: 1
  },
  {
    question: "What is the primary characteristic of low-carbon steels?",
    options: [
      "A) They have extremely high strength and hardness.",
      "B) They contain a high concentration of alloying elements.",
      "C) They are very expensive to produce.",
      "D) They are unresponsive to heat treatments intended to form martensite."
    ],
    answer: 3
  },
  {
    question: "Which of the following is an example of a low-carbon steel application?",
    options: [
      "A) High-rise building support columns",
      "B) Structural shapes that are heat-treated for strength",
      "C) Pressure vessels",
      "D) Automobile body components"
    ],
    answer: 3
  },
  {
    question: "What is a \"core\" in sand casting used for?",
    options: [
      "A) To produce internal features like holes or passages",
      "B) To increase the metal's melting temperature",
      "C) To form the external shape of the mold",
      "D) To compensate for metal contraction upon cooling"
    ],
    answer: 0
  },
  {
    question: "The Bronze Age began around 3000 BC with the discovery of which alloying process?",
    options: [
      "A) Alloying steel with carbon",
      "B) Alloying stone with clay",
      "C) Alloying copper to make it harder",
      "D) Alloying iron with copper"
    ],
    answer: 2
  },
  {
    question: "What does \"fluidity\" refer to in the context of casting?",
    options: [
      "A) The speed at which a molten metal cools.",
      "B) The measure of how well a liquid will flow and fill a mold cavity.",
      "C) The ease with which a metal can be poured.",
      "D) The ability of a material to withstand high pressure."
    ],
    answer: 1
  },
  {
    question: "What is the definition of Material Engineering?",
    options: [
      "A) It concerns itself with the study of the behavior and properties of materials, their processing, production, and efficient use in engineering applications.",
      "B) It focuses on the chemical composition of materials.",
      "C) It deals with the discovery and design of new materials.",
      "D) It studies the relationship between structure and properties of materials."
    ],
    answer: 0
  },
  {
    question: "What property is associated with ionic and covalent bonds due to their high bond strength?",
    options: [
      "A) High melting point, high strength, and hardness",
      "B) Good thermal conductivity",
      "C) Good electrical conductivity",
      "D) Low melting point"
    ],
    answer: 0
  },
  {
    question: "What is a key characteristic of High-Strength, Low-Alloy (HSLA) steels?",
    options: [
      "A) They contain more than 10 wt% of alloying elements",
      "B) They are less resistant to corrosion than plain carbon steels",
      "C) They have lower strengths than plain low-carbon steels",
      "D) They may be strengthened by heat treatment"
    ],
    answer: 3
  },
  {
    question: "What is the primary focus of Materials Science?",
    options: [
      "A) The economic extraction of minerals",
      "B) The discovery and design of new materials",
      "C) The study of the periodic table",
      "D) The study of material properties in thin sections"
    ],
    answer: 1
  },
  {
    question: "What is the definition of \"castability\"?",
    options: [
      "A) The ease with which a metal can be poured into a mold to obtain a casting free of defects.",
      "B) The temperature at which a material solidifies.",
      "C) The amount of energy required to melt a metal.",
      "D) The measure of how well a liquid will flow and fill a mold cavity."
    ],
    answer: 0
  },
  {
    question: "What is the correct term for an atom that loses an electron and acquires a net positive charge?",
    options: [
      "A) Cation",
      "B) Anion",
      "C) Proton",
      "D) Neutron"
    ],
    answer: 0
  },
  {
    question: "What is the primary characteristic of die casting?",
    options: [
      "A) It is a cost-effective choice for low-quantity production.",
      "B) It is used to create large parts from materials like iron.",
      "C) Metal is injected into the mold under high pressure.",
      "D) It is primarily used for hard metals like iron and steel."
    ],
    answer: 2
  },
  {
    question: "The \"Stone Age\" is associated with the use of which natural materials?",
    options: [
      "A) Bronze and alloys",
      "B) Stone, clay, skins, and wood",
      "C) Iron, steel, and copper",
      "D) Thermoplastics and rubbers"
    ],
    answer: 1
  },
  {
    question: "What is the main property of a material bonded with covalent bonds, such as silicon?",
    options: [
      "A) Low melting point",
      "B) Good electrical conductivity",
      "C) Brittleness",
      "D) High ductility"
    ],
    answer: 2
  },
  {
    question: "According to the documents, what is a key disadvantage of many ferrous alloys?",
    options: [
      "A) They are not weldable.",
      "B) They have very low tensile strength.",
      "C) They are susceptible to corrosion.",
      "D) They cannot be heat-treated."
    ],
    answer: 2
  },
  {
    question: "What do Group 0 elements in the periodic table have?",
    options: [
      "A) Half-filled electron shells",
      "B) No electrons in their shells",
      "C) One electron greater than a filled electron shell",
      "D) Filled electron shells"
    ],
    answer: 3
  },
  {
    question: "What is the definition of a \"material\" as a substance?",
    options: [
      "A) A substance that is always a liquid.",
      "B) A substance (most often a solid) intended for a certain application.",
      "C) A substance used to create other substances.",
      "D) A substance that must be a metal or alloy."
    ],
    answer: 1
  },
  {
    question: "Which material is primarily die-cast?",
    options: [
      "A) Steel",
      "B) Iron",
      "C) Stone",
      "D) Copper"
    ],
    answer: 3
  },
  {
    question: "What is a characteristic of metallic bonds?",
    options: [
      "A) They are non-directional",
      "B) They result in materials with poor electrical conductivity",
      "C) They are formed by atoms sharing electrons",
      "D) Electrons are fixed in one position"
    ],
    answer: 0
  },
  {
    question: "What is the correct term for an atom that accepts electrons and acquires a net negative charge?",
    options: [
      "A) Cation",
      "B) Anion",
      "C) Neutron",
      "D) Proton"
    ],
    answer: 1
  },
  {
    question: "What is the carbon concentration range for medium-carbon steels?",
    options: [
      "A) Less than 0.25 wt% C",
      "B) Exactly 1.0 wt% C",
      "C) Between 0.25 and 0.60 wt% C",
      "D) Greater than 1.0 wt% C"
    ],
    answer: 2
  },
  {
    question: "Which of the following describes the definition of manufacturing processes?",
    options: [
      "A) The act of inspecting and certifying a finished product",
      "B) Technical methods to change raw materials from their raw form to the final product",
      "C) The process of sorting and packaging final products for delivery",
      "D) The application of heat treatment to change material properties"
    ],
    answer: 1
  }
];
// KaTeX rendering function
  function renderLatex(str) {
    if (!str) return str;

    // Render LaTeX between $...$
    return str.replace(/\$(.*?)\$/g, (match, latex) => {
      try {
        return katex.renderToString(latex, {
          throwOnError: false,
          displayMode: false
        });
      } catch (e) {
        console.error("KaTeX error:", e);
        return match;
      }
    });
  }

  // UI Elements
  const questionNav = document.getElementById('question-nav');
  const startScreen = document.getElementById('start-screen');
  const startQuizBtn = document.getElementById('start-quiz-btn');
  const quizContainer = document.getElementById('quiz-container');
  const resultContainer = document.getElementById('result-container');
  const app = document.getElementById('app');
  const timerEl = document.getElementById('timer');
  const questionNumberEl = document.getElementById('question-number');
  const questionTextEl = document.getElementById('question-text');
  const optionsContainer = document.getElementById('options-container');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const submitBtn = document.getElementById('submit-btn');
  const scoreEl = document.getElementById('score');
  const resultsList = document.getElementById('results-list');
  const retryBtn = document.getElementById('retry-btn');
  const customConfirm = document.getElementById('customConfirm');
  const confirmYes = document.getElementById('confirmYes');
  const confirmNo = document.getElementById('confirmNo');
  const reloadConfirm = document.getElementById('reload-confirm');
  const reloadSubmit = document.getElementById('reload-submit');
  const reloadCancel = document.getElementById('reload-cancel');

  // Question count elements
  const questionCountInput = document.getElementById('question-count');
  const countSlider = document.getElementById('count-slider');
  const decreaseBtn = document.getElementById('decrease-btn');
  const increaseBtn = document.getElementById('increase-btn');
  const countDisplay = document.getElementById('count-display');
  const timeEstimate = document.getElementById('time-estimate');

  // Quiz variables
  let TOTAL_QUESTIONS = 10; // Default value
  let timeRemaining; // Will be set dynamically based on question count
  let selectedQuestions = [];
  let currentQuestionIndex = 0;
  let userAnswers = [];
  let timer;
  let quizInProgress = false;

  // Update question count display
  function updateCountDisplay() {
    countDisplay.textContent = `${TOTAL_QUESTIONS} questions`;
    questionCountInput.value = TOTAL_QUESTIONS;
    countSlider.value = TOTAL_QUESTIONS;
    // Show estimated time as 45 seconds per question
    const totalSeconds = TOTAL_QUESTIONS * 45;
    const min = Math.floor(totalSeconds / 60);
    const sec = totalSeconds % 60;
    let timeStr = '';
    if (min > 0) {
      timeStr += `${min} minute${min !== 1 ? 's' : ''}`;
      if (sec > 0) timeStr += ` ${sec} second${sec !== 1 ? 's' : ''}`;
    } else {
      timeStr = `${sec} second${sec !== 1 ? 's' : ''}`;
    }
    timeEstimate.textContent = `Estimated time: ${timeStr} (${TOTAL_QUESTIONS} × 45 sec)`;
  }   

  // Initialize question count controls
  decreaseBtn.addEventListener('click', () => {
    if (TOTAL_QUESTIONS > 10) {
      TOTAL_QUESTIONS = Math.max(10, TOTAL_QUESTIONS - 5);
      updateCountDisplay();
    }
  });

  increaseBtn.addEventListener('click', () => {
    if (TOTAL_QUESTIONS < 100) {
      TOTAL_QUESTIONS = Math.min(100, TOTAL_QUESTIONS + 5);
      updateCountDisplay();
    }
  });

  questionCountInput.addEventListener('change', () => {
    let value = parseInt(questionCountInput.value);
    if (isNaN(value) || value < 10) value = 10;
    if (value > 100) value = 100;
    TOTAL_QUESTIONS = value;
    updateCountDisplay();
  });

  countSlider.addEventListener('input', () => {
    TOTAL_QUESTIONS = parseInt(countSlider.value);
    updateCountDisplay();
  });

  // Initialize quiz
  startQuizBtn.addEventListener('click', () => {
    startScreen.style.display = 'none';
    app.style.display = 'flex';
    initQuiz();
  });

  function initQuiz() {
    // Set time limit based on number of questions (45s per question)
    timeRemaining = TOTAL_QUESTIONS * 45;
    updateTimerDisplay();

    // Shuffle and pick questions
    const shuffled = shuffleArray([...questions]);
    selectedQuestions = shuffled.slice(0, Math.min(TOTAL_QUESTIONS, questions.length));

    currentQuestionIndex = 0;
    userAnswers = new Array(selectedQuestions.length).fill(null);

    showQuestion();

    prevBtn.disabled = true;
    nextBtn.disabled = false;
    submitBtn.disabled = true;

    quizContainer.style.display = 'flex';
    resultContainer.style.display = 'none';

    startTimer();
    
    quizInProgress = true;
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    // Focus on the quiz container for keyboard events
    document.body.focus();
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
      timeRemaining--;
      updateTimerDisplay();
      if (timeRemaining <= 0) {
        clearInterval(timer);
        finishQuiz();
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    let min = Math.floor(timeRemaining / 60);
    let sec = timeRemaining % 60;
    timerEl.textContent = `Time Left: ${min.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`;
  }

  function renderQuestionNav() {
    questionNav.innerHTML = '';
    selectedQuestions.forEach((_, i) => {
      const btn = document.createElement('button');
      btn.textContent = i + 1;
      if (userAnswers[i] !== null) btn.classList.add('answered');
      if (i === currentQuestionIndex) btn.classList.add('current');
      btn.addEventListener('click', () => {
        currentQuestionIndex = i;
        showQuestion();
        renderQuestionNav();
      });
      questionNav.appendChild(btn);
    });
  }

  function showQuestion() {
    const q = selectedQuestions[currentQuestionIndex];
    questionNumberEl.textContent = `Question ${currentQuestionIndex + 1} of ${selectedQuestions.length}`;
    
    // Render LaTeX in question
    questionTextEl.innerHTML = renderLatex(q.question);

    optionsContainer.innerHTML = '';

    q.options.forEach((optionText, i) => {
      const optionDiv = document.createElement('div');
      optionDiv.className = 'option';
      
      const textSpan = document.createElement('span');
      textSpan.innerHTML = renderLatex(String.fromCharCode(65 + i) + ". " + optionText);
      optionDiv.appendChild(textSpan);
      
      const keyBadge = document.createElement('div');
      keyBadge.className = 'key-badge';
      keyBadge.textContent = String.fromCharCode(65 + i);
      optionDiv.appendChild(keyBadge);

      if(userAnswers[currentQuestionIndex] === i) {
        optionDiv.classList.add('selected');
      }

      optionDiv.addEventListener('click', () => {
        selectOption(i);
      });

      optionsContainer.appendChild(optionDiv);
    });

    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.disabled = currentQuestionIndex === selectedQuestions.length - 1;
    submitBtn.disabled = userAnswers[currentQuestionIndex] === null;

    renderQuestionNav();
  }

  function selectOption(optionIndex) {
    userAnswers[currentQuestionIndex] = optionIndex;
    
    Array.from(optionsContainer.children).forEach((optEl, idx) => {
      optEl.classList.toggle('selected', idx === optionIndex);
    });

    submitBtn.disabled = false;
    renderQuestionNav();
  }

  // Navigation buttons
  prevBtn.addEventListener('click', () => {
    if(currentQuestionIndex > 0) {
      currentQuestionIndex--;
      showQuestion();
    }
  });

  nextBtn.addEventListener('click', () => {
    if(currentQuestionIndex < selectedQuestions.length - 1) {
      currentQuestionIndex++;
      showQuestion();
    }
  });

  // Submit button shows custom confirmation dialog
  submitBtn.addEventListener('click', () => {
    customConfirm.style.display = 'flex';
  });

  // Confirm dialog buttons
  confirmYes.addEventListener('click', () => {
    customConfirm.style.display = 'none';
    finishQuiz();
  });

  confirmNo.addEventListener('click', () => {
    customConfirm.style.display = 'none';
  });

  // Reload confirmation handlers
  function handleBeforeUnload(e) {
    if (quizInProgress) {
      e.preventDefault();
      e.returnValue = '';
      reloadConfirm.style.display = 'flex';
      return '';
    }
  }

  reloadSubmit.addEventListener('click', () => {
    reloadConfirm.style.display = 'none';
    quizInProgress = false;
    window.removeEventListener('beforeunload', handleBeforeUnload);
    finishQuiz();
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  });

  reloadCancel.addEventListener('click', () => {
    reloadConfirm.style.display = 'none';
  });

  function finishQuiz() {
    clearInterval(timer);
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'flex';
    
    quizInProgress = false;
    window.removeEventListener('beforeunload', handleBeforeUnload);

    let correctCount = 0;
    resultsList.innerHTML = '';

    selectedQuestions.forEach((q, idx) => {
      const userAnsIndex = userAnswers[idx];
      const isCorrect = userAnsIndex === q.answer;
      if (isCorrect) correctCount++;

      const userAnswerText = userAnsIndex !== null ? q.options[userAnsIndex] : 'No Answer';
      const correctAnswerText = q.options[q.answer];

      const div = document.createElement('div');
      div.className = 'result-question';
      div.innerHTML = `
        <div><strong>Q${idx + 1}:</strong> ${renderLatex(q.question)}</div>
        <div>Your answer: <span class="${isCorrect ? 'correct' : 'wrong'}">${renderLatex(userAnswerText)}</span></div>
        ${isCorrect ? '' : `<div>Correct answer: <span class="correct">${renderLatex(correctAnswerText)}</span></div>`}
      `;
      resultsList.appendChild(div);
    });

    scoreEl.textContent = `You answered ${correctCount} out of ${selectedQuestions.length} questions correctly.`;
    
    let comment = "";
    const percentage = Math.round((correctCount / selectedQuestions.length) * 100);
    
    if (percentage >= 80) comment = "Excellent work! You have a strong grasp of this material.";
    else if (percentage >= 60) comment = "Good effort! Review the incorrect answers to improve.";
    else comment = "Keep studying! Focus on the topics you missed.";
    
    scoreEl.innerHTML += `<div style="margin-top:10px;font-weight:normal">${comment}</div>`;
  }

  retryBtn.addEventListener('click', () => {
    initQuiz();
  });

  // Toggle mobile menu
  document.querySelector('.menu-toggle').addEventListener('click', function () {
    document.querySelector('.nav-links').classList.toggle('show');
  });

  // Initialize count display when page loads
  updateCountDisplay();

  // Keyboard shortcuts - FIXED
  document.addEventListener('keydown', function(e) {
    // Don't process keyboard shortcuts if user is typing in an input
    if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;
    
    const key = e.key.toUpperCase();
    
    // Handle keyboard shortcuts based on what's visible on screen
    if (startScreen.style.display !== 'none') {
      // Start screen is visible
      if (key === 'ENTER') {
        e.preventDefault();
        startQuizBtn.click();
      }
      return;
    }
    
    if (customConfirm.style.display === 'flex') {
      // Custom confirmation dialog is visible
      if (key === 'Y' || key === 'ENTER') {
        e.preventDefault();
        confirmYes.click();
      } else if (key === 'N' || key === 'ESCAPE') {
        e.preventDefault();
        confirmNo.click();
      }
      return;
    }
    
    if (reloadConfirm.style.display === 'flex') {
      // Reload confirmation dialog is visible
      if (key === 'ENTER') {
        e.preventDefault();
        reloadSubmit.click();
      } else if (key === 'ESCAPE') {
        e.preventDefault();
        reloadCancel.click();
      }
      return;
    }
    
    if (resultContainer.style.display === 'flex') {
      // Results screen is visible
      if (key === 'ENTER' || key === 'R') {
        e.preventDefault();
        retryBtn.click();
      }
      return;
    }
    
    if (quizContainer.style.display === 'flex' && quizInProgress) {
      // Quiz is in progress
      // Option selection (A–E)
      if (key >= 'A' && key <= 'E') {
        const optionIndex = key.charCodeAt(0) - 65;
        const currentOptions = selectedQuestions[currentQuestionIndex]?.options || [];
        if (optionIndex < currentOptions.length) {
          e.preventDefault();
          selectOption(optionIndex);
        }
        return;
      }

      // Navigation
      switch (key) {
        case 'P':
          e.preventDefault();
          if (!prevBtn.disabled) prevBtn.click();
          break;
        case 'N':
          e.preventDefault();
          if (!nextBtn.disabled) nextBtn.click();
          break;
        case 'S':
          e.preventDefault();
          if (!submitBtn.disabled) submitBtn.click();
          break;
      }
    }
  });
