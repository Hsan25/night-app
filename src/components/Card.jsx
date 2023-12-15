import { useState, useEffect } from "react";
import { getPopularAnime, getPopularManga } from "../api";
import { Link, useLocation } from "react-router-dom";
import Loading from "./Loading";

const Card = ({ resultSearch, type }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  // let type = '';
  useEffect(() => {
    // type = location.pathname.split('/')[1];
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
    if (!resultSearch) {
      type == "anime"
        ? getPopularAnime().then((res) => {
            setData(res.data);
          })
        : getPopularManga().then((res) => {
            setData(res.data);
          });
      return;
    }
    setData(resultSearch);
  }, [resultSearch]);

  return (
    <>
      {isLoading ? <Loading /> : ""}

      {data.length && !isLoading
        ? data.map((item) => {
            return (
              <Link
                to={
                  type == "anime"
                    ? `/anime/detail/${item.mal_id}`
                    : `/manga/detail/${item.mal_id}`
                }
                className="group  rounded-md "
                key={item.mal_id}>
                <div className="w-full overflow-hidden rounded-md bg-slate-700 max-h-[20rem] sm:aspect-auto md:!h-[16rem] h-[20rem]">
                  <img
                    src={item.images.jpg.large_image_url}
                    className="object-cover h-full rounded-md w-full block text-center group-hover:scale-105"
                  />
                </div>
                <div className="text-lg  text-center group-hover:text-slate-600 ">
                  {item.title}
                </div>
              </Link>
            );
          })
        : ""}
    </>
  );
};

export default Card;
