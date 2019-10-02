const randomPatreonImage = () => {
  const images = [
    '/static/img/patreon/random/1.png',
    '/static/img/patreon/random/2.png',
    '/static/img/patreon/random/3.png',
    '/static/img/patreon/random/4.png',
    '/static/img/patreon/random/5.png',
    '/static/img/patreon/random/6.png',
    '/static/img/patreon/random/7.png',
  ]

  return images[Math.floor(Math.random()*images.length)];
}

// Simply add a new Twitter display name inside the inverted commas. Once added, run a new build and deploy to see an updated Twitter URL for that Patreon supporter.

export default [
  {
    name: 'Abhishek Warokar',
    twitterUsername: null,
    image: randomPatreonImage(),
    state: 'active',
    dayOne: true
  },

  {
    name: 'Adam Carroll',
    twitterUsername: null,
    image: randomPatreonImage(),
    state: 'active',
    dayOne: true
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
    twitterUsername: null,
    image: '/static/img/patreon/aurora_pleguezuelo.jpe',
    state: 'active',
    dayOne: true
  },

  {
    name: 'Brandon Weiss',
    twitterUsername: null,
    image: '/static/img/patreon/brandon_weiss.jpeg',
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
    name: 'Cameron Campbell',
    twitterUsername: null,
    image: randomPatreonImage(),
    state: 'active',
    dayOne: true
  },

  {
    name: 'Christian Ruiz',
    twitterUsername: null,
    image: '/static/img/patreon/christian_ruiz.jpg',
    state: 'active',
    dayOne: true
  },

  {
    name: 'Karl Koch',
    twitterUsername: '_kejk',
    image: '/static/img/patreon/karl_koch.jpeg',
    state: 'active',
    dayOne: true
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
    name: 'Jeff Parsons',
    twitterUsername: null,
    image: randomPatreonImage(),
    state: 'active',
    dayOne: true
  },

  {
    name: 'Joseph Brueggen',
    twitterUsername: null,
    image: randomPatreonImage(),
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
    name: 'Max Stoiber',
    twitterUsername: null,
    image: randomPatreonImage(),
    state: 'active',
    dayOne: true
  },

  {
    name: 'Sam Mason',
    twitterUsername: null,
    image: randomPatreonImage(),
    state: 'active',
    dayOne: true
  },
]