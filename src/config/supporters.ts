let curr = 0;

const randomPatreonImage = () => {
  const images = [
    '/static/img/patreon/random/1.png',
    '/static/img/patreon/random/2.png',
    '/static/img/patreon/random/3.png',
    '/static/img/patreon/random/4.png',
    '/static/img/patreon/random/5.png',
    '/static/img/patreon/random/6.png',
    '/static/img/patreon/random/7.png'
  ];
  if (curr === 6) {
    curr = 0;
  } else {
    curr++;
  }

  return images[curr];
};

export const golden = [
  {
    name: 'Fathom',
    imageUrl: '/static/img/patreon/golden/fathom.png',
    url: 'https://designdetails.fm/fathom',
    tagline:
      'Simple analytics for bloggers & businesses. Click here to save $20 on your first invoice.'
  }, {
    name: 'Float',
    imageUrl: '/static/img/patreon/golden/float.png',
    url: 'https://www.float.com/?utm_source=designdetails&utm_medium=specfm',
    tagline: 'The resource planner that keeps projects on track.'
  }
];

// Simply add a new Twitter display name inside the inverted commas. Once added, run a new build and deploy to see an updated Twitter URL for that Patreon supporter.

const patrons = [
  {
    "name": "Aaron Heine",
    "twitterUsername": null,
    "image": "/static/img/patreon/aaron_heine.jpeg",
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Adam Carroll",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": true
  },
  {
    "name": "Adam Fuhrer",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Aishwarya Sheth",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Alec Sukoski",
    "twitterUsername": null,
    "image": "/static/img/patreon/alec_sukoski.jpg",
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Ali Salem",
    "twitterUsername": null,
    "image": "/static/img/patreon/ali_salem.png",
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Alisa B",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Amy Geddes",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "former",
    "dayOne": false
  },
  {
    "name": "Andrew Crandall",
    "twitterUsername": null,
    "image": "/static/img/patreon/andrew_crandall.jpeg",
    "state": "former",
    "dayOne": true
  },
  {
    "name": "Ankur Priyadarshi Chauhan",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Anojan Sivaranjan",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Arjun Mahesh",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Aurora Pleguezuelo",
    "twitterUsername": "auareyou",
    "image": "/static/img/patreon/aurora_pleguezuelo.jpe",
    "state": "active",
    "dayOne": true
  },
  {
    "name": "Austin Robinson",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Billy Purdy",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Bob Weisbecker",
    "twitterUsername": null,
    "image": "/static/img/patreon/bob_weisbecker.jpeg",
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Bradford Ulrich",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Brandon Weiss",
    "twitterUsername": "brandon_weiss",
    "image": "/static/img/patreon/brandon_weiss.jpeg",
    "state": "active",
    "dayOne": true
  },
  {
    "name": "Breno Baldrati",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Cal Rowston",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Callum Cussen",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Cameron Campbell",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": true
  },
  {
    "name": "Carly Batson",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Charlie Van Meter",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Chen Li",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Chris Martin",
    "twitterUsername": null,
    "image": "/static/img/patreon/chris_martin.jpeg",
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Chris Northcutt",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Claire Jardin",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Claudio Vallejo",
    "twitterUsername": null,
    "image": "/static/img/patreon/claudio_vallejo.jpeg",
    "state": "active",
    "dayOne": true
  },
  {
    "name": "Coard Miller",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Connelly Rader",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Cristian Ruiz",
    "twitterUsername": "razgriz94",
    "image": "/static/img/patreon/cristian_ruiz.jpg",
    "state": "active",
    "dayOne": true
  },
  {
    "name": "Damian Bilski",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Damien Menard-Oxman",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Dan Wu",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Daniel Maniés",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Danielle Shepherd",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Danny Haagen",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "former",
    "dayOne": false
  },
  {
    "name": "Darren Soulsby",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "former",
    "dayOne": false
  },
  {
    "name": "David Afolayan",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Dennis Cortes",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Derek Graham",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Doris Saturday",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": true
  },
  {
    "name": "Dániel Góré",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Ed Johnson-Williams",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Eden Wulf",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Effy Zhang",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": true
  },
  {
    "name": "Elias",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Elise Alix",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Erik",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Essa Saulat",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": true
  },
  {
    "name": "Ethan",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Filipa Amado",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "FoxFire720",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Geetha Kardahally",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "George Thayamkery",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "George Tsolpakis",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Grace Lee",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Greg Wilkinson",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Grovkillen & TD-er",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Guarang Alat",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Guilherme Nogales",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Gunnar Gray",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "He Hexi",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Isa Simó",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Jackie Eaton",
    "twitterUsername": null,
    "image": "/static/img/patreon/jackie_eaton.jpeg",
    "state": "former",
    "dayOne": false
  },
  {
    "name": "Jacqueline Nguyen",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "James Carleton",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "James Lyons",
    "twitterUsername": null,
    "image": "/static/img/patreon/james_lyons.png",
    "state": "active",
    "dayOne": false
  },
  {
    "name": "James Morgan",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Jan Früchtl",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Jason Jun",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Jeff Parsons",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": true
  },
  {
    "name": "Jing Zhang",
    "twitterUsername": null,
    "image": "/static/img/patreon/jing_zhang.jpeg",
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Joan Disho",
    "twitterUsername": null,
    "image": "/static/img/patreon/joan_disho.jpeg",
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Joe Thomas",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "John Wood",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": true
  },
  {
    "name": "Jonathan Prozzi",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Joseph Brueggen",
    "twitterUsername": "josephbrueggen",
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": true
  },
  {
    "name": "Joseph Flynn",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Julia Purcell",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Julius",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Justin Allen",
    "twitterUsername": null,
    "image": "/static/img/patreon/justin_allen.jpeg",
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Karl Koch",
    "twitterUsername": "_kejk",
    "image": "/static/img/patreon/karl_koch.jpeg",
    "state": "active",
    "dayOne": true
  },
  {
    "name": "Kati Presley",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Keaton Taylor",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Kevin Bennett",
    "twitterUsername": null,
    "image": "/static/img/patreon/kevin_bennett.jpeg",
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Kevin Gutowski",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Kevin Haag",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Kris Puckett",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "former",
    "dayOne": true
  },
  {
    "name": "Kristian Hjelle",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Kryston Schwarze",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Kyle Kochanek",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Kyle Mitchell",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": true
  },
  {
    "name": "Lauren Chilcote",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Lauren Mosenthal",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Lista Pesok",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Loukas Papantoniou",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Lovro Podobnik",
    "twitterUsername": null,
    "image": "/static/img/patreon/lovro_podobnik.jpeg",
    "state": "former",
    "dayOne": false
  },
  {
    "name": "Luke Seeley",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "MannnnnnyX",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": true
  },
  {
    "name": "Manuel Solera",
    "twitterUsername": null,
    "image": "/static/img/patreon/manuel_solera.jpeg",
    "state": "former",
    "dayOne": false
  },
  {
    "name": "Mark Powell",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Martin M.",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Marvin Messenzehl",
    "twitterUsername": null,
    "image": "/static/img/patreon/marvin_messenzehl.jpeg",
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Mathias Arlund",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Matthew Atkinson",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Max Stoiber",
    "twitterUsername": "mxstbr",
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": true
  },
  {
    "name": "Meena Balasubramaniam",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Melinda Yang",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Michael Fitzgerald",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Michael Goliver",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Michael Knepprath",
    "twitterUsername": "mknepprath",
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Michael Powers",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Mike Hickman",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Mike Jongbloet",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Neesha",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Ollie Taylor",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Oscar Lozano",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Patrick Marx",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Paul Dippold",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Paweł Sysiak",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Pekka Siika-aho",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Peter Reaper-Reynolds",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Priscilla Then",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Rachel Murawski",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Rafly Nurfallah",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Rex Shi",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Richard",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Richard Sison",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Ricky Salsberry",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Robert Weisbecker",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Ronald Huynh",
    "twitterUsername": null,
    "image": "/static/img/patreon/ronald_huynh.jpeg",
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Roy Stanfield",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Ryan Donnelly",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Ryan Koble",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Ryan Parag",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Sahil Chaturvedi",
    "twitterUsername": null,
    "image": "/static/img/patreon/sahil_chaturvedi.png",
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Sam Bernhardt",
    "twitterUsername": null,
    "image": "/static/img/patreon/sam_bernhardt.jpeg",
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Sam Chang",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Sam Mason",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": true
  },
  {
    "name": "Scott Foltz",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Sean Kushi",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Sergio Rovira",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Seth Richardson",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Shaun Whitworth",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Shivani Goel",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Shogo Tsuruda",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Simon Madsen",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Sofia Bautista",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Stephen Hathaway",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "former",
    "dayOne": false
  },
  {
    "name": "Struan Robertson",
    "twitterUsername": null,
    "image": "/static/img/patreon/struan_robertson.jpeg",
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Tanveer Singh Mahendra",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Thiago Valadares Noleto Damasceno",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Timothy Pui-Fai Li",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Ting-Ju Chen",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Tobias Treppmann",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Tt_55",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Valentine Ubaldo",
    "twitterUsername": null,
    "image": "/static/img/patreon/vtine_ubaldo.jpeg",
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Vinnie",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Wan Jung Hung",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Will",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Will Vaughan",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "William Goi",
    "twitterUsername": null,
    "image": "/static/img/patreon/william_goi.jpeg",
    "state": "active",
    "dayOne": false
  },
  {
    "name": "Ying Yao",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "zeneosjun",
    "twitterUsername": null,
    "image": randomPatreonImage(),
    "state": "active",
    "dayOne": false
  },
  {
    "name": "明勳 李",
    "twitterUsername": null,
    "image": "/static/img/patreon/lampard.jpeg",
    "state": "active",
    "dayOne": false
  }
]

export default patrons