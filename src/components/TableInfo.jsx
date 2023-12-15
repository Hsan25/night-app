import { useState } from "react";

const TableInfo = ({ data, type = "anime" }) => {
  const [showAll, setShowAll] = useState(false);
  let genre = "";
  let studio = "";
  let producers = "";

  function loop(arr) {
    let str = "";
    arr.forEach((item, i) => {
      if (i == arr.length - 1) return (str += item.name);
      str += item.name + ", ";
    });
    return str;
  }
  if (data.mal_id && type == "anime") {
    genre = loop(data.genres);
    studio = loop(data.studios);
    producers = loop(data.producers);
  } else {
    genre = loop(data.genres);
  }

  return (
    <>
      {type == "anime" ? (
        <div className="relative">
          <table
            className={`${
              showAll ? "!max-h-full" : ""
            } relative  overflow-hidden pb-5 inline-block max-h-[10rem] table-auto w-full mt-9`}>
            <tbody className={`inline-table  md:w-full w-full`}>
              <tr>
                <td className="text-gray-500">Rating</td>
                <td className="">
                  {data.score || "-"}
                  <span className="ml-3 text-slate-500 text-sm">{`(${
                    data.scored_by + "++" || "-"
                  })`}</span>
                </td>
              </tr>
              <tr>
                <td className="text-gray-500 w-[100px]">Release Year</td>
                <td className="ml-3">{data.year || " - "}</td>
              </tr>

              <tr>
                <td className="text-gray-500">Status</td>
                <td className="">{data.status || "-"}</td>
              </tr>
              <tr>
                <td className="text-gray-500">Episodes</td>
                <td className="">{data.episodes || "-"}</td>
              </tr>
              <tr>
                <td className="text-gray-500">Type</td>
                <td className="">{data.type || "-"}</td>
              </tr>
              <tr>
                <td className="text-gray-500">Duration</td>
                <td className="">{data.duration || "-"}</td>
              </tr>
              <tr>
                <td className="text-gray-500">Genres</td>
                <td className="">{genre || "-"}</td>
              </tr>
              <tr>
                <td className="text-gray-500">Studio</td>
                <td className="">{studio || "-"}</td>
              </tr>
              <tr>
                <td className="text-gray-500">Producers</td>
                <td className="">{producers || "-"}</td>
              </tr>
              <tr>
                <td className="text-gray-500">Source</td>
                <td className="">{data.source || "-"}</td>
              </tr>
              <tr>
                <td className="text-gray-500">Popularity</td>
                <td className="">{data.popularity || "-"}</td>
              </tr>
              <tr>
                <td className="text-gray-500">Season</td>
                <td className="">{data.season || "-"}</td>
              </tr>
            </tbody>
          </table>
          <div
            onClick={() => setShowAll(!showAll)}
            className="absolute  cursor-pointer hover:underline -bottom-0 right-0 text-blue-600">
            {showAll ? "Show less" : "Show all"}
          </div>
          <div className="border-b-2 border-slate-600 w-full pt-2"></div>
        </div>
      ) : (
        <>
          <table
            className={` relative  overflow-hidden pb-5 inline-block table-auto w-full mt-9`}>
            <tbody className={`inline-table  md:w-full w-full`}>
              <tr>
                <td className="text-gray-500 w-[130px] sm:!w-[100px]">
                  Author
                </td>
                <td className="ml-3">
                  {data.authors.map((itm) => itm.name) || " - "}
                </td>
              </tr>

              <tr>
                <td className="text-gray-500">Status</td>
                <td className="">{data.status || "-"}</td>
              </tr>
              <tr>
                <td className="text-gray-500">Type</td>
                <td className="">{data.type || "-"}</td>
              </tr>
              <tr>
                <td className="text-gray-500">Genres</td>
                <td className="">{genre}</td>
              </tr>
              <tr>
                <td className="text-gray-500">Realese Year</td>
                <td className="">
                  {new Date(data.published.from).getFullYear() || "-"}
                </td>
              </tr>
            </tbody>
          </table>
          <div />
        </>
      )}
    </>
  );
};

export default TableInfo;
