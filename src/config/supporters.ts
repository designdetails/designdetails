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
    name: 'Sisu',
    imageUrl: '/static/img/patreon/golden/sisu.png',
    url: 'https://sisu.ai/',
    tagline:
      'Sisu is looking for a thoughtful and data-savvy designer to help build the next generation of analytics software. You can find out more at sisu.ai.'
  },
  {
    name: 'Flywheel',
    imageUrl: '/static/img/patreon/golden/flywheel.png',
    url: 'https://getflywheel.com/?utm_campaign=brand-awareness&utm_medium=sponsorship&utm_source=podcast&utm_content=design-details',
    tagline:
      'Flywheel is a delightfully designed managed WordPress hosting platform, thoughtfully built for busy creatives. Streamline your workflow with their slick platform and sweet set of workflow tools perfectly made for designers!'
  }
];

// Simply add a new Twitter display name inside the inverted commas. Once added, run a new build and deploy to see an updated Twitter URL for that Patreon supporter.

export default [
  {
    name: 'Adam Carroll',
    twitterUsername: null,
    image: randomPatreonImage(),
    state: 'active',
    dayOne: true
  },

  {
    name: 'Aishwarya Sheth',
    twitterUsername: null,
    image: randomPatreonImage(),
    state: 'active',
    dayOne: false
  },

  {
    name: 'Alec Sukoski',
    twitterUsername: null,
    image: '/static/img/patreon/alec_sukoski.jpg',
    state: 'active',
    dayOne: false
  },

  {
    name: 'Ali Salem',
    twitterUsername: null,
    image: '/static/img/patreon/ali_salem.png',
    state: 'active',
    dayOne: false
  },

  {
    name: 'Andrew Crandall',
    twitterUsername: null,
    image: '/static/img/patreon/andrew_crandall.jpeg',
    state: 'active',
    dayOne: true
  },

  {
    name: 'Anojan Sivaranjan',
    twitterUsername: null,
    image: randomPatreonImage(),
    state: 'active',
    dayOne: false
  },

  {
    name: 'Aurora Pleguezuelo',
    twitterUsername: 'auareyou',
    image: '/static/img/patreon/aurora_pleguezuelo.jpe',
    state: 'active',
    dayOne: true
  },

  {
    name: 'Bob Weisbecker',
    twitterUsername: null,
    image: '/static/img/patreon/bob_weisbecker.jpeg',
    state: 'active',
    dayOne: false
  },

  {
    name: 'Bradford Ulrich',
    twitterUsername: null,
    image: randomPatreonImage(),
    state: 'active',
    dayOne: false
  },

  {
    name: 'Brandon Weiss',
    twitterUsername: 'brandon_weiss',
    image: '/static/img/patreon/brandon_weiss.jpeg',
    state: 'active',
    dayOne: true
  },

  {
    name: 'Cameron Campbell',
    twitterUsername: null,
    image: randomPatreonImage(),
    state: 'active',
    dayOne: true
  },

  {
    name: 'Charlie Van Meter',
    twitterUsername: null,
    image: randomPatreonImage(),
    state: 'active',
    dayOne: false
  },

  {
    name: 'Claudio Vallejo',
    twitterUsername: null,
    image: '/static/img/patreon/claudio_vallejo.jpeg',
    state: 'active',
    dayOne: true
  },

  {
    name: 'Coard Miller',
    twitterUsername: null,
    image: randomPatreonImage(),
    state: 'active',
    dayOne: false
  },

  {
    name: 'Cristian Ruiz',
    twitterUsername: 'razgriz94',
    image: '/static/img/patreon/cristian_ruiz.jpg',
    state: 'active',
    dayOne: true
  },

  {
    name: 'Damian Bilski',
    twitterUsername: null,
    image: randomPatreonImage(),
    state: 'active',
    dayOne: false
  },

  {
    name: 'Danny Haagen',
    twitterUsername: null,
    image: randomPatreonImage(),
    state: 'active',
    dayOne: false
  },

  {
    name: 'Darren Soulsby',
    twitterUsername: null,
    image: randomPatreonImage(),
    state: 'active',
    dayOne: false
  },

  {
    name: 'Derek Graham',
    twitterUsername: null,
    image: randomPatreonImage(),
    state: 'active',
    dayOne: false
  },

  {
    name: 'Doris Saturday',
    twitterUsername: null,
    image: randomPatreonImage(),
    state: 'active',
    dayOne: true
  },

  {
    name: 'Ed Johnson-Williams',
    twitterUsername: null,
    image: randomPatreonImage(),
    state: 'active',
    dayOne: false
  },

  {
    name: 'Eden Wulf',
    twitterUsername: null,
    image: randomPatreonImage(),
    state: 'active',
    dayOne: false
  },

  {
    name: 'Effy Zhang',
    twitterUsername: null,
    image: randomPatreonImage(),
    state: 'active',
    dayOne: true
  },

  {
    name: 'Erik',
    twitterUsername: null,
    image: randomPatreonImage(),
    state: 'active',
    dayOne: false
  },

  {
    name: 'Essa Saulat',
    twitterUsername: null,
    image: randomPatreonImage(),
    state: 'active',
    dayOne: true
  },

  {
    name: 'FoxFire720',
    twitterUsername: null,
    image: randomPatreonImage(),
    state: 'active',
    dayOne: false
  },

  {
    name: 'Jackie Eaton',
    twitterUsername: null,
    image: '/static/img/patreon/jackie_eaton.jpeg',
    state: 'active',
    dayOne: false
  },

  {
    name: 'Jacqueline Nguyen',
    twitterUsername: null,
    image: randomPatreonImage(),
    state: 'active',
    dayOne: false
  },

  {
    name: 'James Carleton',
    twitterUsername: null,
    image: randomPatreonImage(),
    state: 'active',
    dayOne: false
  },

  {
    name: 'James Lyons',
    twitterUsername: null,
    image: '/static/img/patreon/james_lyons.png',
    state: 'active',
    dayOne: false
  },

  {
    name: 'Jeff Parsons',
    twitterUsername: null,
    image: randomPatreonImage(),
    state: 'active',
    dayOne: true
  },

  {
    name: 'Jing Zhang',
    twitterUsername: null,
    image: '/static/img/patreon/jing_zhang.jpeg',
    state: 'active',
    dayOne: false
  },

  {
    name: 'Joan Disho',
    twitterUsername: null,
    image: '/static/img/patreon/joan_disho.jpeg',
    state: 'active',
    dayOne: false
  },

  {
    name: 'John Wood',
    twitterUsername: null,
    image: randomPatreonImage(),
    state: 'active',
    dayOne: true
  },

  {
    name: 'Joseph Brueggen',
    twitterUsername: 'josephbrueggen',
    image: randomPatreonImage(),
    state: 'active',
    dayOne: true
  },

  {
    name: 'Justin Allen',
    twitterUsername: null,
    image: '/static/img/patreon/justin_allen.jpeg',
    state: 'active',
    dayOne: false
  },

  {
    name: 'Karl Koch',
    twitterUsername: '_kejk',
    image: '/static/img/patreon/karl_koch.jpeg',
    state: 'active',
    dayOne: true
  },

  {
    name: 'Kevin Bennett',
    twitterUsername: null,
    image: '/static/img/patreon/kevin_bennett.jpeg',
    state: 'active',
    dayOne: false
  },

  {
    name: 'Kris Puckett',
    twitterUsername: null,
    image: randomPatreonImage(),
    state: 'active',
    dayOne: true
  },

  {
    name: 'Kryston Schwarze',
    twitterUsername: null,
    image: randomPatreonImage(),
    state: 'active',
    dayOne: false
  },

  {
    name: 'Kyle Mitchell',
    twitterUsername: null,
    image: randomPatreonImage(),
    state: 'active',
    dayOne: true
  },

  {
    name: 'Lista Pesok',
    twitterUsername: null,
    image: randomPatreonImage(),
    state: 'active',
    dayOne: false
  },

  {
    name: 'Lovro Podobnik',
    twitterUsername: null,
    image: '/static/img/patreon/lovro_podobnik.jpeg',
    state: 'active',
    dayOne: false
  },

  {
    name: 'MannnnnnyX',
    twitterUsername: null,
    image: randomPatreonImage(),
    state: 'active',
    dayOne: true
  },

  {
    name: 'Manuel Solera',
    twitterUsername: null,
    image: '/static/img/patreon/manuel_solera.jpeg',
    state: 'active',
    dayOne: false
  },

  {
    name: 'Mark Powell',
    twitterUsername: null,
    image: randomPatreonImage(),
    state: 'active',
    dayOne: false
  },

  {
    name: 'Marvin Messenzehl',
    twitterUsername: null,
    image: '/static/img/patreon/marvin_messenzehl.jpeg',
    state: 'active',
    dayOne: false
  },

  {
    name: 'Max Stoiber',
    twitterUsername: 'mxstbr',
    image: randomPatreonImage(),
    state: 'active',
    dayOne: true
  },

  {
    name: 'Meena Balasubramaniam',
    twitterUsername: null,
    image: randomPatreonImage(),
    state: 'active',
    dayOne: false
  },

  {
    name: 'Melinda Yang',
    twitterUsername: null,
    image: randomPatreonImage(),
    state: 'active',
    dayOne: false
  },

  {
    name: 'Michael Goliver',
    twitterUsername: null,
    image: randomPatreonImage(),
    state: 'active',
    dayOne: false
  },

  {
    name: 'Michael Knepprath',
    twitterUsername: 'mknepprath',
    image: randomPatreonImage(),
    state: 'active',
    dayOne: false
  },

  {
    name: 'Mike Hickman',
    twitterUsername: null,
    image: randomPatreonImage(),
    state: 'active',
    dayOne: false
  },

  {
    name: 'Oscar Lozano',
    twitterUsername: null,
    image: randomPatreonImage(),
    state: 'active',
    dayOne: false
  },

  {
    name: 'Paul Dippold',
    twitterUsername: null,
    image: randomPatreonImage(),
    state: 'active',
    dayOne: false
  },

  {
    name: 'Pekka Siika-aho',
    twitterUsername: null,
    image: randomPatreonImage(),
    state: 'active',
    dayOne: false
  },

  {
    name: 'Richard',
    twitterUsername: null,
    image: randomPatreonImage(),
    state: 'active',
    dayOne: false
  },

  {
    name: 'Ronald Huynh',
    twitterUsername: null,
    image: '/static/img/patreon/ronald_huynh.jpeg',
    state: 'active',
    dayOne: false
  },

  {
    name: 'Roy Stanfield',
    twitterUsername: null,
    image: randomPatreonImage(),
    state: 'active',
    dayOne: false
  },

  {
    name: 'Ryan Donnelly',
    twitterUsername: null,
    image: randomPatreonImage(),
    state: 'active',
    dayOne: false
  },

  {
    name: 'Ryan Parag',
    twitterUsername: null,
    image: randomPatreonImage(),
    state: 'active',
    dayOne: false
  },

  {
    name: 'Sahil Chaturvedi',
    twitterUsername: null,
    image: '/static/img/patreon/sahil_chaturvedi.png',
    state: 'active',
    dayOne: false
  },

  {
    name: 'Sam Bernhardt',
    twitterUsername: null,
    image: '/static/img/patreon/sam_bernhardt.jpeg',
    state: 'active',
    dayOne: false
  },

  {
    name: 'Sam Mason',
    twitterUsername: null,
    image: randomPatreonImage(),
    state: 'active',
    dayOne: true
  },

  {
    name: 'Shaun Whitworth',
    twitterUsername: null,
    image: randomPatreonImage(),
    state: 'active',
    dayOne: false
  },

  {
    name: 'Shivani Goel',
    twitterUsername: null,
    image: randomPatreonImage(),
    state: 'active',
    dayOne: false
  },

  {
    name: 'Sofia Bautista',
    twitterUsername: null,
    image: randomPatreonImage(),
    state: 'active',
    dayOne: false
  },

  {
    name: 'Stephen Hathaway',
    twitterUsername: null,
    image: randomPatreonImage(),
    state: 'active',
    dayOne: false
  },

  {
    name: 'Struan Robertson',
    twitterUsername: null,
    image: '/static/img/patreon/struan_robertson.jpeg',
    state: 'active',
    dayOne: false
  },

  {
    name: 'Timothy Pui-Fai Li',
    twitterUsername: null,
    image: randomPatreonImage(),
    state: 'active',
    dayOne: false
  },

  {
    name: 'Tobias Treppmann',
    twitterUsername: null,
    image: randomPatreonImage(),
    state: 'active',
    dayOne: false
  },

  {
    name: 'Valentine Ubaldo',
    twitterUsername: null,
    image: '/static/img/patreon/vtine_ubaldo.jpeg',
    state: 'active',
    dayOne: false
  },

  {
    name: 'Will',
    twitterUsername: null,
    image: randomPatreonImage(),
    state: 'active',
    dayOne: false
  },

  {
    name: 'William Goi',
    twitterUsername: null,
    image: '/static/img/patreon/william_goi.jpeg',
    state: 'active',
    dayOne: false
  },

  {
    name: '明勳 李',
    twitterUsername: null,
    image: '/static/img/patreon/lampard.jpeg',
    state: 'active',
    dayOne: false
  },
];
