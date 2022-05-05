import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
  params: { 'sort-by': 'release-date' },
  headers: {
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
    'X-RapidAPI-Key': '1543d168camshc90b78e628d36a6p10a610jsn391ad02e5778',
  },
};

export function recentGet({ setFalse }) {
  return axios
    .request(options)
    .then(function (response) {
      setFalse();
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
}
