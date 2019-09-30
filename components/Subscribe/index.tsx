import { Grid, Option, Avatar, Label } from './style';
import podcast from '../../config/podcasts'

export default () => {
  return (
    <Grid>
      {podcast.iTunesUrl && (
        <a
          href={podcast.iTunesUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-cy="subscription-apple-podcasts"
        >
          <Option>
            <Avatar
              src="/static/img/subscription-icons/podcasts.png"
              alt="Apple Podcasts"
            />
            <Label>Apple Podcasts</Label>
          </Option>
        </a>
      )}

      {podcast.overcastUrl && (
        <a
          href={podcast.overcastUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-cy="subscription-overcast"
        >
          <Option>
            <Avatar
              src="/static/img/subscription-icons/overcast.png"
              alt="Overcast"
            />
            <Label>Overcast</Label>
          </Option>
        </a>
      )}

      {podcast.pocketCastsUrl && (
        <a
          href={podcast.pocketCastsUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-cy="subscription-pocketcasts"
        >
          <Option>
            <Avatar
              src="/static/img/subscription-icons/pocketcasts.png"
              alt="Pocketcasts"
            />
            <Label>PocketCasts</Label>
          </Option>
        </a>
      )}

      {podcast.googlePodcastsUrl && (
        <a
          href={podcast.googlePodcastsUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-cy="subscription-google-podcasts"
        >
          <Option>
            <Avatar
              src="/static/img/subscription-icons/google-podcasts.png"
              alt="Google Podcasts"
            />
            <Label>Google Podcasts</Label>
          </Option>
        </a>
      )}

      {podcast.castroUrl && (
        <a
          href={podcast.castroUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-cy="subscription-castro"
        >
          <Option>
            <Avatar
              src="/static/img/subscription-icons/castro.png"
              alt="Castro"
            />
            <Label>Castro</Label>
          </Option>
        </a>
      )}

      {podcast.breakerUrl && (
        <a
          href={podcast.breakerUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-cy="subscription-breaker"
        >
          <Option>
            <Avatar
              src="/static/img/subscription-icons/breaker.png"
              alt="Breakrer"
            />
            <Label>Breaker</Label>
          </Option>
        </a>
      )}

      {podcast.rssFeedUrl && (
        <a
          href={podcast.rssFeedUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-cy="subscription-rss"
        >
          <Option>
            <Avatar
              src="/static/img/subscription-icons/rss.png"
              alt="RSS Feed"
            />
            <Label>RSS Feed</Label>
          </Option>
        </a>
      )}
    </Grid>
  );
}
