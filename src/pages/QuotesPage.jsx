import MainLayout from "../Layouts/MainLayout";
import Loading from "../components/Loading";
import { useState, useEffect } from "react";
import useLogin from "../hooks/useLogin";
import { getRandomQuotes, getQuotesByKeyWord } from "../api";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
const QuotesPage = () => {
  useLogin();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const { keyword } = useParams();
  useEffect(() => {
    if (keyword) {
      
      getQuotesByKeyWord(keyword).then((res) => {
        setData(res.result);
      });
      return;
    }
    getRandomQuotes().then((res) => {
      setData(res.result);
    });
  }, [keyword]);

  useEffect(() => {}, [keyword]);
  setTimeout(() => {
    setIsLoading(false);
  }, 500);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <MainLayout style={"md:w-[45%]"}>
          <h1 className="text-2xl md:text-3xl py-8 text-center font-medium">
            Quotes Anime
          </h1>
          {keyword && (
            <>
              <h1 className="text-2xl font-medium">
                Search quote {keyword} ....
              </h1>
            </>
          )}
          {data.length
            ? data.map((item, idx) => {
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
        </MainLayout>
      )}
    </>
  );
};

export default QuotesPage;
