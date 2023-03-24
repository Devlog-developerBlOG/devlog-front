import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Home } from "../components";
import { UseGeTokenDocument, UseGetToken } from "../Hooks/useToken";

function HomePage() {
  return <Home />;
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/post",
      permanent: false,
    },
  };
};

export default HomePage;
