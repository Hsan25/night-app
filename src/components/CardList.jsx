import Card from "./Card";

const CardList = ({ data = null, type = "anime" }) => {
  return (
    <>
      <div className="pt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 ">
        <Card resultSearch={data} type={type} />
      </div>
    </>
  );
};

export default CardList;
