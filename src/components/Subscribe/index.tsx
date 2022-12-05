import { Grid, Option, Avatar, Label } from './style';
import podcast from '../../config/podcasts';

export default function SubscribeContainer() {
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
              src="/static/img/subscription-icons/apple-podcasts.png"
              alt="Apple Podcasts"
            />
            <Label>Apple Podcasts</Label>
          </Option>
        </a>
      )}

      {podcast.spotifyUrl && (
        <a
          href={podcast.spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-cy="subscription-spotify"
        >
          <Option>
            <Avatar
              src="/static/img/subscription-icons/spotify.png"
              alt="Spotify"
            />
            <Label>Spotify</Label>
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
    </Grid>
  );
}
