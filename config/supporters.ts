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
    name: 'Alec Sukoski',
    twitterUsername: null,
    image: '/static/img/patreon/alec_sukoski.jpg',
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
    name: 'Claudio Vallejo',
    twitterUsername: null,
    image: '/static/img/patreon/claudio_vallejo.jpeg',
    state: 'active',
    dayOne: true
  },

  {
    name: 'Cristian Ruiz',
    twitterUsername: 'razgriz94',
    image: '/static/img/patreon/cristian_ruiz.jpg',
    state: 'active',
    dayOne: true
  },

  {
    name: 'Danny Haagen',
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
    name: 'Effy Zhang',
    twitterUsername: null,
    image: randomPatreonImage(),
    state: 'active',
    dayOne: true
  },

  {
    name: 'Essa Saulat',
    twitterUsername: null,
    image: randomPatreonImage(),
    state: 'active',
    dayOne: true
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
    name: 'Kris Puckett',
    twitterUsername: null,
    image: randomPatreonImage(),
    state: 'active',
    dayOne: true
  },

  {
    name: 'Kyle Mitchell',
    twitterUsername: null,
    image: randomPatreonImage(),
    state: 'active',
    dayOne: true
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
    name: 'Max Stoiber',
    twitterUsername: 'mxstbr',
    image: randomPatreonImage(),
    state: 'active',
    dayOne: true
  },

  {
    name: 'Melinda Yang',
    twitterUsername: null,
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
    name: 'Paul Dippold',
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
    name: 'Valentine Ubaldo',
    twitterUsername: null,
    image: '/static/img/patreon/vtine_ubaldo.jpeg',
    state: 'active',
    dayOne: false
  }
];
