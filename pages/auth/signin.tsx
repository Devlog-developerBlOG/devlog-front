import SignIn from "../../components/signin/index";
import { UseGetToken } from "../../Hooks/useToken";
import { GetServerSideProps } from "next";

const LoginPage = () => <SignIn />;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { Authorization } = await UseGetToken(ctx);

  if (Authorization) {
    return {
      redirect: {
        destination: "/post",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default LoginPage;
