import CustomAxios from "../../utils/lib/CustomAxios";
import { PostIdType } from "../../types";
import { GetServerSideProps, NextPage } from "next";
import { Board } from "../../components";
import { SWRConfig } from "swr";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("../../components/header"), { ssr: false });

const PostPage: NextPage<{ fallback: Record<string, PostIdType[]> }> = ({
  fallback,
}) => (
  <SWRConfig value={fallback}>
    <Header />
    <Board />
  </SWRConfig>
);

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data } = await CustomAxios.get(`/post`);
    const blogs = JSON.parse(JSON.stringify(data.list));

    return {
      props: {
        fallback: {
          "/post": blogs,
        },
      },
    };
  } catch (e) {
    return { props: {} };
  }
};

export default PostPage;
