import React from 'react';
import Module from '../Module';
import { PlayCircle } from '../Icons';
import theme from '../../config/theme';
import LoadingSpinner from '../LoadingSpinner';

class LatestEpisode extends React.Component {
  state = {
    episode: null,
    loading: true
  };

  async componentDidMount() {
    return await fetch('https://api.spec.fm/podcasts/1034/episodes.json')
      .then(res => {
        return res.json();
      })
      .then(res => {
        const episode = res.find(ep => !!ep.published);
        return this.setState({ loading: false, episode });
      })
      .catch(() => this.setState({ loading: false }));
  }

  render() {
    const { episode, loading } = this.state;

    if (loading) {
      return (
        <Module tint={theme.brand.primary} col={'1 / span 6'}>
          <Module.Title tint={theme.brand.primary}>
            <PlayCircle />
            Latest Episode
          </Module.Title>
          <LoadingSpinner style={{ padding: '85px 0' }} />
        </Module>
      );
    }

    if (!episode) return null;

    const { sharing_url } = episode;
    const [, id] = sharing_url.split('s/');

    if (!id) return null;

    return (
      <Module tint={theme.brand.primary} col={'1 / span 6'}>
        <Module.Title tint={theme.brand.primary}>
          <PlayCircle />
          Latest Episode
        </Module.Title>
        <iframe
          frameBorder="0"
          height="200px"
          scrolling="no"
          seamless
          src={`https://embed.simplecast.com/${id}?color=f5f5f5`}
          width="100%"
          data-cy="latest-episode"
        />
      </Module>
    );
  }
}

export default LatestEpisode;
