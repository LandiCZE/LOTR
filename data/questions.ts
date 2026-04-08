export type Category = 'fellowship' | 'characters' | 'places' | 'lore' | 'battles' | 'quotes' | 'book-vs-film' | 'creatures' | 'flowers' | 'geography'

export interface MatchQuestion {
  type: 'match'
  question: string
  pairs: { left: string; right: string }[]
  categories?: Category[]
}


export interface ChoiceQuestion {
  type?: 'choice'
  question: string
  answers: string[]
  correct: number
  categories?: Category[]
  image?: string
}

export interface OrderQuestion {
  type: 'order'
  question: string
  items: string[]   // correct order
  categories?: Category[]
}

export type Question = ChoiceQuestion | OrderQuestion | MatchQuestion

export const questions: Question[] = [
  // Fellowship
  {
    question: "Who is NOT a member of the Fellowship of the Ring?",
    answers: ["Gimli", "Boromir", "Faramir", "Legolas"],
    correct: 2,
    categories: ["fellowship", "characters"],
  },
  {
    question: "How many members are in the Fellowship of the Ring?",
    answers: ["7", "8", "9", "10"],
    correct: 2,
    categories: ["fellowship", "characters"],
  },
  {
    question: "At which location was the Fellowship formed?",
    answers: ["Minas Tirith", "Rivendell", "Lothlórien", "The Shire"],
    correct: 1,
    categories: ["fellowship", "characters"],
  },
  {
    question: "Who was the Dwarf member of the Fellowship?",
    answers: ["Óin", "Balin", "Gimli", "Glóin"],
    correct: 2,
    categories: ["fellowship", "characters"],
  },
  {
    question: "Which hobbit was NOT in the Fellowship?",
    answers: ["Frodo", "Sam", "Merry", "Bilbo"],
    correct: 3,
    categories: ["fellowship", "characters"],
  },

  // Characters
  {
    question: "What is Frodo's sword called?",
    answers: ["Glamdring", "Andúril", "Sting", "Orcrist"],
    correct: 2,
    categories: ["characters"],
  },
  {
    question: "What is Gandalf's sword called?",
    answers: ["Sting", "Glamdring", "Andúril", "Narsil"],
    correct: 1,
    categories: ["characters"],
  },
  {
    question: "What is Aragorn's sword called?",
    answers: ["Narsil", "Glamdring", "Sting", "Andúril"],
    correct: 3,
    categories: ["characters"],
  },
  {
    question: "What is the name of Gandalf's horse?",
    answers: ["Brego", "Hasufel", "Shadowfax", "Asfaloth"],
    correct: 2,
    categories: ["characters", "creatures"],
  },
  {
    question: "What race is Legolas?",
    answers: ["Sindar Elf", "Noldor Elf", "Silvan Elf", "Half-Elf"],
    correct: 2,
    categories: ["characters"],
  },
  {
    question: "Who killed the Witch-king of Angmar?",
    answers: ["Aragorn", "Éowyn", "Gandalf", "Faramir"],
    correct: 1,
    categories: ["characters"],
  },
  {
    question: "Who forged the One Ring?",
    answers: ["Celebrimbor", "Sauron", "Morgoth", "Saruman"],
    correct: 1,
    categories: ["characters"],
  },
  {
    question: "Who is Aragorn's father?",
    answers: ["Arathorn", "Arador", "Dirhael", "Elrond"],
    correct: 0,
    categories: ["characters"],
  },
  {
    question: "Who is Legolas's father?",
    answers: ["Círdan", "Thranduil", "Celeborn", "Elrond"],
    correct: 1,
    categories: ["characters"],
  },
  {
    question: "What is Saruman's original Elvish name?",
    answers: ["Olórin", "Curunír", "Aiwendil", "Pallando"],
    correct: 1,
    categories: ["characters"],
  },
  {
    question: "Who is Gandalf in the Undying Lands?",
    answers: ["Manwë", "Olórin", "Tulkas", "Eönwë"],
    correct: 1,
    categories: ["lore"],
  },
  {
    question: "What creature did Gollum call 'Precious'?",
    answers: ["His fish", "The One Ring", "His cave", "Frodo"],
    correct: 1,
    categories: ["characters", "creatures"],
  },
  {
    question: "What was Gollum's real name before the Ring corrupted him?",
    answers: ["Déagol", "Sméagol", "Trahald", "Nahald"],
    correct: 1,
    categories: ["characters"],
  },
  {
    question: "Who found the One Ring before Gollum?",
    answers: ["Sméagol", "Déagol", "Bilbo", "Isildur"],
    correct: 1,
    categories: ["characters"],
  },

  // Places
  {
    question: "What is the capital of Rohan?",
    answers: ["Minas Tirith", "Helm's Deep", "Edoras", "Meduseld"],
    correct: 2,
    categories: ["places"],
  },
  {
    question: "What is the capital of Gondor?",
    answers: ["Osgiliath", "Pelargir", "Minas Tirith", "Dol Amroth"],
    correct: 2,
    categories: ["places"],
  },
  {
    question: "Where is the One Ring destroyed?",
    answers: ["Mordor", "Mount Doom", "Barad-dûr", "Gorgoroth"],
    correct: 1,
    categories: ["places"],
  },
  {
    question: "What is the name of the Elvish city ruled by Galadriel?",
    answers: ["Rivendell", "Mirkwood", "Lothlórien", "Lindon"],
    correct: 2,
    categories: ["places"],
  },
  {
    question: "What is the name of the Dwarven kingdom under the Lonely Mountain?",
    answers: ["Moria", "Erebor", "Khazad-dûm", "Nogrod"],
    correct: 1,
    categories: ["places"],
  },
  {
    question: "Where does Frodo live in the Shire?",
    answers: ["Tookborough", "Bywater", "Bag End", "Buckland"],
    correct: 2,
    categories: ["places"],
  },
  {
    question: "What sea do the Elves sail into the West across?",
    answers: ["The Bay of Belfas", "Belegaer (the Great Sea)", "The Sea of Rhûn", "The Inland Sea"],
    correct: 1,
    categories: ["places"],
  },
  {
    question: "What is the name of Sauron's fortress?",
    answers: ["Dol Guldur", "Cirith Ungol", "Barad-dûr", "Minas Morgul"],
    correct: 2,
    categories: ["places"],
  },
  {
    question: "In which mountain range is Moria located?",
    answers: ["The Grey Mountains", "The Iron Hills", "The Misty Mountains", "The Blue Mountains"],
    correct: 2,
    categories: ["places"],
  },

  // Lore
  {
    question: "How many Rings of Power were given to the Dwarf lords?",
    answers: ["3", "5", "7", "9"],
    correct: 2,
    categories: ["lore"],
  },
  {
    question: "How many Rings of Power were given to mortal Men?",
    answers: ["3", "7", "9", "12"],
    correct: 2,
    categories: ["lore"],
  },
  {
    question: "How many Rings of Power were given to the Elven kings?",
    answers: ["3", "7", "9", "12"],
    correct: 0,
    categories: ["lore"],
  },
  {
    question: "What are the nine servants of Sauron called?",
    answers: ["The Nazgûl", "The Úlairi", "Ringwraiths", "All of the above"],
    correct: 3,
    categories: ["lore"],
  },
  {
    question: "What language is spoken on the One Ring's inscription?",
    answers: ["Sindarin", "Quenya", "Black Speech", "Westron"],
    correct: 2,
    categories: ["lore"],
  },
  {
    question: "What does Treebeard call the Ents when introducing them to Merry and Pippin?",
    answers: ["Masters of the Forest", "Shepherds of the Trees", "Guardians of Fangorn", "The Oldest Living Things"],
    correct: 1,
    categories: ["lore", "characters", "creatures"],
  },
  {
    question: "What is the elvish word for 'friend' carved on the Doors of Durin?",
    answers: ["Elen", "Mellon", "Iston", "Adar"],
    correct: 1,
    categories: ["lore"],
  },
  {
    question: "What order does Gandalf belong to?",
    answers: ["The Valar", "The Maiar", "The Istari", "The Ainur"],
    correct: 2,
    categories: ["lore"],
  },
  {
    question: "What are Hobbits also known as?",
    answers: ["Periannath", "Halflings", "Little Folk", "All of the above"],
    correct: 3,
    categories: ["lore"],
  },
  {
    question: "What is the name of Bilbo's famous tale about his adventure?",
    answers: ["There and Back Again", "My Journey to Erebor", "The Long Expected Party", "Quest for the Lonely Mountain"],
    correct: 0,
    categories: ["lore", "creatures"],
  },

  // Battles
  {
    question: "At which battle did Isildur cut the One Ring from Sauron's hand?",
    answers: ["The Battle of Dagorlad", "The War of the Last Alliance", "The Battle of the Black Gate", "The Siege of Barad-dûr"],
    correct: 1,
    categories: ["battles"],
  },
  {
    question: "What fortress did the Rohirrim defend against Saruman's forces?",
    answers: ["Minas Tirith", "Edoras", "Helm's Deep", "Isengard"],
    correct: 2,
    categories: ["battles"],
  },
  {
    question: "Who summoned the Army of the Dead for the Battle of the Pelennor Fields?",
    answers: ["Gandalf", "Théoden", "Aragorn", "Éomer"],
    correct: 2,
    categories: ["battles", "characters"],
  },
  {
    question: "Who killed Smaug the dragon?",
    answers: ["Thorin Oakenshield", "Gandalf", "Bilbo Baggins", "Bard the Bowman"],
    correct: 3,
    categories: ["battles", "characters"],
  },
  {
    question: "What was the final battle in The Return of the King called?",
    answers: ["Battle of the Pelennor Fields", "Battle of the Black Gate", "Battle of Bywater", "Battle of Dale"],
    correct: 1,
    categories: ["battles"],
  },
  {
    question: "Who led the charge of the Rohirrim at the Battle of the Pelennor Fields?",
    answers: ["Éomer", "Théoden", "Éowyn", "Gamling"],
    correct: 1,
    categories: ["battles", "characters"],
  },
  {
    question: "What creature did the Balrog kill in Moria?",
    answers: ["Boromir", "Gandalf the Grey", "Pippin", "Gimli's cousin Balin"],
    correct: 1,
    categories: ["battles", "characters"],
  },
  {
    question: "How did Théoden die?",
    answers: ["Stabbed by the Witch-king", "Crushed by his horse Snowmane", "Killed by an orc", "Poisoned by Gríma"],
    correct: 1,
    categories: ["battles", "characters"],
  },

  // The Hobbit
  {
    question: "What is Thorin's sword called?",
    answers: ["Glamdring", "Orcrist", "Sting", "Andúril"],
    correct: 1,
    categories: ["characters"],
  },
  {
    question: "Who gave Frodo the Mithril shirt?",
    answers: ["Gandalf", "Bilbo", "Aragorn", "Elrond"],
    correct: 1,
    categories: ["characters"],
  },
  {
    question: "What is the name of Bilbo's home?",
    answers: ["Bag End", "Green Dragon", "Brandy Hall", "Underhill"],
    correct: 0,
    categories: ["places"],
  },
  {
    question: "Who leads the dwarves in The Hobbit?",
    answers: ["Balin", "Dwalin", "Thorin Oakenshield", "Glóin"],
    correct: 2,
    categories: ["characters"],
  },
  {
    question: "What creature is Beorn?",
    answers: ["Elf", "Shape-shifter", "Wizard", "Orc"],
    correct: 1,
    categories: ["lore", "creatures"],
  },
  {
    question: "Who finds the One Ring first (chronologically)?",
    answers: ["Bilbo", "Gollum", "Isildur", "Frodo"],
    correct: 2,
    categories: ["lore"],
  },
  {
    question: "The spiders Bilbo fights in Mirkwood — do they have names?",
    answers: ["Yes, they are named Shelob", "Yes, named by Tolkien in notes", "No name is given to any of them", "Only their queen is named"],
    correct: 2,
    categories: ["lore", "characters", "creatures"],
  },
  {
    question: "Who rescues the dwarves from the Wood-elves in Mirkwood?",
    answers: ["Gandalf", "Bilbo", "Thorin", "Legolas"],
    correct: 1,
    categories: ["characters"],
  },
  {
    question: "What is the Arkenstone also known as?",
    answers: ["King's Jewel", "Heart of the Mountain", "Dragon's Eye", "Stone of Erebor"],
    correct: 1,
    categories: ["lore", "creatures"],
  },
  {
    question: "Who is NOT one of the Nazgûl?",
    answers: ["Khamûl", "Witch-king", "Azog", "All of the above are Nazgûl"],
    correct: 2,
    categories: ["lore"],
  },
  {
    question: "Who kills Azog in the Hobbit films?",
    answers: ["Thorin", "Bilbo", "Legolas", "Dáin"],
    correct: 0,
    categories: ["battles", "characters"],
  },
  {
    question: "Who kills Bolg in the Hobbit films?",
    answers: ["Thorin", "Legolas", "Bilbo", "Gimli"],
    correct: 1,
    categories: ["battles", "characters"],
  },
  {
    question: "What is the proper name of Lake-town in The Hobbit?",
    answers: ["Esgaroth", "Dale", "Rhovanion", "Lakemere"],
    correct: 0,
    categories: ["places"],
  },
  {
    question: "Who becomes King Under the Mountain after Thorin dies?",
    answers: ["Balin", "Dáin Ironfoot", "Glóin", "Fíli"],
    correct: 1,
    categories: ["characters"],
  },
  {
    question: "Who is Tauriel?",
    answers: ["A book character", "A film-only character", "An Elf queen", "A dwarf"],
    correct: 1,
    categories: ["lore"],
  },
  {
    question: "Who carries the Ring into Mordor alongside Frodo?",
    answers: ["Merry", "Pippin", "Sam", "Aragorn"],
    correct: 2,
    categories: ["characters"],
  },
  {
    question: "Who cuts the One Ring from Sauron's hand?",
    answers: ["Elendil", "Isildur", "Aragorn", "Gil-galad"],
    correct: 1,
    categories: ["lore"],
  },
  {
    question: "What is the name of the inn in Bree?",
    answers: ["The Green Dragon", "The Prancing Pony", "The Golden Hall", "The Silver Leaf"],
    correct: 1,
    categories: ["places"],
  },
  {
    question: "Who is the father of Gimli?",
    answers: ["Thorin", "Glóin", "Balin", "Dwalin"],
    correct: 1,
    categories: ["characters"],
  },
  {
    question: "What is the battle at the end of The Hobbit called?",
    answers: ["Battle of Helm's Deep", "Battle of Five Armies", "Battle of the Pelennor Fields", "War of the Ring"],
    correct: 1,
    categories: ["battles"],
  },
  {
    question: "Who becomes King of Gondor at the end of The Return of the King?",
    answers: ["Boromir", "Faramir", "Aragorn", "Denethor"],
    correct: 2,
    categories: ["characters"],
  },
  {
    question: "Which wizard betrays the order and sides with Sauron?",
    answers: ["Radagast", "Saruman", "Gandalf", "Alatar"],
    correct: 1,
    categories: ["characters"],
  },
  {
    question: "Who says 'My precious' most famously?",
    answers: ["Bilbo", "Frodo", "Gollum", "Sam"],
    correct: 2,
    categories: ["characters"],
  },
  {
    question: "What is the name of Saruman's tower?",
    answers: ["Barad-dûr", "Orthanc", "Minas Morgul", "Dol Guldur"],
    correct: 1,
    categories: ["places"],
  },
  {
    question: "Who is the Dark Lord in The Lord of the Rings?",
    answers: ["Morgoth", "Sauron", "Saruman", "The Witch-king"],
    correct: 1,
    categories: ["characters"],
  },

  // Visual questions — drop your images into /public/images/
  {
    question: "Whose sword is this?",
    answers: ["Frodo", "Aragorn", "Gandalf", "Bilbo"],
    correct: 2,
    categories: ["characters"],
    image: "/images/glamdring.jpg",
  },
  {
    question: "Which location in Middle-earth is this?",
    answers: ["Minas Tirith", "Edoras", "Rivendell", "Lothlórien"],
    correct: 2,
    categories: ["places"],
    image: "/images/rivendell.jpg",
  },
  {
    question: "Which language is this script?",
    answers: ["Sindarin", "Quenya", "Black Speech", "Khuzdul"],
    correct: 2,
    categories: ["lore"],
    image: "/images/one-ring-inscription.jpg",
  },
  {
    question: "Which kingdom does this banner belong to?",
    answers: ["Rohan", "Gondor", "Erebor", "Rivendell"],
    correct: 1,
    categories: ["lore"],
    image: "/images/gondor-banner.jpg",
  },

  // Visual — Wikimedia Commons (no local download needed)
  {
    question: "The One Ring's inscription is written in which script?",
    answers: ["Cirth", "Tengwar", "Common Script", "Sarati"],
    correct: 1,
    categories: ["lore", "places"],
    image: "https://upload.wikimedia.org/wikipedia/commons/2/23/One_Ring_inscription.svg",
  },
  {
    question: "This alphabet was invented by which figure in Tolkien's lore?",
    answers: ["Celebrimbor", "Fëanor", "Daeron", "Rúmil"],
    correct: 1,
    categories: ["lore", "places"],
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Tengwar_alphabet1.svg",
  },
  {
    question: "These runes are most associated with which people?",
    answers: ["Elves", "Men", "Dwarves", "Hobbits"],
    correct: 2,
    categories: ["lore", "places"],
    image: "https://upload.wikimedia.org/wikipedia/commons/0/07/Cirth_Angerthas.svg",
  },
  {
    question: "Which kingdom does this flag belong to?",
    answers: ["Rohan", "Gondor", "Arnor", "Númenor"],
    correct: 1,
    categories: ["lore", "places"],
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Flag_of_Gondor.svg",
  },
  {
    question: "A white horse on green — which kingdom's banner is this?",
    answers: ["Gondor", "Rohan", "Dale", "Erebor"],
    correct: 1,
    categories: ["lore", "places"],
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Flag_of_the_Kingdom_of_Rohan.svg",
  },
  {
    question: "This map shows which region of Middle-earth?",
    answers: ["Bree-land", "Rohan", "The Shire", "Arnor"],
    correct: 2,
    categories: ["places"],
    image: "https://upload.wikimedia.org/wikipedia/commons/6/65/Sketch_Map_of_The_Shire.svg",
  },

  // Creatures
  {
    question: "What order of being is a Balrog — what are they, beneath the Valar?",
    answers: ["Valar", "Maiar", "Úmaiar", "Ainur"],
    correct: 1,
    categories: ["lore", "characters", "creatures"],
  },
  {
    question: "The Nazgûl's flying mounts have no true name in Tolkien's writing. What are they commonly called?",
    answers: ["Wyverns", "Fell beasts", "Shadow-drakes", "Winged wraiths"],
    correct: 1,
    categories: ["lore", "characters", "creatures"],
  },
  {
    question: "Smaug is specifically what type of dragon?",
    answers: ["Cold-drake", "Sea-drake", "Fire-drake", "Long-worm"],
    correct: 2,
    categories: ["lore", "characters", "creatures"],
  },
  {
    question: "The Ents were created at whose request among the Valar?",
    answers: ["Manwë", "Yavanna", "Aulë", "Varda"],
    correct: 1,
    categories: ["lore", "characters", "creatures"],
  },
  {
    question: "What race does Gollum actually belong to?",
    answers: ["A cave-dwelling Men", "Dwarf", "Stoor Hobbit", "River-folk (unknown race)"],
    correct: 2,
    categories: ["characters"],
  },
  {
    question: "The Great Eagles of Middle-earth serve which Vala?",
    answers: ["Yavanna", "Ulmo", "Manwë", "Oromë"],
    correct: 2,
    categories: ["lore", "characters", "creatures"],
  },
  {
    question: "How are Wargs different from ordinary wolves?",
    answers: ["They are larger but otherwise the same", "They are sentient and can communicate", "They breathe fire", "They are undead wolves"],
    correct: 1,
    categories: ["lore", "characters", "creatures"],
  },
  {
    question: "The Balrog in Moria has a name. What is it?",
    answers: ["Gothmog", "Durin's Bane", "Lungorthin", "Ancalagon"],
    correct: 1,
    categories: ["lore", "characters", "creatures"],
  },
  {
    question: "What is the Watcher in the Water outside Moria's gates?",
    answers: ["A giant squid", "A Balrog's servant", "Its nature is never identified by Tolkien", "A corrupted Ent"],
    correct: 2,
    categories: ["lore", "characters", "creatures"],
  },

  // Visual — flags & emblems
  {
    question: "Which dark lord's realm does this flag represent?",
    answers: ["Angmar", "Dol Guldur", "Mordor", "Isengard"],
    correct: 2,
    categories: ["lore", "places"],
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Flag_of_Mordor.svg",
  },
  {
    question: "This white hand on black is the banner of which stronghold?",
    answers: ["Mordor", "Minas Morgul", "Isengard", "Dol Guldur"],
    correct: 2,
    categories: ["lore", "places"],
    image: "https://upload.wikimedia.org/wikipedia/commons/b/be/Flag_of_Isengard.svg",
  },
  {
    question: "This flag belongs to Minas Morgul. What was the city called before the Nazgûl took it?",
    answers: ["Osgiliath", "Minas Anor", "Minas Ithil", "Cirith Ungol"],
    correct: 2,
    categories: ["places"],
    image: "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Minas_Morgul.svg",
  },
  {
    question: "This is the flag of Arnor. What was Arnor's relationship to Gondor?",
    answers: ["It was Gondor's enemy", "It was Gondor's sister kingdom in the North", "It was a colony of Gondor", "It was founded after Gondor fell"],
    correct: 1,
    categories: ["lore", "places"],
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Flag_of_Arnor.svg",
  },
  {
    question: "This seal belongs to the Stewards of Gondor. Who was the last Steward before Aragorn's return?",
    answers: ["Boromir", "Faramir", "Denethor", "Cirion"],
    correct: 2,
    categories: ["characters"],
    image: "https://upload.wikimedia.org/wikipedia/commons/9/95/Flag_of_the_Stewards_of_Gondor.svg",
  },
  {
    question: "This emblem of Durin was carved above the entrance to which place?",
    answers: ["The gates of Erebor", "The Doors of Durin (Moria)", "The gate of Edoras", "The Black Gate"],
    correct: 1,
    categories: ["places"],
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Emblema_Durin.svg",
  },

  // Who said this?
  {
    question: '"Faithless is he that says farewell when the road darkens." — Who said this?',
    answers: ["Gandalf", "Aragorn", "Gimli", "Elrond"],
    correct: 2,
    categories: ["quotes", "characters"],
  },
  {
    question: '"Short cuts make long delays." — Who said this?',
    answers: ["Gandalf", "Sam", "Bilbo", "Pippin"],
    correct: 3,
    categories: ["quotes", "characters"],
  },

  // Deep lore
  {
    question: "What is the Elvish name for Rivendell?",
    answers: ["Caras Galadhon", "Imladris", "Tirion", "Eregion"],
    correct: 1,
    categories: ["places", "lore"],
  },
  {
    question: "How old is Bilbo at the start of The Fellowship of the Ring?",
    answers: ["100", "108", "111", "128"],
    correct: 2,
    categories: ["characters"],
  },
  {
    question: "What is Mirkwood renamed to at the end of The Return of the King?",
    answers: ["Greenwood the Great", "Eryn Lasgalen", "East Lórien", "Wood of Ithilien"],
    correct: 1,
    categories: ["places", "lore"],
  },
  {
    question: "What is the full name of the innkeeper at the Prancing Pony in Bree?",
    answers: ["Bill Ferny", "Barliman Butterbur", "Bob Sandybanks", "Harry Goatleaf"],
    correct: 1,
    categories: ["characters"],
  },
  {
    question: "What is the name of the river that runs through Rivendell?",
    answers: ["Anduin", "Silverlode", "Bruinen", "Mitheithel"],
    correct: 2,
    categories: ["places", "lore"],
  },
  {
    question: "Which of these dwarves is NOT one of Thorin's company?",
    answers: ["Bifur", "Bofur", "Bombur", "Fundin"],
    correct: 3,
    categories: ["characters", "lore"],
  },
  {
    question: "What titles does Aragorn take when crowned king?",
    answers: ["Elessar only", "Telcontar only", "Envinyatar only", "All three: Elessar, Telcontar, Envinyatar"],
    correct: 3,
    categories: ["characters", "lore"],
  },
  {
    question: "Who was the first member of the Fellowship to be lost?",
    answers: ["Boromir", "Frodo", "Gandalf", "Aragorn"],
    correct: 2,
    categories: ["fellowship", "characters"],
  },
  {
    question: "Which pass leads into Mordor from the direction of Minas Morgul?",
    answers: ["The Black Gate", "Morannon", "Cirith Ungol", "Morgul Vale"],
    correct: 2,
    categories: ["places"],
  },
  {
    question: "Which of these is NOT one of the three Elven Rings of Power?",
    answers: ["Narya", "Nenya", "Vilya", "Eärendil"],
    correct: 3,
    categories: ["lore"],
  },

  // Book vs Film
  {
    question: "Who kills Saruman, and does it differ between book and film?",
    answers: ["Gríma Wormtongue (both)", "Legolas (film), Gríma (book)", "Gríma kills him in both, but in different places and times", "Saruman survives in both"],
    correct: 2,
    categories: ["book-vs-film", "characters"],
  },
  {
    question: "Where does Frodo meet Gildor Inglorion?",
    answers: ["In the Shire (book only — cut from film)", "In Rivendell (both)", "In Lothlórien (film only)", "He never appears"],
    correct: 0,
    categories: ["book-vs-film", "characters"],
  },
  {
    question: "Who leads the attack on Helm's Deep in the films vs the books?",
    answers: ["Saruman commands in both", "Saruman shown commanding in film — unnamed commanders in book", "Sauron in book, Saruman in film", "Gríma in book, Saruman in film"],
    correct: 1,
    categories: ["book-vs-film", "battles"],
  },
  {
    question: "How does Frodo's departure from the Shire differ between book and film?",
    answers: ["Leaves immediately with Sam (film) — lengthy delay and planning (book)", "With Gandalf in both", "Captured by Nazgûl (film), escapes secretly (book)", "Identical in both"],
    correct: 0,
    categories: ["book-vs-film"],
  },
  {
    question: "The Scouring of the Shire — where does it appear?",
    answers: ["In both book and film", "Film only", "Book only — cut entirely from the films", "Neither"],
    correct: 2,
    categories: ["book-vs-film"],
  },
  {
    question: "Who fights at Helm's Deep in the film but is NOT present in the book?",
    answers: ["Aragorn", "Legolas", "An Elvish army from Lothlórien led by Haldir", "Gimli"],
    correct: 2,
    categories: ["book-vs-film", "battles"],
  },
  {
    question: "Who rescues Frodo at the Ford of Bruinen in the book, replaced by Arwen in the film?",
    answers: ["Gandalf", "Glorfindel", "Elrond", "Círdan"],
    correct: 1,
    categories: ["book-vs-film", "characters"],
  },
  {
    question: "In the film, Gandalf confronts the Witch-king at Minas Tirith and his staff is broken. What happens in the book?",
    answers: ["This scene does not exist in the book", "Gandalf defeats him instead", "Aragorn breaks the staff", "It happens identically"],
    correct: 0,
    categories: ["book-vs-film"],
  },
  {
    question: "How does Faramir treat the Ring when he meets Frodo — book vs film?",
    answers: ["Tries to take it to Gondor (film) — refuses it immediately without temptation (book)", "Refuses it in both", "Takes it in both", "Does not meet Frodo in book"],
    correct: 0,
    categories: ["book-vs-film", "characters"],
  },
  {
    question: "What happens to the Mouth of Sauron at the Black Gate — book vs film?",
    answers: ["Identical in both", "Aragorn decapitates him in film — he rides away alive in book", "He kills Aragorn in book", "He only appears in the book"],
    correct: 1,
    categories: ["book-vs-film"],
  },

  // Order questions
  {
    type: "order",
    question: "Order these events from earliest to latest:",
    items: [
      "Bilbo finds the One Ring in Gollum's cave",
      "The Battle of Five Armies",
      "Frodo leaves Bag End with the Ring",
      "The Fellowship is formed in Rivendell",
      "The One Ring is destroyed in Mount Doom",
    ],
    categories: ["lore", "creatures"],
  },
  {
    type: "order",
    question: "Order Frodo's journey from first to last:",
    items: [
      "Leaves the Shire",
      "Meets Strider at the Prancing Pony",
      "Arrives at Rivendell",
      "Passes through Moria",
      "Reaches Lothlórien",
      "Reaches the Falls of Rauros",
    ],
    categories: ["lore", "places"],
  },
  {
    type: "order",
    question: "Order these Hobbit events from earliest to latest:",
    items: [
      "Bilbo leaves Bag End with the Dwarves",
      "Riddles in the Dark with Gollum",
      "Escape from the Wood-elves in barrels",
      "Bilbo speaks with Smaug",
      "The Battle of Five Armies",
    ],
    categories: ["lore", "creatures"],
  },
  {
    type: "order",
    question: "Order these characters by age, youngest first:",
    items: [
      "Pippin",
      "Merry",
      "Sam",
      "Frodo",
      "Gandalf",
      "Galadriel",
    ],
    categories: ["characters", "lore"],
  },
  {
    type: "order",
    question: "Order these battles from earliest to latest in the Third Age:",
    items: [
      "Battle of Greenfields",
      "Battle of Azanulbizar",
      "Battle of Five Armies",
      "Battle of Helm's Deep",
      "Battle of the Pelennor Fields",
    ],
    categories: ["battles", "lore"],
  },

  // Creatures & Animals
  {
    question: "What is the name of the great eagle who rescues Gandalf from Orthanc?",
    answers: ["Landroval", "Gwaihir", "Thorondor", "Meneldor"],
    correct: 1,
    categories: ["creatures", "characters"],
  },
  {
    question: "What is special about the breed of horse Shadowfax belongs to?",
    answers: ["They are immortal", "They are the Mearas — lords of all horses", "They were bred by Elves", "They can speak"],
    correct: 1,
    categories: ["creatures", "lore"],
  },
  {
    question: "What are Huorns?",
    answers: ["A type of Orc", "Awakened hostile trees, darker than Ents", "A breed of mountain troll", "River spirits"],
    correct: 1,
    categories: ["creatures", "lore"],
  },
  {
    question: "What were Farmer Maggot's three dogs named?",
    answers: ["Grip, Fang, and Wolf", "Shadow, Ghost, and Fang", "Bite, Snap, and Growl", "Storm, Night, and Grim"],
    correct: 0,
    categories: ["creatures"],
  },
  {
    question: "What is Tom Bombadil's pony named?",
    answers: ["Bill", "Brego", "Fatty Lumpkin", "Hasufel"],
    correct: 2,
    categories: ["creatures", "characters"],
  },
  {
    question: "Radagast the Brown is known for his deep affinity with what?",
    answers: ["Trees and growing things", "Birds and beasts", "Rivers and rain", "Stars and sky"],
    correct: 1,
    categories: ["creatures", "characters"],
  },
  {
    question: "Bilbo Baggins found the One Ring in the lair of which creature?",
    answers: ["Gollum", "Smaug", "Azog", "A cave troll"],
    correct: 0,
    categories: ["characters", "creatures"],
  },
  {
    question: "What is the name of the giant spider Frodo and Sam encounter in The Two Towers?",
    answers: ["Shelob", "Attercop", "Ungoliant", "Aragog"],
    correct: 0,
    categories: ["characters", "creatures"],
  },
  // Flowers & Plants
  {
    question: "What is the common name for the healing herb Aragorn calls 'athelas'?",
    answers: ["Shadowbane", "Kingsfoil", "Hearthwort", "Miruvor"],
    correct: 1,
    categories: ["flowers", "lore"],
  },
  {
    question: "What small golden flower did Sam see growing in Lothlórien, later naming his daughter after it?",
    answers: ["Niphredil", "Simbelmynë", "Elanor", "Uilos"],
    correct: 2,
    categories: ["flowers", "characters"],
  },
  {
    question: "What white flower grows on the burial mounds of the Kings of Rohan?",
    answers: ["Elanor", "Simbelmynë", "Niphredil", "Athelas"],
    correct: 1,
    categories: ["flowers", "places"],
  },
  {
    question: "What type of trees line the paths of Lothlórien, unique to that forest?",
    answers: ["Lebethron", "Athelas", "Mallorn", "Mirkwood oak"],
    correct: 2,
    categories: ["flowers", "places"],
  },
  {
    question: "What is the name of the reviving cordial Gandalf shares with the Fellowship in the Redhorn Pass?",
    answers: ["Miruvor", "Lembas", "Cram", "Entwash"],
    correct: 0,
    categories: ["flowers", "lore"],
  },
  {
    question: "Pipe-weed — which hobbit variety is considered the finest quality?",
    answers: ["Old Toby", "Longbottom Leaf", "Southern Star", "Barnfire Blend"],
    correct: 1,
    categories: ["flowers", "lore"],
  },
  {
    question: "What wood are the walking staves given to Frodo and Sam by Galadriel made from?",
    answers: ["Mallorn", "Mirkwood ash", "Lebethron", "Rowan"],
    correct: 2,
    categories: ["flowers", "characters"],
  },
  {
    question: "Athelas is said to have healing power only in the hands of what kind of person?",
    answers: ["A wizard", "The heir of the kings of old", "An Elf-lord", "A Ranger of the North"],
    correct: 1,
    categories: ["flowers", "lore"],
  },
  {
    question: "Old Man Willow is found in which location?",
    answers: ["Fangorn Forest", "Mirkwood", "The Old Forest", "The Barrow-downs"],
    correct: 2,
    categories: ["flowers", "places"],
  },
  {
    question: "What do Elves call the pipe-weed plant?",
    answers: ["Galenas", "Miruvor", "Niphredil", "They have no name for it"],
    correct: 0,
    categories: ["flowers", "lore"],
  },
  {
    question: "Lembas — what is the Elvish waybread made from, according to Tolkien?",
    answers: ["Mallorn leaves and honey", "Corn harvested by the Elves of Yavanna's gift", "Miruvor and grain", "Athelas-infused flour"],
    correct: 1,
    categories: ["flowers", "lore"],
  },
  {
    question: "The White Tree of Gondor in Minas Tirith — what happened to it before Aragorn's return?",
    answers: ["It was burned by Sauron", "It had withered and died", "It was cut down by Denethor", "It was taken to Mordor"],
    correct: 1,
    categories: ["flowers", "places"],
  },
  // Match the pair
  {
    type: "match",
    question: "Match each character to their weapon:",
    pairs: [
      { left: "Gandalf",  right: "Glamdring" },
      { left: "Aragorn",  right: "Andúril" },
      { left: "Frodo",    right: "Sting" },
      { left: "Thorin",   right: "Orcrist" },
    ],
    categories: ["characters"],
  },
  {
    type: "match",
    question: "Match each character to their home:",
    pairs: [
      { left: "Frodo",     right: "Bag End" },
      { left: "Legolas",   right: "Mirkwood" },
      { left: "Gimli",     right: "Erebor" },
      { left: "Aragorn",   right: "Rivendell" },
    ],
    categories: ["characters", "places"],
  },
  {
    type: "match",
    question: "Match each Ring to its bearer:",
    pairs: [
      { left: "Narya (Fire)",  right: "Gandalf" },
      { left: "Nenya (Water)", right: "Galadriel" },
      { left: "Vilya (Air)",   right: "Elrond" },
    ],
    categories: ["lore", "characters"],
  },
  {
    type: "match",
    question: "Match each location to its kingdom:",
    pairs: [
      { left: "Edoras",       right: "Rohan" },
      { left: "Minas Tirith", right: "Gondor" },
      { left: "Erebor",       right: "Dwarves" },
      { left: "Rivendell",    right: "Elves" },
    ],
    categories: ["places"],
  },
  {
    type: "match",
    question: "Match each hobbit to their family:",
    pairs: [
      { left: "Frodo",   right: "Baggins" },
      { left: "Merry",   right: "Brandybuck" },
      { left: "Pippin",  right: "Took" },
      { left: "Sam",     right: "Gamgee" },
    ],
    categories: ["characters", "fellowship"],
  },
  {
    type: "match",
    question: "Match each wizard to their colour:",
    pairs: [
      { left: "Gandalf",  right: "Grey / White" },
      { left: "Saruman",  right: "White / Many Colours" },
      { left: "Radagast", right: "Brown" },
    ],
    categories: ["characters", "lore"],
  },
  {
    type: "match",
    question: "Match each creature to what they guard or inhabit:",
    pairs: [
      { left: "Shelob",           right: "Cirith Ungol" },
      { left: "Durin's Bane",     right: "Moria" },
      { left: "Watcher in Water", right: "Gates of Moria" },
      { left: "Smaug",            right: "Erebor" },
    ],
    categories: ["creatures", "places"],
  },
  // Geography
  {
    question: "What is the name of the Great River that flows through Middle-earth from north to south?",
    answers: ["Bruinen", "Silverlode", "Anduin", "Entwash"],
    correct: 2,
    categories: ["geography", "places"],
  },
  {
    question: "Which mountain does the Fellowship attempt to cross before being forced into Moria?",
    answers: ["Mount Doom", "Zirakzigil", "Caradhras", "Methedras"],
    correct: 2,
    categories: ["geography", "places"],
  },
  {
    question: "What is the name of the gap between the Misty Mountains and the White Mountains?",
    answers: ["The Gap of Rohan", "The Fords of Isen", "The Deeping Coomb", "The Pass of Caradhras"],
    correct: 0,
    categories: ["geography", "places"],
  },
  {
    question: "What river flows from Fangorn Forest through Rohan to meet the Anduin?",
    answers: ["Isen", "Bruinen", "Entwash", "Silverlode"],
    correct: 2,
    categories: ["geography", "places"],
  },
  {
    question: "The White Mountains (Ered Nimrais) form the border between which two kingdoms?",
    answers: ["Gondor and Mordor", "Rohan and Gondor", "Rohan and Isengard", "Gondor and Ithilien"],
    correct: 1,
    categories: ["geography", "places"],
  },
  {
    question: "At which falls does the Fellowship break apart?",
    answers: ["Falls of Nimrodel", "Falls of Rauros", "Falls of the Entwash", "Henneth Annûn"],
    correct: 1,
    categories: ["geography", "places", "fellowship"],
  },
  {
    question: "What mountain range forms the western and northern borders of Mordor?",
    answers: ["The White Mountains", "The Misty Mountains", "The Mountains of Shadow (Ephel Dúath)", "The Ash Mountains"],
    correct: 2,
    categories: ["geography", "places"],
  },
  {
    question: "What is the name of the hidden window waterfall where Faramir takes Frodo and Sam?",
    answers: ["Falls of Rauros", "Henneth Annûn", "Nen Hithoel", "Nimrodel"],
    correct: 1,
    categories: ["geography", "places"],
  },
  {
    question: "Ithilien is described as a fair region — where is it located in relation to Mordor?",
    answers: ["North of Mordor", "West of Mordor, between the Anduin and the Mountains of Shadow", "South of Gondor", "East of the Anduin near Rohan"],
    correct: 1,
    categories: ["geography", "places"],
  },
  {
    question: "What is the name of the lake that forms above the Falls of Rauros?",
    answers: ["Lake Evendim", "The Long Lake", "Nen Hithoel", "Mirrormere"],
    correct: 2,
    categories: ["geography", "places"],
  },
  {
    question: "Mirrormere (Kheled-zâram) is a sacred lake to the Dwarves — where is it?",
    answers: ["Inside Erebor", "At the eastern feet of the Misty Mountains below Moria", "In the Iron Hills", "Beneath the Lonely Mountain"],
    correct: 1,
    categories: ["geography", "places"],
  },
  {
    question: "What is the name of the ancient road that runs from Rohan through Minas Tirith toward Mordor?",
    answers: ["The Great East Road", "The Greenway", "The Road to the Morannon", "The Royal Road of Gondor"],
    correct: 3,
    categories: ["geography", "places"],
  },

  // Geography — match
  {
    type: "match",
    question: "Match each river to its region:",
    pairs: [
      { left: "Anduin",    right: "All of Middle-earth" },
      { left: "Entwash",   right: "Rohan" },
      { left: "Silverlode", right: "Lothlórien" },
      { left: "Bruinen",   right: "Rivendell" },
    ],
    categories: ["geography", "places"],
  },
  {
    type: "match",
    question: "Match each mountain or range to its location:",
    pairs: [
      { left: "Caradhras",       right: "Misty Mountains" },
      { left: "Mount Doom",      right: "Mordor" },
      { left: "Erebor",          right: "Wilderland (Rhovanion)" },
      { left: "Ered Nimrais",    right: "South of Rohan" },
    ],
    categories: ["geography", "places"],
  },
]
