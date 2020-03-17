import fetch from 'isomorphic-unfetch'

export async function getEpisodes() {
  return await fetch("https://spec.fm/api/podcasts/1034/episodes")
    .then(res => res.json())
    .then(res => res.filter(ep => !!ep.published))
    .catch(err => {
      console.error(err);
    });
}

export async function getEpisode(id) {
  return await fetch(`https://spec.fm/api/podcasts/1034/episodes/${id}`)
    .then(res => res.json())
    .catch(err => {
      console.error(err);
    });
}