import { useParams } from "react-router-dom";
import { getAnimeById, getMangaById } from "../../api";
import * as Icon from "react-feather";
import { useState, useEffect } from "react";
import Loading from "../Loading";
import TitleCard from "../../utils/TitleCard";
import TableInfo from "../TableInfo";

const Container = ({ type = "anime" }) => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 250);
    type == "anime"
      ? getAnimeById(id).then((res) => {
          setData(res.data);
        })
      : getMangaById(id).then((res) => {
          setData(res.data);
        });
  }, [id]);

  return (
    <>
      <main className="flex-col md:flex-row pt-12 min-h-[100vh] flex gap-6 justify-between">
        {isLoading ? <Loading /> : ""}
        {data.mal_id && !isLoading ? (
          <>
            <div className="left md:self-start flex flex-col items-center justify-center gap-5">
              <div className="md:hidden block text-center">
                <TitleCard title={data.title} />
              </div>
              <div className="max-w-[250px] w-full rounded-lg overflow-hidden">
                <img
                  src={data.images.jpg.large_image_url}
                  alt=""
                  className="w-full h-[350px] object-cover"
                />
              </div>
              {data.trailer ? (
                <>
                  <a
                    href={data.trailer.url || "javascript:void()"}
                    target="_blank"
                    className="bg-slate-600 text-white cursor-pointer hover:bg-slate-700 hover:text-sky-600 flex gap-3 mx-auto w-max px-3 py-2 items-center rounded-md">
                    <span>
                      <Icon.Film width={20} className="text-inherit" />
                    </span>
                    <span className="text-sm"> Trailler </span>
                  </a>
                </>
              ) : (
                <></>
              )}

              <div className="flex gap-9 justify-between">
                <div className="relative group flex flex-col hover:text-blue-600 justify-between items-center text-slate-400 cursor-pointer">
                  <span className="">
                    <Icon.Star width={20} className="fill-current" />
                  </span>
                  <span className="text-sm">Favorit</span>
                  <div className="absolute -bottom-4 text-xs group-hover:text-slate-400">
                    {`(${data.favorites})`}
                  </div>
                </div>
                <div className="flex flex-col hover:text-blue-600 justify-between items-center text-slate-400 cursor-pointer">
                  <span>
                    <Icon.Bookmark width={20} className="fill-current" />
                  </span>
                  <span className="text-sm">Bookmark</span>
                </div>
                <div className="flex flex-col hover:text-blue-600 justify-between items-center text-slate-400 cursor-pointer">
                  <span>
                    <Icon.Eye width={20} className="fill-transparent" />
                  </span>
                  <span className="text-sm">Watched</span>
                </div>
              </div>
            </div>
            <div className="right w-full  md:pl-14">
              <div className="hidden md:block">
                <TitleCard title={data.title} />
              </div>
              <div className="flex justify-center gap-5 pt-6">
                <div className="flex gap-1 items-center bg-blue-500 rounded-full px-6 md:px-8 py-4 cursor-pointer hover:bg-blue-600">
                  <span>
                    <Icon.Play width={20} />
                  </span>
                  <span className="text-base">
                    {type == "anime" ? "Watch" : "Mulai membaca"}
                  </span>
                </div>
                <div className="flex  items-start gap-2 bg-slate-600 rounded-full px-6 md:px-8 py-4 cursor-pointer hover:bg-slate-700">
                  <span>
                    <Icon.DownloadCloud width={20} />
                  </span>
                  <span className="text-base">Download</span>
                </div>
              </div>

              <div className="flex gap-2 pt-6">
                <div>
                  <div className="text-xl mb-3 uppercase">Synopsis</div>
                  <div className="text-base text-justify text-slate-300  min-h[10rem] h-auto overflow-hidden text-ellipsis">
                    {data.synopsis}
                  </div>
                </div>
              </div>
              <TableInfo data={data} type={type} />
            </div>
          </>
        ) : (
          ""
        )}
      </main>
    </>
  );
};

export default Container;
