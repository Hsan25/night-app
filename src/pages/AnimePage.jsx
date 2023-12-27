import CardList from "../components/CardList";
import MainLayout from "../Layouts/MainLayout";
const AnimePage = () => {
  return (
    <MainLayout>
      <h1 className="text-xl md:text-3xl font-medium">Anime Populer</h1>
      <CardList type={"anime"} />
    </MainLayout>
  );
};

export default AnimePage;
