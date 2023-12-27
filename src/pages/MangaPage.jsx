import CardList from "../components/CardList";
import MainLayout from "../Layouts/MainLayout";
const MangaPage = () => {
  return (
    <MainLayout>
      <h1 className="text-xl md:text-3xl font-medium">Manga Populer</h1>
      <CardList type={"manga"} />
    </MainLayout>
  );
};

export default MangaPage;
