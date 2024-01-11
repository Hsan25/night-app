import MainLayout from "../Layouts/MainLayout";

import { Helmet } from "react-helmet";
import Loading from "../components/Loading";
import { useState } from "react";
import useLogin from "../hooks/useLogin";
import { getPopularAnime, getPopularManga, getRandomQuotes } from "../api";
import CardList from "../components/CardList";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const username = useLogin();
  const [isLoading, setIsLoading] = useState(true);
  const [animeList, setAnimeList] = useState([]);
  const [mangaList, setMangaList] = useState([]);
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    setIsLoading(false);
    getPopularAnime(5).then((res) => {
      console.log(res.data);
      setAnimeList(res.data);
    });
    getPopularManga(5).then((res) => {
      setMangaList(res.data);
    });

    getRandomQuotes().then((res) => setQuotes(res.result));
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <MainLayout>
          <Helmet>
            <title>Night - Home</title>
          </Helmet>
          <h1 className="text-2xl">
            SELAMAT DATANG{" "}
            <span className="text-3xl text-sky-500"> {username || ""}</span> DI
            HALAMAN UTAMA
          </h1>
          <section className="pt-14">
            <h1 className="text-xl">Tentang Kami</h1>
            <p>
              Night app adalah sebuah website yang menyediakan informasi
              informasi anime atau manga. Data informasi ini di ambil dari{" "}
              <a
                href="https://jikan.moe"
                className="hover:underline text-sky-600"
                target="_blank">
                Jikan.moe
              </a>
            </p>
          </section>

          {/* anime populer */}

          <section className="pt-14 min-h-[20vh] relative w-full">
            <div className="flex justify-between w-full items-center">
              <h1 className="text-xl md:text-3xl"> Anime Populer</h1>
              <Link
                className="text-sky-600 hover:text-sky-700 hover:underline"
                to={"/anime"}>
                See all
              </Link>
            </div>
            <CardList data={animeList} />
          </section>
          <section className="pt-14 min-h-[20vh] relative w-full">
            <div className="flex justify-between w-full items-center">
              <h1 className="text-xl md:text-3xl"> Manga Populer</h1>
              <Link
                className="text-sky-600 hover:text-sky-700 hover:underline"
                to={"/manga"}>
                See all
              </Link>
            </div>
            <CardList data={mangaList} type="manga" />
          </section>

          <section className="pt-14">
            <div className="flex justify-between w-full items-center">
              <h1 className="text-xl md:text-3xl">Quotes Anime</h1>
              <Link
                className="text-sky-600 hover:text-sky-700 hover:underline"
                to={"/quotes"}>
                See all
              </Link>
            </div>
            <div className="md:w-[45%] mx-auto">
              {quotes.length
                ? quotes.map((item, idx) => {
                    if (idx > 0) return;
                    return (
                      <div className="list-quotes py-12 mx-auto" key={idx}>
                        <p className="text-justify w-full mx-auto text-lg md:text-xl font-medium">
                          &rdquo;{item.indo}&rdquo;
                        </p>
                        <div className="by mt-5 text-xl text-slate-500 italic text-center">
                          {"~"} {item.character}
                        </div>
                        <div className="by text-xl text-slate-500 italic text-center">
                          anime: {item.anime}
                        </div>
                      </div>
                    );
                  })
                : null}
            </div>
          </section>
        </MainLayout>
      )}
    </>
  );
};

export default HomePage;
