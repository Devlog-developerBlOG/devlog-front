import { SignUp } from "../../components";
import { UseGetToken } from "../../Hooks/useToken";
import { GetServerSideProps } from "next";

const ResisterPage = () => <SignUp />;

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

export default ResisterPage;
