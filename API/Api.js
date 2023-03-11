export const categories = [
  {
    key: '1',
    pic: 'https://img.icons8.com/fluent/96/000000/news.png',
    name: 'general',
  },
  {
    key: '2',
    pic: 'https://img.icons8.com/fluent/96/000000/hard-working.png',
    name: 'business',
  },
  {
    key: '3',
    pic: 'https://img.icons8.com/fluent/96/000000/movie-projector.png',
    name: 'entertainment',
  },
  {
    key: '4',
    pic: 'https://img.icons8.com/fluent/96/000000/stethoscope.png',
    name: 'health',
  },
  {
    key: '5',
    pic: 'https://img.icons8.com/fluent/96/000000/microscope.png',
    name: 'science',
  },
  {
    key: '6',
    pic: 'https://img.icons8.com/fluent/96/000000/trophy.png',
    name: 'sports',
  },
  {
    key: '7',
    pic: 'https://img.icons8.com/fluent/96/000000/artificial-intelligence.png',
    name: 'technology',
  },
]

export const country = [
  {
    value: 'ar',
    label: 'Argentina',
  },
  {
    value: 'au',
    label: 'Australia',
  },
  {
    value: 'be',
    label: 'Belgium',
  },
  {
    value: 'br',
    label: 'Brazil',
  },
  {
    value: 'cn',
    label: 'China',
  },
  {
    value: 'fr',
    label: 'France',
  },
  {
    value: 'ru',
    label: 'Russia',
  },
  {
    value: 'us',
    label: 'USA',
  },
  {
    value: 'gb',
    label: 'United Kingdom',
  },
]

export const sources = [
  {
    id: 'bbc-news',
    name: 'BBC News',
    pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png',
  },
  {
    id: 'cnn',
    name: 'CNN',
    pic: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Cnn_logo_red_background.png',
  },
  {
    id: 'fox-news',
    name: 'Fox News',
    pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Fox_News_Channel_logo.svg/768px-Fox_News_Channel_logo.svg.png',
  },
  {
    id: 'google-news',
    name: 'Google News',
    pic: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Google_News_icon.png',
  },
]

export const BASE_URL = 'https://newsapi.org/v2/'
//API Keys
const apikey1 = '7ac3b5e4f39947d7b660c01796d09468'
const apikey2 = '6ce72d90c6394cae9616dbc8908b6010'

//Get all news from a country with a category
export const getNewsAPI = (category, country) => {
  return `${BASE_URL}/top-headlines?country=${country}&category=${category}&apiKey=${apikey1}`
}

//Get all news from a source
export const getSourceAPI = (source) => {
  return `${BASE_URL}/top-headlines?sources=${source}&apiKey=${apikey1}`
}

//Get all news from a search query
export const getSearchAPI = (query) => {
  return `${BASE_URL}/everything?q=${query}&apiKey=${apikey1}`
}
