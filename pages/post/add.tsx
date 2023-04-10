import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import { PostAdd } from "../../components";
import { UseGetToken } from "../../Hooks/useToken";

const Header = dynamic(() => import("../../components/header"), { ssr: false });

function PostAddPage() {
  return (
    <>
      <Header />
      <PostAdd />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { Authorization } = await UseGetToken(ctx);

  if (!Authorization) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    };
  }

  return { props: {} };
};

export default PostAddPage;
