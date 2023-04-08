import CustomAxios from "../../utils/lib/CustomAxios";
import { PostIdType } from "../../types";
import { GetServerSideProps, NextPage } from "next";
import { Board, Header } from "../../components";
import { SWRConfig } from "swr";
import { UseGetToken } from "../../Hooks/useToken";

const PostPage: NextPage<{ fallback: Record<string, PostIdType[]> }> = (
  { fallback },
  Authorization
) => (
  <SWRConfig value={fallback}>
    <Header isLogin={Authorization ? true : false} />
    <Board />
  </SWRConfig>
);

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const { Authorization } = await UseGetToken(ctx);
//   try {
//     const { data } = await CustomAxios.get(`/post`);
//     const blogs = JSON.parse(JSON.stringify(data.list));
//     console.log(Authorization);

//     return {
//       props: {
//         fallback: {
//           "/post": blogs,
//         },
//         Authorization,
//       },
//     };
//   } catch (e) {
//     console.log(e);
//     return { props: {} };
//   }
// };

export default PostPage;
