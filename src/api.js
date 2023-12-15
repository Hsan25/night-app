import axios from "axios";
const url = import.meta.env.VITE_REACT_APP_BASEURL;

export const getPopularAnime = async () => {
  const req = await axios.get(`${url}/top/anime`);
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
export const getRecomendationsAnime = async () => {
  const req = await axios.get(`${url}/recomendations/anime`);
  const data = await req.data;
  return data;
};

// manga

export const getPopularManga = async () => {
  const req = await axios.get(`${url}/top/manga`);
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
  const req = await axios.get(`${url}/manga?q=${q}&sfw=true`);
  const data = await req.data;
  return data;
};
