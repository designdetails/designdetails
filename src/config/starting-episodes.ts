export const startingEpisodes = [
  {
    token: 'e4bc4eef',
    legacyId: '220880',
    title: '271: Principles of Design',
  },
  {
    token: 'd716b960',
    legacyId: '161416',
    title: '253: Follow The Troll Flow (feat. May-Li Khoe & Chikezie Ejiasi)',
  },
  {
    token: 'b7abe27f',
    legacyId: '113490',
    title: '235: Incremental Correctness (feat. Guillermo Rauch)',
  },
  {
    token: 'a49ea0ca',
    legacyId: '306429',
    title: '309: Career Progression for Product Designers',
  },
  {
    token: 'a1b02c93',
    legacyId: '298638',
    title: '297: Day-to-Day Design Struggles',
  },
  {
    token: '3807c635',
    legacyId: '292309',
    title: '292: Building Design Systems (feat. Linzi Berry)',
  },
  {
    token: '0fcd92a9',
    legacyId: '308804',
    title:
      '314: Beauty, Vulnerability, and Doing Things That Matter (feat. Haraldur Thorleifsson)',
  },
]

export const legacyEpisodeTokens: Record<string, string> = Object.fromEntries(
  startingEpisodes.map((episode) => [episode.legacyId, episode.token])
)
