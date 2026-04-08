export type Category = 'fellowship' | 'characters' | 'places' | 'lore' | 'battles' | 'quotes'

export interface Question {
  question: string
  answers: string[]
  correct: number
  categories?: Category[]
  image?: string
}

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
    categories: ["characters"],
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
    question: "What is Sauron's original name?",
    answers: ["Annatar", "Mairon", "Gorthaur", "Thû"],
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
    categories: ["characters"],
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
  {
    question: "Bilbo Baggins found the One Ring in the lair of which creature?",
    answers: ["Gollum", "Smaug", "Azog", "Ungoliant"],
    correct: 0,
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
    question: "What are the Ents?",
    answers: ["Tree spirits", "Shepherds of the Trees", "Ancient tree creatures", "Tolkien called them 'Shepherds of the Trees'"],
    correct: 3,
    categories: ["lore", "characters"],
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
    categories: ["lore"],
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
    categories: ["lore"],
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
    categories: ["lore", "characters"],
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
    categories: ["lore"],
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
    question: "What is the name of the giant spider in The Two Towers?",
    answers: ["Shelob", "Ungoliant", "Attercop", "Aragog"],
    correct: 0,
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
    categories: ["lore", "characters"],
  },
  {
    question: "Shelob is the last child of which primordial spider from the First Age?",
    answers: ["Glaurung", "Draugluin", "Ungoliant", "Gothmog"],
    correct: 2,
    categories: ["lore", "characters"],
  },
  {
    question: "The Nazgûl's flying mounts have no true name in Tolkien's writing. What are they commonly called?",
    answers: ["Wyverns", "Fell beasts", "Shadow-drakes", "Winged wraiths"],
    correct: 1,
    categories: ["lore", "characters"],
  },
  {
    question: "Smaug is specifically what type of dragon?",
    answers: ["Cold-drake", "Sea-drake", "Fire-drake", "Long-worm"],
    correct: 2,
    categories: ["lore", "characters"],
  },
  {
    question: "Who created the first dragons in Middle-earth?",
    answers: ["Sauron", "Ungoliant", "Morgoth", "Glaurung"],
    correct: 2,
    categories: ["lore", "characters"],
  },
  {
    question: "The Ents were created at whose request among the Valar?",
    answers: ["Manwë", "Yavanna", "Aulë", "Varda"],
    correct: 1,
    categories: ["lore", "characters"],
  },
  {
    question: "What race does Gollum actually belong to?",
    answers: ["A cave-dwelling Men", "Dwarf", "Stoor Hobbit", "River-folk (unknown race)"],
    correct: 2,
    categories: ["characters"],
  },
  {
    question: "What did Ungoliant devour that caused her to grow beyond all bounds?",
    answers: ["The Silmarils", "The Light of the Two Trees of Valinor", "The fruit of Telperion", "Morgoth's crown"],
    correct: 1,
    categories: ["lore", "characters"],
  },
  {
    question: "The Great Eagles of Middle-earth serve which Vala?",
    answers: ["Yavanna", "Ulmo", "Manwë", "Oromë"],
    correct: 2,
    categories: ["lore", "characters"],
  },
  {
    question: "How are Wargs different from ordinary wolves?",
    answers: ["They are larger but otherwise the same", "They are sentient and can communicate", "They breathe fire", "They are undead wolves"],
    correct: 1,
    categories: ["lore", "characters"],
  },
  {
    question: "The Balrog in Moria has a name. What is it?",
    answers: ["Gothmog", "Durin's Bane", "Lungorthin", "Ancalagon"],
    correct: 1,
    categories: ["lore", "characters"],
  },
  {
    question: "What is the Watcher in the Water outside Moria's gates?",
    answers: ["A giant squid", "A Balrog's servant", "Its nature is never identified by Tolkien", "A corrupted Ent"],
    correct: 2,
    categories: ["lore", "characters"],
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
]
