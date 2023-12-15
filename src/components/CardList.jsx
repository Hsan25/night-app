import Card from "./Card";
const CardList = ({ data = null, type = "anime" }) => {
  let str = "";
  if (data) {
    str = "Search Result";
  } else if (type == "anime") {
    str = "Anime Populer";
  } else {
    str = "Manga Populer";
  }

  return (
    <>
      <div className="text-2xl font-medium">{str}</div>
      <div className="pt-5 sm:!grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid grid-cols-5 gap-3 ">
        <Card resultSearch={data} type={type} />
      </div>
    </>
  );
};

export default CardList;
