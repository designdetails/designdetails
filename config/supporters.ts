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

export default [
  {
    name: 'Abhishek Warokar',
    image: randomPatreonImage(),
    state: 'active',
    dayOne: true
  },

  {
    name: 'Adam Carroll',
    image: randomPatreonImage(),
    state: 'active',
    dayOne: true
  },

  {
    name: 'Andrew Crandall',
    image: '/static/img/patreon/andrew_crandall.jpeg',
    state: 'active',
    dayOne: true
  },

  {
    name: 'Aurora Pleguezuelo',
    image: '/static/img/patreon/aurora_pleguezuelo.jpe',
    state: 'active',
    dayOne: true
  },

  {
    name: 'Brandon Weiss',
    image: '/static/img/patreon/brandon_weiss.jpeg',
    state: 'active',
    dayOne: true
  },

  {
    name: 'Claudio Vallejo',
    image: '/static/img/patreon/claudio_vallejo.jpeg',
    state: 'active',
    dayOne: true
  },

  {
    name: 'Cameron Campbell',
    image: randomPatreonImage(),
    state: 'active',
    dayOne: true
  },

  {
    name: 'Christian Ruiz',
    image: '/static/img/patreon/christian_ruiz.jpg',
    state: 'active',
    dayOne: true
  },

  {
    name: 'Karl Koch',
    image: '/static/img/patreon/karl_koch.jpeg',
    state: 'active',
    dayOne: true
  },

  {
    name: 'Doris Saturday',
    image: randomPatreonImage(),
    state: 'active',
    dayOne: true
  },

  {
    name: 'Effy Zhang',
    image: randomPatreonImage(),
    state: 'active',
    dayOne: true
  },

  {
    name: 'Essa Saulat',
    image: randomPatreonImage(),
    state: 'active',
    dayOne: true
  },

  {
    name: 'Jeff Parsons',
    image: randomPatreonImage(),
    state: 'active',
    dayOne: true
  },

  {
    name: 'Joseph Brueggen',
    image: randomPatreonImage(),
    state: 'active',
    dayOne: true
  },

  {
    name: 'Kris Puckett',
    image: randomPatreonImage(),
    state: 'active',
    dayOne: true
  },

  {
    name: 'Kyle Mitchell',
    image: randomPatreonImage(),
    state: 'active',
    dayOne: true
  },

  {
    name: 'MannnnnnyX',
    image: randomPatreonImage(),
    state: 'active',
    dayOne: true
  },

  {
    name: 'Max Stoiber',
    image: randomPatreonImage(),
    state: 'active',
    dayOne: true
  },

  {
    name: 'Sam Mason',
    image: randomPatreonImage(),
    state: 'active',
    dayOne: true
  },
]