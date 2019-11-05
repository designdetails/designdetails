import { Grid, Option } from './styles';
import { Chevron } from '../Icons';

const startingEpisodes = [
  {
    url: 'https://spec.fm/podcasts/design-details/220880',
    title: '271: Principles of Design'
  },
  {
    url: 'https://spec.fm/podcasts/design-details/161416',
    title: '253: Follow The Troll Flow (feat. May-Li Khoe & Chikezie Ejiasi)'
  },
  {
    url: 'https://spec.fm/podcasts/design-details/113490',
    title: '235: Incremental Correctness (feat. Guillermo Rauch)'
  },
  {
    url: 'https://spec.fm/podcasts/design-details/306429',
    title: '309: Career Progression for Product Designers'
  },
  {
    url: 'https://spec.fm/podcasts/design-details/298638',
    title: '297: Day-to-Day Design Struggles'
  },
  {
    url: 'https://spec.fm/podcasts/design-details/292309',
    title: '292: Building Design Systems (feat. Linzi Berry)'
  },
  {
    url: 'https://spec.fm/podcasts/design-details/308804',
    title:
      '314: Beauty, Vulnerability, and Doing Things That Matter (feat. Haraldur Thorleifsson)'
  }
];

export default () => (
  <Grid>
    {startingEpisodes.map(ep => (
      <Option
        key={ep.title}
        target="_blank"
        rel="noopener noreferrer"
        href={ep.url}
      >
        <Chevron />
        {ep.title}
      </Option>
    ))}
  </Grid>
);
