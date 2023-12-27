import { useState, useEffect } from "react";
import CardList from "../components/CardList";
import { useParams } from "react-router-dom";
import { getSearchAnime, getSearchManga } from "../api";
import { useLocation } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import useLogin from "../hooks/useLogin";
const SearchResult = () => {
  // login
  useLogin();

  const { query } = useParams();
  const [data, setData] = useState([]);
  const location = useLocation();
  let type = location.pathname.split("/")[1];

  useEffect(() => {
    type == "anime"
      ? getSearchAnime(query).then((res) => {
          setData(res.data);
        })
      : getSearchManga(query).then((res) => {
          setData(res.data);
        });
  }, [query]);

  return (
    <MainLayout>
      <h1 className="text-xl md:text-3xl font-medium">
        Search result {query.split("-").join(" ")}{" "}
      </h1>
      {data.length ? (
        <CardList data={data} type={type} />
      ) : (
        <div className="w-full text-lg h-screen flex justify-center items-center">
          <h1>No Result</h1>
        </div>
      )}
    </MainLayout>
  );
};

export default SearchResult;
