import CustomAxios from "../../utils/lib/CustomAxios";
import { PostIdType } from "../../types";
import { GetServerSideProps, NextPage } from "next";
import { Board, Header } from "../../components";
import { SWRConfig } from "swr";

const PostPage: NextPage<{ fallback: Record<string, PostIdType[]> }> = ({
  fallback,
}) => (
  <SWRConfig value={fallback}>
    <Header />
    <Board />
  </SWRConfig>
);

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const { data } = await CustomAxios.get(`/post`);
    const blogs = JSON.parse(JSON.stringify(data.list));
    console.log(blogs);

    return {
      props: {
        fallback: {
          "/post": blogs,
        },
      },
    };
  } catch (e) {
    console.log(e);
    return { props: {} };
  }
};

export default PostPage;
