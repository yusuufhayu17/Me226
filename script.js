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
  },
   {
    question: "What is the primary focus of materials science?",
    options: [
      "A) Applying knowledge to produce objects",
      "B) The economic extraction of metals",
      "C) The relationship between processing and performance",
      "D) The relationship between structures and properties"
    ],
    answer: 3
  },
  {
    question: "Materials engineering is best described as:",
    options: [
      "A) Studying the atomic structure of materials",
      "B) Applying material science to produce objects with predetermined properties",
      "C) Classifying materials into metals, ceramics, and polymers",
      "D) Analyzing the stress-strain curve of a material"
    ],
    answer: 1
  },
  {
    question: "The sequence that summarizes the structure-property relationship is:",
    options: [
      "A) Structure → Properties → Performance → Processing",
      "B) Properties → Performance → Processing → Structure",
      "C) Processing → Structure → Properties → Performance",
      "D) Performance → Processing → Properties → Structure"
    ],
    answer: 2
  },
  {
    question: "Which of the following is NOT a basic classification of solid materials?",
    options: [
      "A) Metals",
      "B) Ceramics",
      "C) Polymers",
      "D) Ore"
    ],
    answer: 3
  },
  {
    question: "Metals are generally characterized by being:",
    options: [
      "A) Brittle and insulative",
      "B) Stiff, strong, ductile, and fracture-resistant",
      "C) Pliable and have low density",
      "D) Transparent and non-magnetic"
    ],
    answer: 1
  },
  {
    question: "Ceramics are typically compounds between:",
    options: [
      "A) Two metallic elements",
      "B) Two non-metallic elements",
      "C) Metallic and non-metallic elements",
      "D) Organic polymers"
    ],
    answer: 2
  },
  {
    question: "A key property of most polymers is:",
    options: [
      "A) High electrical conductivity",
      "B) High density",
      "C) Pliability and low density",
      "D) High melting point"
    ],
    answer: 2
  },
  {
    question: "The main goal of creating composite materials is to:",
    options: [
      "A) Reduce the cost of manufacturing",
      "B) Achieve a combination of properties not possible with a single material",
      "C) Make materials that are entirely recyclable",
      "D) Increase the electrical conductivity of polymers"
    ],
    answer: 1
  },
  {
    question: "An example of a composite material is:",
    options: [
      "A) Aluminum",
      "B) Silicon Carbide (SiC)",
      "C) Fiberglass",
      "D) Polyethylene"
    ],
    answer: 2
  },
  {
    question: "The atomic number (Z) represents the number of:",
    options: [
      "A) Protons and neutrons",
      "B) Protons",
      "C) Neutrons",
      "D) Electrons"
    ],
    answer: 1
  },
  {
    question: "The mass number (A) represents the number of:",
    options: [
      "A) Protons and neutrons",
      "B) Protons",
      "C) Neutrons",
      "D) Electrons"
    ],
    answer: 0
  },
  {
    question: "The Pauli exclusion principle states that:",
    options: [
      "A) Energy levels are quantized",
      "B) Electrons in the same state must have opposite spins",
      "C) Atoms bond to achieve a stable octet",
      "D) Opposite charges attract"
    ],
    answer: 1
  },
  {
    question: "Atoms gain stability when their electron orbitals are:",
    options: [
      "A) Empty",
      "B) Half-filled or fully filled",
      "C) Just half-filled",
      "D) Just fully filled"
    ],
    answer: 1
  },
  {
    question: "Which quantum number describes the shape of an orbital?",
    options: [
      "A) Principal (n)",
      "B) Azimuthal (l)",
      "C) Magnetic (m)",
      "D) Spin (s)"
    ],
    answer: 1
  },
  {
    question: "At equilibrium interatomic separation:",
    options: [
      "A) Only the attractive force is present",
      "B) Only the repulsive force is present",
      "C) The net force is zero",
      "D) The bonding energy is at its maximum"
    ],
    answer: 2
  },
  {
    question: "The repulsive force between atoms becomes significant when:",
    options: [
      "A) Atoms are very far apart",
      "B) The outer electron shells begin to overlap",
      "C) One atom donates an electron",
      "D) The temperature is very low"
    ],
    answer: 1
  },
  {
    question: "A bond formed by the transfer of electrons from a metal to a non-metal is a(n):",
    options: [
      "A) Covalent bond",
      "B) Ionic bond",
      "C) Metallic bond",
      "D) Vander Waals bond"
    ],
    answer: 1
  },
  {
    question: "Ionic bonds are characterized by:",
    options: [
      "A) High ductility and electrical conductivity",
      "B) Low bond energy and low melting points",
      "C) High bond energy and high melting points",
      "D) Non-directional bonding and a sea of electrons"
    ],
    answer: 2
  },
  {
    question: "A covalent bond involves:",
    options: [
      "A) Transfer of electrons",
      "B) Sharing of electrons",
      "C) A sea of delocalized electrons",
      "D) Attraction between polar molecules"
    ],
    answer: 1
  },
  {
    question: "Silicon (Si) typically forms how many covalent bonds?",
    options: [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 4"
    ],
    answer: 3
  },
  {
    question: "The shape of a silicon crystal lattice with covalent bonds is:",
    options: [
      "A) Linear",
      "B) Trigonal planar",
      "C) Tetrahedral",
      "D) Octahedral"
    ],
    answer: 2
  },
  {
    question: "Metallic bonding is best described as an electrostatic attraction between:",
    options: [
      "A) Positive and negative ions",
      "B) Two polar molecules",
      "C) A sea of electrons and positive ion cores",
      "D) Two atoms sharing a pair of electrons"
    ],
    answer: 2
  },
  {
    question: "The free-moving electrons in metallic bonds result in:",
    options: [
      "A) Brittle failure",
      "B) Good electrical and thermal conductivity",
      "C) High transparency",
      "D) Low density"
    ],
    answer: 1
  },
  {
    question: "Vander Waals bonds are a type of:",
    options: [
      "A) Primary bond",
      "B) Ionic bond",
      "C) Secondary bond",
      "D) Metallic bond"
    ],
    answer: 2
  },
  {
    question: "Which bond is the weakest?",
    options: [
      "A) Ionic",
      "B) Covalent",
      "C) Metallic",
      "D) Vander Waals"
    ],
    answer: 3
  },
  {
    question: "A fluctuating induced dipole bond is caused by:",
    options: [
      "A) Permanent polarization of molecules",
      "B) The random movement of electrons creating a temporary dipole",
      "C) The transfer of electrons",
      "D) The sharing of electrons"
    ],
    answer: 1
  },
  {
    question: "A collection of points arranged in a periodic pattern is called a:",
    options: [
      "A) Unit cell",
      "B) Crystal",
      "C) Lattice",
      "D) Compound"
    ],
    answer: 2
  },
  {
    question: "The basic building block of a crystal lattice is the:",
    options: [
      "A) Atom",
      "B) Molecule",
      "C) Unit cell",
      "D) Lattice point"
    ],
    answer: 2
  },
  {
    question: "How many Bravais lattices are there?",
    options: [
      "A) 7",
      "B) 14",
      "C) 3",
      "D) 4"
    ],
    answer: 1
  },
  {
    question: "The crystal system where a=b=c and α=β=γ=90° is:",
    options: [
      "A) Tetragonal",
      "B) Orthorhombic",
      "C) Cubic",
      "D) Hexagonal"
    ],
    answer: 2
  },
  {
    question: "The number of atoms per unit cell in a Simple Cubic structure is:",
    options: [
      "A) 1",
      "B) 2",
      "C) 4",
      "D) 8"
    ],
    answer: 0
  },
  {
    question: "The number of atoms per unit cell in a Body-Centered Cubic (BCC) structure is:",
    options: [
      "A) 1",
      "B) 2",
      "C) 4",
      "D) 8"
    ],
    answer: 1
  },
  {
    question: "A material that returns to its original shape after a load is removed is exhibiting:",
    options: [
      "A) Plastic deformation",
      "B) Elastic deformation",
      "C) Viscoelastic behavior",
      "D) Ductility"
    ],
    answer: 1
  },
  {
    question: "A permanent, non-reversible change in shape is called:",
    options: [
      "A) Elastic deformation",
      "B) Plastic deformation",
      "C) Strain hardening",
      "D) Yielding"
    ],
    answer: 1
  },
  {
    question: "The ability of a material to undergo deformation is known as:",
    options: [
      "A) Strength",
      "B) Hardness",
      "C) Ductility",
      "D) Stiffness"
    ],
    answer: 2
  },
  {
    question: "The maximum stress on a stress-strain curve is the:",
    options: [
      "A) Yield strength",
      "B) Fracture point",
      "C) Ultimate tensile strength",
      "D) Elastic limit"
    ],
    answer: 2
  },
  {
    question: "The point where a material begins to fail is known as:",
    options: [
      "A) Ultimate tensile strength",
      "B) Fracture point",
      "C) Yielding",
      "D) Elastic limit"
    ],
    answer: 2
  },
  {
    question: "Which manufacturing process involves pouring liquid material into a mold?",
    options: [
      "A) Forging",
      "B) Machining",
      "C) Casting",
      "D) Extrusion"
    ],
    answer: 2
  },
  {
    question: "Sand casting is characterized by being:",
    options: [
      "A) Expensive but with low defect rates",
      "B) Cheap but with a high defect rate",
      "C) Used only for high melting point metals",
      "D) A type of die casting"
    ],
    answer: 1
  },
  {
    question: "Die casting is typically used for:",
    options: [
      "A) Large, simple shapes",
      "B) Metals with high melting points",
      "C) Metals with low melting points and intricate shapes",
      "D) Creating ceramic parts"
    ],
    answer: 2
  },
  {
    question: "Which of the following is a common casting defect?",
    options: [
      "A) Work hardening",
      "B) Shrinkage",
      "C) Yielding",
      "D) Ductility"
    ],
    answer: 1
  },
  {
    question: "Smart materials are defined as those that:",
    options: [
      "A) Are always made from composites",
      "B) Can respond to external stimuli",
      "C) Have high intelligence quotients",
      "D) Are used in computer chips"
    ],
    answer: 1
  },
  {
    question: "A piezoelectric ceramic generates what when stress is applied?",
    options: [
      "A) Heat",
      "B) Light",
      "C) An electric voltage",
      "D) A magnetic field"
    ],
    answer: 2
  },
  {
    question: "A shape memory alloy can:",
    options: [
      "A) Remember its original shape and return to it upon heating",
      "B) Change its shape based on light exposure",
      "C) Conduct electricity with zero resistance",
      "D) Be stretched infinitely without deforming"
    ],
    answer: 0
  },
  {
    question: "An example of a shape memory alloy is:",
    options: [
      "A) Aluminum-Silicon",
      "B) Iron-Carbon (Steel)",
      "C) Nickel-Titanium",
      "D) Copper-Zinc"
    ],
    answer: 2
  },
  {
    question: "In the periodic table, elements in the same period have the same:",
    options: [
      "A) Number of valence electrons",
      "B) Number of electron shells",
      "C) Atomic mass",
      "D) Chemical properties"
    ],
    answer: 1
  },
  {
    question: "In metallic bonding, the valence electrons are best described as:",
    options: [
      "A) Tightly bound to their parent atom",
      "B) Transferred to a non-metal atom",
      "C) A sea of delocalized electrons",
      "D) Shared in a fixed pair between two atoms"
    ],
    answer: 2
  },
  {
    question: "Materials with covalent bonds are typically:",
    options: [
      "A) Good electrical conductors",
      "B) Ductile and malleable",
      "C) Brittle and poor conductors",
      "D) Good thermal insulators but electrical conductors"
    ],
    answer: 2
  },
  {
    question: "The bond energy range for metallic bonds is approximately:",
    options: [
      "A) 10-50 KJ/mole",
      "B) 65-850 KJ/mole",
      "C) 450-1000 KJ/mole",
      "D) 1000-1500 KJ/mole"
    ],
    answer: 1
  },
  {
    question: "A polar molecule-induced dipole bond involves a molecule like:",
    options: [
      "A) O₂",
      "B) N₂",
      "C) H₂O",
      "D) He"
    ],
    answer: 2
  },
  {
    question: "Which crystal system has all angles equal to 90° but all side lengths different (a≠b≠c)?",
    options: [
      "A) Cubic",
      "B) Tetragonal",
      "C) Orthorhombic",
      "D) Triclinic"
    ],
    answer: 2
  },
  {
    question: "The hexagonal crystal system has an angle γ equal to:",
    options: [
      "A) 90°",
      "B) 109°",
      "C) 120°",
      "D) 180°"
    ],
    answer: 2
  },
  {
    question: "Viscoelastic materials have behavior that depends on:",
    options: [
      "A) Temperature only",
      "B) The magnitude of load only",
      "C) Time and the cause of the load",
      "D) The electrical conductivity"
    ],
    answer: 2
  },
  {
    question: "The area under a stress-strain curve represents:",
    options: [
      "A) Stiffness",
      "B) Toughness",
      "C) Ductility",
      "D) Yield strength"
    ],
    answer: 1
  },
  {
    question: "Ore is best defined as:",
    options: [
      "A) A pure metal",
      "B) A liquid form of a metal in its impure form",
      "C) A type of ceramic",
      "D) A composite material"
    ],
    answer: 1
  },
  {
    question: "The electronic configuration for Carbon (C, atomic number 6) is:",
    options: [
      "A) 1s² 2s² 2p⁶",
      "B) 1s² 2s² 2p²",
      "C) 1s² 2s¹ 2p³",
      "D) 1s² 2s² 2p⁴"
    ],
    answer: 1
  },
  {
    question: "Physical properties are those that:",
    options: [
      "A) Involve a change in chemical composition",
      "B) Are visible to the naked eye",
      "C) Can only be viewed with a device",
      "D) Describe reactivity with other substances"
    ],
    answer: 1
  },
  {
    question: "Which of these is a traditional ceramic?",
    options: [
      "A) Silicon Nitride",
      "B) Alumina",
      "C) Clay (Porcelain)",
      "D) Fiberglass"
    ],
    answer: 2
  },
  {
    question: "Which element is ferromagnetic?",
    options: [
      "A) Aluminum (Al)",
      "B) Copper (Cu)",
      "C) Nickel (Ni)",
      "D) Silicon (Si)"
    ],
    answer: 2
  },
  {
    question: "The \"sea of electrons\" model is associated with which type of bonding?",
    options: [
      "A) Ionic",
      "B) Covalent",
      "C) Metallic",
      "D) Vander Waals"
    ],
    answer: 2
  },
  {
    question: "Which bond is directional?",
    options: [
      "A) Metallic",
      "B) Covalent",
      "C) Ionic",
      "D) Hydrogen"
    ],
    answer: 1
  },
  {
    question: "A face-centered cubic (FCC) unit cell has atoms at:",
    options: [
      "A) Corners only",
      "B) Corners and body center",
      "C) Corners and center of all faces",
      "D) Corners and center of two faces"
    ],
    answer: 2
  },
  {
    question: "The number of atoms in a Face-Centered Cubic (FCC) unit cell is:",
    options: [
      "A) 1",
      "B) 2",
      "C) 4",
      "D) 8"
    ],
    answer: 2
  },
  {
    question: "The bond angle in a silicon tetrahedron is:",
    options: [
      "A) 90°",
      "B) 104.5°",
      "C) 109°",
      "D) 120°"
    ],
    answer: 2
  },
  {
    question: "Which material is likely to be transparent?",
    options: [
      "A) A metal",
      "B) A polymer",
      "C) A ceramic (some types)",
      "D) A composite with metal matrix"
    ],
    answer: 2
  },
  {
    question: "Which property is most associated with polymers?",
    options: [
      "A) High thermal conductivity",
      "B) High density",
      "C) Low electrical conductivity",
      "D) Magnetic properties"
    ],
    answer: 2
  },
  {
    question: "The concept that energy exists in specific, discrete amounts is called:",
    options: [
      "A) Equilibrium",
      "B) Quantization",
      "C) Configuration",
      "D) Bonding"
    ],
    answer: 1
  },
  {
    question: "The magnetic quantum number (m) describes the:",
    options: [
      "A) Energy level",
      "B) Shape of the orbital",
      "C) Orientation of the orbital",
      "D) Spin of the electron"
    ],
    answer: 2
  },
  {
    question: "The net force between two atoms is given by:",
    options: [
      "A) F_net = F_A",
      "B) F_net = F_R",
      "C) F_net = F_A * F_R",
      "D) F_net = F_A + F_R"
    ],
    answer: 3
  },
  {
    question: "Which of these is NOT a primary bond?",
    options: [
      "A) Ionic",
      "B) Covalent",
      "C) Metallic",
      "D) Fluctuating Induced Dipole"
    ],
    answer: 3
  },
  {
    question: "Which ceramic oxide exhibits magnetic properties?",
    options: [
      "A) SiO₂",
      "B) Al₂O₃",
      "C) Fe₃O₄",
      "D) SiC"
    ],
    answer: 2
  },
  {
    question: "An alloy is a combination of:",
    options: [
      "A) A metal and a polymer",
      "B) Two or more substances using heat/chemicals",
      "C) A ceramic and a metal",
      "D) Two different polymers"
    ],
    answer: 1
  },
  {
    question: "Aluminum is valued in engineering for its:",
    options: [
      "A) High density and strength",
      "B) High ductility and strength-to-mass ratio",
      "C) Low cost and high melting point",
      "D) Magnetic properties"
    ],
    answer: 1
  },
  {
    question: "The principle that prevents two electrons in an atom from having the same four quantum numbers is the:",
    options: [
      "A) Heisenberg Uncertainty Principle",
      "B) Pauli Exclusion Principle",
      "C) Aufbau Principle",
      "D) Hund's Rule"
    ],
    answer: 1
  },
  {
    question: "The strength of a metallic bond increases with an increase in:",
    options: [
      "A) Atom size and bond strength",
      "B) Electrical resistance",
      "C) Number of delocalized electrons",
      "D) Transparency"
    ],
    answer: 0
  },
  {
    question: "A triclinic crystal system is defined by:",
    options: [
      "A) a=b=c, α=β=γ=90°",
      "B) a≠b≠c, α=β=γ=90°",
      "C) a≠b≠c, α≠β≠γ≠90°",
      "D) a=b≠c, α=β=90°, γ=120°"
    ],
    answer: 2
  },
  {
    question: "Which manufacturing process uses high pressure to force liquid metal into a mold?",
    options: [
      "A) Sand Casting",
      "B) Die Casting",
      "C) Forging",
      "D) Machining"
    ],
    answer: 1
  },
  {
    question: "A pinhole defect is associated with which process?",
    options: [
      "A) Heat Treatment",
      "B) Casting",
      "C) Welding",
      "D) Rolling"
    ],
    answer: 1
  },
  {
    question: "The valence electron configuration for Sodium (Na) is:",
    options: [
      "A) 3s¹",
      "B) 3s²",
      "C) 2s² 2p⁶",
      "D) 3p¹"
    ],
    answer: 0
  },
  {
    question: "Which quantum number defines the general energy and size of an electron orbital?",
    options: [
      "A) n",
      "B) l",
      "C) m",
      "D) s"
    ],
    answer: 0
  },
  {
    question: "For a Body-Centered Cubic (BCC) crystal structure, the coordination number is:",
    options: [
      "A) 4",
      "B) 6",
      "C) 8",
      "D) 12"
    ],
    answer: 2
  },
  {
    question: "A material's trait describing its response to a stimulus is a:",
    options: [
      "A) Structure",
      "B) Property",
      "C) Process",
      "D) Performance metric"
    ],
    answer: 1
  },
  {
    question: "Which material class is most likely to contain organic compounds?",
    options: [
      "A) Metals",
      "B) Ceramics",
      "C) Polymers",
      "D) Composites"
    ],
    answer: 2
  },
  {
    question: "Which bond is non-directional?",
    options: [
      "A) Covalent",
      "B) Ionic",
      "C) Metallic",
      "D) Hydrogen"
    ],
    answer: 2
  },
  {
    question: "The ability to be drawn into a wire is called:",
    options: [
      "A) Malleability",
      "B) Ductility",
      "C) Toughness",
      "D) Elasticity"
    ],
    answer: 1
  },
  {
    question: "True stress considers the:",
    options: [
      "A) Original cross-sectional area",
      "B) Instantaneous cross-sectional area",
      "C) Original length",
      "D) Change in volume"
    ],
    answer: 1
  },
  {
    question: "The engineering stress is calculated using the:",
    options: [
      "A) Instantaneous cross-sectional area",
      "B) Original cross-sectional area",
      "C) Final cross-sectional area",
      "D) Average cross-sectional area"
    ],
    answer: 1
  },
  {
    question: "A dislocation where the Burgers vector is perpendicular to the dislocation line is a(n):",
    options: [
      "A) Screw dislocation",
      "B) Edge dislocation",
      "C) Mixed dislocation",
      "D) Vacancy dislocation"
    ],
    answer: 1
  },
  {
    question: "A rhombohedral crystal system has:",
    options: [
      "A) a=b=c, α=β=γ≠90°",
      "B) a≠b≠c, α=β=γ=90°",
      "C) a=b≠c, α=β=90°, γ=120°",
      "D) a≠b≠c, α=γ=90°, β≠90°"
    ],
    answer: 0
  },
  {
    question: "The base-centered monoclinic is a type of:",
    options: [
      "A) Crystal structure",
      "B) Bravais lattice",
      "C) Unit cell defect",
      "D) Bonding mechanism"
    ],
    answer: 1
  },
  {
    question: "Which element has a stable electron configuration?",
    options: [
      "A) Sodium (Na)",
      "B) Neon (Ne)",
      "C) Hydrogen (H)",
      "D) Carbon (C)"
    ],
    answer: 1
  },
  {
    question: "The repulsive force between atoms is primarily due to the interaction between:",
    options: [
      "A) Positive nuclei",
      "B) Negative electron clouds",
      "C) A positive nucleus and a negative electron cloud",
      "D) Delocalized electrons"
    ],
    answer: 1
  },
  {
    question: "The equilibrium interatomic spacing is typically on the order of:",
    options: [
      "A) Millimeters (mm)",
      "B) Micrometers (μm)",
      "C) Nanometers (nm)",
      "D) Picometers (pm)"
    ],
    answer: 2
  },
  {
    question: "Which material is bonded by ionic bonds?",
    options: [
      "A) Diamond (C)",
      "B) Sodium Chloride (NaCl)",
      "C) Aluminum (Al)",
      "D) Polyethylene"
    ],
    answer: 1
  },
  {
    question: "Which material is bonded by covalent bonds?",
    options: [
      "A) Copper (Cu)",
      "B) Silicon (Si)",
      "C) Magnesium Oxide (MgO)",
      "D) Water (H₂O) ice"
    ],
    answer: 1
  },
  {
    question: "Which material is bonded by metallic bonds?",
    options: [
      "A) Titanium (Ti)",
      "B) Glass (SiO₂)",
      "C) Nylon",
      "D) Rubber"
    ],
    answer: 0
  },
  {
    question: "Which is a secondary bonding force?",
    options: [
      "A) Ionic bonding",
      "B) Covalent bonding",
      "C) Metallic bonding",
      "D) Hydrogen bonding"
    ],
    answer: 3
  },
  {
    question: "A material that is stiff and strong but brittle is most likely a:",
    options: [
      "A) Metal",
      "B) Ceramic",
      "C) Polymer",
      "D) Composite"
    ],
    answer: 1
  },
  {
    question: "A material that is pliable and has a low density is most likely a:",
    options: [
      "A) Metal",
      "B) Ceramic",
      "C) Polymer",
      "D) Composite"
    ],
    answer: 2
  },
  {
    question: "The number of lattice points in a simple cubic unit cell is:",
    options: [
      "A) 1",
      "B) 2",
      "C) 4",
      "D) 8"
    ],
    answer: 0
  },
  {
    question: "The process of \"Yielding\" refers to:",
    options: [
      "A) The point of fracture",
      "B) The point where plastic deformation begins",
      "C) The maximum load point",
      "D) The elastic limit"
    ],
    answer: 1
  },
  {
    question: "Which crystal system has a=b≠c and α=β=90°, γ=120°?",
    options: [
      "A) Cubic",
      "B) Tetragonal",
      "C) Orthorhombic",
      "D) Hexagonal"
    ],
    answer: 3
  },
  {
    question: "The magnetic spin quantum number (s) describes the:",
    options: [
      "A) Energy level",
      "B) Shape of the orbital",
      "C) Orientation of the orbital",
      "D) Spin of the electron"
    ],
    answer: 3
  },
  {
    question: "Which is NOT a characteristic of ionic solids?",
    options: [
      "A) Good electrical conductivity",
      "B) High melting point",
      "C) Brittle",
      "D) High bond energy"
    ],
    answer: 0
  },
  {
    question: "Which is a characteristic of metallic solids?",
    options: [
      "A) Brittle",
      "B) Poor electrical conductivity",
      "C) Malleable",
      "D) Transparent"
    ],
    answer: 2
  },
  {
    question: "The notes state that Aluminum, Silicon, and Magnesium are examples of:",
    options: [
      "A) Ceramics",
      "B) Polymers",
      "C) Engineering alloys",
      "D) Ores"
    ],
    answer: 2
  },
  {
    question: "According to the notes, why does ore cause corrosion?",
    options: [
      "A) It is acidic",
      "B) Metals \"want to go back to their impure form\"",
      "C) It contains free electrons",
      "D) It attracts water"
    ],
    answer: 1
  },
  {
    question: "The notes classify properties that are visible to the naked eye as:",
    options: [
      "A) Chemical properties",
      "B) Physical properties",
      "C) Mechanical properties",
      "D) Electrical properties"
    ],
    answer: 1
  },
  {
    question: "A d-subshell can hold a maximum of how many electrons?",
    options: [
      "A) 2",
      "B) 6",
      "C) 10",
      "D) 14"
    ],
    answer: 2
  },
  {
    question: "A p-subshell can hold a maximum of how many electrons?",
    options: [
      "A) 2",
      "B) 6",
      "C) 10",
      "D) 14"
    ],
    answer: 1
  },
  {
    question: "The electronic configuration for a neutral sodium atom (Na) is:",
    options: [
      "A) 1s²2s²2p⁶3s¹",
      "B) 1s²2s²2p⁶",
      "C) 1s²2s²2p⁶3s²",
      "D) 1s²2s²2p⁵3s²"
    ],
    answer: 0
  },
  {
    question: "In the notes, \"ME 226\" appears to be:",
    options: [
      "A) A type of steel",
      "B) A course code or personal reference",
      "C) A crystal structure",
      "D) A bonding energy value"
    ],
    answer: 1
  },
  {
    question: "The notes mention that some ceramics can be:",
    options: [
      "A) Good electrical conductors",
      "B) Opaque, translucent, or transparent",
      "C) Highly ductile",
      "D) Made from organic compounds"
    ],
    answer: 1
  },
  {
    question: "The primary bonding in ceramics like Al₂O₃ and SiC is:",
    options: [
      "A) Metallic",
      "B) Covalent",
      "C) Ionic",
      "D) Vander Waals"
    ],
    answer: 1
  },
  {
    question: "The bond energy range for ionic bonds is approximately:",
    options: [
      "A) 65-850 KJ/mole",
      "B) 10-50 KJ/mole",
      "C) 450-1000 KJ/mole",
      "D) 1-5 KJ/mole"
    ],
    answer: 2
  },
  {
    question: "The bond energy for Vander Waals bonds is typically:",
    options: [
      "A) Less than 10 KJ/mole",
      "B) 50-100 KJ/mole",
      "C) 200-500 KJ/mole",
      "D) Over 1000 KJ/mole"
    ],
    answer: 0
  },
  {
    question: "A \"polar molecule\" has:",
    options: [
      "A) A symmetrical charge distribution",
      "B) An asymmetrical charge distribution (dipole)",
      "C) No net charge",
      "D) Only positive charges"
    ],
    answer: 1
  },
  {
    question: "A dislocation where the Burgers vector is parallel to the dislocation line is a(n):",
    options: [
      "A) Edge dislocation",
      "B) Screw dislocation",
      "C) Mixed dislocation",
      "D) Interstitial dislocation"
    ],
    answer: 1
  },
  {
    question: "Which is a type of strain mentioned in the notes?",
    options: [
      "A) Volume strain",
      "B) Height strain",
      "C) Shear strain",
      "D) Longitudinal strain"
    ],
    answer: 1
  },
  {
    question: "The notes define \"True strain\" in contrast to:",
    options: [
      "A) Height strain",
      "B) Thickness strain",
      "C) Engineering strain",
      "D) Shear strain"
    ],
    answer: 2
  },
  {
    question: "The ultimate goal of the structure-property-performance cycle is to achieve desired:",
    options: [
      "A) Processing methods",
      "B) Atomic structures",
      "C) Material performance",
      "D) Financial cost"
    ],
    answer: 2
  },
  {
    question: "Which material is most likely to be used as an electrical insulator?",
    options: [
      "A) Copper",
      "B) Aluminum",
      "C) Silicon Carbide (Ceramic)",
      "D) Iron"
    ],
    answer: 2
  },
  {
    question: "Which material is most likely to be used for its magnetic properties?",
    options: [
      "A) Polyethylene",
      "B) Aluminum Oxide",
      "C) Iron (a metal)",
      "D) Glass"
    ],
    answer: 2
  },
  {
    question: "Which element has a half-filled p subshell?",
    options: [
      "A) Nitrogen (N) - 1s²2s²2p³",
      "B) Carbon (C) - 1s²2s²2p²",
      "C) Oxygen (O) - 1s²2s²2p⁴",
      "D) Fluorine (F) - 1s²2s²2p⁵"
    ],
    answer: 0
  },
  {
    question: "A material's response to an applied force is a _______ property.",
    options: [
      "A) Thermal",
      "B) Mechanical",
      "C) Optical",
      "D) Chemical"
    ],
    answer: 1
  },
  {
    question: "Which is a physical property?",
    options: [
      "A) Reactivity",
      "B) Corrosion resistance",
      "C) Color",
      "D) Flammability"
    ],
    answer: 2
  },
  {
    question: "Which is a chemical property?",
    options: [
      "A) Density",
      "B) Melting Point",
      "C) Reactivity with acid",
      "D) Hardness"
    ],
    answer: 2
  },
  {
    question: "The number of protons in a nucleus defines the:",
    options: [
      "A) Element",
      "B) Isotope",
      "C) Atomic Mass",
      "D) Ion"
    ],
    answer: 0
  },
  {
    question: "Different isotopes of the same element have different numbers of:",
    options: [
      "A) Protons",
      "B) Electrons",
      "C) Neutrons",
      "D) Ions"
    ],
    answer: 2
  },
  {
    question: "A positive ion is called a(n):",
    options: [
      "A) Anion",
      "B) Cation",
      "C) Isotope",
      "D) Electron"
    ],
    answer: 1
  },
  {
    question: "A negative ion is called a(n):",
    options: [
      "A) Anion",
      "B) Cation",
      "C) Isotope",
      "D) Proton"
    ],
    answer: 0
  },
  {
    question: "The bonding energy is the energy required to:",
    options: [
      "A) Create a bond",
      "B) Break a bond",
      "C) Both make and break a bond",
      "D) Vibrate a bond"
    ],
    answer: 1
  },
  {
    question: "In a stress-strain curve, the linear region represents _______ deformation.",
    options: [
      "A) Plastic",
      "B) Elastic",
      "C) Viscoelastic",
      "D) Permanent"
    ],
    answer: 1
  },
  {
    question: "The slope of the linear region of a stress-strain curve is the:",
    options: [
      "A) Ultimate Tensile Strength",
      "B) Yield Strength",
      "C) Modulus of Elasticity (Young's Modulus)",
      "D) Toughness"
    ],
    answer: 2
  },
  {
    question: "Which crystal structure has the highest atomic packing factor?",
    options: [
      "A) Simple Cubic",
      "B) Body-Centered Cubic",
      "C) Face-Centered Cubic",
      "D) They are all equal"
    ],
    answer: 2
  },
  {
    question: "Which point defect involves a missing atom in the lattice?",
    options: [
      "A) Vacancy",
      "B) Interstitial",
      "C) Substitutional",
      "D) Dislocation"
    ],
    answer: 0
  },
  {
    question: "Which point defect involves an extra atom squeezed into the lattice?",
    options: [
      "A) Vacancy",
      "B) Interstitial",
      "C) Substitutional",
      "D) Dislocation"
    ],
    answer: 1
  },
  {
    question: "Which defect is a line defect?",
    options: [
      "A) Vacancy",
      "B) Interstitial",
      "C) Substitutional",
      "D) Dislocation"
    ],
    answer: 3
  },
  {
    question: "Plastic deformation occurs primarily through the motion of:",
    options: [
      "A) Vacancies",
      "B) Interstitials",
      "C) Dislocations",
      "D) Grain Boundaries"
    ],
    answer: 2
  },
  {
    question: "Work hardening (strain hardening) occurs because:",
    options: [
      "A) Dislocations become tangled and impede further motion",
      "B) Grains recrystallize",
      "C) Dislocations are annihilated",
      "D) The material becomes hotter"
    ],
    answer: 0
  },
  {
    question: "Annealing is a heat treatment process used to:",
    options: [
      "A) Increase hardness and strength",
      "B) Increase ductility and reduce dislocation density",
      "C) Introduce more dislocations",
      "D) Quench the material"
    ],
    answer: 1
  },
  {
    question: "Which microstructure has the highest strength?",
    options: [
      "A) Large grains",
      "B) Small grains",
      "C) Single crystal",
      "D) Strength is independent of grain size"
    ],
    answer: 1
  },
  {
    question: "The phase diagram shows the phases of an alloy as a function of:",
    options: [
      "A) Stress and strain",
      "B) Temperature and composition",
      "C) Pressure and volume",
      "D) Time and temperature"
    ],
    answer: 1
  },
  {
    question: "The eutectic point on a phase diagram is where:",
    options: [
      "A) A solid phase transforms to two other solid phases",
      "B) A liquid phase transforms to two solid phases",
      "C) A solid phase melts",
      "D) A gas phase condenses"
    ],
    answer: 1
  },
  {
    question: "Ferrous alloys are based on the element:",
    options: [
      "A) Aluminum",
      "B) Copper",
      "C) Iron",
      "D) Titanium"
    ],
    answer: 2
  },
  {
    question: "The carbon content in plain carbon steel is typically less than:",
    options: [
      "A) 0.1%",
      "B) 1.0%",
      "C) 2.0%",
      "D) 4.0%"
    ],
    answer: 2
  },
  {
    question: "Stainless steels are known for their resistance to:",
    options: [
      "A) Wear",
      "B) Corrosion",
      "C) High temperatures",
      "D) Electrical conductivity"
    ],
    answer: 1
  },
  {
    question: "A polymer is made of long chains of repeating:",
    options: [
      "A) Crystals",
      "B) Monomers",
      "C) Grains",
      "D) Ceramics"
    ],
    answer: 1
  },
  {
    question: "The glass transition temperature (Tg) is the temperature where a polymer:",
    options: [
      "A) Melts",
      "B) Becomes brittle and glassy",
      "C) Decomposes",
      "D) Becomes a liquid crystal"
    ],
    answer: 1
  },
  {
    question: "An elastomer is a polymer that can undergo:",
    options: [
      "A) Large elastic deformations",
      "B) Only small elastic deformations",
      "C) Only plastic deformations",
      "D) Crystallization"
    ],
    answer: 0
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
