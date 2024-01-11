import axios from "axios";
const url = import.meta.env.VITE_REACT_APP_BASEURL;

const quotesUrl = import.meta.env.VITE_REACT_APP_QUOTES_URL;
export const getPopularAnime = async (limit = 0) => {
  const req = await axios.get(
    `${url}/top/anime${limit ? `?limit=${limit}` : ""}`
  );
  const data = await req.data;
  return data;
};

export const getAnimeById = async (id) => {
  const req = await axios.get(`${url}/anime/${id}`);
  const data = await req.data;
  return data;
};

export const getSearchAnime = async (q) => {
  const req = await axios.get(`${url}/anime?q=${q}&sfw=true`);
  const data = await req.data;
  return data;
};

// anime rekomendasi
export const getRecomendationsAnime = async (limit) => {
  const req = await axios.get(`${url}/recomendations/anime`);
  const data = await req.data;
  return data;
};

// manga

export const getPopularManga = async (limit) => {
  const req = await axios.get(
    `${url}/top/manga?sfw=false${limit ? `&limit=${limit}` : ""}`
  );
  const data = await req.data;
  return data;
};

export const getMangaById = async (id) => {
  try {
    const res = await axios.get(`${url}/manga/${id}`);
    if (res.status == 404) {
      console.log("kosong");
      return { status: res.status };
    }
    const data = await res.data;
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

export const getSearchManga = async (q) => {
  try {
    const req = await axios.get(`${url}/manga?q=${q}&sfw=true`);
    const data = await req.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

// quotes

// get random quotes

export const getRandomQuotes = async () => {
  try {
    const res = await axios.get(`${quotesUrl}/getrandom`);
    const data = await res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getQuotesByKeyWord = async (keyword) => {
  try {
    const res = await axios.get(`${quotesUrl}/carikata?kata=${keyword}&page=1`);
    const data = await res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
