import MainLayout from "../Layouts/MainLayout";

import { Helmet } from "react-helmet";
import Loading from "../components/Loading";
import { useState } from "react";
import useLogin from "../hooks/useLogin";

const HomePage = () => {
  const username = useLogin();
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 500);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <MainLayout>
          <Helmet>
            <title>Night - Home</title>
          </Helmet>
          <h1 className="text-2xl">
            SELAMAT DATANG{" "}
            <span className="text-3xl text-sky-500"> {username}</span> DI
            HALAMAN UTAMA
          </h1>
          <section className="pt-14">
            <h1 className="text-xl">Tentang Kami</h1>
            <p>
              Night app adalah sebuah website yang menyediakan informasi
              informasi anime atau manga. Data informasi ini di ambil dari{" "}
              <a
                href="https://jikan.moe"
                className="hover:underline text-sky-600"
                target="_blank">
                Jikan.moe
              </a>
            </p>
          </section>
        </MainLayout>
      )}
    </>
  );
};

export default HomePage;
