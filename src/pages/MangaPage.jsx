import CardList from "../components/CardList";
import MainLayout from "../Layouts/MainLayout";
const MangaPage = () => {
  return (
    <MainLayout>
      <CardList type={"manga"} />
    </MainLayout>
  );
};

export default MangaPage;
