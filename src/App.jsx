import HomePage from "./pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DetailAnime from "./pages/DetailAnime";
import NotFound from "./pages/404";
import SearchResult from "./pages/SearchResult";
import MangaPage from "./pages/MangaPage";
import MangaDetailPage from "./pages/MangaDetailPage";
import AnimePage from "./pages/AnimePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignupPage";
import QuotesPage from "./pages/QuotesPage";
const router = createBrowserRouter([
  { path: "/", Component: HomePage },
  { path: "/anime", Component: AnimePage },
  { path: "/anime/detail/:id", Component: DetailAnime },
  { path: "/anime/search/:query", Component: SearchResult },
  { path: "/manga/search/:query", Component: SearchResult },
  { path: "/manga", Component: MangaPage },
  { path: "/manga/detail/:id", Component: MangaDetailPage },
  { path: "/signin", Component: SignInPage },
  { path: "/signup", Component: SignUpPage },
  { path: "/quotes", Component: QuotesPage },
  { path: "/quotes/search/:keyword", Component: QuotesPage },
  { path: "*", Component: NotFound },
]);

const App = () => {
  return (
    <>
      <div className=" min-h-screen bg-gradient-to-br md:overflow-x-hidden text-white from-slate-700 via-slate-800 to-slate-950">
        <RouterProvider router={router} />
      </div>
    </>
  );
};

export default App;
