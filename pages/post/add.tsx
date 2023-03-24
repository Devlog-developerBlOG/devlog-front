import { GetServerSideProps } from "next";
import { Header, PostAdd } from "../../components";
import { UseGetToken } from "../../Hooks/useToken";

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
